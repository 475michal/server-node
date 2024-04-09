const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./Routes/user.route");
const bookRouter = require("./Routes/book.route");

const { pageNotFound, serverNotFound } = require("./middlewares/handleErrors");
const { default: mongoose } = require("mongoose");
const config = require('./config');

const app = express();

mongoose.connect(config.DB_URL)
  .then(() => console.log('mongo db connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); 
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("wellcome");
});

app.use("/books", bookRouter);
app.use("/users", userRouter);

app.use(pageNotFound);
app.use(serverNotFound);

const port = 5000;
app.listen(port, () => {
  console.log("running at http://localhost:" + port);
});


console.log('hello');