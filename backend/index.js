const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 9000;

require('dotenv').config();

const testAPIRouter = require("./routes/testAPI");
const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PW}@rocnikovka.sjvhg.mongodb.net/rocnikovka?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use("/testAPI", testAPIRouter);

app.listen(PORT, () => `Server is running on port ${PORT}`);