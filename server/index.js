const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const coursesRoutes = require("./routes/courses");
const blogRoutes = require("./routes/blogs");
const userRoutes = require("./routes/users");
const TestimoialsRouter = require("./routes/testimoials");
const contactMessagesRouter = require("./routes/contactMessage");
const newsRouter = require("./routes/newslitter");
const commentRouter = require("./routes/comments");
const compression = require("compression");
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.use(cors());

app.use("/api/blogs", blogRoutes);
app.use("/api/user", userRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/newsLetter", newsRouter);
app.use("/api/testimoials", TestimoialsRouter);
app.use("/api/contactMessages", contactMessagesRouter);
app.use("/api/comments", commentRouter);

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
