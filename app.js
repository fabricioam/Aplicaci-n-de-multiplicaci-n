'use strict'
const colors = require('colors');
const argv = require('./config/yargs').argv; //Requerimos el argv y su método llamado argv
const { crearArchivo, listar } = require('./multiplicar/multiplicar.js');

//console.log(argv);
let comando = argv._[0]; //Este _[0] toma la posición 0 del comando

switch (comando) {
    case 'listar':
        console.log('listar');
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}

//let base = 4;

//El objeto process se crea cuando ejecutamos una aplicación de node
//process.argv recibe todos los parámetros que le mandemos desde la terminal
//por default se crean dos argumentos, el primero es la ruta de node.js (posición 0) y el segundo la ruta del archivo(posición 1), 
//nuestros parámetros comienzan desde la posición 2 
//console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split("=")[1]; //dividimos por el signo = y obtendremos un arreglo, solo nos interesa la posición 1, ya que es lo que va despues del = ejemplo --base = 5