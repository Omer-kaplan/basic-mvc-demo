const Test = require("../models/test");

const testRoute = (req, res) => {
  res.render("../views/startTest", { test: Test.getTest() });
};

module.exports = {
  testRoute,
};
