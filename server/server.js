require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const cors = require("cors");
// MongoDB connection
const connectionString = process.env.baked;
// "mongodb+srv://joey:SeattleSeabee%4021@cluster0.i8qricq.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Baked and Connected to Database");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");

    // ========================
    // Middlewares
    // ========================
    // app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // app.use(express.static("public"));

    // ========================
    // Routes
    // ========================
    app.use(cors());
    app.get("/user", (req, res) => {
      db.collection("quotes")
        .find()
        .toArray()
        .then((quotes) => {
          console.log("III", quotes);
          res.send("arrived..........");
        })
        .catch(/* ... */);
    });

    app.post("/createUser", (req, res) => {
      req.body.orderNumber = Math.floor(Math.random() * 10000000);
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          let userId = result.insertedId.toString();
          return res.send({ id: userId });
        })
        .catch((error) => console.error(error));
    });

    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Yoda" },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => res.json("Success"))
        .catch((error) => console.error(error));
    });

    app.delete("/quotes", (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          if (result.deletedCount === 0) {
            return res.json("No quote to delete");
          }
          res.json("Deleted Darth Vadar's quote");
        })
        .catch((error) => console.error(error));
    });

    // ========================
    // Listen
    // ========================
    const isProduction = process.env.NODE_ENV === "production";
    const port = isProduction ? 7500 : 3000;
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  })
  .catch(console.error);
