const Employee = require("../models/Employee");

//show the list of employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        mesage: `An error Ocurred!`,
      });
    });
};

//get an employee
const show = (req, res, next) => {
  let employeeID = req.params.uid;
  Employee.findById(employeeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        mesage: `An error Ocurred!`,
      });
    });
};

//add new employee
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  if (req.file) {
    employee.avatar = req.file.path;
  }
  employee
    .save()
    .then((response) => {
      res.json({
        mesage: "Employee Added Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mesage: `An error Ocurred!`,
      });
    });
};

//update an employee
const update = (req, res, next) => {
  let employeeID = req.params.uid;

  let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };

  Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then((response) => {
      res.json({
        mesage: "Employee Updated Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mesage: `An error Ocurred!`,
      });
    });
};

//delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.params.uid;
  Employee.findByIdAndRemove(employeeID)
    .then((response) => {
      res.json({
        mesage: "Employee Deleted Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mesage: error,
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
