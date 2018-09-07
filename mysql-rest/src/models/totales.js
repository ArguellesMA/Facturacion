const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let totalesModel = {};

totalesModel.getTotales = (callback) => {  
    if (connection){
        connection.query(
            'SELECT * FROM totales ORDER BY idTotales',
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

totalesModel.insertTotales = (totalesData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO totales SET ?', totalesData,
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

totalesModel.deleteTotales = (idTotales, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM totales WHERE idTotales = ${connection.escape(idTotales)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM totales WHERE idTotales = ${idTotales}
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

totalesModel.updateTotales = (totalesData, callback) => {
    if (connection){
        const sql = `
        UPDATE totales SET
        tPercepciones =   ${connection.escape(totalesData.tPercepciones)},
        tDeducciones =    ${connection.escape(totalesData.tDeducciones)},
        toPagos =         ${connection.escape(totalesData.toPagos)},
        subtotal =        ${connection.escape(totalesData.subtotal)},
        descuento =       ${connection.escape(totalesData.descuento)},
        total =           ${connection.escape(totalesData.total)}
        WHERE idTotales = ${connection.escape(totalesData.idTotales)}
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

module.exports = totalesModel;