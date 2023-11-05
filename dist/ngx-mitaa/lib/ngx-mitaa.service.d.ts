import { Continent } from './utils/ngx-mitaa.interfaces';
import * as i0 from "@angular/core";
export declare class NgxMitaaService {
    private locations;
    /**
     * Get all locations in the world
     * @returns {Continent[]}
     * @memberof NgxMitaaService
     */
    getLocations(): Continent[];
    /**
     * Get all continents in the world
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getContinents(): string[];
    /**
     * Get all countries in a continent by passing the continent name
     * @param {string} default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getCountries(continent?: string): string[];
    /**
     * Get all regions in a country by passing the country name and continent name
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     */
    getRegions(country?: string, continent?: string): string[];
    /**
     * Get all districts in a region by passing the region name, country name and continent name
     * @param region default is Dar es Salaam
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getDistricts(region?: string, country?: string, continent?: string): string[];
    /**
     * Get all wards in a district by passing the district name, region name, country name and continent name
     * @param district default is Kinondoni
     * @param region default is Dar es Salaam
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getWards(district?: string, region?: string, country?: string, continent?: string): string[];
    /**
     * Get all streets in a ward by passing the ward name, district name, region name, country name and continent name
     * @param ward default is Magomeni
     * @param district default is Kinondoni
     * @param region default is Dar es Salaam
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getStreets(ward?: string, district?: string, region?: string, country?: string, continent?: string): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMitaaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxMitaaService>;
}
