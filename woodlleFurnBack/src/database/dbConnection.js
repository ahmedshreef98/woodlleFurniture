const mongoose = require('mongoose')

exports.dbConnection = () => {
      mongoose.connect('mongodb+srv://ahmed:ahmed1111@woodlle.iturlhx.mongodb.net/')
        .then(() => {
            console.log("DB Connection established");
        }).catch((error) => {
            console.log(error);
        })
}