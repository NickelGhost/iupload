const express = require('express');

const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const gm = require('gm');

app.use(cors());
app.use(fileUpload());

const publicDir = `${__dirname}/public`;
const port = process.env.PORT || 3000;

app.use(express.static(publicDir));

app.get('/api/images', (req, res) => {
  fs.readdir(`${publicDir}/upload/thumbnails`, (err, files) => {
    files.splice(0, 1); // removes .gitkeep
    const images = files.map(file => ({
      url: `/upload/thumbnails/${file}`,
      name: file,
    }));
    return res.json(images);
  });
});

app.get('/api/images/:id', (req, res) => {
  const path = `${publicDir}/upload/${req.params.id}`;
  if (fs.existsSync(path)) {
    const url = `/upload/${req.params.id}`;
    return res.json({
      name: req.params.id,
      url,
    });
  }
  return res.status(404).send('not found');
});

app.post('/api/images/upload', (req, res) => {
  const { file } = req.files;
  const extension = file.mimetype.split('/')[1];
  let num;
  let name;
  let path;
  let thumbnailPath;

  do {
    num = Math.random().toString(36).substring(7);
    name = `${num}.${extension}`;
    path = `${publicDir}/upload/${name}`;
    thumbnailPath = `${publicDir}/upload/thumbnails/${name}`;
  } while (fs.existsSync(path));

  file.mv(path, (mvErr) => {
    if (mvErr) {
      return res.status(500).send(mvErr);
    }
    gm(path)
      .resizeExact(250, 250, '!')
      .write(thumbnailPath, (writeErr) => {
        if (writeErr) {
          fs.unlinkSync(path);
          return res.status(500).send(writeErr);
        }
        const thumbnail = `/upload/thumbnails/${name}`;
        return res.json({ name, thumbnail });
      });
    return true;
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${publicDir}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
