rm -rf ./dist

npm run build

git add .
git commit -m "Fixed new post not showing at the first place"
git push

git subtree push --prefix dist origin gh-pages