//Este archivo contiene toda la funcionalidad de los comandos utilizados en los yargs
const opts = { // Este objeto contiene los parametros necesarios para cada comando, puesto que los dos comandos necesitan los mismos parámetros
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts) //Aqui le pasamos el objeto con los parámetros
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar y con un limite', opts) //Aqui pasamos el mismo objeto
    .help()
    .argv;

module.exports = { //Exportamos el argv
    argv
}

//Esta es la forma poniendo los argumentos en cada comando
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }).command('crear', 'Crea un archivo de texto con la tabla de multiplicar y con un limite', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;