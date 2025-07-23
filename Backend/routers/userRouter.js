const router = require('express').Router();
const { signUp, login } = require('../controller/userController');
const {signUpValidation, loginValidation} = require('../MiddleWare/UserValidation');

router.post('/login', loginValidation, login)

router.post('/signup', signUpValidation, signUp)

module.exports = router;