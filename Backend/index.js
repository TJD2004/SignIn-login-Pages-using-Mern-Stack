const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/products',productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})