const express = require('express')
const app = express()
const fs = require('fs')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const gm = require('gm')

app.use(cors())
app.use(fileUpload())

const publicDir = `${__dirname}/public`
const port = process.env.PORT || 3000

app.use(express.static(publicDir))

app.get('/api/images', (req, res) => {
  fs.readdir(`${publicDir}/upload/thumbnails`, (err, files) => {
    let images = []
    files.splice(0, 1) //removes .gitkeep
    for (const file of files) {
      images.unshift({
        url: `/upload/thumbnails/${file}`,
        name: file
      })
    }
    return res.json(images)
  })
})

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
  let num, name, path, thumbnailPath

  do {
    num = Math.random().toString(36).substring(7)
    name = `${num}.${extension}`
    path = `${publicDir}/upload/${name}`
    thumbnailPath = `${publicDir}/upload/thumbnails/${name}`
  } while (fs.existsSync(path))

  file.mv(path, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
    gm(path)
      .resizeExact(250, 250, '!')
      .write(thumbnailPath, (err) => {
        if (err) {
          fs.unlinkSync(path)
          return res.status(500).send(err)
        }
        return res.json({ name })
      })
  })
})

app.get('*', (req, res) => {
  res.sendFile(`${publicDir}/index.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})