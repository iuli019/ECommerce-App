const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const productsRouter = require("./routes/product");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

app.use("/products", productsRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
