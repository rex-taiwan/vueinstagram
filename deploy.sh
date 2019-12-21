rm -rf ./dist

npm run build

git add .
git commit -m "Commit build folder"
git push

git subtree push --prefix dist origin gh-pages