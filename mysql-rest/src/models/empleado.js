const mysql = require('mysql');

connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'testapimysql'
});

let empleadoModel = {};

empleadoModel.getEmpleado = (callback) => {
    if (connection){
        connection.query(
            'SELECT * FROM empleado ORDER BY idEmpleado',
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
empleadoModel.insertEmpleado = (empleadoData, callback) => {
    if (connection) {
        connection.query(' INSERT INTO empleado SET ?', empleadoData,
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

empleadoModel.deleteEmpleado = (idEmpleado, callback) => {
    if (connection) {
        let sql = `
          SELECT * FROM empleado WHERE idEmpleado = ${connection.escape(idEmpleado)}
        `;

        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM empleado WHERE idEmpleado = ${idEmpleado}
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

empleadoModel.updateEmpleado = (empleadoData, callback) => {
    if (connection){
        const sql = `
        UPDATE empleado SET
        activo =           ${connection.escape(empleadoData.activo)},
        domEmpleado =      ${connection.escape(empleadoData.domEmpleado)},
        rfcEmpleado =      ${connection.escape(empleadoData.rfcEmpleado)},
        nomEmpleado =      ${connection.escape(empleadoData.nomEmpleado)},
        email =            ${connection.escape(empleadoData.email)},
        noEmpleado =       ${connection.escape(empleadoData.noEmpleado)},
        curpEmp =          ${connection.escape(empleadoData.curpEmp)},
        tNomina =          ${connection.escape(empleadoData.tNomina)},
        perioPago =        ${connection.escape(empleadoData.perioPago)},
        entFederativa =    ${connection.escape(empleadoData.entFederativa)},
        tContrato =        ${connection.escape(empleadoData.tContrato)},
        tRegimen =         ${connection.escape(empleadoData.tRegimen)},
        nss =              ${connection.escape(empleadoData.nss)},
        sbcAporta =        ${connection.escape(empleadoData.sbcAporta)},
        rPuesto =          ${connection.escape(empleadoData.rPuesto)},
        sdIntegrado =      ${connection.escape(empleadoData.sdIntegrado)},
        tJornada =         ${connection.escape(empleadoData.tJornada)},
        departamento =     ${connection.escape(empleadoData.departamento)},
        puesto =           ${connection.escape(empleadoData.puesto)},
        sindicalizado =    ${connection.escape(empleadoData.sindicalizado)},
        cBancaria =        ${connection.escape(empleadoData.cBancaria)},
        banco =            ${connection.escape(empleadoData.banco)},
        fechReLa =         ${connection.escape(empleadoData.fechReLa)},
        aSubcontra =       ${connection.escape(empleadoData.aSubcontra)},
        aPercepciones =    ${connection.escape(empleadoData.aPercepciones)},
        aDeducciones =     ${connection.escape(empleadoData.aDeducciones)},
        aPagos =           ${connection.escape(empleadoData.aPagos)},
        aIncapacidades =   ${connection.escape(empleadoData.aIncapacidades)}
        WHERE idEmpleado = ${connection.escape(empleadoData.idEmpleado)}
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

module.exports = empleadoModel;