const express = require('express');
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken')
const {createToken , validateToken} = require('../JWT')



router.get("/", (req, res) => {
    Users.findAll({
    }).then(todosProf => res.send(todosProf));
});

router.post("/", async (req, res) => {
    const cadastro = req.body;
    bcrypt.hash(cadastro.senha, 10).then((hash) => {
        Users.create({
            nomePrimeiro: cadastro.nomePrimeiro,
            nomeSegundo: cadastro.nomeSegundo,
            username: cadastro.username,
            email: cadastro.email,
            senha: hash,
            tel: cadastro.tel,
            genero: cadastro.genero,
            profissao: cadastro.profissao,
            especialidade: cadastro.especialidade,
            cidade: cadastro.cidade,
            estado: cadastro.estado,
            deslocamento: cadastro.deslocamento
        }).then(() => {
            console.log("user register")
            res.json(cadastro);
        }).catch((err) => {
            if(err){
                console.log("nome de usuario já existe")
                res.status(400).json({error:"nome de usuario ja existe"})
                
            }
            
        })
    })
    
})


router.post("/login", async (req, res) => {
    const username = req.body.usuario;
    const senha = req.body.senha;

    const user = await Users.findOne({where: {username: username} });

    if(!user) res.json({error: "Nome de usuario não existe!"})

    bcrypt.compare(senha, user.senha).then((combina) => {
        if(!combina) res.json({error: " Senha incorreta"})

        else{
            const accessToken =  sign(
                {username: user.username, id: user.id},
                "importantsecret"
            );
            res.json({token: accessToken, username: username, id: user.id});
        }

    });

})

router.get("/login", (req, res) => {
    console.log(res);
    res.json(req.user);
})

router.get("/:id", validateToken, async (req, res) => {
    const id = req.params.id
    const usuario = await Users.findByPk(id);
    console.log(res.json(usuario))
    res.json({username:usuario.username, id: usuario.id});
});



module.exports = router;