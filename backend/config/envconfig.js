const dotenv = require('dotenv');
const path = require('path');

 dotenv.config({
    path: path.resolve(`environment/${process.env.NODE_ENV.trim()}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    HOST : process.env.HOST ,
    PORT : process.env.PORT
}