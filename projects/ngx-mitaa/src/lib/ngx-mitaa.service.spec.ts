import { TestBed } from '@angular/core/testing';
import { continents } from './utils/ngx-mitaa.locations';

import { NgxMitaaService } from './ngx-mitaa.service';

describe('NgxMitaaService', () => {
  let service: NgxMitaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMitaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLocations', () => {
    describe('given valid conditions', () => {
      it('should return all continents', () => {
        expect(service.getContinents()).toEqual(
          continents.map((continent) => continent.continent)
        );
      });

      it('should return all countries in passed continent', () => {
        expect(service.getCountries('Africa')).toEqual(
          continents[0].countries.map((country) => country.country)
        );
      });

      it('should return all regions in passed country', () => {
        expect(service.getRegions('Tanzania', 'Africa')).toEqual(
          continents[0].countries[0].regions.map((region) => region.region)
        );
      });

      it('should return all districts in passed region', () => {
        expect(
          service.getDistricts('Dar es Salaam', 'Tanzania', 'Africa')
        ).toEqual(
          continents[0].countries[0].regions[1].districts.map(
            (district) => district.district
          )
        );
      });

      it('should return all wards in passed district', () => {
        expect(
          service.getWards('Kinondoni', 'Dar es Salaam', 'Tanzania', 'Africa')
        ).toEqual(
          continents[0].countries[0].regions[1].districts[2].wards.map(
            (ward) => ward.ward
          )
        );
      });

      it('should return all streets in passed ward', () => {
        expect(
          service.getStreets(
            'Magomeni',
            'Kinondoni',
            'Dar es Salaam',
            'Tanzania',
            'Africa'
          )
        ).toEqual(
          continents[0].countries[0].regions[1].districts[2].wards[0].streets.map(
            (street) => street
          )
        );
      });
    });

    describe('given invalid conditions', () => {
      it('should return empty array if continent is not found', () => {
        expect(service.getCountries('Tanzania ')).toEqual([]);
      });

      it('should return empty array if country is not found', () => {
        expect(service.getRegions('Mwanza', 'Africa')).toEqual([]);
      });

      it('should return empty array if region is not found', () => {
        expect(service.getDistricts('Kinondoni', 'Tanzania', 'Africa')).toEqual(
          []
        );
      });

      it('should return empty array if district is not found', () => {
        expect(
          service.getWards('Fire', 'Dar es Salaam', 'Tanzania', 'Africa')
        ).toEqual([]);
      });

      it('should return empty array if ward is not found', () => {
        expect(
          service.getStreets(
            'Fire',
            'Ilala Cbd',
            'Dar es Salaam',
            'Tanzania',
            'Africa'
          )
        ).toEqual([]);
      });
    });

    describe('given no conditions', () => {
      it('should return all continents', () => {
        expect(service.getContinents()).toEqual(
          continents.map((continent) => continent.continent)
        );
      });

      it('should return all countries in passed continent', () => {
        expect(service.getCountries()).toBeDefined();
        expect(service.getCountries()).toBeInstanceOf(Array);
      });

      it('should return all regions in passed country', () => {
        expect(service.getRegions()).toBeDefined();
        expect(service.getRegions()).toBeInstanceOf(Array);
      });

      it('should return all districts in passed region', () => {
        expect(service.getDistricts()).toBeDefined();
        expect(service.getDistricts()).toBeInstanceOf(Array);
      });

      it('should return all wards in passed district', () => {
        expect(service.getWards()).toBeDefined();
        expect(service.getWards()).toBeInstanceOf(Array);
      });

      it('should return all streets in passed ward', () => {
        expect(service.getStreets()).toBeDefined();
        expect(service.getStreets()).toBeInstanceOf(Array);
      });
    });
  });
});
