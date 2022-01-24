import Vue from 'vue'

console.log('script start....')
console.log(Vue)

// const MyDIV=document.createElement('div')
// MyDIV.id='root'
// document.body.appendChild(MyDIV)

// console.log('MyDIV start....',MyDIV)
// const Comp1={
//   template:`
//     <div>Comp1...</div>
//   `
// }

// const Comp2=Vue.extend(Comp1)

// console.log('Comp2 start....',Comp2)

new Vue({
  el: '#root',
  // template: App,
  // components:{
  //   Comp2
  // },
  template:`
    <div>
     init new vue...
    </div>
  `,
})

// console.log(v)