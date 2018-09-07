const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if (connection){
        connection.query(
            'SELECT * FROM bProductos ORDER BY idBProductos',
            (err, rows) => {
                if (err){
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};

userModel.insertUser = (userData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO bProductos SET ?', userData,
      (err, result) => {
          if (err) {
              throw err;
          } else {
              callback(null, {'insertId': result.insertId
            })
          }
      }
    )
  }
};

userModel.deleteUser = (id, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM bProductos WHERE idBProductos = ${connection.escape(id)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM bProductos WHERE idBProductos = ${id}
                `;
                connection.query(sql, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        callback(null, {
                            msg: 'deleted'
                        })
                    }
                })
            } else{
                callback(null, {
                    msg: 'not exists'
                })
            }
        });
    }
};

userModel.updateUser = (userData, callback) => {
    if (connection){
        const sql = `
        UPDATE bProductos SET
        nIdentificacion = ${connection.escape(userData.nIdentificacion)},
        descripcion = ${connection.escape(userData.descripcion)}
        WHERE idBProductos = ${connection.escape(userData.idBProductos)}
        `

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "Success"
                })
            }
        });
    }
}

/*
userModel.getUsers = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM users ORDER BY id',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
}; 

userModel.insertUser = (userData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO users SET ?', userData,
          (err, result) => {
              if (err) {
                  throw err;
              } else {
                  callback(null, {'insertId': result.insertId 
                })
              }
          }
    )
  }
};  

userModel.updateUser = (userData, callback) => {
   if (connection) {
       const sql = `
       UPDATE users SET
       username = ${connection.escape(userData.username)},
       email = ${connection.escape(userData.email)},
       pass = ${connection.escape(userData.pass)}
       WHERE id = ${connection.escape(userData.id)}
       `
     connection.query(sql, (err, result) => {
         if (err) {
             throw err;
         } else {
             callback(null, {
                 "msg": "Success"
             })
         }
     });
   }
}; */

/*
userModel.deleteUser = (id, callback) => {
  if (connection) {
      let sql =  `
        SELECT * FROM users WHERE id = ${connection.escape(id)}
      `;

      connection.query(sql, (err, row) => {
         if(row){
           let sql = `
           DELETE FROM users WHERE id = ${id}
           `;
           connection.query(sql, (err, result) => {
               if (err) {
                   throw err;
               } else {
                   callback(null, {
                       msg: 'deleted'
                   })
               }
           })
         } else {
             callback(null, {
                 msg: 'not exists'
             })
         }
      });
  }
};   */

module.exports = userModel;