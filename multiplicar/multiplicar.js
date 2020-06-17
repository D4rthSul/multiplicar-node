// requires
const fs = require('fs');
const colors = require('colors/safe');

let listarArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        resolve(data);

    })

};


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.blue(`tabla-del-${base}-al-${limite}.txt`));
        });

    });

};

module.exports = { crearArchivo, listarArchivo }