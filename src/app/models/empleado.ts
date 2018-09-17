export class Empleado {
    constructor(idEmpleado     = 0, 
                activo         = 0,
                domEmpleado    ='',
                rfcEmpleado    ='',
                nomEmpleado    ='',
                email          ='',
                noEmpleado     = 0,
                curpEmp        ='',
                tNomina        ='',
                perioPago      ='',
                entFederativa  ='',
                tContrato      ='',
                tRegimen       ='',
                nss            ='',
                sbcAporta      ='',
                rPuesto        ='',
                sdIntegrado    ='',
                tJornada       ='',
                departamento   ='',
                puesto         ='', 
                sindicalizado  ='',
                cBancaria      = 0,
                banco          ='',
                fechReLa       ='',
                aSubcontra     ='',
                aPercepciones  ='', 
                aDeducciones   ='',
                aPagos         ='',
                aIncapacidades =''){
    
    this.idEmpleado     = idEmpleado;
    this.activo         = activo;
    this.domEmpleado    = domEmpleado;
    this.rfcEmpleado    = rfcEmpleado;
    this.nomEmpleado    = nomEmpleado;
    this.email          = email;
    this.noEmpleado     = noEmpleado;
    this.curpEmp        = curpEmp;
    this.tNomina        = tNomina;
    this.perioPago      = perioPago;
    this.entFederativa  = entFederativa;
    this.tContrato      = tContrato;
    this.tRegimen       = tRegimen;
    this.nss            = nss;
    this.sbcAporta      = sbcAporta;
    this.rPuesto        = rPuesto;
    this.sdIntegrado    = sdIntegrado;
    this.tJornada       = tJornada;
    this.departamento   = departamento;
    this.puesto         = puesto;
    this.sindicalizado  = sindicalizado;
    this.cBancaria      = cBancaria;
    this.banco          = banco;
    this.fechReLa       = fechReLa;
    this.aSubcontra     = aSubcontra;
    this.aPercepciones  = aPercepciones;
    this.aDeducciones   = aDeducciones;
    this.aPagos         = aPagos;
    this.aIncapacidades = aIncapacidades;
    }

    idEmpleado:     number;
    activo:         number; //tinyInt
    domEmpleado:    string; //tinyInt
    rfcEmpleado:    string;
    nomEmpleado:    string;
    email:          string;
    noEmpleado:     number;
    curpEmp:        string;
    tNomina:        string;
    perioPago:      string;
    entFederativa:  string;
    tContrato:      string;
    tRegimen:       string;
    nss:            string;
    sbcAporta:      string; //double
    rPuesto:        string;
    sdIntegrado:    string; //double
    tJornada:       string;
    departamento:   string;
    puesto:         string;
    sindicalizado:  string;
    cBancaria:      number; //bigInt
    banco:          string;
    fechReLa:       string; //date
    aSubcontra:     string; //tinyInt
    aPercepciones:  string; //tinyInt
    aDeducciones:   string; //tinyInt
    aPagos:         string; //tinyInt
    aIncapacidades: string; //tinyInt
}