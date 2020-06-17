const { argv } = require('./config/yargs');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors');

//console.log(module);

//console.log(process.argv);

let comando = argv._[0];
let base = '';

if (parseInt(argv.base) || parseInt(argv.b)) {

    base = parseInt(argv.base);

    if (!base) {
        base = parseInt(argv.b);
    }

} else {
    return console.log('Comando no reconocido');
}


switch (comando) {

    case 'crear':
        crearArchivo(base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(err => {
            console.log(err);
        });
        break;

    case 'listar':
        listarArchivo(base, argv.limite).then(listado => {
            console.log('============'.green);
            console.log(`Tabla del ${base}`.green);
            console.log('============'.green);
            console.log(listado);
        }).catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}