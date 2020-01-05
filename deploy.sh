rm -rf ./dist

npm run build

git add .
git commit -m "Story text wrapping, wrap if text are too long"
git push

git subtree push --prefix dist origin gh-pages
