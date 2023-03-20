const express = require("express");
const nodemailer = require("nodemailer");
let Mailgen = require("mailgen");
let hbs = require("nodemailer-express-handlebars");
const path = require("path");

const router = express.Router();
const parser = require("../utils/cloudinary");
const EmailSubscripe = require("../models/emailSubscripe");

router.post("/", parser.single("imageNewsLetter"), async (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "iqrainthenameofallah29@gmail.com", // generated ethereal user
      pass: req.body.password, // generated ethereal password
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));
  const emailsSubscribes = await EmailSubscripe.find();
  //console.log(emailsSubscribes);

  for (let i = 0; i < emailsSubscribes.length; i++) {
    transporter.sendMail(
      {
        from: "iqrainthenameofallah29@gmail.com",
        to: emailsSubscribes[i].email,
        subject: req.body.title,
        template: "index",
        context: {
          message: req.body.message,
          image: req.file.path,
        },
      },
      function (err) {
        if (err) {
          return;
        }
      }
    );
  }
  res.status(200).json({message: "send email success!"});
});

router.post("/addEmailSubscripe", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newEmailSubscripe = await new EmailSubscripe({
      email: data.email,
    });
    await newEmailSubscripe.save();
    res.status(201).json(newEmailSubscripe);
  } catch {
    res
      .status(400)
      .json({message: "error in serverside when try post subscribe email"});
  }
});
module.exports = router;
/* 
  // Configure mailgen by setting a theme and your product info
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Furni Ecommerce",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: "Daily Tuition",
      intro: "Your bill has arrived!",
      table: {
        data: [
          {
            item: "Nodemailer Stack Book",
            description: "A Backend application",
            price: "$10.99",
          },
        ],
      },
      outro: "Looking forward to do more business",
    },
  };

  let mail = MailGenerator.generate(response);
*/
