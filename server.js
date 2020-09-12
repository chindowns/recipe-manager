if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else { 
    app.use(express.static('public')); 
}

var db = require("./models");

db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    });
});
