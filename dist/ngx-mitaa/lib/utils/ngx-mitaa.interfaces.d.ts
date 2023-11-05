export interface Continent {
    continent: string;
    countries: Country[];
}
export interface Country {
    country: string;
    regions: Region[];
}
export interface Region {
    region: string;
    districts: District[];
}
export interface District {
    district: string;
    wards: Ward[];
}
export interface Ward {
    ward: string;
    streets: string[];
}
