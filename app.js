// *Students Data
const Students = [
  { id: 1, name: "Ahmed", dept: "Medicine" },
  { id: 2, name: "Mohamed", dept: "Accounting" },
  { id: 3, name: "Sayed", dept: "Economy" },
  { id: 4, name: "Ibrahim", dept: "Pharmacy" },
  { id: 5, name: "Mostafa", dept: "Law" },
];
// * Init...
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Hello from port ${port} ... `);
});

app.use(express.urlencoded({ extended: true }));

// * HomePage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/main.html"));
});

// * GET Welcome Page
app.get("/welcome.html", (req, res) => {
  let fname = req.query.fnm;
  let lname = req.query.lnm;

  res.send(`Welcome ${fname} ${lname} From GET`);
});
// * POST Welcome Page
app.post("/welcome.html", (req, res) => {
  let fname = req.body.fnm;
  let lname = req.body.lnm;
  res.send(`Welcome ${fname} ${lname} From POST`);
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
