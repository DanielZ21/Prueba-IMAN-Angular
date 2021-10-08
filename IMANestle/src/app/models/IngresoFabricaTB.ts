export interface Ingreso {
    fechaIngreso:  Date;
    origen:        string;
    patenteChasis: string;
    carga:         string;
}

/*
export interface IngresoFabricaTBRespose {
    ingresoFabricaTB:      IngresoFabricaTB;
    listaTransportistas:   ListaTransportista;
    listaTipoArticulos:    ListaTipoArticulo;
    listaAtas:             ListaATA;
    listaClientes:         ListaCliente;
    listaDestinos:         ListaDestino;
    listaRemitos:          ListaRemito;
    listaNacionalidades:   ListaNacionalidade;
    listaPatentesChasis:   ListaPatentes;
    listaPatentesAcoplado: ListaPatentes;
    listaChoferes:         ListaChofere;
    listaExportadores:     ListaExportadore;
}
*/

export interface IngresoFabricaTB {
    id:                  number;
    ingreso:             Date;
    salida:              Date;
    idTipoArticulo:      number;
    idTransportista:     number;
    patente1:            string;
    patente2:            string;
    ing:                 number;
    bruto:               number;
    tara:                number;
    dni:                 string;
    observaciones:       string;
    idNacionalidad:      number;
    idClienteExportador: number;
    idDestino:           number;
    idRemito:            number;
    chofer:              string;
    entrada:             number;
    taraSalida:          number;
    nroContenedor:       string;
    idATA:               number;
    nroPermisoEmbarque:  string;
}

export interface ListaATA {
    id:   number;
    ata:  string;
    cuit: string;
}

export interface ListaChofere {
    id:     number;
    chofer: string;
}

export interface ListaCliente {
    id:      number;
    cliente: string;
}

export interface ListaDestino {
    id:         number;
    destino:    string;
    codigoAfip: number;
}

export interface ListaExportadore {
    id:         number;
    exportador: string;
}

export interface ListaNacionalidade {
    id:           number;
    nacionalidad: string;
}

export interface ListaPatentes {
    id:            number;
    patente:       string;
    patenteChasis: number;
}

export interface ListaRemito {
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

export interface ListaTipoArticulo {
    id:           number;
    tipoArticulo: string;
}

export interface ListaTransportista {
    id:            number;
    transportista: string;
}

