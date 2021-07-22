const {sign, verify} = require("jsonwebtoken");

const createToken = (user) => {
    const accessToken = sign(
        {username: user.username,
         id: user.id}, 
        "importantsecret"
    );
    return accessToken;
};

const validateToken = (req, res, next) => {

    const accessToken = req.header("accessToken");
    //console.log(req)
    if(!accessToken) return res.json({error: "Usuario não está autenticado"});

    try{
        const validToken = verify(accessToken, "importantsecret")
        req.user = validToken;
        
        if(validToken){
            req.authenticated = true;
            return next()
        }
    }catch(err){
        return res.json({error: err});
    }
}

module.exports = {createToken, validateToken};