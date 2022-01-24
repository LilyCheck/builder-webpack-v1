const glob =require('glob')

console.log('js test ...')
describe('checking if js file generated',()=>{
  it('should js file generated',(done)=>{
    const files=glob.sync('./dist/*.js')
    console.log('js test files...',files)
    if(files.length>0){
      done()
    }else{
      throw new Error('has no js files!')
    }
  })
})