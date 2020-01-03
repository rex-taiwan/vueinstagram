# Vueinstagram Beta 1.0 (Vuejs,Vuetify,VueFire,Firebase)
[![license](https://img.shields.io/npm/l/vue-ins-progress-bar?color=%2351bff4)](https://revolunet.mit-license.org/)



## App contain

- Vuesjs code
- Vuetify
- Vuefire
- Firebase
- devDependencies
- npm package
- license
- etc.



## vueinstagram Mobile version Screenshot

<img src="https://user-images.githubusercontent.com/56249189/71716298-3386fc80-2e4f-11ea-803a-308eb676a59f.png">
<img src="https://user-images.githubusercontent.com/56249189/71716357-67fab880-2e4f-11ea-8d2f-5376cd6ef351.jpeg">

## Project setup 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




## Bonus:Deploy Vue Cli to Gitpages

```
1. git remote add origin https://github.com/{username}/{projectname}.git

2. git push -u origin master

3. Delete dist from .gitnore

4. Establish deploy.sh (Auto run command tools or script you can say )

5. Activate deploy.sh permission by typing :  chmod777 ./deploy.sh

6. Change vue.config.js projectname to your repo name

7. Enter ./deploy.sh to run command

8. change setting in your repo setting 
```


## deploy.sh file content 
```

rm -rf ./dist
npm run build
git add .
git commit -m "Post Function Update Version 2"
git push
git subtree push --prefix dist origin gh-pages



```
