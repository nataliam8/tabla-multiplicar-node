//Configuración de yargs
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el número hasta donde quieres la tabla'
                })
                .option('d', {
                    alias: 'desde',
                    type: 'number',
                    default: 1,
                    describe: 'Este es el número desde donde empieza la tabla',
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número';
                    }
                    if( isNaN(argv.d) ){
                        throw 'Desde tiene que ser un número';
                    }
                    if( isNaN(argv.h) ){
                        throw 'Hasta tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;