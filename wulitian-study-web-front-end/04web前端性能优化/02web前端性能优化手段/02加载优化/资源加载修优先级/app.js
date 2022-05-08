const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = fs.readFileSync('./index.html')
  res.end(data)
})

app.get('/wulitian.png', (req, res) => {
  const data = fs.readFileSync('./wulitian.png')
  res.end(data)
})

app.get('/style.css', (req, res) => {
  setTimeout(() => {
    console.log('加载css资源')
    const data = fs.readFileSync('./style.css')
    res.end(data)
  }, 2000)
})

app.get('/main.css', (req, res) => {
  setTimeout(() => {
    const data = fs.readFileSync('./main.css')
    res.end(data)
  }, 2000)
})

app.get('/index.js', (req, res) => {
  setTimeout(() => {
    const data = fs.readFileSync('./index.js')
    res.end(data)
  }, 2000)
})

app.get('/index2.js', (req, res) => {
  setTimeout(() => {
    const data = fs.readFileSync('./index2.js')
    res.end(data)
  }, 1000)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
