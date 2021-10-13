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
    }

}