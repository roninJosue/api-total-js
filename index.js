const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://admin:123@localhost:27017/test?authSource=admin`, {})

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`)
})

const options = {
  ip: '127.0.0.1'
}

require('total4/release')(options)