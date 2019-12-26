rm -rf ./dist

npm run build

git add .
git commit -m "Upload App logo, Application Title"
git push

git subtree push --prefix dist origin gh-pages