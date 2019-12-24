rm -rf ./dist

npm run build

git add .
git commit -m "System Update, UI update , Post Function Update"
git push

git subtree push --prefix dist origin gh-pages