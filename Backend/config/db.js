const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONOGODB_URI)
    .then(() => {
        console.log("MongoDB Connected...");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error :", err);
    })