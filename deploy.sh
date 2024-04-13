#!/usr/bin/env sh

set -e

npm run build

cd .nuxt/dist 

git init 
git add -A
git commit -m 'New deployment'
git push -f https://github.com/shubhamslngh/importedproducts.git master:gh-pages

cd -