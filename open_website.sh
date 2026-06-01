#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="$ROOT_DIR/index.html"

if command -v python3 >/dev/null 2>&1; then
  cd "$ROOT_DIR"
  PORT="${PORT:-4177}"
  URL="http://127.0.0.1:$PORT/"
  echo "BIダッシュボードを起動します: $URL"
  if command -v xdg-open >/dev/null 2>&1; then
    (sleep 1; xdg-open "$URL" >/dev/null 2>&1 || true) &
  elif command -v open >/dev/null 2>&1; then
    (sleep 1; open "$URL" >/dev/null 2>&1 || true) &
  fi
  python3 -m http.server "$PORT"
else
  echo "Pythonが見つからないため、HTMLファイルを直接開いてください: $TARGET"
fi
