const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: !isProd,
  publicPath: './',
  assetsDir: 'static',
  outputDir: `dist`,
  productionSourceMap: !isProd,
  devServer: {
    port: 9000
  },
  css: {
    sourceMap: !isProd,
  },
  transpileDependencies: [

  ],
};
