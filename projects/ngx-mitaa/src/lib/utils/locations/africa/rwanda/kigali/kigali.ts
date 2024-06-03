import { Region } from '../../../../ngx-mitaa.interfaces';

export const kigali: Region = {
  region: 'Kigali',
  districts: [
    {
      district: 'Gasabo',
      wards: [
        {
          ward: 'Remera',
          streets: [
            'Kimironko',
            'Gishushu',
            'Giporoso',
            'Kisimenti',
          ],
        },
        {
          ward: 'Kimironko',
          streets: [
            'Nyarutarama',
            'Bibare',
            'Nyagatovu',
          ],
        },
        {
          ward: 'Gisozi',
          streets: [
            'Kagugu',
            'Murama',
            'Musezero',
          ],
        },
        // more wards here please
      ],
    },
    {
      district: 'Kicukiro',
      wards: [
        {
          ward: 'Kanombe',
          streets: [
            'Busanza',
            'Kabeza',
            'Rubirizi',
          ],
        },
        {
          ward: 'Kigarama',
          streets: [
            'Kagarama',
            'Gatenga',
            'Gikondo',
          ],
        },
        {
          ward: 'Nyarugunga',
          streets: [
            'Rwezamenyo',
            'Nyanza',
            'Kicukiro Centre',
          ],
        },
        // more wards put them here
      ],
    },
    {
      district: 'Nyarugenge',
      wards: [
        {
          ward: 'Nyamirambo',
          streets: [
            'Rwampara',
            'Mumena',
            'Biryogo',
          ],
        },
        {
          ward: 'Kigali',
          streets: [
            'Nyabugogo',
            'Muhima',
            'Gitega',
          ],
        },
        {
          ward: 'Kimisagara',
          streets: [
            'Kiyovu',
            'Kimisagara',
            'Agatare',
          ],
        },
        // more wards please
      ],
    },
  ],
};
