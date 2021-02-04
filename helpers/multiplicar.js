const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, desde, hasta ) => {
    
    try {
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++){
            consola += (`${ base } ${colors.magenta('x')} ${ i } ${colors.red('=')} ${ base * i } \n`);
            salida += (`${ base } x ${ i } = ${ base * i } \n`);
        }
        
        if(listar) {
            console.log('====================='.green);
            console.log(`    Tabla del: ${colors.green(base)} ` );
            console.log('====================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
};