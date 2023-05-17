import chalk from 'chalk';
import { suma, multiplica } from './modulos/controller.js';

console.log(chalk.blue('Hello world!')); // prueba de chalk

let resultado = multiplica( suma(1,2) , suma(4,5));

console.log(chalk.green(`Resultado es : ${resultado} `));
