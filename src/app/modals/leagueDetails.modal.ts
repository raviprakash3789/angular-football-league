export interface ILeagueDetails {
    rank: number;
    team: {
    id: number;
    name: string;
    logo: string
    };
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
     for: number
     against: number
    }
    };
    home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
    for: number;
    against: number
    }};
    away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
    for: number;
    against: number;
    }
    };
    update:string;
}[];


export interface ITeamDetails {
    teamId:number;
    leagueId:number;
    season:number;
};

export interface ILeagueResponse {
    league:{
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings:ILeagueDetails[]
    }
}

export interface ILeagueDetailsResponse{
    response:ILeagueResponse[];
    errors:Record<string,string>;
}
