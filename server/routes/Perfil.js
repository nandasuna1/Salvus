const express = require('express');
const db = require('../models');
const router = express.Router()
const { Profissionais } = require("../models")

router.get("/", (req, res) => {
    db.Profissionais.findAll({
        include: [db.Users]
    }).then(todosProf => res.send(todosProf));
});

router.post("/", async (req, res) => {
    const profissionais = req.body;
    await Profissionais.create(profissionais);
    res.json(profissionais);
})

module.exports = router;