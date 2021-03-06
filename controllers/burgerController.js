const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const inboundObj = {
      burgers: data
    }
    res.render("index", inboundObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burgerName, (result) => {
    res.json(result);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  burger.deleteOne(req.params.id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
