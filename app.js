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
app.get("/api/students/add", (req, res) => {
  res.sendFile(path.join(__dirname, "/add.html"));
});

// ! SEND DATA via Query String
// * GET Welcome Page
app.get("/welcome.html", (req, res) => {
  let fname = req.query.fnm;
  let lname = req.query.lnm;
  res.send(`Welcome ${fname} ${lname} From GET`);
});

// * Getting DATA via HTTP {get}
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
// * Getting DATA via HTTP {get}
// Get All Students Data
app.get("/api/students/", (req, res) => {
  res.json(Students);
});

//* Create DATA via HTTP {post}
// ! Not tested
app.post("/api/students", (req, res) => {
  req.body;
  req.body.id = Students.length + 1;
  Students.push(req.body);
  res.send(Students);
});

// * Delete DATA via HTTP {delete}
app.delete("/api/students/:id", (req, res) => {
  let id = req.params.id;
  let idx = Students.findIndex((val) => {
    return val.id == id;
  });
  if (idx >= 0) {
    Students.splice(idx, 1);
    res.send("Student Deleted");
  } else {
    res.send("Student Not Found");
  }
});

// * UPdate DATA via HTTP {put}
// ! Not tested
app.put("/api/students/:id", (req, res) => {
  let id = req.params.id;
  let idx = Students.findIndex((val) => {
    return val.id == id;
  });
  if (idx >= 0) {
    for (i in req.body) {
      Students[idx][i] = req.body[i];
    }
    res.json(Students[idx]);
  } else {
    res.send("Student Not Found");
  }
});
