const WebpackMerge=require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')


const baseConfig=require('./webpack.base')

let ssrConfig={
  module:{
    rules:[
      {
        test:/\.css$/,
        use:'ignore-loader'
      },
      {
        test:/\.less$/,
        use:'ignore-loader'
      }
    ]
  },
  plugins:[
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp:/\.css$/g
    })
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
}

module.exports=WebpackMerge.merge(baseConfig,ssrConfig)