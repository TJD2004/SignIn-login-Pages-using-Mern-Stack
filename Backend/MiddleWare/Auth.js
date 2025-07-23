const jwt = require('jsonwebtoken')
require('dotenv').config();

const ensureAuthentication = (req, res, next) => {
    const auth = req.header('authorization');
    if(!auth) {
        return res.status(403).json( {
            message:'Unauthorized, JWt token is rerquired'
        })
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        return res.status(403).json( {
            message:'Unauthorized, JWt token is rerquired'
        })
    }
}


module.exports = {ensureAuthentication};