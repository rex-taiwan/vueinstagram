rm -rf ./dist

npm run build

git add .
git commit -m "Delete Error and Upload Post error fixed, credit @wnyao"
git push

git subtree push --prefix dist origin gh-pages
