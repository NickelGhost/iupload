const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(cors())
app.use(fileUpload())

const publicDir = `${__dirname}/public`
const port = 3000

app.use(express.static(publicDir))

app.post('/api/images/upload', (req, res) => {
  console.log(req)
  let imageFile = req.files.file

  imageFile.mv(`${__dirname}/public/lol.jpg`, function (err) {
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