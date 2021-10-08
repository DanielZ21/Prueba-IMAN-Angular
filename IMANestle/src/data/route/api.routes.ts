//''
import { environment as ENV } from "src/environments/environment"

export const API_ROUTES= {
    AUTH: {
        LOGIN : `${ENV.apiUrl}Negocio/Identity/Login`,
        REGISTER : `${ENV.apiUrl}Negocio/Identity/Registro`,
        TEST_CONNECTION : `${ENV.apiUrl}Account/TestConnection` 
    },

    /* ---------- APIS INGRESOS ------------ Negocio/IngresoFabricaTB/GetPesoActual*/

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
        GET_TRANSPORTISTAS: `${ENV.apiUrl}Negocio​/Transportistas​/GetAllTransportistas`,
    }

}