import { Injectable } from '@angular/core';
import { continents } from './utils/ngx-mitaa.locations';
import * as i0 from "@angular/core";
export class NgxMitaaService {
    constructor() {
        this.locations = continents;
    }
    /**
     * Get all locations in the world
     * @returns {Continent[]}
     * @memberof NgxMitaaService
     */
    getLocations() {
        return this.locations;
    }
    /**
     * Get all continents in the world
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getContinents() {
        return this.locations?.map((continent) => continent.continent);
    }
    /**
     * Get all countries in a continent by passing the continent name
     * @param {string} default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getCountries(continent = 'Africa') {
        return (this.locations
            .find((location) => location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase())
            ?.countries.map((country) => country.country) || []);
    }
    /**
     * Get all regions in a country by passing the country name and continent name
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     */
    getRegions(country = 'Tanzania', continent = 'Africa') {
        return (this.locations
            .find((location) => location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase())
            ?.countries.find((location) => location.country.toLocaleLowerCase() === country.toLocaleLowerCase())
            ?.regions.map((region) => region.region) || []);
    }
    /**
     * Get all districts in a region by passing the region name, country name and continent name
     * @param region default is Dar es Salaam
     * @param country default is Tanzania
     * @param continent default is Africa
     * @returns {string[]}
     * @memberof NgxMitaaService
     */
    getDistricts(region = 'Dar es Salaam', country = 'Tanzania', continent = 'Africa') {
        return (this.locations
            .find((location) => location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase())
            ?.countries.find((location) => location.country.toLocaleLowerCase() === country.toLocaleLowerCase())
            ?.regions.find((location) => location.region.toLocaleLowerCase() === region.toLocaleLowerCase())
            ?.districts.map((district) => district.district) || []);
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
    getWards(district = 'Kinondoni', region = 'Dar es Salaam', country = 'Tanzania', continent = 'Africa') {
        return (this.locations
            .find((location) => location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase())
            ?.countries.find((location) => location.country.toLocaleLowerCase() === country.toLocaleLowerCase())
            ?.regions.find((location) => location.region.toLocaleLowerCase() === region.toLocaleLowerCase())
            ?.districts.find((location) => location.district.toLocaleLowerCase() ===
            district.toLocaleLowerCase())
            ?.wards.map((ward) => ward.ward) || []);
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
    getStreets(ward = 'Magomeni', district = 'Kinondoni', region = 'Dar es Salaam', country = 'Tanzania', continent = 'Africa') {
        return (this.locations
            .find((location) => location.continent.toLocaleLowerCase() ===
            continent.toLocaleLowerCase())
            ?.countries.find((location) => location.country.toLocaleLowerCase() === country.toLocaleLowerCase())
            ?.regions.find((location) => location.region.toLocaleLowerCase() === region.toLocaleLowerCase())
            ?.districts.find((location) => location.district.toLocaleLowerCase() ===
            district.toLocaleLowerCase())
            ?.wards.find((location) => location.ward.toLocaleLowerCase() === ward.toLocaleLowerCase())
            ?.streets.sort() || []);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: NgxMitaaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: NgxMitaaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: NgxMitaaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pdGFhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWl0YWEvc3JjL2xpYi9uZ3gtbWl0YWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLGVBQWU7SUFINUI7UUFJVSxjQUFTLEdBQWdCLFVBQVUsQ0FBQztLQWtMN0M7SUFoTEM7Ozs7T0FJRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxZQUFvQixRQUFRO1FBQ3ZDLE9BQU8sQ0FDTCxJQUFJLENBQUMsU0FBUzthQUNYLElBQUksQ0FDSCxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ1gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FDaEM7WUFDRCxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQ3RELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxVQUFVLENBQ1IsVUFBa0IsVUFBVSxFQUM1QixZQUFvQixRQUFRO1FBRTVCLE9BQU8sQ0FDTCxJQUFJLENBQUMsU0FBUzthQUNYLElBQUksQ0FDSCxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ1gs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RCxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQ2QsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNYLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FDdkU7WUFDRCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQ1osQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNYLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FDckU7WUFDRCxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQ2QsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNYLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDckMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQy9CO1lBQ0QsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUNWLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDWCxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQ2pFO1lBQ0QsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUN6QixDQUFDO0lBQ0osQ0FBQzs4R0FsTFUsZUFBZTtrSEFBZixlQUFlLGNBRmQsTUFBTTs7MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250aW5lbnQgfSBmcm9tICcuL3V0aWxzL25neC1taXRhYS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IGNvbnRpbmVudHMgfSBmcm9tICcuL3V0aWxzL25neC1taXRhYS5sb2NhdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWl0YWFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2NhdGlvbnM6IENvbnRpbmVudFtdID0gY29udGluZW50cztcblxuICAvKipcbiAgICogR2V0IGFsbCBsb2NhdGlvbnMgaW4gdGhlIHdvcmxkXG4gICAqIEByZXR1cm5zIHtDb250aW5lbnRbXX1cbiAgICogQG1lbWJlcm9mIE5neE1pdGFhU2VydmljZVxuICAgKi9cbiAgZ2V0TG9jYXRpb25zKCk6IENvbnRpbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjb250aW5lbnRzIGluIHRoZSB3b3JsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqIEBtZW1iZXJvZiBOZ3hNaXRhYVNlcnZpY2VcbiAgICovXG4gIGdldENvbnRpbmVudHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9ucz8ubWFwKChjb250aW5lbnQpID0+IGNvbnRpbmVudC5jb250aW5lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgY291bnRyaWVzIGluIGEgY29udGluZW50IGJ5IHBhc3NpbmcgdGhlIGNvbnRpbmVudCBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0IGlzIEFmcmljYVxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqIEBtZW1iZXJvZiBOZ3hNaXRhYVNlcnZpY2VcbiAgICovXG4gIGdldENvdW50cmllcyhjb250aW5lbnQ6IHN0cmluZyA9ICdBZnJpY2EnKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2F0aW9uc1xuICAgICAgICAuZmluZChcbiAgICAgICAgICAobG9jYXRpb24pID0+XG4gICAgICAgICAgICBsb2NhdGlvbi5jb250aW5lbnQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgIGNvbnRpbmVudC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgPy5jb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiBjb3VudHJ5LmNvdW50cnkpIHx8IFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHJlZ2lvbnMgaW4gYSBjb3VudHJ5IGJ5IHBhc3NpbmcgdGhlIGNvdW50cnkgbmFtZSBhbmQgY29udGluZW50IG5hbWVcbiAgICogQHBhcmFtIGNvdW50cnkgZGVmYXVsdCBpcyBUYW56YW5pYVxuICAgKiBAcGFyYW0gY29udGluZW50IGRlZmF1bHQgaXMgQWZyaWNhXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGdldFJlZ2lvbnMoXG4gICAgY291bnRyeTogc3RyaW5nID0gJ1RhbnphbmlhJyxcbiAgICBjb250aW5lbnQ6IHN0cmluZyA9ICdBZnJpY2EnXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhdGlvbnNcbiAgICAgICAgLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24uY29udGluZW50LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICBjb250aW5lbnQudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgID8uY291bnRyaWVzLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24uY291bnRyeS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBjb3VudHJ5LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LnJlZ2lvbnMubWFwKChyZWdpb24pID0+IHJlZ2lvbi5yZWdpb24pIHx8IFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGRpc3RyaWN0cyBpbiBhIHJlZ2lvbiBieSBwYXNzaW5nIHRoZSByZWdpb24gbmFtZSwgY291bnRyeSBuYW1lIGFuZCBjb250aW5lbnQgbmFtZVxuICAgKiBAcGFyYW0gcmVnaW9uIGRlZmF1bHQgaXMgRGFyIGVzIFNhbGFhbVxuICAgKiBAcGFyYW0gY291bnRyeSBkZWZhdWx0IGlzIFRhbnphbmlhXG4gICAqIEBwYXJhbSBjb250aW5lbnQgZGVmYXVsdCBpcyBBZnJpY2FcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKiBAbWVtYmVyb2YgTmd4TWl0YWFTZXJ2aWNlXG4gICAqL1xuICBnZXREaXN0cmljdHMoXG4gICAgcmVnaW9uOiBzdHJpbmcgPSAnRGFyIGVzIFNhbGFhbScsXG4gICAgY291bnRyeTogc3RyaW5nID0gJ1RhbnphbmlhJyxcbiAgICBjb250aW5lbnQ6IHN0cmluZyA9ICdBZnJpY2EnXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhdGlvbnNcbiAgICAgICAgLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24uY29udGluZW50LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICBjb250aW5lbnQudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgID8uY291bnRyaWVzLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24uY291bnRyeS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBjb3VudHJ5LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LnJlZ2lvbnMuZmluZChcbiAgICAgICAgICAobG9jYXRpb24pID0+XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWdpb24udG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcmVnaW9uLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LmRpc3RyaWN0cy5tYXAoKGRpc3RyaWN0KSA9PiBkaXN0cmljdC5kaXN0cmljdCkgfHwgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgd2FyZHMgaW4gYSBkaXN0cmljdCBieSBwYXNzaW5nIHRoZSBkaXN0cmljdCBuYW1lLCByZWdpb24gbmFtZSwgY291bnRyeSBuYW1lIGFuZCBjb250aW5lbnQgbmFtZVxuICAgKiBAcGFyYW0gZGlzdHJpY3QgZGVmYXVsdCBpcyBLaW5vbmRvbmlcbiAgICogQHBhcmFtIHJlZ2lvbiBkZWZhdWx0IGlzIERhciBlcyBTYWxhYW1cbiAgICogQHBhcmFtIGNvdW50cnkgZGVmYXVsdCBpcyBUYW56YW5pYVxuICAgKiBAcGFyYW0gY29udGluZW50IGRlZmF1bHQgaXMgQWZyaWNhXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICogQG1lbWJlcm9mIE5neE1pdGFhU2VydmljZVxuICAgKi9cbiAgZ2V0V2FyZHMoXG4gICAgZGlzdHJpY3Q6IHN0cmluZyA9ICdLaW5vbmRvbmknLFxuICAgIHJlZ2lvbjogc3RyaW5nID0gJ0RhciBlcyBTYWxhYW0nLFxuICAgIGNvdW50cnk6IHN0cmluZyA9ICdUYW56YW5pYScsXG4gICAgY29udGluZW50OiBzdHJpbmcgPSAnQWZyaWNhJ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYXRpb25zXG4gICAgICAgIC5maW5kKFxuICAgICAgICAgIChsb2NhdGlvbikgPT5cbiAgICAgICAgICAgIGxvY2F0aW9uLmNvbnRpbmVudC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgY29udGluZW50LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LmNvdW50cmllcy5maW5kKFxuICAgICAgICAgIChsb2NhdGlvbikgPT5cbiAgICAgICAgICAgIGxvY2F0aW9uLmNvdW50cnkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY291bnRyeS50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgPy5yZWdpb25zLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24ucmVnaW9uLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHJlZ2lvbi50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgPy5kaXN0cmljdHMuZmluZChcbiAgICAgICAgICAobG9jYXRpb24pID0+XG4gICAgICAgICAgICBsb2NhdGlvbi5kaXN0cmljdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgZGlzdHJpY3QudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgID8ud2FyZHMubWFwKCh3YXJkKSA9PiB3YXJkLndhcmQpIHx8IFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHN0cmVldHMgaW4gYSB3YXJkIGJ5IHBhc3NpbmcgdGhlIHdhcmQgbmFtZSwgZGlzdHJpY3QgbmFtZSwgcmVnaW9uIG5hbWUsIGNvdW50cnkgbmFtZSBhbmQgY29udGluZW50IG5hbWVcbiAgICogQHBhcmFtIHdhcmQgZGVmYXVsdCBpcyBNYWdvbWVuaVxuICAgKiBAcGFyYW0gZGlzdHJpY3QgZGVmYXVsdCBpcyBLaW5vbmRvbmlcbiAgICogQHBhcmFtIHJlZ2lvbiBkZWZhdWx0IGlzIERhciBlcyBTYWxhYW1cbiAgICogQHBhcmFtIGNvdW50cnkgZGVmYXVsdCBpcyBUYW56YW5pYVxuICAgKiBAcGFyYW0gY29udGluZW50IGRlZmF1bHQgaXMgQWZyaWNhXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICogQG1lbWJlcm9mIE5neE1pdGFhU2VydmljZVxuICAgKi9cbiAgZ2V0U3RyZWV0cyhcbiAgICB3YXJkOiBzdHJpbmcgPSAnTWFnb21lbmknLFxuICAgIGRpc3RyaWN0OiBzdHJpbmcgPSAnS2lub25kb25pJyxcbiAgICByZWdpb246IHN0cmluZyA9ICdEYXIgZXMgU2FsYWFtJyxcbiAgICBjb3VudHJ5OiBzdHJpbmcgPSAnVGFuemFuaWEnLFxuICAgIGNvbnRpbmVudDogc3RyaW5nID0gJ0FmcmljYSdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2F0aW9uc1xuICAgICAgICAuZmluZChcbiAgICAgICAgICAobG9jYXRpb24pID0+XG4gICAgICAgICAgICBsb2NhdGlvbi5jb250aW5lbnQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgIGNvbnRpbmVudC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgPy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAobG9jYXRpb24pID0+XG4gICAgICAgICAgICBsb2NhdGlvbi5jb3VudHJ5LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGNvdW50cnkudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgID8ucmVnaW9ucy5maW5kKFxuICAgICAgICAgIChsb2NhdGlvbikgPT5cbiAgICAgICAgICAgIGxvY2F0aW9uLnJlZ2lvbi50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSByZWdpb24udG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgID8uZGlzdHJpY3RzLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24uZGlzdHJpY3QudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgIGRpc3RyaWN0LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LndhcmRzLmZpbmQoXG4gICAgICAgICAgKGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgbG9jYXRpb24ud2FyZC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSB3YXJkLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICA/LnN0cmVldHMuc29ydCgpIHx8IFtdXG4gICAgKTtcbiAgfVxufVxuIl19