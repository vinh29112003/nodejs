import express from 'express';// version moi
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;//process.env = console.log
console.log('>>> check port', port);

configViewEngine(app);//app: express app

app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  