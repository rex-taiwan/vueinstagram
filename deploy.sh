rm -rf ./dist

npm run build

git add .
git commit -m "Cleaning errors , Improve UI experience, Optimize system run up"
git push

git subtree push --prefix dist origin gh-pages
