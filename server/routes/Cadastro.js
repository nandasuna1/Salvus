const express = require('express');
const router = express.Router()
const { Users } = require("../models")
const db = require('../models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    db.Users.findAll({
    }).then(todosProf => res.send(todosProf));
});

router.post("/", async (req, res) => {
    const cadastro = req.body;
    await Users.create(cadastro);
    res.json(cadastro);
})


router.post("/login", async (req, res) => {
    const username = req.body.usuario;
    const senha = req.body.senha;
    console.log(username)
    console.log(senha);
    const user = await Users.findOne({where: {username: username} });

    if(!user) res.json({error: "Nome de usuario não existe!"})

    if(senha != user.senha) res.json({error: " combinação usuario e senha errada"})
    const accessToken = {username: user.username, id: user.id}

    res.json(accessToken)
})


module.exports = router;