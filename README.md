# johnwyattmedia.com

Static site for **John Wyatt Media** — action and automotive videography by John Wyatt Mooney.

## Local dev

```
./serve.sh
# or
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Structure

```
index.html       Home — full-bleed hero video + transparent JWMedia logo
work.html        Work — 3-column hover-to-play video grid
about.html       About — contact + bio + portrait
styles.css       Single stylesheet (Inter, black/white, edge-to-edge)
script.js        Hover-to-play handlers
CNAME            johnwyattmedia.com
assets/
  logo.png            JWMedia logo (transparent PNG)
  hero.jpg            Home hero static image
  work/
    reel-01.mp4 ... reel-06.mp4
    reel-01.jpg ... reel-06.jpg   (poster frames)
  about/
    portrait.jpg
```

## Deploy

GitHub Pages serves directly from `main` at the repo root. Push to `main`, wait ~30s for the Pages build, then `https://johnwyattmedia.com` reflects the change.
