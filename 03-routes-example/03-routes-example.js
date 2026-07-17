const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to our home page");
});

// Get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  res.json(products);
});

// Get a single product
app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  const singleProduct = products.find(
    (product) => product.id === productId
  );

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("Product not found. Please try a different ID.");
  }
});

// Start the server
const port = 3000;

app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});