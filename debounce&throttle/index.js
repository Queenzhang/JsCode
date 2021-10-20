let count = 0

function submit(){
  debounce(test(),2000)
}

function debounce(func, delay) {
  let timer = null

  return function(...args){
    let that = this
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      func.apply(that,args)
    },delay)
  }
}


function test(){
  console.log('test',count++)
}