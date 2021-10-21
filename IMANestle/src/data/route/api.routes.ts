//''
import { environment as ENV } from "src/environments/environment"

export const API_ROUTES= {
    AUTH: {
        LOGIN : `${ENV.apiUrl}Negocio/Identity/Login`,
        REGISTER : `${ENV.apiUrl}Negocio/Identity/Registro`,
        TEST_CONNECTION : `${ENV.apiUrl}Account/TestConnection` 
    },

    /* ---------- APIS INGRESOS ------------*/

    INGRESO_FABRICA_TB:{
        GET_INGRESOS: `${ENV.apiUrl}Negocio/IngresoFabricaTB/GetIngresos`,
        GET_NUEVO_INGRESO_FABRICA: `${ENV.apiUrl}Negocio/IngresoFabricaTB/NuevoIngresoFabrica`,
        GET_INGRESO_FABRICA: `${ENV.apiUrl}Negocio/IngresoFabricaTB/GetIngresoFabrica?IdIingreso=`,
        POST_INGRESO_FABRICA: `${ENV.apiUrl}Negocio/IngresoFabricaTB/PostIngresoFabrica`,
        GET_PESO_ACTUAL: `${ENV.apiUrl}Negocio/IngresoFabricaTB/GetPesoActual?idBalanza=`,
    },             
    

    /* ---------- APIS MADCAP ------------ */

    MADCAP: {
        GET_PRUEBA: `${ENV.apiUrl}Negocio/MadCap/prueba`,
        POST_LOGIN: `${ENV.apiUrl}Negocio/MadCap/login`,
        POST_ENVIAR_PESO: `${ENV.apiUrl}Negocio/MadCap/enviarPeso`,
    },

    /* ---------- APIS TRANSPORTISTAS ------------ */

    TRANSPORTISTA: {
        GET_ALL_TRANSPORTISTAS: `${ENV.apiUrl}Negocio​/Transportistas​/GetAllTransportistas`,
        GET_ONE_TRANSPORTISTA: `${ENV.apiUrl}Negocio​/Transportistas​/GetOneTransportista`,
        POST_TRANSPORTISTA: `${ENV.apiUrl}Negocio​/Transportistas​/PostTransportista`,
        DELETE_TRANSPORTISTA: `${ENV.apiUrl}Negocio​/Transportistas​/DeleteTransportista`
    },

    /* ---------- APIS ATAS ------------*/

    ATA: {
        GET_ALL_ATAS: `${ENV.apiUrl}Negocio/Ata/GetAllAtas`,
        GET_ONE_ATA: `${ENV.apiUrl}Negocio/Ata/GetOneATA?ATAId=`,
        POST_ATA: `${ENV.apiUrl}Negocio/Ata/PostATA`,
        DELETE_ATA: `${ENV.apiUrl}Negocio/Ata/DeleteATA?ATAId=`,
    },

    /* ---------- APIS CHOFERES ------------*/

    CHOFER: {
        GET_ALL_CHOFERES: `${ENV.apiUrl}Negocio/Chofer/GetAllChoferes`,
        GET_ONE_CHOFER: `${ENV.apiUrl}Negocio​/Chofer​/GetOneChofer`,
        POST_CHOFER: `${ENV.apiUrl}Negocio/Chofer/PostChofer`,
        DELETE_CHOFER: `${ENV.apiUrl}Negocio/Chofer/DeleteChofer?ChoferId=1`
    },

     /* ---------- APIS CLIENTES ------------*/

    CLIENTE: {
        GET_ALL_CLIENTES: `${ENV.apiUrl}Negocio/Cliente/GetAllCliente`,
        GET_ONE_CLIENTE: `${ENV.apiUrl}Negocio​/Cliente/GetOneCliente`,
        POST_CLIENTE: `${ENV.apiUrl}Negocio​/Cliente/PostCliente`,
        DELETE_CLIENTE: `${ENV.apiUrl}Negocio/Cliente/DeleteCliente?ClienteId=`
    },

    /* ---------- APIS DESTINOS ------------*/

    DESTINO: {
        GET_ALL_DESTINOS: `${ENV.apiUrl}Negocio/Destino/GetAllDestinos`,
        GET_ONE_DESTINO: `${ENV.apiUrl}Negocio​/Destino/GetOneDestino`,
        POST_DESTINO: `${ENV.apiUrl}Negocio/Destino/PostDestino`,
        DELETE_DESTINO: `${ENV.apiUrl}Negocio/Destino/DeleteDestino?DestinoId=`,
    },

    /* ---------- APIS EXPORTADORES ------------*/

    EXPORTADOR: {
        GET_ALL_EXPORTADORES: `${ENV.apiUrl}Negocio​/Cliente/GetAllExportadores`,
        GET_ONE_EXPORTADOR: `${ENV.apiUrl}Negocio​/Cliente/GetOneExportador`,
        POST_EXPORTADOR: `${ENV.apiUrl}Negocio​/Cliente/PostExportador`,
        DELETE_EXPORTADOR: `${ENV.apiUrl}Negocio​/Cliente/DeleteExportador`,
    },

    /* ---------- APIS NACIONALIDADES ------------*/

    NACIONALIDAD: {
        GET_ALL_NACIONALIDADES: `${ENV.apiUrl}Negocio​/Nacionalidad/GetAllNacionalidades`,
        GET_ONE_NACIONALIDAD: `${ENV.apiUrl}Negocio​/Nacionalidad/GetOneNacionalidad`,
        POST_NACIONALIDAD: `${ENV.apiUrl}Negocio/Nacionalidad/PostNacionaliadad`,
        DELETE_NACIONALIDAD: `${ENV.apiUrl}Negocio​/Nacionalidad/DeleteNacionalidad`,
    },

    /* ---------- APIS PATENTES ------------*/

    PATENTE: {
        GET_ALL_PATENTES: `${ENV.apiUrl}Negocio​/Patente/GetAllPatentes`,
        GET_ONE_PATENTE: `${ENV.apiUrl}Negocio​/Patente/GetOnePatente`,
        POST_PATENTE: `${ENV.apiUrl}Negocio/Patente/PostPatentes`,
        DELETE_PATENTE: `${ENV.apiUrl}Negocio​/Patentee/DeletePatente`,
    },

    /* ---------- APIS REMITOS ------------*/

    REMITO: {
        GET_ALL_REMITOS: `${ENV.apiUrl}Negocio​/Remito/GetAllRemitos`,
        GET_ONE_REMITO: `${ENV.apiUrl}Negocio​/Remito/GetOneRemito`,
        POST_REMITO: `${ENV.apiUrl}Negocio​/Remito/PostRemito`,
        DELETE_REMITO: `${ENV.apiUrl}Negocio​/Remito/DeleteRemito`,
    },

    /* ---------- APIS TIPO ARTICULOS ------------*/

    TIPO_ARTICULO: {
        GET_ALL_TIPO_ARTICULOS: `${ENV.apiUrl}Negocio/TipoArticulo/GetAllTipoArticulos`,
        GET_ONE_TIPO_ARTICULO: `${ENV.apiUrl}Negocio​/TipoArticulo/GetOneTipoArticulo`,
        POST_TIPO_ARTICULO: `${ENV.apiUrl}Negocio/TipoArticulo/PostTipoArticulo`,
        DELETE_TIPO_ARTICULO: `${ENV.apiUrl}Negocio/TipoArticulo/DeleteTipoArticulo?TipoArticuloId=`,
    },

}