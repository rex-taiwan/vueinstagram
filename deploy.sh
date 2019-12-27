rm -rf ./dist

npm run build

git add .
git commit -m "Adding instagram loader, Update UI experience"
git push

git subtree push --prefix dist origin gh-pages