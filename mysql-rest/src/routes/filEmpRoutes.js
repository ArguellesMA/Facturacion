const FilEmpleados = require('../models/filtroEmpleados');

module.exports = function (app) {

    app.get('/filEmpleados', (req, res) => {   
        FilEmpleados.getFilEmpleados((err, data) => {
           res.status(200).json(data);
        });
    });

    app.post('/filEmpleados', (req, res) => {
        const filEmpData = {
          idFilEmp:     null,
          rfcFilEmp:    req.body.rfcFilEmp,
          nombreFilEmp: req.body.nombreFilEmp,
          noEmpFilEmp:  req.body.noEmpFilEmp
        };

        FilEmpleados.insertFilEmpleados(filEmpData, (err, data) => {
          if (data && data.insertId){
              console.log(data);
              res.json({
                  success: true,
                  msg: 'empleado encontrado',
                  data: data
              });
          } else {
              res.status(500).json({
                success: false,
                msg: "Error"
              });
          }
        });
    });


    app.delete('/filEmpleados/:idFilEmp', (req, res) => {
        FilEmpleados.deleteFilEmpleados(req.params.idFilEmp, (err, data) => {
            if (data && data.msg === 'deleted' || data.msg == 'not exists'){
                res.json({
                    success: 'true',
                    data
                });
            } else {
                res.status(500).json({
                    msg: 'Error'
                })
            }
        });
    });

    app.put('/filEmpleados/:idFilEmp', (req, res) => {
        const filEmpData = {
            idFilEmp:     req.params.idFilEmp,
            rfcFilEmp:    req.body.rfcFilEmp,
            nombreFilEmp: req.body.nombreFilEmp,
            noEmpFilEmp:  req.body.noEmpFilEmp
        };
        FilEmpleados.updateFilEmpleados(filEmpData, (err, data) => {
            if (data && data.msg){
                res.json(data)
            } else {
                res.json({
                    success: false,
                    msg: 'error'
                });
            }
        });
     });
} 