const assert =require('assert')

describe('webpack.base.js test case',()=>{
  const baseConfig=require('../../lib/webpack.base')
  console.log('unit test..',baseConfig)
  console.log('unit pageFile1..',baseConfig.entry.pageFile1)
  it('test entry',()=>{
    assert.equal(baseConfig.entry.pageFile1.indexOf('myWebpack/builder-webpack-1/test/pageFile1/index.js')>0,true)
    assert.equal(baseConfig.entry.pageFile2.indexOf('myWebpack/builder-webpack-1/test/pageFile2/index.js')>0,true)
  })
})