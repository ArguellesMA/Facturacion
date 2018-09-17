export class Emisor {
    constructor(idEmisor = 0, emisor = '', curp = '', rPatronal = '', rfcOrigen = '', snfc=''){
        this.idEmisor = idEmisor;
        this.emisor = emisor;
        this.curp = curp;
        this.rPatronal = rPatronal;
        this.rfcOrigen = rfcOrigen;
        this.snfc = snfc;
    }
        idEmisor:  number;
        emisor:    string;
        curp:      string;
        rPatronal: string;
        rfcOrigen: string;
        snfc:      string;
}