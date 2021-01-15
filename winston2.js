
let winston=require("winston");

let logger= winston.createLogger({

    transports:[new winston.transports.File({filename:"combined.log"})],
    
})

logger.log({
    level:"info",
    message:"testing logger"
})
logger.add(new winston.transports.Console());

logger.log({
    level:"error",
    message:"hiiiiii"
    
})