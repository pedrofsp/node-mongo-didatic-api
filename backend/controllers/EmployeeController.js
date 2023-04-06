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
        message: `An error Ocurred!`,
      });
    });
};

//show single employee
const show = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        mxessage: `An error Ocurred!`,
      });
    });
};

//add new employrr
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
        message: "Employee Added Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mxessage: `An error Ocurred!`,
      });
    });
};

//update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID;

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
        message: "Employee Updated Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mxessage: `An error Ocurred!`,
      });
    });
};

//delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findByIdAndRemove(employeeID)
    .then((response) => {
      res.json({
        message: "Employee Deleted Successfully",
      });
    })
    .catch((error) => {
      res.json({
        mxessage: `An error Ocurred!`,
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
