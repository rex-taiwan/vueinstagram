rm -rf ./dist

npm run build

git add .
git commit -m "Fixing image upload to firestore, should be store in Storage"
git push

git subtree push --prefix dist origin gh-pages