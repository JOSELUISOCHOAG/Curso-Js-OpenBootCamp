// Ejercicio Propuesto nro 9

const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


function dividir(num1,num2) {
    if (num1 > num2 && num2 > 0) {
        return num1 / num2;
    }
    throw new Error("Parametros incorrectos..!")
}


try {
    let num1 = 12;
    let num2 = 16;
    let resultado = dividir(num1,num2);
    console.log(`el resultado de dividir ${num1} entre ${num2} es :`,resultado );
} catch(e) {
    logger.log("error",e.toString());
}
finally{
    console.log("proceso terminado.");
}