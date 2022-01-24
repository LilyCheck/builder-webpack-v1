const path=require('path')
const glob=require('glob')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

// const VueLoaderPlugin = require('vue-loader/lib/plugin');
console.log('base con:',process.cwd())
const setMPA=()=>{
  let entry={}
  let htmlWebpackPlugins=[]
  const files=glob.sync(path.join(__dirname,'../test/*/index.js'))
  console.log('files:',files)
  if(files.length){
    
    files.map(file=>{
      let match=file.match(/test\/(.*)\/index\.js/)
      let filename=match&&match[1]
      entry[filename]=file
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          template: path.join(__dirname, `../test/${filename}/index.html`),
          filename: `${filename}.html`,
          chunks: [filename],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
          },
        }),
       
      );
    })
  }
  return {entry,htmlWebpackPlugins}
}

const {entry,htmlWebpackPlugins}=setMPA()
module.exports={
  entry:entry,
  output:{
    filename:'[name]_[chunkhash:8].js',
    path:path.join(__dirname,'../dist')
  },
  module:{
    rules:[
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader'],
      },
      {
        test: /.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader','less-loader',
          {
          loader:'postcss-loader'
          },
          {
            loader:'px2rem-loader',
            options:{
              remUnit:75,
              remPrecision:8
            }
          }
        ],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash:8].css'
    }),
    new CleanWebpackPlugin(),
    function errorPlugin() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
          process.exit(1);
        }
      });
    },
  ].concat(htmlWebpackPlugins),
  
}