const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.DB_NAME || "zenna_store";
const productsPath = path.join(__dirname, "products.json");

async function seedProducts() {
  const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  const client = new MongoClient(mongoUri);

  await client.connect();

  const db = client.db(dbName);
  const productsCollection = db.collection("products");

  await productsCollection.deleteMany({});
  await productsCollection.insertMany(products);

  console.log(`Seeded ${products.length} products into ${dbName}.products`);

  await client.close();
}

seedProducts().catch((error) => {
  console.error("Failed to seed products:", error);
  process.exit(1);
});
