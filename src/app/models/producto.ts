export class Producto {
    constructor(idNueProducto = 0, desProducto= '', servicio= '', descripcion='', 
                noIdentificacionP= 0,desUnidad='',dClavUnidad='',valUnitario= 0,
                unidad=''){
        this.idNueProducto = idNueProducto;
        this.desProducto = desProducto;
        this.servicio = servicio;
        this.descripcion = descripcion;
        this.noIdentificacionP = noIdentificacionP;
        this.desUnidad = desUnidad;
        this.dClavUnidad = dClavUnidad;
        this.valUnitario = valUnitario;
        this.unidad = unidad;
                }
        
        idNueProducto: number;
        desProducto: string;
        servicio: string;
        descripcion: string;
        noIdentificacionP: number;
        desUnidad: string;
        dClavUnidad: string;
        valUnitario: number;
        unidad: string;
}