const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            res.status(409).json({
                message:'User already exist',
                success: false
            })
        }

        const userModel = new User({name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message:'SignUp Successfully',
            success: true
        })
    }
    catch(err) {
        res.status(500).json( {
            message:`Internal Server Error, ${err}`,
            success: false
        })
    }
}

const login = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(409).json({
                message:'Authentication Failed',
                success: false
            })
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword) {
            res.status(409).json({
                message:'Authentication Failed',
                success: false
            })
        }

        const jwtToken = jwt.sign({email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {
                expiresIn: '2d'
            }
        )

        res.status(201).json({
            message:'Login Successfully',
            success: true,
            jwtToken,
            email,
            user: user.name
        })
    }
    catch(err) {
        res.status(500).json( {
            message:`Internal Server Error, ${err}`,
            success: false
        })
    }
}

module.exports = {
    signUp,
    login
}