rm -rf ./dist

npm run build

git add .
git commit -m "Mobile Version ins story upated, story function testing"
git push

git subtree push --prefix dist origin gh-pages
