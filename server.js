const mongoose = require("mongoose");
const dotenv = require("dotenv");

/* 
Say you have a model, called 'Tour'
*/

/* 

model folder does not exist, it wasn't created.
const Tour = require("./model/tourModel");
const User = require("./model/userModel");

*/

dotenv.config({path: __dirname + "/.env"});

let database = process.env.DATABASE;
const username = process.env.USERNAME
const password = process.env.USER_PASSWORD;

(function (db=database, pw=password, usn=username) {
    let modified = db.replace("<PASSWORD>", pw);
    modified = modified.replace("<USERNAME>", usn);
    database = modified;
})();

const connectDB = () => {
    return mongoose
            .connect(database)
            .then(() => {
                console.log("connected to db");
            })
            .catch(err => {
                console.log("ERR CATCHED: " + err);
            });
}

module.exports = connectDB;
