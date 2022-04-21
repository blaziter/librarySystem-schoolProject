const session = require("express-session");
const mongoose = require('mongoose');
const passport = require("passport");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 9000;

const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static("./public"));
app.use(passport.initialize());
app.use(passport.session());


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

app.listen(PORT, () => `Server is running on port ${PORT}`);