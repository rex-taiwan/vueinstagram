rm -rf ./dist

npm run build

git add .
git commit -m "Instagram filter all updated , optimized filter height, adjust post setting"
git push

git subtree push --prefix dist origin gh-pages