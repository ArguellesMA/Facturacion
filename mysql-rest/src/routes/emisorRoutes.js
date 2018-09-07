const Emisor = require('../models/emisor');

module.exports = function (app) {

    app.get('/emisor', (req, res) => {   
        Emisor.getEmisor((err, data) => {
           res.status(200).json(data);
        });
    });

    app.post('/emisor', (req, res) => {
        const emisorData = {
          idEmisor: null,
          emisor:   req.body.emisor,
          curp:     req.body.curp,
          rPatronal:req.body.rPatronal,
          rfcOrigen:req.body.rfcOrigen,
          sncf:     req.body.sncf
        };

        Emisor.insertEmisor(emisorData, (err, data) => {
          if (data && data.insertId){
              console.log(data);
              res.json({
                  success: true,
                  msg: 'Emisor agregado',
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


    app.delete('/emisor/:idEmisor', (req, res) => {
        Emisor.deleteEmisor(req.params.idEmisor, (err, data) => {
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

    app.put('/emisor/:idEmisor', (req, res) => {
        const emisorData = {
            idEmisor: req.params.idEmisor,
            emisor:   req.body.emisor,
            curp:     req.body.curp,
            rPatronal:req.body.rPatronal,
            rfcOrigen:req.body.rfcOrigen,
            sncf:     req.body.sncf
        };
        Emisor.updateEmisor(emisorData, (err, data) => {
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