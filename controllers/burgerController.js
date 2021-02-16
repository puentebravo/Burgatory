const express = require('express');

const router = express.Router();

const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.render("index", data)
    })
})

router.post("/api/burgers", (req, res) => {
    burger.insertOne((data) => {

    })
})