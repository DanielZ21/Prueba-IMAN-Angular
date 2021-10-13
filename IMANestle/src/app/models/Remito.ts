export interface Remito {
    id:               number;
    nroRemito:        string;
    fecha:            Date;
    idTipoMovimiento: number;
    idDeposito:       number;
    idCliente:        number;
    observaciones:    string;
    idTransaportista: number;
    idRemitoNew:      number;
}