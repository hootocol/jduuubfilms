"""Local dev server that disables caching so updated assets are never stale."""

from http.server import SimpleHTTPRequestHandler, HTTPServer
import sys


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    print(f"Serving http://localhost:{port} with no-cache headers")
    HTTPServer(("", port), NoCacheHandler).serve_forever()
