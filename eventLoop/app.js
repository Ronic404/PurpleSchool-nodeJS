const fs = require('fs')

console.log('init')

setTimeout(() => {
  console.log(performance.now(), 'timer')
}, 100)

setImmediate(() => {
  console.log('immediate')
})

fs.readFile(__filename, () => {
  console.log('file is read')
})

setTimeout(() => {
  for (let i = 0; i < 1_000_000_000; i++) {}
  console.log('done')
  Promise.resolve().then(() => {
    console.log('promise inside timeout')
  })
  process.nextTick(() => {
    console.log('nextTick inside timeout')
  })
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

process.nextTick(() => {
  console.log('nextTick')
})

console.log('final')