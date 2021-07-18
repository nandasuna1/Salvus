const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers para fazer os requestes
const cadastroRouter = require('./routes/Cadastro');
app.use("/cadastro", cadastroRouter);

const homeRouter = require('./routes/Home');
app.use("/home", homeRouter);

const profissionaisRouter = require('./routes/Profissionais');
app.use("/perfil", profissionaisRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server running in 3001");
    });
});
