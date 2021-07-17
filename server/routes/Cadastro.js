const express = require('express')
const router = express.Router()
const { Users } = require("../models")
const db = require('../models');

router.get("/", (req, res) => {
    db.Users.findAll({
    }).then(todosProf => res.send(todosProf));
});

router.post("/", async (req, res) => {
    const cadastro = req.body;
    await Users.create(cadastro);
    res.json(cadastro);
})

module.exports = router;