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
        GET_INGRESO_FABRICA: `${ENV.apiUrl}Negocio/IngresoFabricaTB/GetIngresoFabrica`,
        POST_INGRESO_FABRICA: `${ENV.apiUrl}Negocio/IngresoFabricaTB/PostIngresoFabrica`,
        GET_PESO_ACTUAL: `${ENV.apiUrl}Negocio/IngresoFabricaTB/GetPesoActual`,
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
        GET_ALL_ATAS: `${ENV.apiUrl}Negocio​/Ata​/GetAllAtas`,
        GET_ONE_ATA: `${ENV.apiUrl}Negocio​/Ata​/GetOneATA`,
        POST_ATA: `${ENV.apiUrl}Negocio​/Ata​/PostATA`,
        DELETE_ATA: `${ENV.apiUrl}Negocio​/Ata​/DeleteATA`,
    },

    /* ---------- APIS CHOFERES ------------*/

    CHOFER: {
        GET_ALL_CHOFERES: `${ENV.apiUrl}Negocio​/Chofer​/GetAllChoferes`,
        GET_ONE_CHOFER: `${ENV.apiUrl}Negocio​/Chofer​/GetOneChofer`,
        POST_CHOFER: `${ENV.apiUrl}Negocio​/Chofer​/PostChofer`,
        DELETE_CHOFER: `${ENV.apiUrl}Negocio​/Chofer​/DeleteChofer`
    },

     /* ---------- APIS CLIENTES ------------*/

    CLIENTE: {
        GET_ALL_CLIENTES: `${ENV.apiUrl}Negocio​/Cliente/GetAllCliente`,
        GET_ONE_CLIENTE: `${ENV.apiUrl}Negocio​/Cliente/GetOneCliente`,
        POST_CLIENTE: `${ENV.apiUrl}Negocio​/Cliente/PostCliente`,
        DELETE_CLIENTE: `${ENV.apiUrl}Negocio​/Cliente/DeleteCliente`
    },

    /* ---------- APIS DESTINOS ------------*/

    DESTINO: {
        GET_ALL_DESTINOS: `${ENV.apiUrl}Negocio​/Cliente/GetAllDestinos`,
        GET_ONE_DESTINO: `${ENV.apiUrl}Negocio​/Cliente/GetOneDestino`,
        POST_DESTINO: `${ENV.apiUrl}Negocio​/Cliente/PostDestino`,
        DELETE_DESTINO: `${ENV.apiUrl}Negocio​/Cliente/DeleteDestino`,
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
        GET_ALL_NACIONALIDADES: `${ENV.apiUrl}Negocio​/Cliente/GetAllNacionalidades`,
        GET_ONE_NACIONALIDAD: `${ENV.apiUrl}Negocio​/Cliente/GetOneNacionalidad`,
        POST_NACIONALIDAD: `${ENV.apiUrl}Negocio​/Cliente/PostNacionalidad`,
        DELETE_NACIONALIDAD: `${ENV.apiUrl}Negocio​/Cliente/DeleteNacionalidad`,
    },

    /* ---------- APIS PATENTES ------------*/

    PATENTE: {
        GET_ALL_PATENTES: `${ENV.apiUrl}Negocio​/Cliente/GetAllPatentes`,
        GET_ONE_PATENTE: `${ENV.apiUrl}Negocio​/Cliente/GetOnePatente`,
        POST_PATENTE: `${ENV.apiUrl}Negocio​/Cliente/PostPatente`,
        DELETE_PATENTE: `${ENV.apiUrl}Negocio​/Cliente/DeletePatente`,
    },

    /* ---------- APIS REMITOS ------------*/

    REMITO: {
        GET_ALL_REMITOS: `${ENV.apiUrl}Negocio​/Cliente/GetAllRemitos`,
        GET_ONE_REMITO: `${ENV.apiUrl}Negocio​/Cliente/GetOneRemito`,
        POST_REMITO: `${ENV.apiUrl}Negocio​/Cliente/PostRemito`,
        DELETE_REMITO: `${ENV.apiUrl}Negocio​/Cliente/DeleteRemito`,
    },

    /* ---------- APIS TIPO ARTICULOS ------------*/

    TIPO_ARTICULO: {
        GET_ALL_TIPO_ARTICULOS: `${ENV.apiUrl}Negocio​/Cliente/GetAllTipoArticulos`,
        GET_ONE_TIPO_ARTICULO: `${ENV.apiUrl}Negocio​/Cliente/GetOneTipoArticulo`,
        POST_TIPO_ARTICULO: `${ENV.apiUrl}Negocio​/Cliente/PostTipoArticulo`,
        DELETE_TIPO_ARTICULO: `${ENV.apiUrl}Negocio​/Cliente/DeleteTipoArticulo`,
    },

}