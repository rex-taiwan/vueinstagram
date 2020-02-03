rm -rf ./dist

npm run build

git add .
git commit -m "SCSS animation added, story and post animation updated"
git push

git subtree push --prefix dist origin gh-pages
