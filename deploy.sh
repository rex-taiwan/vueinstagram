rm -rf ./dist

npm run build

git add .
git commit -m "User Login, Sign up UI UPDATE, APP THEME UPDATED,UPDATE STRUCTURE"
git push

git subtree push --prefix dist origin gh-pages
