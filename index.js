const express = require('express')
const app = express()
const fs = require('fs')
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(cors())
app.use(fileUpload())

const publicDir = `${__dirname}/public`
const port = 3000

app.use(express.static(publicDir))

app.post('/api/images/upload', (req, res) => {
  const file = req.files.file
  const extension = file.mimetype.split('/')[1]
  let num, path

  do {
    num = Math.random().toString(36).substring(7)
    path = `${publicDir}/upload/${num}.${extension}`
  } while (fs.existsSync(path))

  file.mv(path, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
    res.send('yup')
  })
})

app.get('*', (req, res) => {
  res.sendFile(`${publicDir}/index.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})