# GALAKTOGON Frontier Assets

Diese Struktur trennt Grafik-Assets vom Game-Code.

## Geplante Assets

- player/player.glb — realistisches 3D-Spielermodell
- player/player-texture.png — Texturen, falls nicht direkt im GLB eingebettet
- player/player-config.json — Modell- und Animationskonfiguration
- world/terrain.glb — Planetenterrain
- world/buildings.glb — Stadtmodule
- world/rocks.glb — Felsen
- world/vegetation.glb — Vegetation
- vehicles/hovercar.glb — Fahrzeuge
- textures/ — gemeinsame Texturen

## Format

GLB/GLTF ist für die Web-Version vorgesehen. Modelle sollen möglichst PBR-Materialien, Normal Maps und Animationen enthalten.

Bis echte externe Modelle vorhanden sind, bleibt im Spiel ein prozeduraler Fallback aktiv.