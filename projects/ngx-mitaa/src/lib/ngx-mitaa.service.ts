import { Injectable } from '@angular/core';
import { Continent } from './utils/ngx-mitaa.interfaces';
import { continents } from './utils/ngx-mitaa.locations';

@Injectable({
  providedIn: 'root',
})
export class NgxMitaaService {
  private locations: Continent[] = continents;

  /**
   * Get all locations in the world
   * @returns {Continent[]}
   * @memberof NgxMitaaService
   */
  getLocations(): Continent[] {
    return this.locations;
  }

  /**
   * Get all continents in the world
   * @returns {string[]}
   * @memberof NgxMitaaService
   */
  getContinents(): string[] {
    return this.locations?.map((continent) => continent.continent);
  }

  /**
   * Get all countries in a continent by passing the continent name
   * @param {string} default is Africa
   * @returns {string[]}
   * @memberof NgxMitaaService
   */
  getCountries(continent: string = 'Africa'): string[] {
    return (
      this.locations
        .find(
          (location) =>
            location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase()
        )
        ?.countries.map((country) => country.country) || []
    );
  }

  /**
   * Get all regions in a country by passing the country name and continent name
   * @param country default is Tanzania
   * @param continent default is Africa
   * @returns {string[]}
   */
  getRegions(
    country: string = 'Tanzania',
    continent: string = 'Africa'
  ): string[] {
    return (
      this.locations
        .find(
          (location) =>
            location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase()
        )
        ?.countries.find(
          (location) =>
            location.country.toLocaleLowerCase() === country.toLocaleLowerCase()
        )
        ?.regions.map((region) => region.region) || []
    );
  }

  /**
   * Get all districts in a region by passing the region name, country name and continent name
   * @param region default is Dar es Salaam
   * @param country default is Tanzania
   * @param continent default is Africa
   * @returns {string[]}
   * @memberof NgxMitaaService
   */
  getDistricts(
    region: string = 'Dar es Salaam',
    country: string = 'Tanzania',
    continent: string = 'Africa'
  ): string[] {
    return (
      this.locations
        .find(
          (location) =>
            location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase()
        )
        ?.countries.find(
          (location) =>
            location.country.toLocaleLowerCase() === country.toLocaleLowerCase()
        )
        ?.regions.find(
          (location) =>
            location.region.toLocaleLowerCase() === region.toLocaleLowerCase()
        )
        ?.districts.map((district) => district.district) || []
    );
  }

  /**
   * Get all wards in a district by passing the district name, region name, country name and continent name
   * @param district default is Kinondoni
   * @param region default is Dar es Salaam
   * @param country default is Tanzania
   * @param continent default is Africa
   * @returns {string[]}
   * @memberof NgxMitaaService
   */
  getWards(
    district: string = 'Kinondoni',
    region: string = 'Dar es Salaam',
    country: string = 'Tanzania',
    continent: string = 'Africa'
  ): string[] {
    return (
      this.locations
        .find(
          (location) =>
            location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase()
        )
        ?.countries.find(
          (location) =>
            location.country.toLocaleLowerCase() === country.toLocaleLowerCase()
        )
        ?.regions.find(
          (location) =>
            location.region.toLocaleLowerCase() === region.toLocaleLowerCase()
        )
        ?.districts.find(
          (location) =>
            location.district.toLocaleLowerCase() ===
            district.toLocaleLowerCase()
        )
        ?.wards.map((ward) => ward.ward) || []
    );
  }

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
  getStreets(
    ward: string = 'Magomeni',
    district: string = 'Kinondoni',
    region: string = 'Dar es Salaam',
    country: string = 'Tanzania',
    continent: string = 'Africa'
  ): string[] {
    return (
      this.locations
        .find(
          (location) =>
            location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase()
        )
        ?.countries.find(
          (location) =>
            location.country.toLocaleLowerCase() === country.toLocaleLowerCase()
        )
        ?.regions.find(
          (location) =>
            location.region.toLocaleLowerCase() === region.toLocaleLowerCase()
        )
        ?.districts.find(
          (location) =>
            location.district.toLocaleLowerCase() ===
            district.toLocaleLowerCase()
        )
        ?.wards.find(
          (location) =>
            location.ward.toLocaleLowerCase() === ward.toLocaleLowerCase()
        )
        ?.streets.sort() || []
    );
  }
}
