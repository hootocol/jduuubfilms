Place your media here for the new johnwyattmedia.com site:

REQUIRED:
- logo.png             — JWMedia logo (transparent PNG, wide aspect, ~2000px wide). Will be blended over the hero image.
- hero.jpg             — Home hero static image (high-res landscape JPEG, recommend 2560px wide).
- about/portrait.jpg   — Portrait of John for the About page (high-res JPEG, portrait orientation).

WORK PAGE (6 tiles):
- work/reel-01.mp4 ... work/reel-06.mp4  — short loops (~5–10s, <8MB each)
- work/reel-01.jpg ... work/reel-06.jpg  — poster frame for each video

POSTER EXTRACTION ONE-LINER (for the work videos, with ffmpeg):
  for i in work/reel-*.mp4; do ffmpeg -i "$i" -ss 0 -vframes 1 -q:v 2 "${i%.mp4}.jpg"; done

Keep total repo asset weight reasonable — GitHub Pages has soft caps around 1 GB.
