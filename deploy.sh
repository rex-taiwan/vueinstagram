rm -rf ./dist

npm run build

git add .
git commit -m "Instagram Story Default Height Adjustment"
git push

git subtree push --prefix dist origin gh-pages