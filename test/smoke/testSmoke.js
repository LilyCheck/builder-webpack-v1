const path=require('path')
const webpack=require('webpack')
const rimraf =require('rimraf')

const Mocha=require('mocha')

const mocha=new Mocha({
  timeout:'10000ms'
})

console.log('当前目录：',process.cwd())

rimraf('../../dist',()=>{
  const prodConfig=require('../../lib/webpack.prod')
  console.log('prodConfig:',prodConfig)
  webpack(prodConfig,(err,stats)=>{
    console.log('webpack():...')
    if(err){
      process.exit(2)
    }
    console.log(stats.toString({
       colors:true,
      modules:false,
      children:false
    }
    ))
    console.log('webpack build success,begin run test.')
    mocha.addFile(path.join(__dirname,'html-test.js'))
    mocha.addFile(path.join(__dirname,'js-test.js'))
    mocha.run()
  })
})