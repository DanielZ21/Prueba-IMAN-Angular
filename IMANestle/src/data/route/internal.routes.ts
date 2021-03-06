export const ROUTES_PATHS =
{
    AUTH :{
        DEFAULT: 'auth',
        LOGIN: 'login',
        REGISTER: 'register'
    },
    HOME : {
        DEFAULT : ''
    },
    PORTERIANESTLE:{
        DEFAULT: 'porterianestle',
        PORTERIA: 'porteria',
        PORTERIA_VILLA_NUEVA: 'porteria-villa-nueva',
        INGRESO_EGRESO: 'ingreso-egreso'

    },
    

   ERROR : {
        FORBIDDEN: 'forbidden'
    }

}

export const INTERNAL_PATHS = {
    HOME :`${ROUTES_PATHS.HOME.DEFAULT}`,
    AUTH_DEFAULT : `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN : `${ROUTES_PATHS.AUTH.LOGIN}`,
    AUTH_REGISTER : `${ROUTES_PATHS.AUTH.REGISTER}`,    
    //PORTERÍANESTLE
    PORTERIANESTLE_DEFAULT: `${ROUTES_PATHS.PORTERIANESTLE.DEFAULT}`,
    PORTERIANESTLE_PORTERIA: `${ROUTES_PATHS.PORTERIANESTLE.PORTERIA}`,
    PORTERIANESTLE_PORTERIA_VILLA_NUEVA: `${ROUTES_PATHS.PORTERIANESTLE.PORTERIA_VILLA_NUEVA}`,
    PORTERIANESTLE_INGRESO_EGRESO: `${ROUTES_PATHS.PORTERIANESTLE.INGRESO_EGRESO}`
}

export const INTERNAL_ROUTES = {
    //HOME
    HOME : INTERNAL_PATHS.HOME,
    //AUTH
    AUTH_LOGIN : `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
    AUTH_REGISTER : `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_REGISTER}`,
    //PORTERÍANESTLE

    PORTERIANESTLE_PORTERIA: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.PORTERIANESTLE_PORTERIA}`,
    PORTERIANESTLE_PORTERIA_VILLA_NUEVA: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.PORTERIANESTLE_PORTERIA_VILLA_NUEVA}`,
    PORTERIANESTLE_INGRESO_EGRESO: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.PORTERIANESTLE_INGRESO_EGRESO}`,
}