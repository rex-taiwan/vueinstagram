rm -rf ./dist

npm run build

git add .
git commit -m "First Component spilting "
git push

git subtree push --prefix dist origin gh-pages
