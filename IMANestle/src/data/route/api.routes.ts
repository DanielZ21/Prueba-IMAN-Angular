//''
import { environment as ENV } from "src/environments/environment"

export const API_ROUTES= {
    AUTH: {
        LOGIN : `${ENV.apiUrl}/Negocio/Identity/Login`,
        REGISTER : `/Negocio​/Identity​/Registro`,
        TEST_CONNECTION : `Account/TestConnection` 
    },
}