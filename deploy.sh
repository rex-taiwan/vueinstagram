rm -rf ./dist

npm run build

git add .
git commit -m "Post Function Update Version 2"
git push

git subtree push --prefix dist origin gh-pages