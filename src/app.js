const express = require("express");
const app = express();
const products = require("./data/products.json");

app.get("/api/v1/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).json({
      status: "success",
      message: "Product fetched successfully",
      data: {
        products: products,
      },
    });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



