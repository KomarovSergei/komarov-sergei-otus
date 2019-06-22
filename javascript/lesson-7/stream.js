const { Readable, Writable, Transform } = require("stream")

const randomNumber$ = new Readable({
  read() {
    this.push(Math.floor(Math.random() * 10).toString())
    this.push(Math.floor(Math.random() * 10).toString())
    this.push(Math.floor(Math.random() * 100).toString())
  },
  highWaterMark: 1
})

const addRundomNumber$ = new Transform({
  transform(chunk, encoding, callback) {
    this.push(+chunk.toString() + Math.floor(Math.random() * 1000).toString())
    callback()
  }
})

const logResult$ = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})

// randomNumber$.pipe(logResult$)
randomNumber$.pipe(addRundomNumber$).pipe(logResult$)