
const express = require('express')

const serverless = require('serverless-http')

const app = express()

 
const router = express.Router()


router.get('/0xd85ad783cc94bd04196a13dc042a3054a9b52210/TotalSupply', (req, res) => {

   res.send('188370288')

})


app.use('/.netlify/functions/api', router)


module.exports.handler = serverless(app)