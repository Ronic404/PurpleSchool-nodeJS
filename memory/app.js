let outter = null
let run = function() {
  let inner = outter
  let unused = function() {
    if (inner) {
      console.log('Hi!')
    }
  }
  outter = {
    longSrt: new Array(1000000).join('*')
  }
}

setInterval(run, 1000)

// node --expose-gc --trace_gc_verbose app.js