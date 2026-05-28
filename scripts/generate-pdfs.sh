#!/usr/bin/env bash
# Build the site, run preview locally, print each profile page to PDF,
# save them into public/assets/. Used to update PDFs whenever CV content changes.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4321

echo "→ Building site..."
npm run build >/dev/null

echo "→ Starting preview server on :$PORT..."
npm run preview -- --port "$PORT" >/tmp/astro-preview.log 2>&1 &
PREVIEW_PID=$!

# Wait for server to be ready
for i in {1..15}; do
  if curl -sf "http://localhost:$PORT/" >/dev/null 2>&1; then break; fi
  sleep 0.5
done

print_pdf() {
  local url="$1"
  local out="$2"
  echo "→ Printing $url → $out"
  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$out" \
    "$url" 2>/dev/null
}

ASSETS_DIR="$ROOT_DIR/public/assets"
mkdir -p "$ASSETS_DIR"

print_pdf "http://localhost:$PORT/"        "$ASSETS_DIR/cv.pdf"
print_pdf "http://localhost:$PORT/de"      "$ASSETS_DIR/cv-de.pdf"
print_pdf "http://localhost:$PORT/swe"     "$ASSETS_DIR/cv-swe.pdf"

echo "→ Stopping preview server..."
kill "$PREVIEW_PID" 2>/dev/null || true
wait "$PREVIEW_PID" 2>/dev/null || true

echo "✓ Done. PDFs in $ASSETS_DIR:"
ls -la "$ASSETS_DIR"/cv*.pdf
