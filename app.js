const express = require('express');
const app = express();


app.get('/', (req, res)=> {
    res.json({message: "Express is up!"});
});

app.listen(3000, ()=> {
    console.log("Express running");
});