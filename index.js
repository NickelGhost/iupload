const express = require('express')
const app = express()

const publicDir = `${__dirname}/public`
const port = 3000

app.use(express.static(publicDir))

app.get('*', function (req, res) {
  res.sendFile(`${publicDir}/index.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})