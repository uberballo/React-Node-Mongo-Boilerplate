const path = require('path')

const pwd = path.resolve(__dirname, '/.env')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(pwd)
}

const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI

export = {PORT, MONGO_URI}
