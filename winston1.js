const s=require("winston");

const express = require('express');
const winston = require("winston");
const app = express()
const port = 3000

const logger=winston.createLogger({
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
})

logger.remove(new winston.transports.Console());
app.get('/', (req, res) => {
  res.send('Hello World!')
  logger.log({
    level:"info",
    message:"hi1 in opening page"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})