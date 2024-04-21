const express = require("express");
const cors = require("cors");
require('./config/db.config');
const routes = require("./routes");
const swagger = require('./swagger');
const ExceptionHandler = require("./exceptions/handler.exception");


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use("/", routes);

app.use((err, req, res, next) => {
  if (err instanceof ExceptionHandler) {
    res.status(err.statusCode).json({ error: (err.additionalData?err.additionalData:err.message) });
  } else {
    res.status(500).json({ error: 'خطای سرور' });
  }
});

swagger(app);

app.listen(port, () => {
  console.log(`app on port : ${port}`);
});
