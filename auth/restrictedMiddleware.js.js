const jwt = require('jsonwebtoken');
const { jwtSecret } =require('../config/secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        //not valid token
        res.status(401).json({ You: "can't touch this!" })
      }else {
        // req.user = decodedToken.user;
        next();
      }
    })
  }else {
    res.status(401).json({message: "I need some authorization!"})
  }
}