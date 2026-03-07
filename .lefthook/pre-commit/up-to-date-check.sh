#!/bin/sh
set -e

git fetch origin

LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})
BASE=$(git merge-base @ @{u})

if [ "$LOCAL" = "$REMOTE" ]; then
  echo "✅ Branch is up to date with remote."
elif [ "$LOCAL" = "$BASE" ]; then
  echo "❌ Branch is behind remote. Please run: git pull --rebase"
  exit 1
elif [ "$REMOTE" = "$BASE" ]; then
  echo "⚠️  You are ahead of remote (unpushed commits)."
else
  echo "❌ Branch has diverged from remote. Pull and resolve manually."
  exit 1
fi
