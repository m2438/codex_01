#!/usr/bin/env sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
DASHBOARD="$SCRIPT_DIR/dashboard/index.html"

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$DASHBOARD"
elif command -v open >/dev/null 2>&1; then
  open "$DASHBOARD"
elif command -v start >/dev/null 2>&1; then
  start "" "$DASHBOARD"
else
  printf 'ブラウザで次のファイルを開いてください:\n%s\n' "$DASHBOARD"
fi
