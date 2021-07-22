const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const { validateToken} = require('../JWT')



router.get("/", async (req, res) => {
    totalMed = await Users.findAndCountAll({
       where: {
           profissao: "Medico"
        }
    });
    totalEnfermeiros = await Users.findAndCountAll({
        where: {
            profissao: "Enfermeiro"
         }
    });
     totalFono = await Users.findAndCountAll({
        where: {
            profissao: "Fonoaudiologo"
         }
    });
     totalTecEnf = await Users.findAndCountAll({
        where: {
            profissao: "Tecnico de Enfermagem"
         }
    });

    const todos = {
        "totalMed": totalMed,
        "totalEnfermeiros": totalEnfermeiros,
        "totalFono": totalFono,
        "totalTecEnf": totalTecEnf
    }

    res.json(todos);

});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    Users.destroy({
        where: {
            id: id,
        },
    });
})


module.exports = router;