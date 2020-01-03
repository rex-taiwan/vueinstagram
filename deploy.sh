rm -rf ./dist

npm run build

git add .
git commit -m "Adjust navbar height, UI optimizied"
git push

git subtree push --prefix dist origin gh-pages
