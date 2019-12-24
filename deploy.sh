rm -rf ./dist

npm run build

git add .
git commit -m "Add username under the instory circle dialog, optimized user experience, chaning loading and layout element"
git push

git subtree push --prefix dist origin gh-pages