/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-06 19:01:26
 * @FilePath: \demo\server3\index.js
 * @Description: add some description
 */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = 3000;

app.options('*', function (req, res) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Expose-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.sendStatus(200);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(router);


app.listen(port, () => console.log(`app listening on port ${port}!`))