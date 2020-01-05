rm -rf ./dist

npm run build

git add .
git commit -m "Fixing Post logic error, adjust user interface, adding new features soon,user login system"
git push

git subtree push --prefix dist origin gh-pages
