export interface Registro {
    userName:   string;
    password:   string;
    nombre:     string;
    idSucursal: number;
    rol:        string;
    habilitado: number;
    email:      string;
}

export interface Login {
    userName: string;
    password: string;
}