import path from 'path'
const { VueLoaderPlugin } = require("vue-loader");
export default {
  antd: {},
  dva: {},
  routes: [
    { path: "/login", component: "./login" },
    {
      path: "/",
      component: "../layouts",
      routes: [
        // { path: "/", component: "./index" },
        { path: "/", component: "./goods/index" },
        {
          path: "/about",
          component: "./about",
          Routes: ["./routes/PrivateRoute.js"]
        },
        {
          path: "/users",
          component: "./users/_layout",
          routes: [
            { path: "/users/", component: "./users/index" },
            { path: "/users/:id", component: "./users/$id" }
          ]
        },
        {
          component: "./404"
        }
      ]
    }
  ],
chainWebpack(config, { webpack }) {
  config.module
  .rule('vue')
  .test(/\.vue$/)
  .exclude
  .add([path.resolve('node_modules')])
  .end()
  .use('vue-loader')
  .loader('vue-loader')

  config.module
  .rule('css')
  .test(/\.css$/)
  .exclude
  .add([path.resolve('node_modules')])
  .end()
  .use('vue-style-loader')
  .loader('vue-style-loader')
  config.plugin('VueLoaderPlugin')
  .use(VueLoaderPlugin)
}
};
