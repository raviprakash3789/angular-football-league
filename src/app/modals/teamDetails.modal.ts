export interface teamDetails {
    teams:{
        home:{
            name:string;
            logo:string;
        };
        away:{
            name:string;
            logo:string;
        };
    };
    goals:{
        home:number;
        away:number;
    }
}

export interface teamDetailsResponse {
    response:teamDetails[];
    errors:Record<string, string>;
}