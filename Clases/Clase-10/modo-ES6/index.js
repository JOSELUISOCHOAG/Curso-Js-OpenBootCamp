// import { sumar, multiplicar, elevar, factorial } from './modulos/matematica.js';

import * as mates from './modulos/matematica.js';

// import getAutor from './modulos/literatura.js';
// import { libro } from './modulos/literatura.js';
// o puede ser
import getAutor, {libro} from './modulos/literatura.js';


console.log(mates.sumar( 14 , 14));

console.log(getAutor());

console.log(libro);