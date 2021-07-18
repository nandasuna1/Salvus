const express = require('express')
const router = express.Router()
const { Users } = require('../models')



//sequelize semre usa async e await pra ter certeza que
//os dados estao sendo inseridos na tabela
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


module.exports = router;