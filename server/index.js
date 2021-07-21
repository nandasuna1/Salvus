const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const cookieParser = require("cookie-parser");


app.use(cookieParser())
app.use(express.json());
app.use(cors());



//Routers para fazer os requestes
const cadastroRouter = require('./routes/Cadastro');
app.use("/cadastro", cadastroRouter);

const homeRouter = require('./routes/Home');
app.use("/home", homeRouter);




db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server running in 3001");
    });
});
