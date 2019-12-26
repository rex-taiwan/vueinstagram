rm -rf ./dist

npm run build

git add .
git commit -m "Releasing Filter features Beta, testing"
git push

git subtree push --prefix dist origin gh-pages