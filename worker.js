export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    const aliases = {
      "/galaktogon-beta-2": "/galaktogon-beta-2.html",
      "/galactic-defense": "/galactic-defense.html",
      "/index": "/index.html"
    };

    if (aliases[path]) {
      url.pathname = aliases[path];
      path = url.pathname;
      request = new Request(url, request);
    }

    if (path === "/health") {
      return new Response(JSON.stringify({
        system: "GALAKTOGON",
        status: "ONLINE",
        source: "cloudflare-assets",
        timestamp: new Date().toISOString()
      }), {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store"
        }
      });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("x-galaktogon-source", "cloudflare-assets");
    headers.set("x-galaktogon-path", path);
    headers.set("cache-control", path.endsWith(".html")
      ? "no-store, no-cache, must-revalidate"
      : "public, max-age=300");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};