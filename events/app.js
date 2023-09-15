const EventEmitter = require('events')

const myEmmiter = new EventEmitter()

const logDbConnection = () => {
  console.log('DB connected')
}

myEmmiter.addListener('connected', logDbConnection)
myEmmiter.emit('connected')

myEmmiter.removeListener('connected', logDbConnection)
/**
 * Или
 * myEmmiter.removeAllListeners('connected')
 */

myEmmiter.emit('connected')

/**
 * Аналог addListener/removeListener
 */
myEmmiter.on('msg', (data) => {
  console.log(`Получил: ${data}`)
})

/**
 * То же, что и "on", но добавляет в начало массива listeners
 */
myEmmiter.prependListener('msg', (data) => {
  console.log(`Prepend: ${data}`)
})
myEmmiter.emit('msg', 'Hello!')
myEmmiter.off('connected', logDbConnection)

/**
 * Вызывается один раз
 */
myEmmiter.once('off', () => {
  console.log('Вызвался один раз')
})
myEmmiter.emit('off')
myEmmiter.emit('off')

console.log(myEmmiter.getMaxListeners())
myEmmiter.setMaxListeners(1)
console.log(myEmmiter.getMaxListeners())
console.log(myEmmiter.listenerCount('msg'))
console.log(myEmmiter.listenerCount('off'))
console.log(myEmmiter.listeners('msg'))
console.log(myEmmiter.eventNames())

myEmmiter.on('error', (err) => {
  console.log(`Произошла ошибка: ${err.message}`)
})
myEmmiter.emit('error', new Error('Boom!'))

/**
 * EventTarget
 */
const target = new EventTarget()

const logTarget = () => {
  console.log('Connected to target')
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))