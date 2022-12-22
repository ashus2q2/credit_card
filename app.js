require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/credit_card/user.router");

app.use(express.json());

app.use("/api/credit_card", userRouter);

const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
    console.log("server up and running on Port : ", port )
})