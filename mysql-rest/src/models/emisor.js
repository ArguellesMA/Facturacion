const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let emisorModel = {};

emisorModel.getEmisor = (callback) => {  
    if (connection){
        connection.query(
            'SELECT * FROM emisor ORDER BY idEmisor',
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

emisorModel.insertEmisor = (emisorData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO emisor SET ?', emisorData,
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

emisorModel.deleteEmisor = (idEmisor, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM emisor WHERE idEmisor = ${connection.escape(idEmisor)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM emisor WHERE idEmisor = ${idEmisor}
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

emisorModel.updateEmisor = (emisorData, callback) => {
    if (connection){
        const sql = `
        UPDATE emisor SET
        emisor =         ${connection.escape(emisorData.emisor)},
        curp =           ${connection.escape(emisorData.curp)},
        rPatronal =      ${connection.escape(emisorData.rPatronal)},
        rfcOrigen =      ${connection.escape(emisorData.rfcOrigen)},
        sncf =           ${connection.escape(emisorData.sncf)}
        WHERE idEmisor = ${connection.escape(emisorData.idEmisor)}
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

module.exports = emisorModel;