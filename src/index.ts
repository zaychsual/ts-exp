import express from "express";

const app = express();

app.route("/").get((req,res) => {
    res.send("hi cantik");
});
app.listen(1601);