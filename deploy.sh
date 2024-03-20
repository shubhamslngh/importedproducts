#!usr/bin/env sh
set -env
npm run build
cd dist
git init 
git add -A 
git commit -m 'New'
git push -f 