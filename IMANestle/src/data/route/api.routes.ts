//''
import { environment as ENV } from "src/environments/environment"

export const API_ROUTES= {
    AUTH: {
        LOGIN : `${ENV.apiUrl}https://jsonplaceholder.typicode.com/users`,
        REGISTER : `Account/registro`,
        TEST_CONNECTION : `Account/TestConnection`,
       
    },
}