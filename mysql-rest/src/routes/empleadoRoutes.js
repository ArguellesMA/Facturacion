const Empleado = require('../models/empleado');

module.exports = function (app) {

    app.get('/empleado', (req, res) => {
        Empleado.getEmpleado((err, data) => {
           res.status(200).json(data);
        });
    });

    app.post('/empleado', (req, res) => {
        const empleadoData = {
          idEmpleado:    null,
          activo:        req.body.activo,
          domEmpleado:   req.body.domEmpleado,
          rfcEmpleado:   req.body.rfcEmpleado,
          nomEmpleado:   req.body.nomEmpleado,
          email:         req.body.email,
          noEmpleado:    req.body.noEmpleado,
          curpEmp:       req.body.curpEmp,
          tNomina:       req.body.tNomina,
          perioPago:     req.body.perioPago,
          entFederativa: req.body.entFederativa,
          tContrato:     req.body.tContrato,
          tRegimen:      req.body.tRegimen,
          nss:           req.body.nss,
          sbcAporta:     req.body.sbcAporta,
          rPuesto:       req.body.rPuesto,
          sdIntegrado:   req.body.sdIntegrado,
          tJornada:      req.body.tJornada,
          departamento:  req.body.departamento,
          puesto:        req.body.puesto,
          sindicalizado: req.body.sindicalizado,
          cBancaria:     req.body.cBancaria,
          banco:         req.body.banco,
          fechReLa:      req.body.fechReLa,
          aSubcontra:    req.body.aSubcontra,
          aPercepciones: req.body.aPercepciones,
          aDeducciones:  req.body.aDeducciones,
          aPagos:        req.body.aPagos,
          aIncapacidades:req.body.aIncapacidades
        };

        Empleado.insertEmpleado(empleadoData, (err, data) => {
          if (data && data.insertId){
              console.log(data);
              res.json({
                  success: true,
                  msg: 'Empleado agregado',
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


    app.delete('/empleado/:idEmpleado', (req, res) => {
        Empleado.deleteEmpleado(req.params.idEmpleado, (err, data) => {
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

    
    app.put('/empleado/:idEmpleado', (req, res) => {
        const empleadoData = {
            idEmpleado:    req.params.idEmpleado,
            activo:        req.body.activo,
            domEmpleado:   req.body.domEmpleado,
            rfcEmpleado:   req.body.rfcEmpleado,
            nomEmpleado:   req.body.nomEmpleado,
            email:         req.body.email,
            noEmpleado:    req.body.noEmpleado,
            curpEmp:       req.body.curpEmp,
            tNomina:       req.body.tNomina,
            perioPago:     req.body.perioPago,
            entFederativa: req.body.entFederativa,
            tContrato:     req.body.tContrato,
            tRegimen:      req.body.tRegimen,
            nss:           req.body.nss,
            sbcAporta:     req.body.sbcAporta,
            rPuesto:       req.body.rPuesto,
            sdIntegrado:   req.body.sdIntegrado,
            tJornada:      req.body.tJornada,
            departamento:  req.body.departamento,
            puesto:        req.body.puesto,
            sindicalizado: req.body.sindicalizado,
            cBancaria:     req.body.cBancaria,
            banco:         req.body.banco,
            fechReLa:      req.body.fechReLa,
            aSubcontra:    req.body.aSubcontra,
            aPercepciones: req.body.aPercepciones,
            aDeducciones:  req.body.aDeducciones,
            aPagos:        req.body.aPagos,
            aIncapacidades:req.body.aIncapacidades
        };
        Empleado.updateEmpleado(empleadoData, (err, data) => {
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