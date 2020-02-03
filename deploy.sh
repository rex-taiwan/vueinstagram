rm -rf ./dist

npm run build

git add .
git commit -m "Progress Image Loading"
git push

git subtree push --prefix dist origin gh-pages
