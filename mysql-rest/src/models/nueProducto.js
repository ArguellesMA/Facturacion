const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let productModel = {};

productModel.getProducts = (callback) => {
    if (connection){
        connection.query(
            'SELECT * FROM nProducto ORDER BY idNueProducto',
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
productModel.insertProduct = (productData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO nProducto SET ?', productData,
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

productModel.deleteProduct = (idNueProducto, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM nProducto WHERE idNueProducto = ${connection.escape(idNueProducto)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM nProducto WHERE idNueProducto = ${idNueProducto}
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

productModel.updateProduct = (productData, callback) => {
    if (connection){
        const sql = `
        UPDATE nProducto SET
        desProducto = ${connection.escape(productData.desProducto)},
        servicio = ${connection.escape(productData.servicio)},
        descripcion = ${connection.escape(productData.descripcion)},
        noIdentificacionP = ${connection.escape(productData.noIdentificacionP)},
        desUnidad = ${connection.escape(productData.desUnidad)},
        dClavUnidad = ${connection.escape(productData.dClavUnidad)},
        valUnitario = ${connection.escape(productData.valUnitario)},
        unidad = ${connection.escape(productData.unidad)}
        WHERE idNueProducto = ${connection.escape(productData.idNueProducto)}
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


module.exports = productModel;