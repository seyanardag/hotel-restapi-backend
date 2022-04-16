const mongoose = require('mongoose');

module.exports = () => {
    
    mongoose.connect('mongodb://localhost:27017/yazardb');
    mongoose.connection.on("open", () => {console.log('Success -- connectedd')})
    mongoose.connection.on("error", (err) => {console.log('FAIL -- not connected',err)})

}