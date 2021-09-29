export interface Ingreso {
    fechaIngreso:  Date;
    origen:        string;
    patenteChasis: string;
    carga:         string;
}

export interface NuevoIngreso {
    ingresoFabricaTB:      IngresoFabricaTB;
    listaTransportistas:   ListaTransportistas[];
    listaTipoArticulos:    ListaTipoArticulos[];
    listaAtas:             ListaATAs[];
    listaClientes:         ListaClientes[];
    listaDestinos:         ListaDestinos[];
    listaRemitos:          ListaRemitos[];
    listaNacionalidades:   ListaNacionalidades[];
    listaPatentesChasis:   ListaPatentes[];
    listaPatentesAcoplado: ListaPatentes[];
    listaChoferes:         ListaChoferes[];
    listaExportadores:     ListaExportadores[];
}

export interface IngresoFabricaTB {
    group:               any;
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

export interface ListaATAs {
    id:   number;
    ata:  string;
    cuit: string;
}

export interface ListaChoferes {
    id:     number;
    chofer: string;
}

export interface ListaClientes {
    id:      number;
    cliente: string;
}

export interface ListaDestinos {
    id:         number;
    destino:    string;
    codigoAfip: number;
}

export interface ListaExportadores {
    id:         number;
    exportador: string;
}

export interface ListaNacionalidades {
    id:           number;
    nacionalidad: string;
}

export interface ListaPatentes {
    id:            number;
    patente:       string;
    patenteChasis: number;
}

export interface ListaRemitos {
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

export interface ListaTipoArticulos {
    id:           number;
    tipoArticulo: string;
}

export interface ListaTransportistas {
    id:            number;
    transportista: string;
}

export interface RegistroIngreso {
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

