const Product = require('../models/nueProducto');

module.exports = function (app) {

    app.get('/producto', (req, res) => {
        Product.getProducts((err, data) => {
           res.status(200).json(data);
        });
    });

    app.post('/producto', (req, res) => {
        const productData = {
          idNueProducto:     null,
          desProducto:       req.body.desProducto,
          servicio:          req.body.servicio,
          descripcion:       req.body.descripcion,
          noIdentificacionP: req.body.noIdentificacionP,
          desUnidad:         req.body.desUnidad,
          dClavUnidad:       req.body.dClavUnidad,
          valUnitario:       req.body.valUnitario,
          unidad:            req.body.unidad
        };

        Product.insertProduct(productData, (err, data) => {
          if (data && data.insertId){
              console.log(data);
              res.json({
                  success: true,
                  msg: 'Producto agregado',
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


    app.delete('/producto/:idNueProducto', (req, res) => {
        Product.deleteProduct(req.params.idNueProducto, (err, data) => {
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

    app.put('/producto/:idNueProducto', (req, res) => {
        const productData = {
            idNueProducto:     req.params.idNueProducto,
            desProducto:       req.body.desProducto,
            servicio:          req.body.servicio,
            descripcion:       req.body.descripcion,
            noIdentificacionP: req.body.noIdentificacionP,
            desUnidad:         req.body.desUnidad,
            dClavUnidad	:      req.body.dClavUnidad,
            valUnitario:       req.body.valUnitario,
            unidad:            req.body.unidad
        };
        Product.updateProduct(productData, (err, data) => {
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