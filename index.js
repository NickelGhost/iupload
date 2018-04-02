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

app.get('/api/images/:id', (req, res) => {
  const path = `${publicDir}/upload/${req.params.id}`
  if (fs.existsSync(path)) {
    const url = `/upload/${req.params.id}`
    return res.json({
      name: req.params.id,
      url
    })
  } else {
    return res.status(404).send('not found')
  }
})

app.post('/api/images/upload', (req, res) => {
  const file = req.files.file
  const extension = file.mimetype.split('/')[1]
  let num, name, path

  do {
    num = Math.random().toString(36).substring(7)
    name = `${num}.${extension}`
    path = `${publicDir}/upload/${name}`
  } while (fs.existsSync(path))

  file.mv(path, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ name: name })
  })
})

app.get('*', (req, res) => {
  res.sendFile(`${publicDir}/index.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})