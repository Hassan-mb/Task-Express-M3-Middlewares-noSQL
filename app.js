const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");

connectDb();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/posts", postsRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
