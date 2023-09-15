- инициализация

## Фазы
// nextTick, microtaskQueue
- таймеры
// microtaskQueue, nextTick
- pending callbacks
// microtaskQueue, nextTick
- idle, prepare
// microtaskQueue, nextTick
- poll
// microtaskQueue, nextTick
- check (setImmediate)
// microtaskQueue, nextTick
- close callback

- проверка на окончание