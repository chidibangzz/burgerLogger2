// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//grabbing all burgers and storing in database
var cat = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  //async function that communicates to the orm
  delete: async function (columnName, columnValue) {
  const results = await orm.delete("burgers", columnName, columnValue);


  

  return results;
}
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
