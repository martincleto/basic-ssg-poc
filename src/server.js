const cors = require('cors')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000;

const { builder } = require('./modules/builder')

app.get('/', (req, res) => {
  res.sendStatus(204)
})

app.get('/comments/:id', cors(), async(req, res) => {
  try {
    const { id } = req.params
    const html = await builder(id)

    res.send(html)
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`HTML generator listening on port ${port}`)
})

module.exports = app
