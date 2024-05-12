const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Hello from port ${port} ... `);
});

const Students = [
  { id: 1, name: "Ahmed", dept: "Medicine" },
  { id: 2, name: "Mohamed", dept: "Accounting" },
  { id: 3, name: "Sayed", dept: "Economy" },
  { id: 4, name: "Ibrahim", dept: "Pharmacy" },
  { id: 5, name: "Mostafa", dept: "Law" },
];
// * HomePage
app.get("/", (req, res) => res.send("Hello World!"));
// * Get Custom Path
app.get("/asd", (req, res) => {
  res.send("Hello from ASD!");
});
// * Get specific Student
app.get("/api/students/:id", (req, res) => {
  let id = req.params.id;
  const student = Students.find((val, idx, arr) => {
    return val.id == id;
  });

  if (student) {
    res.json(student);
  } else {
    res.send("Student NOT Found!");
  }
});
