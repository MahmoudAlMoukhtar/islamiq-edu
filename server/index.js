const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const coursesRoutes = require("./routes/courses");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const newsRouter = require("./routes/newslitter");
const app = express();

app.use(bodyParser.json({limit: "100mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true}));
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/news", newsRouter);

const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success connection database");

    app.listen(PORT, () => {
      console.log(`success listning on ${PORT}`);
    });
  })
  .catch(err => {
    console.log("error connection database!!!");
    console.log(err.message);
  });
