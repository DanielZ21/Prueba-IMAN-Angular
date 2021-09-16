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
  
    

   ERROR : {
        FORBIDDEN: 'forbidden'
    }

}

export const INTERNAL_PATHS = {
    HOME :`${ROUTES_PATHS.HOME.DEFAULT}`,
    AUTH_DEFAULT : `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN : `${ROUTES_PATHS.AUTH.LOGIN}`,
    AUTH_REGISTER : `${ROUTES_PATHS.AUTH.REGISTER}`,    
}

export const INTERNAL_ROUTES = {
    //HOME
    HOME : INTERNAL_PATHS.HOME,
    //AUTH
    AUTH_LOGIN : `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
    AUTH_REGISTER : `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_REGISTER}`,
}