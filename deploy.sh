rm -rf ./dist

npm run build

git add .
git commit -m "Instagram Story v-for loop error solved, credit to @wnyao"
git push

git subtree push --prefix dist origin gh-pages