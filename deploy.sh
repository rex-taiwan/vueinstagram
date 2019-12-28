rm -rf ./dist

npm run build

git add .
git commit -m "moment js error fixed"
git push

git subtree push --prefix dist origin gh-pages