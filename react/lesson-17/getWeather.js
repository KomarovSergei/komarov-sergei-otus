require('dotenv').config()
const client = require('apixu')

const config = client.config
config.apikey = process.env.APIXUKEY
const apixu = new client.Apixu(config)
const query = 'Moscow'

apixu.current(query)
.then(current => console.log(current)
      , err => console.log(err.code, err.message))

