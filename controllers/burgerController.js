var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burgerm.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  cat.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//create
router.post("/api/cats", function (req, res) {
  cat.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  //this is the 2nd part of call back function that is is saying when your done
  //with the function above do thid below annd this going to our model file
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//update
router.put("/api/cats/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", async function (req, res) {
  let condition = "id";
  let columnValue = req.params.id;

  const result = await cat.delete(condition, columnValue);

  if (result.affectedRows == 0)  {
    // If no rows were changed, then the ID must not exist, so 404
    return res.status(404).end();
  }
    res.status(200).end();


});

// Export routes for server.js to use.
module.exports = router;
