const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 8080
const cors = require('cors')  
var path = require("path");
var fs = require('fs')



global.appRoot = path.resolve(__dirname);
app.use(express.json());


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "data")));

try {
   
  if (!fs.existsSync(path.join(appRoot, "data"))) {
 fs.mkdirSync(path.join(appRoot, "data"));
    fs.mkdirSync(path.join(appRoot, "data" ,"archive"));
    fs.mkdirSync(path.join(appRoot, "data" ,"paper"));
    fs.mkdirSync(path.join(appRoot,  "data" ,"blog"));
  
  }
  
} catch (err) {
  console.log(err)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1/archive", require("./src/api/v1/archive/archive"));
app.use("/api/v1/blog", require("./src/api/v1/blog/blog"));
app.use("/api/v1/paper", require("./src/api/v1/paper/paper"));
app.use("/api/v1/category", require("./src/api/v1/category/category"));



app.use((err, req, res, next) => {
  console.log(err);
  if (!err.message) {
    return res.status(err.status || 500).send(err);
  }
  let error;
  try {
    error = JSON.parse(err.message);
  } catch (e) {
    error = { status: 500, error: [{ msg: err.message }] };
  }
  res.status(error.status || 500).send(error);
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})