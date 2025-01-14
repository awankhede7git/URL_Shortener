const mongoose = require('mongoose');


async function ConnectToMongodb(url){
    return mongoose.connect(url);
}

module.exports = {
    ConnectToMongodb
};
