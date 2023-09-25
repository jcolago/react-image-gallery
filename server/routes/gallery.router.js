const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// Modified file for stretch goals
// PUT Route
router.put('/like/:id', (req, res) => {
  const id = req.params.id;
  const queryText = `UPDATE "images" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  //Validation statement
  if (!id) {
    res.sendStatus(400);
    return;
  }
  //pool query to update image likes with matching id number
  pool
    .query(queryText, [id])
    .then((response) => {
      console.log(`Updated image likes with id`, id);
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
    });
});

// END PUT Route

// GET Route
router.get("/", (req, res) => {
  console.log("GET request made to /gallery/");
  //Sorts data by id number
  const queryText = `SELECT * FROM "images" ORDER BY "id" ASC;`;
  //pool query
  pool
    .query(queryText)
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log("Error in GET request", err);
      res.sendStatus(500);
    });
});
//End  // END GET Route

module.exports = router;