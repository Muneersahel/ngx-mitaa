import { africa } from './locations/africa/africa';
import { tanzania } from './locations/africa/tanzania/tanzania';
import { Continent } from './ngx-mitaa.interfaces';

export const continents: Continent[] = [
  africa,
  {
    continent: 'Asia',
    countries: [],
  },

  {
    continent: 'Europe',
    countries: [],
  },

  {
    continent: 'North America',
    countries: [],
  },

  {
    continent: 'South America',
    countries: [],
  },

  {
    continent: 'Australia',
    countries: [],
  },

  {
    continent: 'Antarctica',
    countries: [],
  },
];
