const { exec, spawn } = require('child_process')

// const childProcess = exec('dir', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err.message)
//   }
//   console.log(`stdout: ${stdout}`)
//   console.log(`stderr: ${stderr}`)
// })

// childProcess.on('exit', (code) => {
//   console.log(`Code: ${code}`)
// })

const childProcess = spawn('dir', [], { shell: true })

childProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

childProcess.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

childProcess.on('exit', (code) => {
  console.log(`Code: ${code}`)
})