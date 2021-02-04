//Tabla de multiplicar
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// const [ , , argv3 = 'base=5'] = process.argv;
// const [ , base = 5] = argv3.split('=');

// const base = 7;

crearArchivo(argv.b, argv.l, argv.d, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));
