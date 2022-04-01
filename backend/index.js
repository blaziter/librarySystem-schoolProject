const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 9000;

const testAPIRouter = require("./routes/testAPI");

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PW}@rocnikovka.sjvhg.mongodb.net/rocnikovka?retryWrites=true&w=majority`)

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/testAPI", testAPIRouter);

app.listen(PORT);