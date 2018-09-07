const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let filEmpModel = {};

filEmpModel.getFilEmpleados = (callback) => {  
    if (connection){
        connection.query(
            'SELECT * FROM filtroEmpleados ORDER BY idFilEmp',
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

filEmpModel.insertFilEmpleados = (filEmpData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO filtroEmpleados SET ?', filEmpData,
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

filEmpModel.deleteFilEmpleados = (idFilEmp, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM filtroEmpleados WHERE idFilEmp = ${connection.escape(idFilEmp)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM filtroEmpleados WHERE idFilEmp = ${idFilEmp}
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

filEmpModel.updateFilEmpleados = (filEmpData, callback) => {
    if (connection){
        const sql = `
        UPDATE filtroEmpleados SET
        rfcFilEmp =      ${connection.escape(filEmpData.rfcFilEmp)},
        nombreFilEmp =   ${connection.escape(filEmpData.nombreFilEmp)},
        noEmpFilEmp =    ${connection.escape(filEmpData.noEmpFilEmp)}
        WHERE idFilEmp = ${connection.escape(filEmpData.idFilEmp)}
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

module.exports = filEmpModel;