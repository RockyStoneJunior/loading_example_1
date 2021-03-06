import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.blueGrey.darken2,
          accent: colors.deepPurple.accent3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent4
        }
      }
    }
    // icons: {
    //   iconfont: "mdi" // (default) material icons
    //   // iconfont: 'fa' // Font Awesome icons
    // }
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
