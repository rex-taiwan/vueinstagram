rm -rf ./dist

npm run build

git add .
git commit -m "Update lazy src caption,Upload App logo, Application Title"
git push

git subtree push --prefix dist origin gh-pages