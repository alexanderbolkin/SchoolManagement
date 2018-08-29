export class School
{
    _id?: String;
    school_name: String;
}

export class Data
{
    _id?: String;
    school_id: number;
    year: String;
    month: String;
    week: String;
    elect_eur: number;
    elect_kwh: number;
    heating_eur: number;
    heating_kwh: number;
    water_eur: number;
    water_litre: number;
}

export class User
{
    _id?: String;
    username: String;
    email: String;
    password: String;
    
}