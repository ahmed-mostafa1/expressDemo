const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Hello from port ${port} ... `);
});

const students = [
  { id: 1, name: "Ahmed", dept: "Medicine" },
  { id: 2, name: "Mohamed", dept: "Accounting" },
  { id: 3, name: "Sayed", dept: "Economy" },
  { id: 4, name: "Ibrahim", dept: "Pharmacy" },
  { id: 5, name: "Mostafa", dept: "Law" },
];

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/asd", (req, res) => {
  res.send("Hello from ASD!");
});
