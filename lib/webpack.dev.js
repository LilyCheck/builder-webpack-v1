const WebpackMerge=require('webpack-merge')
const webpack=require('webpack')

const baseConfig=require('./webpack.base')

let devConfig={
  mode:'development',
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    static:'./dist',
    hot:true
  },
  devtool:'cheap-source-map',
}

module.exports=WebpackMerge.merge(baseConfig,devConfig)