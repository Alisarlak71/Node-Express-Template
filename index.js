const express = require("express");
const cors = require("cors");
require('./config/db.config');
const routes = require("./routes");
const swagger = require('./swagger')


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use("/", routes);

swagger(app);

app.listen(port, () => {
  console.log(`app on port : ${port}`);
});
