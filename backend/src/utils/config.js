const path = require('path')


const pwd = path.resolve(__dirname, '../.env')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(pwd);
}

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL

module.exports = {
    PORT,
    MONGO_URL,
};
