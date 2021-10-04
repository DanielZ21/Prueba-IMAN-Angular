export interface MadCapLogin {
    __Type:          string;
    piSessionStatus: number;
    piLocale:        number;
    psDatabase:      string;
    psPassword:      string;
    psUserName:      string;
}

export interface EnviarPeso {
    pdRunDate:               Date;
    piBranch:                number;
    piDriver:                number;
    piRunNumber:             number;
    piSampleType:            number;
    psOriginalPlayload:      string;
    xrAllWeighbridgeVehicle: XrAllWeighbridgeVehicle;
}

export interface XrAllWeighbridgeVehicle {
    id:                   number;
    psVehicleRego:        string;
    piVehicleGrossWeight: number;
    piVehicleNetWeight:   number;
    piVehicleTareWeight:  number;
}