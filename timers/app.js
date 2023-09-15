// const start = performance.now()
// setTimeout(() => {
//   console.log(performance.now() - start)
//   console.log('Прошла секунда')
// }, 1000)

// function myFunc(arg) {
//   console.log(`Arg: ${arg}`)
// }
// setTimeout(myFunc, 1500, 'cool');

// const timerId = setTimeout(() => {
//   console.log('BOOM!')
// }, 5000)

// setTimeout(() => {
//   clearTimeout(timerId)
//   console.log('Cleared')
// }, 1000)

// const intervalId = setInterval(() => {
//   console.log(performance.now())
// }, 1000)

// setTimeout(() => {
//   clearInterval(intervalId)
//   console.log('Cleared')
// }, 5000)

// console.log('Перед')
// setImmediate(() => {
//   console.log('После всего')
// })
// console.log('После')

const timerId = setTimeout(() => {
  console.log('BOOM!')
}, 5000)

timerId.unref()

setImmediate(() => {
  timerId.ref()
})