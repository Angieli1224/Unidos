const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/unidos';

let _instance;
class DataBase {

   constructor(server) {

      mongoose.connect(
         URI, { useNewUrlParser: true, useCreateIndex: true },
         (err) => {
            if (err) {
              console.log(err);
            }
         }
      ).then(val => {
         this.db = val;
      });

      /** pm2 config */
      process.on("SIGINT", () => {
         server.close(function (err) {

            if (err) {
               setLog({ status: true, descripcion: `Ocurrió un error mientras se cerraba la aplicación. ${err}` });
               process.exit(1);
            }

            // close your database connection and exit with success (0 code)
            mongoose.connection.close(function (err) {
               if (err) {
                  setLog({ status: true, descripcion: `Ocurrió un error al desconectar la base de datos. ${err}` });
                  process.exit(1);
               }

               setLog({ status: true, descripcion: `Desconnexión y cierre de aplicación.` });
               process.exit(0);
            });
         });
      });
   }
}

/**
* Crea una instancia singleton para la conexión ala  base de datos
* @param {Server} s servidor que devuelve la función createServer() del módulo http o https
*/
function newDataBase(s) {
   if (s == null) {
      console.log(s);
      throw new Error('El parametro "server" es necesario para la conexión a la base de datos'); s
   }
   if (_instance == null) {
      _instance = new DataBase(s);
   }
   return _instance;
}

module.exports = { newDataBase }