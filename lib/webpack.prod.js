const WebpackMerge=require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')

const baseConfig=require('./webpack.base')
console.log('prod con:',process.cwd())
const pordConfig={
  mode:'production',
  plugins:[
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp:/\.css$/g
    }),
  ],
  optimization:{
    splitChunks:{
      minSize: 0,
      chunks: 'all',
      cacheGroups: {
        commons: {
          minChunks: 2,
          name: 'commons',
          chunks: 'all',
          // priority: 90,
        },
      },
    }
  },
  resolve:{
    alias:{
      "vue$" : "vue/dist/vue.esm.js"
    }
  }
}

module.exports=WebpackMerge.merge(baseConfig,pordConfig)