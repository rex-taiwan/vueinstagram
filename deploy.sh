rm -rf ./dist

npm run build

git add .
git commit -m "Instagram Story 3D roate box function added, running beta test"
git push

git subtree push --prefix dist origin gh-pages
