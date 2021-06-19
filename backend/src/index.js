// Archivo que arrancará el servidor
// Aqui importaremos los demás módulos

const app = require('./app');


async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ' + app.get('port'))
}

main();