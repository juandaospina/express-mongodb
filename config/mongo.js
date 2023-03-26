const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnect = () => {
    const DB_URI = process.env.MONGOOSE_URI;
    // Método que permite la conexión a MongoDB
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        // !!err ? console.log("Succesfully Connection") : console.log("Error in connection")
        if(!!err) {
            console.log("Succesfully Connection")
        } else {
            console.log("Error in connection")
        }
    })
}

module.exports = dbConnect;