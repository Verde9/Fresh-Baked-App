require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const cors = require("cors");

const connectionString = process.env.baked;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Baked and Connected to Database");
    const db = client.db("pizza-orders");
    const pizzaCollection = db.collection("pizza");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(cors());
    app.post("/getOrder", (req, res) => {
      console.log("body>>", req.body);
      db.collection("pizza")
        .find({ userId: req.body.userId })
        .toArray()
        .then((pizza) => {
          return res.send({ order: pizza });
        })
        .catch(/* ... */);
    });

    app.post("/createUser", (req, res) => {
      pizzaCollection
        .insertOne(req.body)
        .then((result) => {
          let userId = result.insertedId.toString();
          return res.send({ id: userId });
        })
        .catch((error) => console.error(error));
    });

    app.post("/updateUserPizzaOrder", (req, res) => {
      pizzaCollection
        .insertOne({
          userId: req.body.userId,
          orderNumber: (req.body.orderNumber = Math.floor(
            Math.random() * 10000000
          )),
          price: req.body.price,
          sauce: req.body.sauce,
          ingredients: req.body.ingredients,
          orderNumber: req.body.orderNumber,
        })
        .then((result) => {
          return res.send({ message: "Pizza in the oven...." });
        })
        .catch((error) => console.error(error));
    });

    app.delete("/pizza", (req, res) => {
      pizzaCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          if (result.deletedCount === 0) {
            return res.json("No quote to delete");
          }
          res.json("Deleted Darth Vadar's quote");
        })
        .catch((error) => console.error(error));
    });

    const port = 3000;
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  })
  .catch(console.error);
