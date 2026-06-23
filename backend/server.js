const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.DB_NAME || "zenna_store";

app.use(cors());
app.use(express.json());

let productsCollection;

async function connectDatabase() {
  const client = new MongoClient(mongoUri);
  await client.connect();

  const db = client.db(dbName);
  productsCollection = db.collection("products");

  console.log(`Connected to MongoDB database: ${dbName}`);
}

app.get("/api/products", async (req, res) => {
  try {
    const products = await productsCollection
      .find({}, { projection: { _id: 0 } })
      .toArray();

    res.json(products);
  } catch (error) {
    console.error("Failed to load products:", error);
    res.status(500).json({ message: "Failed to load products." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Zenna API running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB:", error);
    process.exit(1);
  });
