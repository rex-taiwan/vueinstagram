const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src/styles/')],
          indentedSyntax: false,
        },
      },
      scss: {
        prependData: `
          @import "src/styles/_variables.scss";
          @import "src/styles/_global.scss";
          @import "src/styles/_mixins.scss";
          `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vueinstagram/' : '/',

  // "transpileDependencies": [
  //     "vuetify"
  // ]
};
