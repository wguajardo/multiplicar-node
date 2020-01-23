// requires
const argv = require('yargs')
                    .command('listar','Imrpime en consola la tabla de multiplicar',{
                        base: {
                            demand: true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(argv);

// let base = '5';
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// crearArchivo(base)
// .then( archivo => console.log(`El archivo tabla-${ base }.txt ha sido creado!`))
// .catch(err => console.log(err));