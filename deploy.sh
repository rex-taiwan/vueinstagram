rm -rf ./dist

npm run build

git add .
git commit -m "Adding mobile and desktop version story, adding breakpoint"
git push

git subtree push --prefix dist origin gh-pages
