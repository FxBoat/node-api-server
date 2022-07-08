const express = require("express");
const app = express();
const PORT = 5008;

app.get('/',(req,res) => {
    res.send("Node server");
});

app.get('/test',(req,res) => {
    res.send("Test server");
});

app.listen(PORT,"0.0.0.0",() => {
    console.log(`Server is listening on port ${PORT}`);
});