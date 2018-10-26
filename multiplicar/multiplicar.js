//requires
const fs = require('fs'); //paquete nativo (del core) de node
const colors = require('colors');
// const fs = require('express');   //paquetes externos, primero se instalan de npm
// const fs = require('./users');  //archivos que nosotros creamos y estan en algún lugar de nuestro proyecto

let crearArchivo = (base, limite = 9) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`; //se va concatenando y guardando la información en la variable, en cada vuelta del ciclo, es decir no se sobreescribe el valor de la variable, se va concatenando
        }

        //la función writeFile recibe el nombre del archivo o la ruta, lo que queremos guardar y en este caso el callback para ver si hay algun error
        fs.writeFile(`tablas/tabla-${base}al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al ${limite}.txt`.yellow);
        });

    });
}

//vemos que el parámetro le asignamos un 10, en ES6 ya podemos poner valores por default a un parámetro
let listar = (base, limite = 10) => {

    console.log("=================".bgRed);
    console.log(`tabla de ${base}`.bgRed);
    console.log("=================".bgRed);



    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listar //se hace referencia a la función creada anteriormente, se hace para poder exportarla
    //tambien se puede hacer asi = crearArchivo : crearArchivo, el primero seria el nombre y el segundo lo que se esta exportando, pero con EM6 se puede hacer de la forma de arriba.
}