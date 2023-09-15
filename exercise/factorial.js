function factorial(n) {
  if (n <= 1) {
    return 1
  } else {
    return factorial(n-1) * n
  }
}

function compute({ array }) {
  const arr = []
  for (let i = 0; i < 100_000_000; i++) {
    arr.push(i*i)
  }
  return array.map(el => factorial(el))
}

module.exports = { factorial, compute }
