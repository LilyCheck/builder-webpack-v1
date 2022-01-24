const glob=require('glob')

console.log('mocha html test...')

describe('checking generated html files:',()=>{
  it('should generate heml files',(done)=>{
    const files=glob.sync('./dist/*.html')
    console.log('mocha html files...',files)
    if(files.length>0){
      done()
    }else{
      throw new Error('has no html files!')
    }
  })
})