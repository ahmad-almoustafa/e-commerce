const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

// app.use(express.static(process.env.STATIC_DIR));

app.get("/api", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/api/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/api/create-payment-intent", async (req, res) => {
  //retrieve by req.body
  console.log("req.body: ", req.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "aud",
      amount: req.body.total * 100, //from dollars to cents
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
app.post('/api/contact', (req, res) => {
  // console.log("contact: ", req.body);
  const { name, email, message } = req.body;
  //validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // process the data and send email

  // send response
  return res.json({ message: 'success' });
});
app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
