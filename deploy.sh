rm -rf ./dist

npm run build

git add .
git commit -m "Fix instory slide touching error, improve slide transition, adding message text-field in story"
git push

git subtree push --prefix dist origin gh-pages
