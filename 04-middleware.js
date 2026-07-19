// using middleware is a routing and middleware web framework that has minimal functionality of its own. an express application is essentially a series of middleware function calls

// middleware can perform following tasks:L

// execute any code
// make changes to the request and the response objects
// end the request-response cycle
// call the next middleware function in the stack.

const express = require("express");
const app = express();

// define middleware function

const myFirstMiddleware = (req, res, next) => {
  console.log("this is my first middleware will run on every request");

  next();
};
app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("about Page");
});

app.listen(3000, () => {
  console.log(`Server is now running on port 3000`);
});
