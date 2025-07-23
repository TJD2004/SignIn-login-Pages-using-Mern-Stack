const router = require('express').Router();
const {ensureAuthentication} = require('../MiddleWare/Auth')

router.get('/',ensureAuthentication, (req, res) =>{
    res.status(200).json([
        {
         name:'mobile',
        price: 10000
       },
       {
         name:'tv',
        price: 100009
       }
    ])
})

module.exports = router