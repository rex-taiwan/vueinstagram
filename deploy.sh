rm -rf ./dist

npm run build

git add .
git commit -m "Update delete page UI, decrease story interval, delete and trim feed code, cancel insidecontent feed, udpate user experience"
git push

git subtree push --prefix dist origin gh-pages
