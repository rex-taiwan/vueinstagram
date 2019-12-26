rm -rf ./dist

npm run build

git add .
git commit -m "Upload Dockerfile, upload projet to dockerhub"
git push

git subtree push --prefix dist origin gh-pages