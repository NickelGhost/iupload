const util = require('util');
const fs = require('fs');
const { resolve } = require('path');

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const gm = require('gm');


gm.prototype.write = util.promisify(gm.prototype.write);
fs.readdir = util.promisify(fs.readdir);
fs.exists = util.promisify(fs.exists);

const publicDir = resolve(__dirname, 'public');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.static(publicDir));

app.get('/api/images', async (req, res) => {
  let files;
  try {
    files = await fs.readdir(`${publicDir}/upload/thumbnails`);
  } catch (err) {
    return res.status(500).send(err);
  }
  files.splice(0, 1); // removes .gitkeep
  const images = files.map(file => ({
    url: `/upload/thumbnails/${file}`,
    name: file,
  }));
  return res.json(images);
});

app.get('/api/images/:id', (req, res) => {
  const path = `${publicDir}/upload/${req.params.id}`;
  if (!fs.existsSync(path)) {
    return res.status(404).send('not found');
  }
  const url = `/upload/${req.params.id}`;
  return res.json({
    name: req.params.id,
    url,
  });
});

app.post('/api/images/upload', async (req, res) => {
  const { file } = req.files;
  const extension = file.mimetype.split('/')[1];
  let num;
  let name;
  let path;
  let thumbnailPath;
  // If the generated filename exists, do again
  do {
    num = Math.random().toString(36).substring(7);
    name = `${num}.${extension}`;
    path = `${publicDir}/upload/${name}`;
    thumbnailPath = `${publicDir}/upload/thumbnails/${name}`;
  } while (fs.existsSync(path));
  // Allow for using await
  file.mv = util.promisify(file.mv);
  // Move the file to our specified path
  try {
    await file.mv(path);
  } catch (err) {
    return res.status(500).send(err);
  }
  // Create a thumbnail
  try {
    await gm(path)
      .resizeExact(250, 250, '!')
      .write(thumbnailPath);
  } catch (err) {
    fs.unlinkSync(path);
    return res.status(500).send(err);
  }
  const thumbnail = `/upload/thumbnails/${name}`;
  return res.json({ name, thumbnail });
});

app.get('*', (req, res) => {
  res.sendFile(`${publicDir}/index.html`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}!`);
});
