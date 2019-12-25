rm -rf ./dist

npm run build

git add .
git commit -m "Instagram filter beta added"
git push

git subtree push --prefix dist origin gh-pages