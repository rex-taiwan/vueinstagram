rm -rf ./dist

npm run build

git add .
git commit -m "User Login, Sign up Authentication beta updated, debugging user experience,add router guard"
git push

git subtree push --prefix dist origin gh-pages
