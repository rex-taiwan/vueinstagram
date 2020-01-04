rm -rf ./dist

npm run build

git add .
git commit -m "Fixing Bottom Sheet error @wnyao"
git push

git subtree push --prefix dist origin gh-pages
