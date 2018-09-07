const Totales = require('../models/totales');

module.exports = function (app) {

    app.get('/totales', (req, res) => {   
        Totales.getTotales((err, data) => {
           res.status(200).json(data);
        });
    });

    app.post('/totales', (req, res) => {
        const totalesData = {
          idTotales:    null,
          tPercepciones:req.body.tPercepciones,
          tDeducciones: req.body.tDeducciones,
          toPagos:      req.body.toPagos,
          subtotal:     req.body.subtotal,
          descuento:    req.body.descuento,
          total:        req.body.total
        };

        Totales.insertTotales(totalesData, (err, data) => {
          if (data && data.insertId){
              console.log(data);
              res.json({
                  success: true,
                  msg: 'total agregado',
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


    app.delete('/totales/:idTotales', (req, res) => {
        Totales.deleteTotales(req.params.idTotales, (err, data) => {
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

    app.put('/totales/:idTotales', (req, res) => {
        const totalesData = {
            idTotales:    req.params.idTotales,
            tPercepciones:req.body.tPercepciones,
            tDeducciones: req.body.tDeducciones,
            toPagos:      req.body.toPagos,
            subtotal:     req.body.subtotal,
            descuento:    req.body.descuento,
            total:        req.body.total
        };
        Totales.updateTotales(totalesData, (err, data) => {
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