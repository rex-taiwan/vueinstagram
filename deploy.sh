rm -rf ./dist

npm run build

git add .
git commit -m "Cleaning error"
git push

git subtree push --prefix dist origin gh-pages
