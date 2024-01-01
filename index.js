require('dotenv').config()
const express = require('express')
const app = express()
const github = {
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest"
}
// const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Prince Mann')
})
app.get('/login', (req, res) => {
  res.send('<h1> please login to this page<h1>')
})
app.get('/youtube', (req, res) => {
  res.send('<h2> Hey hello </h2> ')
})
app.get('/github', (req, res) => {
  res.json(github)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})