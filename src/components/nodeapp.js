const express = require("express");
const axios = require("axios");

const router = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.listen(5000, () => {
  console.log(`server started on port 5000`);
});

//Routes healthcheak
router.get("/ping", (req, res, next) =>
  res.status(200).json({ message: "Routers are working fine" })
);

const employees = [];

router.post("/employees", (req, res) => {
  const { name, employeeId, dept, salary } = req.body;

  const newEmployee = {
    name,
    employeeId,
    dept,
    salary,
  };

  employees.push(newEmployee);

  res.status(201).json(newEmployee);
});

router.get("/employees", (req, res) => {
  if (employees.length === 0) {
    return res.status(404).json({ error: "No employees found" });
  }

  // Find employee with lowest salary
  const lowestSalaryEmployee = employees.reduce((min, emp) => {
    emp.salary < min.salary ? emp : min;
  }, employees[0]);

  // Find employee with highest salary
  const highestSalaryEmployee = employees.reduce((max, emp) => {
    emp.salary > max.salary ? emp : max;
  }, employees[0]);

  res.json({
    employees,
    lowestSalaryEmployee,
    highestSalaryEmployee,
  });
});

//  Pagination at server side

router.get("/teams", async (req, res) => {
  const dataURL = "https://jsonplaceholder.typicode.com/comments"; //`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}`;
  let page = Number(req?.query?.page || 1);
  let limit = Number(req?.query?.limit || 3);
  let skip = (page - 1) * limit;
  try {
    const response = await axios.get(dataURL);

    totalApiData = response.data;
    dataPerPage = totalApiData.slice(skip, skip + limit);
    res.json({
      currentPage: page,
      totalPages: Math.ceil(totalApiData.length / limit),
      items: dataPerPage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
