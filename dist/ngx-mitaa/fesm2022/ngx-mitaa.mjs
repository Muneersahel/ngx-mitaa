import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

const arusha = {
    region: 'Arusha',
    districts: [
        {
            district: 'Arusha Cbd',
            wards: [
                {
                    ward: 'Sekei',
                    streets: [
                        'Sanawari',
                        'Naurei',
                        'Mtaa Wa Aicc',
                        'Mtaa Wa Mahakamani',
                        'Naura',
                        'Goliondoi',
                    ],
                },
                {
                    ward: 'Kati',
                    streets: ['Bondeni', 'Pangani'],
                },
                {
                    ward: 'Kaloleni',
                    streets: ['Kaloleni Magharibi', 'Mita 200', 'Kaloleni Mashariki'],
                },
                {
                    ward: 'Levolosi',
                    streets: ['Mtaa Wa Levolosi', 'Majengo'],
                },
                {
                    ward: 'Ngarenaro',
                    streets: ['Kambi Ya Fisi', 'Darajani', 'Nhc', 'Tca', 'Mita 200'],
                },
                {
                    ward: 'Elerai',
                    streets: [
                        'Kware',
                        'Burka',
                        'Azimio',
                        'Shamsi',
                        'Samanga',
                        'Sacon',
                        'Remtula',
                        'Mama Musa',
                        'Ngurumo',
                        'Urundini',
                        'Shuma',
                        'Majengo “a”',
                        'Majengo “b”',
                    ],
                },
                {
                    ward: 'Unga Limited',
                    streets: [
                        'Esso',
                        'Viwandani',
                        'Makaburi Ya Baniani',
                        'Tindiga',
                        'Darajani',
                        'Osterbay',
                    ],
                },
                {
                    ward: 'Daraja Ii',
                    streets: [
                        'Jamhuri',
                        'Alinyanya',
                        'Sanare',
                        'Ndarvoi',
                        'Darajani',
                        'Kati',
                    ],
                },
                {
                    ward: 'Themi',
                    streets: [
                        'Themi Mashariki',
                        'Old Police',
                        'Corridor Area',
                        'Aicc Flats',
                        'Kambarage',
                    ],
                },
                {
                    ward: 'Kimandolu',
                    streets: [
                        'Kitiangare',
                        'Tindigani',
                        'Kijenge Kaskazini',
                        'Kijenge Kusini',
                    ],
                },
                {
                    ward: 'Olorieni',
                    streets: ['Suye', 'Meirioti', 'Mwanama', 'Mbeshere', 'Moivoi', 'Rc'],
                },
                {
                    ward: 'Baraa',
                    streets: [
                        'Kwa Mrefu',
                        'Sorenyi',
                        'Kiroshi',
                        'Ofisini',
                        'Kambi Ya Chupa',
                        'Mferejini',
                        'Siara',
                        'Elkirouwa',
                    ],
                },
                {
                    ward: 'Lemara',
                    streets: [
                        'Ilkirouwa',
                        'Olepholos',
                        'Korongoni',
                        'Kikwakwaru ‘a’',
                        'Kikwakwaru‘b’',
                        'Lemara Kati',
                        'Sunflag',
                    ],
                },
                {
                    ward: 'Engutoto',
                    streets: [
                        'Block C1',
                        'Block C2',
                        'Block D',
                        'Block F',
                        'Block H',
                        'Block J',
                    ],
                },
                {
                    ward: 'Sokon 1',
                    streets: ['Lolovono'],
                },
                {
                    ward: 'Sokon 2',
                    streets: ['Longdong'],
                },
                {
                    ward: 'Sokon 3',
                    streets: ['Murriet'],
                },
                {
                    ward: 'Sokon 4',
                    streets: ['Kanisani'],
                },
                {
                    ward: 'Sokon 5',
                    streets: ['Sainevuno'],
                },
                {
                    ward: 'Sokon 6',
                    streets: ['Madukani'],
                },
                {
                    ward: 'Sombetini',
                    streets: ['Simanjiro', 'Banda Mbili', 'Kirika ‘a’', 'Olamurraki'],
                },
                {
                    ward: 'Terrat',
                    streets: [
                        'Laitayok',
                        "Imitong'wa",
                        'Maskiria',
                        'Bondeni Kati',
                        'Olepolosi',
                        'Erangau',
                        'Olkungu',
                        'Engavunet',
                    ],
                },
                {
                    ward: 'Moshono',
                    streets: [
                        'Nanja',
                        'Moshono Kati',
                        'Engosowash',
                        'T.packers',
                        'Olkereyan Kati',
                        'Laizer',
                        'Losirwaylaizer',
                        'Mtoni',
                        'Kalimaji',
                    ],
                },
                {
                    ward: 'Olasiti',
                    streets: [
                        'Kimindorosi',
                        'Olasiti Centre',
                        'Oloresho',
                        'Olkereyan',
                        'Burka',
                        'Olteves',
                    ],
                },
                {
                    ward: 'Moivaro',
                    streets: [
                        'Edanyoemasi',
                        'Moivaro Kati',
                        'Shangarao',
                        'Ngurumaus',
                        'Sekei',
                        'Moshono Kaskazini',
                    ],
                },
                {
                    ward: 'Sinoni',
                    streets: [
                        'Makao Mapya',
                        'Olevolos',
                        'Olomokeya',
                        'Oljanvutian',
                        'Mlimani',
                        'Migungani',
                        'Engosengiu',
                    ],
                },
                {
                    ward: 'Muriet',
                    streets: [
                        'Bondeni',
                        'Kati',
                        'Mashariki',
                        'Murieti',
                        'Mlimani',
                        'Msasani',
                        'Ffu',
                        'Eluanyi',
                        'Nadosoito Kusini',
                        'Ngorienito',
                        'Oldonyokumur',
                        'Embararwai',
                        'Kati',
                    ],
                },
                {
                    ward: 'Osunyai Jr',
                    streets: ['Osunyai', 'Ngusero', "Kirika 'b'", 'Jr'],
                },
                {
                    ward: 'Sakina',
                    streets: [
                        'Olmatejoo “a”',
                        'Navarana',
                        'Giriki',
                        'Olmatejo “b”',
                        'Mairiva',
                        'Sakina',
                        'Melamari',
                    ],
                },
                {
                    ward: 'Olmoti',
                    streets: [
                        'Olmoti',
                        'Ngaramtoni Ya Chini',
                        'Mlimani',
                        'Mirongoine',
                        'Nafco',
                    ],
                },
            ],
        },
        {
            district: 'Arusha',
            wards: [
                {
                    ward: 'Olturumet',
                    streets: ['Nafco', 'Nafco', 'Nafco'],
                },
                {
                    ward: 'Mwandet',
                    streets: [
                        'Imbibia',
                        'Imbibia',
                        'Imbibia',
                        'Losikito',
                        'Losikito',
                        'Losikito',
                        'Losikito',
                        'Engalaoni',
                        'Engalaoni',
                        'Engalaoni',
                        'Engurtoto',
                        'Engurtoto',
                        'Engurtoto',
                        'Engurtoto',
                    ],
                },
                {
                    ward: 'Olkokola',
                    streets: [
                        'Olkejulenderit',
                        'Olkejulenderit',
                        'Olkejulenderit',
                        'Ilkurot',
                        'Ilkurot',
                        'Lengijave',
                        'Lengijave',
                        'Lengijave',
                        'Lengijave',
                    ],
                },
                {
                    ward: 'Oldonyosambu',
                    streets: [
                        'Oldonyosambu',
                        'Oldonyosambu',
                        'Oldonyosambu',
                        "Lemong'o",
                        "Lemong'o",
                        "Lemong'o",
                        'Lemanda',
                        'Lemanda',
                        'Lemanda',
                    ],
                },
                {
                    ward: 'Musa',
                    streets: [
                        'Oloitushula',
                        'Oloitushula',
                        'Oloitushula',
                        "Nengung'u",
                        "Nengung'u",
                        'Olchorovus',
                        'Olchorovus',
                        'Olchorovus',
                        'Likamba',
                        'Likamba',
                        'Likamba',
                        'Likamba',
                        'Likamba',
                    ],
                },
                {
                    ward: 'Kisongo',
                    streets: [
                        'Engorora',
                        'Engorora',
                        'Engorora',
                        'Ilkerin',
                        'Ilkerin',
                        'Ilkerin',
                        'Lesiraa',
                        'Lesiraa',
                        'Lesiraa',
                        'Lesiraa',
                        'Lovilukuny',
                        'Lovilukuny',
                    ],
                },
                {
                    ward: 'Bangata',
                    streets: [
                        'Bangata',
                        'Bangata',
                        'Bangata',
                        'Midawe',
                        'Midawe',
                        'Sasi',
                        'Sasi',
                        'Sasi',
                    ],
                },
                {
                    ward: 'Sokon Ii',
                    streets: [
                        'Sokon Ii',
                        'Sokon Ii',
                        'Sokon Ii',
                        'Sokon Ii',
                        'Sokon Ii',
                        'Oldadai',
                        'Oldadai',
                        'Oldadai',
                        'Oldadai',
                        'Ngires',
                        'Ngires',
                        'Ngires',
                        'Ngires',
                        'Ngires',
                        'Ngires',
                    ],
                },
                {
                    ward: 'Kiranyi',
                    streets: ['Ngires', 'Ngires', 'Ngires', 'Ngires'],
                },
                {
                    ward: 'Olorien',
                    streets: ['Ngires', 'Ngires', 'Ngires'],
                },
                {
                    ward: "Ilkiding'a",
                    streets: [
                        "Ilkiding'a",
                        "Ilkiding'a",
                        "Ilkiding'a",
                        "Ilkiding'a",
                        'Oloigeruno',
                        'Oloigeruno',
                        'Oloigeruno',
                        'Oloigeruno',
                        'Ilkisongo',
                        'Ilkisongo',
                        'Ilkisongo',
                    ],
                },
                {
                    ward: 'Sambasha',
                    streets: [
                        'Sambasha',
                        'Sambasha',
                        'Sambasha',
                        'Shimboro',
                        'Shimboro',
                        'Shimboro',
                        'Shimboro',
                        'Timbolo',
                        'Timbolo',
                        'Timbolo',
                        'Timbolo',
                    ],
                },
                {
                    ward: 'Kimnyaki',
                    streets: [
                        'Olmringaringa',
                        'Olmringaringa',
                        'Olmringaringa',
                        'Olmringaringa',
                        'Olovolos',
                        'Olovolos',
                        'Olovolos',
                        'Olovolos',
                        'Kimnyaki',
                        'Kimnyaki',
                        'Kimnyaki',
                        'Kimnyaki',
                    ],
                },
                {
                    ward: 'Olmotonyi',
                    streets: ['Kimnyaki', 'Kimnyaki', 'Kimnyaki'],
                },
                {
                    ward: 'Oljoro',
                    streets: [
                        'Mirongoine',
                        'Mirongoine',
                        'Mirongoine',
                        'Oljoro',
                        'Oljoro',
                        'Oljoro',
                        'Mbuyuni',
                        'Mbuyuni',
                        'Mbuyuni',
                        'Mbuyuni',
                    ],
                },
                {
                    ward: 'Olturoto',
                    streets: [
                        'Kivulul',
                        'Kivulul',
                        'Kivulul',
                        'Oldonyosapuk',
                        'Oldonyosapuk',
                        'Oldonyosapuk',
                        'Oldonyosapuk',
                        'Oldonyosapuk',
                        'Ilkirevi',
                        'Ilkirevi',
                        'Ilkirevi',
                        'Osunyai',
                        'Osunyai',
                        'Osunyai',
                    ],
                },
                {
                    ward: 'Moivo',
                    streets: ['Osunyai', 'Osunyai', 'Osunyai', 'Osunyai', 'Osunyai'],
                },
                {
                    ward: 'Mlangarini',
                    streets: [
                        'Mlangarini',
                        'Mlangarini',
                        'Mlangarini',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Kiserian',
                        'Manyire',
                        'Manyire',
                        'Manyire',
                        'Manyire',
                    ],
                },
                {
                    ward: 'Nduruma',
                    streets: [
                        'Nduruma',
                        'Nduruma',
                        'Nduruma',
                        'Nduruma',
                        'Samaria',
                        'Samaria',
                        'Samaria',
                        'Samaria',
                        'Marurani',
                        'Marurani',
                        'Marurani',
                        'Marurani',
                        'Marurani',
                        'Maji Moto',
                        'Maji Moto',
                        'Maji Moto',
                    ],
                },
                {
                    ward: 'Bwawani',
                    streets: [
                        'Bwawani',
                        'Bwawani',
                        'Bwawani',
                        'Bwawani',
                        'Bwawani',
                        'Bwawani',
                        'Themi Ya Simba',
                        'Themi Ya Simba',
                        'Themi Ya Simba',
                        'Mungushi',
                        'Mungushi',
                        'Mungushi',
                        'Mungushi',
                        'Kigongoni',
                        'Kigongoni',
                    ],
                },
                {
                    ward: 'Mateves',
                    streets: [
                        'Ngorbob',
                        'Ngorbob',
                        'Ngorbob',
                        'Ngorbob',
                        'Ngorbob',
                        'Lemugur',
                        'Lemugur',
                        'Lemugur',
                    ],
                },
                {
                    ward: 'Lemanyata',
                    streets: [
                        'Lemanyata',
                        'Lemanyata',
                        'Lemanyata',
                        'Olkokola',
                        'Olkokola',
                        'Olkokola',
                        'Olkokola',
                        'Lenjani',
                        'Lenjani',
                    ],
                },
                {
                    ward: 'Oldonyowass',
                    streets: [
                        'Oldonyowass',
                        'Oldonyowass',
                        'Oldonyowass',
                        'Oldonyowass',
                        'Losinoni',
                        'Losinoni',
                        'Losinoni',
                        'Engutukoit',
                        'Engutukoit',
                        'Engutukoit',
                        'Engutukoit',
                        'Losinoni Juu',
                        'Losinoni Juu',
                    ],
                },
                {
                    ward: 'Laroi',
                    streets: [
                        'Laroi',
                        'Laroi',
                        'Laroi',
                        'Enjoro',
                        'Enjoro',
                        'Kisima Cha Mungu',
                        'Kisima Cha Mungu',
                    ],
                },
                {
                    ward: 'Kiutu',
                    streets: [
                        'Sekei',
                        'Sekei',
                        'Sekei',
                        'Sekei',
                        'Sekei',
                        'Naurei',
                        'Naurei',
                        'Naurei',
                        'Engorika',
                        'Engorika',
                        'Engorika',
                        'Engorika',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                    ],
                },
                {
                    ward: 'Tarakwa',
                    streets: ['Olgilai', 'Olgilai'],
                },
                {
                    ward: 'Ilboru',
                    streets: ['Olgilai', 'Olgilai'],
                },
            ],
        },
        {
            district: 'Arumeru',
            wards: [
                {
                    ward: 'Usa River',
                    streets: [
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                        'Olgilai',
                    ],
                },
                {
                    ward: 'Maji Ya Chai',
                    streets: [
                        'Ngurdoto',
                        'Ngurdoto',
                        'Ngurdoto',
                        'Ngurdoto',
                        'Ngurdoto',
                        'Kitefu',
                        'Kitefu',
                        'Kitefu',
                        'Kitefu',
                        'Kitefu',
                        'Maji Ya Chai',
                        'Maji Ya Chai',
                        'Maji Ya Chai',
                        'Lerai',
                        'Lerai',
                        'Lerai',
                        'Ngongongare',
                    ],
                },
                {
                    ward: 'Nkoaranga',
                    streets: ['Nshupu', 'Nshupu', 'Nshupu', 'Nkoaranga', 'Nkoaranga'],
                },
            ],
        },
    ],
};

const darEsSalaam = {
    region: 'Dar es Salaam',
    districts: [
        {
            district: 'Ilala Cbd',
            wards: [
                {
                    ward: 'Kivukoni',
                    streets: ['Kivukoni', 'Sea View'],
                },
                {
                    ward: 'Upanga Mashariki',
                    streets: ['Kitonga', 'Kibasila'],
                },
                {
                    ward: 'Upanga Magharibi',
                    streets: ['Fire', 'Charambe', 'Mfaume'],
                },
                {
                    ward: 'Kisutu',
                    streets: ['Kisutu', 'Mtendeni'],
                },
                {
                    ward: 'Mchafukoge',
                    streets: ['Kitumbini', 'Mchafukoge'],
                },
                {
                    ward: 'Kariakoo',
                    streets: [
                        'Kariakoo Magharibi',
                        'Kariakoo Kaskazini',
                        'Kariakoo Mashariki',
                    ],
                },
                {
                    ward: 'Gerezani',
                    streets: ['Gerezani Mashariki', 'Gerezani Magharibi'],
                },
                {
                    ward: 'Jangwani',
                    streets: ['Ukombozi', 'Mnazi Mmoja', 'Mtambani A', 'Mtambani B'],
                },
                {
                    ward: 'Mchikichini',
                    streets: ['Mission Quarter', 'Ilala Kota', 'Msimbazi Bondeni'],
                },
            ],
        },
        {
            district: 'Ilala',
            wards: [
                {
                    ward: 'Ilala',
                    streets: ['Mafuriko', 'Kasulu', 'Karume', 'Shariff Shamba', 'Amana'],
                },
                {
                    ward: 'Buguruni',
                    streets: ['Malapa', 'Madenge', 'Kisiwani', 'Mvinjeni'],
                },
                {
                    ward: 'Tabata',
                    streets: [
                        'Mandela',
                        'Tabata',
                        'Matumbi',
                        'Msimbazi',
                        'Kisiwani',
                        'Tenge',
                        'Mtambani',
                        'Msimbazi Magharibi',
                    ],
                },
                {
                    ward: 'Kimanga',
                    streets: [
                        'Tembomgwaza',
                        'Kimanga',
                        'Kimanga Darajani',
                        'Banebane',
                        'Kihimbwa',
                        'Sokoine',
                        'Twiga',
                    ],
                },
                {
                    ward: 'Segerea',
                    streets: ['Mgombani', 'Ugombolwa', 'Segerea', 'Mfaume'],
                },
                {
                    ward: 'Kipawa',
                    streets: [
                        'Mogo',
                        'Karakata',
                        'Kipunguni',
                        'Stakishari',
                        'Uwanja Wa Ndege',
                        'Mjimpya',
                    ],
                },
                {
                    ward: 'Ukonga',
                    streets: [
                        'Mwembe Madafu',
                        'Mazizini',
                        'Markaz',
                        'Mongo La Ndege',
                        'Sabasaba',
                    ],
                },
                {
                    ward: 'Kiwalani',
                    streets: ['Kigilagila', 'Yombo', 'Kiwalani'],
                },
                {
                    ward: 'Vingunguti',
                    streets: [
                        'Kombo',
                        'Miembeni',
                        'Mtakuja',
                        'Mtambani',
                        'Butiama',
                        'Majengo',
                    ],
                },
                {
                    ward: 'Gongo La Mboto',
                    streets: [
                        'Guluka Kwalala',
                        'Gongo La Mboto',
                        'Ulongoni A',
                        'Ulongoni B',
                    ],
                },
                {
                    ward: 'Kitunda',
                    streets: ['Kipera', 'Kitunda', 'Relini', 'Kiyombo'],
                },
                {
                    ward: 'Pugu',
                    streets: [
                        'Kinyamwezi',
                        'Bombani',
                        'Kigogo Fresh A',
                        'Kigogo Fresh B',
                        'Mustapha',
                    ],
                },
                {
                    ward: 'Majohe',
                    streets: ['Mji Mpya', 'Kichangani', 'Kivule', 'Rada', 'Viwege'],
                },
                {
                    ward: 'Msongola',
                    streets: [
                        'Kitonga',
                        'Yangeyange',
                        'Mbondole',
                        'Mvuleni',
                        'Kiboga',
                        'Kidole',
                        'Mkera',
                        'Sangara',
                        'Uwanja Wa Nyani',
                    ],
                },
                {
                    ward: 'Chanika',
                    streets: [
                        'Tungini',
                        'Yongwe',
                        'Lukomi',
                        'Vikongoro',
                        'Nguvu Mpya',
                        'Virobo',
                        'Kidugalo',
                        'Ngwale',
                        'Lukooni',
                    ],
                },
                {
                    ward: 'Kinyerezi',
                    streets: [
                        'Kinyerezi',
                        'Kifuru',
                        'Kwalimbaga',
                        'Kanga',
                        'Kichangani',
                        'Kibaga',
                    ],
                },
                {
                    ward: 'Kivule',
                    streets: ['Kivule', 'Bombambili', 'Karezange', 'Magore A'],
                },
                {
                    ward: 'Mnyamani',
                    streets: ['Maluzuku', 'Mji Mpya', 'Faru', 'Mnyamani'],
                },
                {
                    ward: 'Liwiti',
                    streets: ['Machimbo', 'Liwiti', 'Misewe', 'Amani'],
                },
                {
                    ward: 'Bonyokwa',
                    streets: ['Bonyokwa', 'Kisiwani', 'Msingwa'],
                },
                {
                    ward: 'Kipunguni',
                    streets: ['Kipunguni B', 'Kitinye', 'Machimbo', 'Amani'],
                },
                {
                    ward: 'Kisukulu',
                    streets: ['Luhanga', 'Kisukulu', 'Mianzini'],
                },
                {
                    ward: 'Minazi Mirefu',
                    streets: ['Mwale', 'Migombani', 'Minazi Mirefu'],
                },
                {
                    ward: 'Buyuni',
                    streets: [
                        'Zavala',
                        'Mgeule',
                        'Nyeburu',
                        'Kigezi',
                        'Kigezi Chini',
                        'Mgeule Juu',
                        'Taliani',
                    ],
                },
                {
                    ward: 'Zingiziwa',
                    streets: [
                        'Nzasa',
                        'Zogoali',
                        'Zingiziwa',
                        'Lubakaya',
                        'Kimwani',
                        'Ngobedi',
                        'Somelo',
                        'Gogo',
                    ],
                },
                {
                    ward: 'Mzinga',
                    streets: ['Mwanagati', 'Magole', 'Mzinga'],
                },
                {
                    ward: 'Pugu Station',
                    streets: ['Bangulo', 'Pugu Station', 'Kichangani'],
                },
            ],
        },
        {
            district: 'Kinondoni',
            wards: [
                {
                    ward: 'Magomeni',
                    streets: ['Suna', 'Makuti A', 'Makuti B', 'Dossi', 'Idrisa'],
                },
                {
                    ward: 'Mzimuni',
                    streets: ['Idrisa', 'Makumbusho', 'Mtambani', 'Mwinyimkuu'],
                },
                {
                    ward: 'Ndugumbi',
                    streets: ['Mpakani', 'Mikoroshini', 'Makanya', 'Vigaeni'],
                },
                {
                    ward: 'Tandale',
                    streets: [
                        'Mtogole',
                        'Kwa Tumbo',
                        'Pakacha',
                        'Sokoni',
                        'Mkunduge',
                        'Muhaltani',
                    ],
                },
                {
                    ward: 'Makumbusho',
                    streets: [
                        'Makumbusho',
                        'Minazini',
                        'Mchangani',
                        'Kisiwani',
                        'Mbuyuni',
                        'Singano',
                    ],
                },
                {
                    ward: 'Mwananyamala',
                    streets: [
                        'Kambangwa',
                        'Msisiri B',
                        'Msisiri A',
                        'Bwawani',
                        'Mwinjuma',
                        'Kwa Kopa',
                        'Msolomi',
                    ],
                },
                {
                    ward: 'Hananasif',
                    streets: [
                        'Hananasif',
                        'Kisutu',
                        'Mkunguni A',
                        'Mkunguni B',
                        'Kawawa',
                    ],
                },
                {
                    ward: 'Kinondoni',
                    streets: [
                        'Kumbukumbu',
                        'Kinondoni Mjini',
                        'Kinondoni Shamba',
                        'Ada Estate',
                    ],
                },
                {
                    ward: 'Msasani',
                    streets: [
                        'Oysterbay',
                        'Masaki',
                        'Mikoroshoni',
                        'Bonde La Mpunga',
                        'Makangira',
                    ],
                },
                {
                    ward: 'Mikocheni',
                    streets: [
                        'Mikocheni A',
                        'Mikocheni B',
                        'Regent Estate',
                        'Ally H. Mwinyi',
                        'Tpdc',
                        'Darajani',
                    ],
                },
                {
                    ward: 'Kijitonyama',
                    streets: [
                        'Kijitonyama',
                        'Alimaua A',
                        'Alimaua B',
                        'Mpakani A',
                        'Mpakani B',
                        'Bwawani',
                        'Mwenge',
                        'Nzasa',
                    ],
                },
                {
                    ward: 'Kigogo',
                    streets: ['Kigogo Kati', 'Kigogo Mkwajuni', 'Kigogo Mbuyuni'],
                },
                {
                    ward: 'Kawe',
                    streets: [
                        'Mzimuni',
                        'Ukwamani',
                        'Mbezi  Beach  A',
                        'Mbezi  Beach  B',
                    ],
                },
                {
                    ward: 'Kunduchi',
                    streets: [
                        'Pwani',
                        'Kilongawima',
                        'Mtongani',
                        'Tegeta',
                        'Ununio',
                        'Kondo',
                    ],
                },
                {
                    ward: 'Bunju',
                    streets: [
                        'Boko',
                        'Bunju A',
                        'Kilungule',
                        'Busihaya',
                        'Dovya',
                        'Mkoani',
                    ],
                },
                {
                    ward: 'Mbweni',
                    streets: [
                        'Maputo',
                        'Mbweni',
                        'Teta',
                        'Malindi Estate',
                        'Mpiji Mbweni',
                    ],
                },
                {
                    ward: 'Mbezi Juu',
                    streets: [
                        'Jogoo',
                        'Ndumbwi',
                        'Mbezi Mtoni',
                        'Mbezi Kati',
                        'Mbezi Juu',
                    ],
                },
                {
                    ward: 'Makongo',
                    streets: ['Changanyikeni', 'Mbuyuni', 'Mlalakuwa', 'Makongo'],
                },
                {
                    ward: 'Wazo',
                    streets: [
                        'Wazo',
                        'Salasala',
                        'Kilimahewa',
                        'Madale',
                        'Mivumoni',
                        'Kisanga',
                        'Kilimahewa Juu',
                        'Nakasangwe',
                    ],
                },
                {
                    ward: 'Mabwepande',
                    streets: ['Bunju B', 'Mabwe Pande', 'Mjimpya', 'Kihonzile', 'Mbopo'],
                },
            ],
        },
        {
            district: 'Temeke',
            wards: [
                {
                    ward: 'Temeke',
                    streets: ['Maganga', 'Matumbi', 'Njaro', 'Temeke'],
                },
                {
                    ward: 'Sandali',
                    streets: [
                        'Mamboleo A',
                        'Sandali',
                        'Mamboleo B',
                        'Mpogo',
                        'Mwembeladu',
                        'Tindwa',
                        'Mkwida',
                        'Veterinary',
                        'Usalama',
                        'Kimbunga',
                        'Mwembemnofu',
                        'Kisiwani',
                    ],
                },
                {
                    ward: 'Chang’ombe',
                    streets: ['Bora', 'Toroli', "Chang'ombe A", "Chang'ombe B"],
                },
                {
                    ward: 'Keko',
                    streets: [
                        'Keko B',
                        'Keko Mwanga A',
                        'Keko Mwanga B',
                        'Keko Magurumbasi A',
                        'Keko Magurumbasi B',
                    ],
                },
                {
                    ward: 'Miburani',
                    streets: [
                        'Miburani',
                        'Uwanja Wa Taifa',
                        'Wailes',
                        'Keko Machungwa',
                        'Mgulani (keko Juu)',
                    ],
                },
                {
                    ward: 'Azimio',
                    streets: [
                        'Azimio Kaskazini',
                        'Azimio Kusini',
                        'Kichangani',
                        'Tambukareli',
                        'Mji Mpya',
                        'Mtongani',
                        'Mtoni Unguja',
                        'Mbuyuni',
                    ],
                },
                {
                    ward: 'Tandika',
                    streets: [
                        'Tamla',
                        'Maguruwe',
                        'Kilimahewa',
                        'Tandika',
                        'Nyambwera',
                        'Mabatini',
                    ],
                },
                {
                    ward: 'Mtoni',
                    streets: [
                        'Mtoni',
                        'Sabasaba',
                        'Bustani',
                        'Relini',
                        'Chaurembo',
                        'Bokorani',
                    ],
                },
                {
                    ward: 'Kurasini',
                    streets: [
                        'Shimo La Udongo',
                        'Mivinjeni',
                        'Minazini',
                        'Kurasini',
                        'Kiungani',
                    ],
                },
                {
                    ward: 'Mbagala Kuu',
                    streets: [
                        'Kizuiani',
                        'Kibonde Maji B',
                        'Kichemchem',
                        'Jeshi La Wokovu',
                        'Mbagala Kuu Mashariki',
                        'Mbagala Kuu Magharibi',
                        'Mbagala Kuu Kaskazini',
                        'Makuka Kusini',
                        'Makuka Kaskazini',
                        'Mpakani',
                    ],
                },
                {
                    ward: 'Mbagala',
                    streets: [
                        'Mbagala',
                        'Kizinga',
                        'Mangaya',
                        'Moringe',
                        'Bughudadi',
                        'Serenge',
                    ],
                },
                {
                    ward: 'Makangarawe',
                    streets: ['Makangarawe', 'Yombo Dovya', 'Msakala', 'Uwazi', 'Mbonde'],
                },
                {
                    ward: 'Yombo Vituka',
                    streets: [
                        'Yombo Vituka',
                        'Sigara',
                        'Machimbo',
                        'Magogoni',
                        'Mzambarauni',
                    ],
                },
                {
                    ward: 'Chamazi',
                    streets: [
                        'Magengeni',
                        'Mwembebamia',
                        'Kiponza',
                        'Kisewe',
                        'Rufu',
                        'Msufini',
                        'Vigoa',
                        'Dovya',
                        'Mkondogwa',
                    ],
                },
                {
                    ward: 'Charambe',
                    streets: [
                        'Kurasini Mji Mpya',
                        'Nzasa B',
                        'Rangi Tatu',
                        'Machinjioni A',
                    ],
                },
                {
                    ward: 'Toangoma',
                    streets: [
                        'Toangoma',
                        'Malela',
                        'Vikunai',
                        'Masuliza',
                        'Masaki',
                        'Mikwambe',
                        'Changanyikeni',
                        'Mwapemba',
                        'Ponde',
                        'Kongowe',
                        'Goroka A',
                        'Goroka B',
                        'Mzinga A',
                        'Mzinga B',
                    ],
                },
                {
                    ward: 'Buza',
                    streets: ['Buza', 'Mji Mpya', 'Mashine Ya Maji', 'Kidagaa', 'Amani'],
                },
                {
                    ward: 'Kilakala',
                    streets: [
                        'Barabara Ya Mwinyi',
                        'Kilakala',
                        'Kigunga',
                        'Kiembesamaki',
                        'Yombo Reli',
                    ],
                },
                {
                    ward: 'Kiburugwa',
                    streets: [
                        'Juhudi',
                        'Kiburugwa Namba3',
                        'Kwanyoka',
                        'Kingugi',
                        'Barabara Ya Mwinyi',
                        'Kiburugwa',
                    ],
                },
                {
                    ward: 'Kijichi',
                    streets: [
                        'Mgeni Nani',
                        'Misheni',
                        'Mtoni Kijichi',
                        'Butiama',
                        'Mwanamtoti',
                    ],
                },
                {
                    ward: 'Mianzini',
                    streets: ['Majimatitu A', 'Machinjioni', 'Mponda', 'Mianzini'],
                },
                {
                    ward: 'Kibondemaji',
                    streets: [
                        'Majimatitu',
                        'Kibondemaji A',
                        'Mchikichini',
                        'Kimbangulile',
                    ],
                },
                {
                    ward: 'Kilungule',
                    streets: [
                        'Kilungule',
                        'Nzasa A',
                        'Majimatitu B',
                        'Kwa Mzungu',
                        'Uzombokoni',
                    ],
                },
            ],
        },
        {
            district: 'Ubungo',
            wards: [
                {
                    ward: 'Mburahati',
                    streets: ['Kisiwani', 'National Housing Corp', 'Barafu'],
                },
                {
                    ward: 'Sinza',
                    streets: ['Sinza A', 'Sinza B', 'Sinza C', 'Sinza D', 'Sinza E'],
                },
                {
                    ward: 'Ubungo',
                    streets: [
                        'Chuo Kikuu',
                        'Kisiwani',
                        'Kibo',
                        'Msewe',
                        'National Housing Corp.',
                    ],
                },
                {
                    ward: 'Kimara',
                    streets: [
                        'Baruti',
                        'Kimara Baruti',
                        'Mavurunza',
                        'Kilungule A',
                        'Kilungule  B',
                        'Golani',
                    ],
                },
                {
                    ward: 'Saranga',
                    streets: [
                        'Saranga',
                        'Upendo',
                        'KimaraB',
                        'Matangini',
                        'Stop Over',
                        "King'ongo",
                        'Michungwani',
                        'Ukombozi',
                        'Mji Mpya',
                    ],
                },
                {
                    ward: 'Makuburi',
                    streets: [
                        'Mwongozo',
                        'Makoka',
                        'Kibangu',
                        'Makuburi Kibangu',
                        'Kajima',
                    ],
                },
                {
                    ward: 'Makurumla',
                    streets: [
                        'Kwa Jongo',
                        'Kimamba',
                        'Kilimahewa',
                        'Kagera',
                        'Mianzini',
                        'Sisi Kwa Sisi',
                    ],
                },
                {
                    ward: 'Manzese',
                    streets: [
                        'Midizini',
                        'Kilimani',
                        'Mnazi Mmoja',
                        'Muungano',
                        'Uzuri',
                        'Mvuleni',
                        'Mwembeni',
                        'Chakula Bora',
                        'Tupendane',
                        'Mferejini',
                    ],
                },
                {
                    ward: 'Mabibo',
                    streets: [
                        'Mabibo',
                        'Jitegemee',
                        'Azimio',
                        'Kanuni',
                        'Matokeo',
                        'Mabibo Farasi',
                    ],
                },
                {
                    ward: 'Kibamba',
                    streets: ['Kibwegere', 'Kibamba', 'Hondogo', 'Gogoni', 'Kiluvya'],
                },
                {
                    ward: 'Kwembe',
                    streets: [
                        'Kwembe',
                        'Mpakani',
                        "King'azi",
                        'Luguruni',
                        'Kisopwa',
                        'Njeteni',
                        "King'azi B",
                        'Mjimpya',
                        'Msakuzi',
                        'Mlongazila',
                    ],
                },
                {
                    ward: 'Goba',
                    streets: [
                        'Goba',
                        'Matosa',
                        'Kulangwa',
                        'Kinzudi',
                        'Kunguru',
                        'Kibululu',
                        'Tegeta A',
                        'Muungano',
                    ],
                },
                {
                    ward: 'Mbezi',
                    streets: [
                        'Msakuzi',
                        'Msumi',
                        'Mbezi Luis',
                        'Mpiji Magohe',
                        'Makabe',
                        'Mshikamano',
                        'Msakuzi Kusini',
                        'Luis',
                    ],
                },
                {
                    ward: 'Msigani',
                    streets: [
                        'Temboni',
                        'Malamba Mawili',
                        'Kwa Yusuph',
                        'Msigani',
                        'Msingwa',
                    ],
                },
            ],
        },
        {
            district: 'Kigamboni',
            wards: [
                {
                    ward: 'Kimbiji',
                    streets: [
                        'Golani',
                        'Kwa Chale',
                        'Mikenge',
                        'Ngobanya',
                        'Kizito Huonjwa',
                        'Kijaka',
                    ],
                },
                {
                    ward: 'Somangila',
                    streets: [
                        'Kizani',
                        'Mbwamaji',
                        'Mwera',
                        'Dege',
                        'Malimbika',
                        'Visikini',
                        'Bamba',
                        'Mwanzo Mgumu',
                        'Shirikisho',
                        'Minondo',
                        'Sara',
                        'Mkwajuni',
                        'Kichangani',
                    ],
                },
                {
                    ward: 'Tungi',
                    streets: ['Tungi', 'Magogoni', 'Muungano'],
                },
                {
                    ward: 'Kisarawe Ii',
                    streets: [
                        'Tumaini',
                        'Kigogo',
                        'Mwasonga',
                        'Sharifu',
                        'Vumilia Ukooni',
                        'Ngoma Mapinduzi',
                        'Mwaninga',
                        'Mkamba',
                        'Lingato',
                        'Madege',
                        'Kichangani',
                    ],
                },
                {
                    ward: 'Pembamnazi',
                    streets: [
                        'Potea',
                        'Pu Centre',
                        'Kwa Morisi',
                        'Gulubwida',
                        'Mahenge',
                        'Tundwi Centre',
                        'Songani Centre',
                        'Pemba Centre',
                        'Buyuni Centre',
                        'Kibungo',
                        'Kichangani',
                        'Muhimbili',
                        'Nyange',
                        'Chambewa',
                        'Mtimweupe',
                    ],
                },
                {
                    ward: 'Mjimwema',
                    streets: ['Maweni', 'Ungindoni', 'Mjimwema', 'Kibugumo'],
                },
                {
                    ward: 'Kigamboni',
                    streets: ['Kigamboni', 'Ferry', 'Tuamoyo'],
                },
                {
                    ward: 'Vijibweni',
                    streets: [
                        'Vijibweni',
                        'Kibene',
                        'Mkwajuni',
                        'Kisiwani',
                        'Upendo',
                        'Majengo',
                    ],
                },
                {
                    ward: 'Kibada',
                    streets: [
                        'Nyakwale',
                        'Kichangani',
                        'Sokoni',
                        'Kiziza',
                        'Uvumba',
                        'Kifurukwe',
                    ],
                },
            ],
        },
    ],
};

const dodoma = {
    region: 'dodoma',
    districts: [
        {
            district: 'Dodoma Cbd',
            wards: [
                {
                    ward: 'Uhuru',
                    streets: ['Kipande', 'Mji Mpya', 'Uhuru', 'Kati'],
                },
                {
                    ward: 'Viwandani',
                    streets: ['Kinyali', 'Samora', 'Marijani', 'Baruti', 'Tofiki'],
                },
                {
                    ward: 'Madukani',
                    streets: ['Kamili', 'Jamal', 'Mmasi', 'Sululu', 'Relini'],
                },
                {
                    ward: 'Tambukareli',
                    streets: ['Reli', 'Salimini', 'Sechelela', 'Amani'],
                },
                {
                    ward: 'Makole',
                    streets: ['Chimuli', "Chadulu'b", 'Makole', 'National Housing'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Fatina', 'Mausi', 'Mnyampala', 'Kitenge'],
                },
                {
                    ward: 'Dodoma Makulu',
                    streets: [
                        'Medeli',
                        'Mwangaza',
                        'Bwawani',
                        'Njedengwa East',
                        'Njedengwa West',
                        'Msangalale Mashariki',
                        'Msangalale Magharibi',
                    ],
                },
                {
                    ward: 'Hazina',
                    streets: ['Kinyambwa', 'Mlezi', 'Hazina', 'Itega'],
                },
                {
                    ward: 'Chamwino',
                    streets: ['Mwaja', 'Sokoine', 'Nduka', 'Mailimbili'],
                },
                {
                    ward: 'Kilimani',
                    streets: ['Kilimani', 'Image', 'Chinyoyo', 'Nyerere'],
                },
                {
                    ward: 'Kikuyu Kaskazini',
                    streets: [
                        'Kikuyu Mission',
                        'Kikuyu',
                        'Kigamboni',
                        "Hazina'x",
                        'Zahanati',
                    ],
                },
                {
                    ward: 'Kikuyu Kusini',
                    streets: [
                        "Mkalama'a",
                        "Mkalama'b",
                        'Maweni',
                        'Mkuyuni',
                        'Image',
                        'Maghorofani',
                    ],
                },
                {
                    ward: 'Miyuji',
                    streets: ['Mpamaa', 'Miyuji Proper', 'Mathias'],
                },
                {
                    ward: 'Kizota',
                    streets: [
                        'Mkonongo',
                        'Relini',
                        'Bwawani',
                        'Sokoine',
                        'Kisabuje',
                        'Mbuyuni',
                    ],
                },
                {
                    ward: 'Kiwanja Cha Ndege',
                    streets: [
                        'Osterbay',
                        'Makongoro',
                        'Mlimwa',
                        'Chuo Cha Mipango',
                        'Kiwanja Cha Ndege',
                        'Mkwajuni',
                    ],
                },
                {
                    ward: 'Mkonze',
                    streets: [
                        'Chidachi',
                        'Muungano',
                        'Miganga',
                        'Chinyika',
                        'Chisichili',
                        'Nzinje',
                        'Bwawani',
                    ],
                },
                {
                    ward: 'Nkuhungu',
                    streets: [
                        'Salama',
                        'Itega',
                        'Amani',
                        'Bochela',
                        'Mtube',
                        'Muungano',
                        'Mnyakongo',
                    ],
                },
                {
                    ward: 'Ihumwa',
                    streets: ['Chilwana', 'Ihumwa', "Chang'ombe"],
                },
                {
                    ward: "Ng'onng'onha",
                    streets: ['Ng’onng’onha', 'Mapinduzi A', 'Mapinduzi B'],
                },
                {
                    ward: 'Matumbulu',
                    streets: ['Mpunguzi ‘a’', 'Matumbulu A'],
                },
            ],
        },
        {
            district: 'Dodoma',
            wards: [
                {
                    ward: 'Makutopora',
                    streets: ['Mchemwa', 'Veyula'],
                },
                {
                    ward: 'Ipala',
                    streets: ['Ipala A', 'Ipala B', 'Chahwa', 'M/makulu'],
                },
                {
                    ward: 'Chihanga',
                    streets: ['Chihanga', 'Gawaye', 'Nzasa', 'Songambele'],
                },
                {
                    ward: 'Hombolo Bwawani',
                    streets: [
                        'Mkoyo',
                        'Hombolo Bwawani A',
                        'Kolimba',
                        'Hombolo Bwawani B',
                    ],
                },
                {
                    ward: 'Msalato',
                    streets: ["Msalato'a", "Msalato'b", 'Zapesi'],
                },
                {
                    ward: 'Kikombo',
                    streets: ['Kikombo', 'Chololo'],
                },
                {
                    ward: 'Mtumba',
                    streets: ['Chilwana', 'Mtumba', 'Vikonje', 'Ihumwa'],
                },
                {
                    ward: 'Zuzu',
                    streets: ['Zuzu', 'Chididimo'],
                },
                {
                    ward: 'Nala',
                    streets: ['Nala', 'Chigongwe', 'Nghambala', 'Msembeta'],
                },
                {
                    ward: 'Mbabala',
                    streets: [
                        'Mbabala A',
                        'Vilindoni',
                        'Mbabala B',
                        'Bihawana',
                        'Chizomoche',
                    ],
                },
                {
                    ward: 'Mbalawala',
                    streets: ['Chihikwa', 'Chiwondo', 'Mwegamile', 'Mbalawala', 'Lugala'],
                },
                {
                    ward: 'Mpunguzi',
                    streets: ['Matumbulu', 'Nkulabi', 'Mpunguzi A', 'Mpunguzi B'],
                },
                {
                    ward: 'Mnadani',
                    streets: ['Mbwanga', 'Mnadani', 'Ndachi'],
                },
                {
                    ward: 'Chigongwe',
                    streets: ['Chigongwe', 'Msembeta', "Ngh'ambala"],
                },
                {
                    ward: 'Chahwa',
                    streets: ['Chahwa', 'Mahoma/makulu'],
                },
                {
                    ward: "Chang'ombe",
                    streets: ['Changombe Juu', 'Chilewa', 'Hamvu', 'Mazengo'],
                },
                {
                    ward: 'Ipagala',
                    streets: ['Mlimwa West'],
                },
                {
                    ward: 'Iyumbu',
                    streets: ['Iyumbu', 'Udom'],
                },
                {
                    ward: 'Ntyuka',
                    streets: ['Ntyuka', 'Chidachi'],
                },
                {
                    ward: 'Nzuguni',
                    streets: ['Nzunguni', 'Mahomanyika', 'Kitelela'],
                },
                {
                    ward: 'Hombolo Makulu',
                    streets: ['Zepisa A', 'Hombolo Makulu'],
                },
            ],
        },
        {
            district: 'Bahi',
            wards: [
                {
                    ward: 'Bahi',
                    streets: ['Bahi Sokoni', 'Uhelela', 'Nagulo Bahi'],
                },
                {
                    ward: 'Ibihwa',
                    streets: ['Ibihwa', 'Mnkhola'],
                },
                {
                    ward: 'Ilindi',
                    streets: ['Ilindi', 'Mindola'],
                },
                {
                    ward: 'Kigwe',
                    streets: ['Kigwe', 'Mapinduzi'],
                },
                {
                    ward: 'Mpamamtwa',
                    streets: ['Bahi Makulu', 'Mkakatika', 'Mpamantwa'],
                },
                {
                    ward: 'Chali',
                    streets: [
                        'Chali Makulu',
                        'Chali Igongo',
                        'Chali Isangha',
                        'Chikopelo',
                    ],
                },
                {
                    ward: 'Chikola',
                    streets: ['Chikola', 'Chimendeli', 'Nghulugano'],
                },
                {
                    ward: 'Chipanga',
                    streets: ['Chiguluka', 'Chipanga A', 'Chipanga B'],
                },
                {
                    ward: 'Nondwa',
                    streets: ['Nondwa', 'Zejele'],
                },
                {
                    ward: 'Mpalanga',
                    streets: ['Chidilo', 'Nholi', 'Mpalanga'],
                },
                {
                    ward: 'Lamaiti',
                    streets: ['Bankolo', 'Lamaiti', 'Lukali'],
                },
                {
                    ward: 'Makanda',
                    streets: ['Chonde', 'Makanda'],
                },
                {
                    ward: 'Msisi',
                    streets: ['Mchito', 'Msisi', 'Kisima Cha Ndege', 'Tinai'],
                },
                {
                    ward: 'Mundemu',
                    streets: ['Chilungulu', 'Mundemu', 'Nguji'],
                },
                {
                    ward: 'Zanka',
                    streets: ['Mayamaya', 'Mkondai', 'Zanka'],
                },
                {
                    ward: 'Chibelela',
                    streets: ['Chibelela', 'Isangha'],
                },
                {
                    ward: 'Ibugule',
                    streets: ['Ibugule', 'Nkhome', 'Mapanga'],
                },
                {
                    ward: 'Mtitaa',
                    streets: ['Mtitaa', 'Nchinila'],
                },
                {
                    ward: 'Mwitikira',
                    streets: ['Mphangwe', 'Mwitikira'],
                },
                {
                    ward: 'Chifutuka',
                    streets: ['Chifutuka', 'Magaga', 'Ikumbulu'],
                },
                {
                    ward: 'Mpinga',
                    streets: ['Mpinga', 'Mzogole'],
                },
                {
                    ward: 'Babayu',
                    streets: ['Asanje', 'Babayu', 'Kongogo'],
                },
            ],
        },
        {
            district: 'Chamwino',
            wards: [
                {
                    ward: 'Chilonwa',
                    streets: ['Mahama', 'Nzali'],
                },
                {
                    ward: 'Buigiri',
                    streets: ['Buigiri', 'Chinangali Ii', 'Mwegamile'],
                },
                {
                    ward: 'Majeleko',
                    streets: ['Majeleko', 'Mbelezungu', 'Chinangali I', ''],
                },
                {
                    ward: 'Manchali',
                    streets: [
                        "Manchali'b",
                        "Manchali'a",
                        'Chalinze',
                        'Bwawani',
                        'Wilunze',
                    ],
                },
                {
                    ward: 'Msanga',
                    streets: ['Msanga', 'Kawawa'],
                },
                {
                    ward: 'Msamalo',
                    streets: ['Mnase', 'Mlebe', 'Mgunga', 'Msamalo'],
                },
                {
                    ward: 'Ikowa',
                    streets: ['Ikowa', 'Makoja'],
                },
                {
                    ward: 'Membe',
                    streets: ['Membe', 'Chitabuli', 'Mlimwa'],
                },
                {
                    ward: 'Dabalo',
                    streets: ['Dabalo A', 'Nayu', 'Igamba', 'Chiwondo', 'Manyemba'],
                },
                {
                    ward: 'Haneti',
                    streets: ['Haneti', 'Humekwa', 'Kwahemu', 'Mwiyendaje', 'Chenene'],
                },
                {
                    ward: 'Itiso',
                    streets: ['Itiso', 'Ikombo', 'Mapanga', 'Solowu'],
                },
                {
                    ward: 'Segala',
                    streets: ['Segala', 'Malecela', 'Izava', 'Kimeji', 'Umoja'],
                },
                {
                    ward: 'Mvumi Misheni',
                    streets: ['Mvumi Misheni', 'Chihembe', 'Mita', 'Ndebwe'],
                },
                {
                    ward: 'Handali',
                    streets: ['Handali', 'Mjelo', 'Chanhumba'],
                },
                {
                    ward: 'Idifu',
                    streets: ['Idifu', 'Miganga'],
                },
                {
                    ward: 'Igandu',
                    streets: ['Igandu', 'Chibwe', 'Chimwaga'],
                },
                {
                    ward: 'Muungano',
                    streets: ['Muungano', 'Mzula', 'Ilolo'],
                },
                {
                    ward: 'Mvumi Makulu',
                    streets: ['Mvumi Makulu', 'Chalula', 'Mazengo'],
                },
                {
                    ward: 'Fufu',
                    streets: ['Fufu', 'Suli'],
                },
                {
                    ward: 'Iringa Mvumi',
                    streets: ['Iringa Mvumi Mpya', 'Iringa Mvumi Zamani', 'Chita'],
                },
                {
                    ward: "Makang'wa",
                    streets: ["Makang'wa", 'Chiwona'],
                },
                {
                    ward: 'Manzase',
                    streets: ['Manzase', 'Lugala', 'Sasajila', 'Kazaroho', 'Ilewelo'],
                },
                {
                    ward: 'Mlowa Bwawani',
                    streets: ['Mlowa Bwawani', 'Wiliko'],
                },
                {
                    ward: 'Mpwayungu',
                    streets: ['Mpwayungu', 'Chikola', 'Nagulo -mwitikira'],
                },
                {
                    ward: 'Chinugulu',
                    streets: ['Chinugulu', 'Mondomela'],
                },
                {
                    ward: 'Huzi',
                    streets: ['Huzi', 'Muheme', 'Chifukulo'],
                },
                {
                    ward: 'Manda',
                    streets: ['Manda', 'Ilangali'],
                },
                {
                    ward: 'Nghambaku',
                    streets: ['Nghambaku', 'Ndogowe', 'Mlazo'],
                },
                {
                    ward: 'Zajilwa',
                    streets: ['Zajilwa', 'Gwandi', 'Magungu'],
                },
                {
                    ward: 'Chiboli',
                    streets: ['Chiboli', 'Champunda', 'Nzasa'],
                },
                {
                    ward: 'Loje',
                    streets: ['Loje', 'Igunguli'],
                },
                {
                    ward: 'Nhinhi',
                    streets: ['Nhinhi', 'Nkwenda'],
                },
                {
                    ward: 'Chamwino',
                    streets: ['Chamwino'],
                },
                {
                    ward: 'Nghaheleze',
                    streets: ['Nghaheleze', 'Nghanje', 'Chinoje'],
                },
                {
                    ward: 'Ikombolinga',
                    streets: ['Ikombolinga', 'Mguba'],
                },
                {
                    ward: 'Mlowa Barabarani',
                    streets: ['Mloda', 'Mlowa Barabarani', 'Mlowa B'],
                },
            ],
        },
        {
            district: 'Kongwa',
            wards: [
                {
                    ward: 'Kongwa',
                    streets: ['Kongwa'],
                },
                {
                    ward: 'Ugogoni',
                    streets: ['Ugogoni'],
                },
            ],
        },
    ],
};

const geita = {
    region: 'Geita',
    districts: [
        {
            district: 'Geita',
            wards: [
                {
                    ward: 'Kalangalala',
                    streets: [
                        'Nyerere Road',
                        'Nyanza',
                        'Msalala Road',
                        'Mission',
                        'Kivukoni',
                        'Mbungani',
                        'Katoma',
                        'Lwenge',
                        'Ujamaa',
                        'Tambuka Reli',
                        'Mkoani',
                    ],
                },
                {
                    ward: 'Kamhanga',
                    streets: ['Kishinda'],
                },
                {
                    ward: 'Nyarugusu',
                    streets: [
                        'Busolwa "b"',
                        'Nyarugusu',
                        'Mawemeru',
                        'Ziwani',
                        'Ililika',
                    ],
                },
                {
                    ward: 'Lwamgasa',
                    streets: [
                        'Lwamgasa',
                        'Ilangasika',
                        'Kilombero I',
                        'Kilombero Ii',
                        'Buziba',
                    ],
                },
                {
                    ward: 'Kaseme',
                    streets: ['Kaseme A', 'Kasesa', 'Katangalo', 'Munekezi'],
                },
                {
                    ward: 'Butobela',
                    streets: [
                        'Butobela',
                        'Nyakagwe',
                        'Shahende',
                        'Mhande',
                        'Nyangh’omango',
                    ],
                },
                {
                    ward: 'Bujula',
                    streets: ['Mduhani', 'Ngula', 'Bujula', 'Nyamiboga'],
                },
                {
                    ward: 'Nyamigota',
                    streets: ['Nyamiboga'],
                },
                {
                    ward: 'Nyaruyeye',
                    streets: ['Mhama "b"', 'Nyaruyeye', 'Wigo'],
                },
                {
                    ward: 'Nyamwilolelwa',
                    streets: ['Nyamwilolelwa', 'Saragurwa', 'Nungwe'],
                },
                {
                    ward: 'Magenge',
                    streets: ['Magenge', 'Igando', 'Nyamalulu', 'Sobora'],
                },
                {
                    ward: 'Butundwe',
                    streets: ['Kasang’hwa', 'Nyandago', 'Lukumbo'],
                },
                {
                    ward: 'Nyawilimilwa',
                    streets: ['Nyawilimilwa', 'Ntinachi', 'Kibwela'],
                },
                {
                    ward: 'Izumacheli',
                    streets: ['Butwa/lulegeya', 'Izumacheli', 'Lunazi'],
                },
            ],
        },
    ],
};

const iringa = {
    region: 'Iringa',
    districts: [
        {
            district: 'Iringa Cbd',
            wards: [
                {
                    ward: 'Mivinjeni',
                    streets: [
                        'Migombani',
                        'Idunda',
                        "Frelimo 'a'",
                        'Darajani',
                        'Kondoa',
                        'Kanisani',
                        'Mjimwema',
                    ],
                },
                {
                    ward: 'Mshindo',
                    streets: [
                        "Mshindo 'a'",
                        "Mshindo 'b'",
                        'Benki',
                        'Msikiti',
                        'Ruaha',
                        "Mtwa 'a'",
                        "Mtwa 'b'",
                    ],
                },
                {
                    ward: 'Kitanzini',
                    streets: [
                        'Stendi Kuu',
                        'Miyomboni',
                        'Jamat',
                        'Maweni',
                        'Legezamwendo',
                        'Madrasa',
                        'Kitanzini',
                        'Mlimani',
                        'Polisi Line',
                    ],
                },
                {
                    ward: 'Makorongoni',
                    streets: [
                        'Msichoke',
                        'Mkwawa Road',
                        'Kaguo',
                        'Sekondari',
                        'Pangani',
                        'Kibwana',
                        'Mahiwa',
                        'Pawaga Road',
                        'Tandamti',
                        'Baniani',
                        'Mahagi',
                        'Muhimba "a"',
                        'Muhimba "b"',
                    ],
                },
                {
                    ward: 'Ilala',
                    streets: [
                        'Mlamke',
                        'Nyumba Tatu',
                        'Embakasi',
                        'Lami A',
                        'Lami B',
                        'Dabobado',
                        'Kajificheni',
                    ],
                },
                {
                    ward: 'Kwakilosa',
                    streets: [
                        "Frelimo 'c'",
                        "Muungano 'b'",
                        'Shule',
                        'Kijiweni',
                        'Kidunda',
                        'Jangwani',
                        'Samora',
                        'Beira',
                        "Muungano 'a'",
                        'Kisiwani',
                    ],
                },
                {
                    ward: 'Mlandege',
                    streets: [
                        'Ngulika',
                        'Msanya',
                        'Mafuruto',
                        'Sokoni',
                        'Mlambalazi',
                        'Nguzo',
                        'Makondeko',
                        'Lubida',
                        'Kalenga Road',
                        'Kota',
                        'Mapinduzi',
                        "Ngeng'ena",
                    ],
                },
                {
                    ward: 'Gangilonga',
                    streets: [
                        'Kinondoni',
                        'Kichangani',
                        'Ffu',
                        'Lugalo A',
                        'Lugalo B',
                        'Wilolesi',
                        'Sabasaba',
                        'Gangilonga',
                        'Kilimani',
                    ],
                },
                {
                    ward: 'Kihesa',
                    streets: [
                        'Dodoma Road A',
                        'Dodoma Road B',
                        "Semtema 'a'",
                        "Semtema 'b'",
                        'Ilembula',
                        'Mwenge',
                        'Mafifi',
                        'Kilimani',
                        'Ngome',
                        "Dodoma Road 'f'",
                        'Sokoni',
                        'Mfaranyaki',
                        'Ramadhani Waziri',
                        'Msikitini',
                        'Mbuma',
                    ],
                },
                {
                    ward: 'Mtwivila',
                    streets: [
                        'Semkini',
                        "Mtwivila 'a'",
                        "Mtwivila 'b'",
                        'Mtwivila "c"',
                        'Viziwi',
                        'Mwautwa',
                        'Dodoma Road "c"',
                        'Dodoma Road "d"',
                        'Idunda',
                        'Dodoma Road "e"',
                    ],
                },
                {
                    ward: 'Mkwawa',
                    streets: [
                        'Lukosi',
                        'Imalanongwa A',
                        'Imalanongwa B',
                        'Bwawani "a"',
                        "Bwawani 'b'",
                        "Wazo 'a'",
                        "Wazo 'b'",
                        'Mkwawa Chuo',
                        "Don Bosco 'a'",
                        "Don Bosco 'b'",
                        'Mgera',
                        'Itamba',
                        'Hoho',
                        "Ikonongo 'a'",
                        "Ikonongo 'b'",
                    ],
                },
                {
                    ward: 'Mwangata',
                    streets: [
                        'Kigamboni',
                        'Kisiwani',
                        'Mawelewele',
                        'Ngelewala',
                        "Isoka 'a'",
                        "Isoka 'b'",
                        "Mwangata 'a'",
                        "Mwangata 'b'",
                        "Mwangata 'c'",
                        "Mwangata 'd'",
                        'Muungano',
                    ],
                },
                {
                    ward: 'Kitwiru',
                    streets: [
                        "Kibwabwa 'a'",
                        "Kibwabwa 'b'",
                        "Nyamhanga 'a'",
                        "Nyamhanga 'b'",
                        "Nyamhanga 'c'",
                        'Kisiwani',
                        "Nyamhanga 'd'",
                        "Nyamhanga 'e'",
                        'Cagliero',
                        'Mosi',
                        "Uyole 'a'",
                        "Uyole 'b'",
                        "Kitwiru 'a'",
                        "Kitwiru 'b'",
                    ],
                },
                {
                    ward: 'Ruaha',
                    streets: [
                        "Ipogolo 'a'",
                        "Ipogolo 'b'",
                        "Ipogolo 'c'",
                        'Tagamenda',
                        "Ipogolo 'd'",
                        'Mwagongo',
                        "Ipogolo 'e'",
                        'Ngeleli',
                        'Buguruni',
                        "Kinegamgosi 'a'",
                        'Chuo',
                        "Kinegamgosi 'b'",
                        "Kinegamgosi 'c'",
                    ],
                },
                {
                    ward: 'Nduli',
                    streets: [
                        'Mapanda',
                        'Mji Mwema',
                        'Kilimahewa',
                        'Kisowele',
                        'Kipululu',
                        'Njia Panda',
                        'Mtalagala',
                        'Msisina',
                        'Mibata',
                        'Igungandembwe',
                        'Sombeli',
                    ],
                },
                {
                    ward: 'Isakalilo',
                    streets: [
                        'Isakalilo',
                        "Kihodombi 'a'",
                        "Kihodombi 'b'",
                        'Kitasengwa',
                        'Njia Panda',
                        'Zizi',
                        'Mtwivila',
                        'Chautinde',
                        'Kisaula',
                    ],
                },
                {
                    ward: 'Mkimbizi',
                    streets: [
                        'Dodoma Road Trm',
                        'Mkimbizi "a"',
                        'Kaduma',
                        'Mkimbizi "b"',
                        'Mkimbizi "c"',
                        'Mkimbizi "d"',
                        'Kihesa Kilolo "a"',
                        'Kihesa Kilolo "b"',
                        'Ugele Ilangila',
                        'Ugele  Manyigi',
                    ],
                },
                {
                    ward: 'Igumbilo',
                    streets: [
                        "Ndiuka 'a'",
                        "Ndiuka 'b'",
                        "Ndiuka 'c'",
                        "Ndiuka 'd'",
                        "Ndiuka 'e'",
                        'Mlangali',
                        'Igumbilo',
                        'Matungulu',
                        'Kigungawe A',
                        'Kigungawe B',
                    ],
                },
            ],
        },
        {
            district: 'Iringa',
            wards: [
                {
                    ward: 'Kalenga',
                    streets: ['Tosamaganga', 'Kalenga', 'Isakalilo'],
                },
                {
                    ward: 'Maguliwa',
                    streets: [
                        'Magulilwa',
                        'Ng’enza',
                        'Msuluti',
                        'Mlanda',
                        'Negabihi',
                        'Ndiwili',
                    ],
                },
                {
                    ward: 'Mgama',
                    streets: [
                        'Ibumila',
                        'Lwato',
                        'Ilandutwa',
                        'Mgama',
                        'Itwaga',
                        'Ihemi',
                    ],
                },
                {
                    ward: 'Mseke',
                    streets: ['Tanangozi', 'Mlandege', 'Ugwachanya', 'Wenda'],
                },
                {
                    ward: 'Ulanda',
                    streets: [
                        'Mangalali',
                        'Kibebe',
                        'Lupalama',
                        'Ibangamoyo',
                        'Mwambao',
                        'Weru',
                    ],
                },
                {
                    ward: 'Nzihi',
                    streets: [
                        'Nyamihuu',
                        'Kipera',
                        'Magubike',
                        'Nzihi',
                        'Ilalasimba',
                        'Kidamali',
                    ],
                },
                {
                    ward: 'Kiwere',
                    streets: ['Kiwere', 'Mgera', 'Itagutwa', 'Kitapilimwa', 'Mfyome'],
                },
                {
                    ward: 'Mlowa',
                    streets: ['Malizanga', 'Nyamahana', 'Mafuluto'],
                },
                {
                    ward: 'Ilolompya',
                    streets: ['Luganga', 'Magozi', 'Mkombilenga', 'Ilolompya'],
                },
                {
                    ward: 'Kihorogota',
                    streets: [
                        'Kihorogota',
                        'Ivangwa',
                        'Ngano',
                        "Mikong'wi",
                        'Ismani (t)',
                        'Ndolela',
                        'Uhominyi',
                        'Igula',
                    ],
                },
                {
                    ward: 'Lumuli',
                    streets: ['Lumuli', 'Itengulinyi', 'Isupilo', 'Muwimbi'],
                },
                {
                    ward: 'Ifunda',
                    streets: [
                        'Ifunda',
                        'Bandabichi',
                        'Kibena',
                        'Mfukulembe',
                        'Udumka',
                        'Mibikimitali',
                    ],
                },
                {
                    ward: 'Maboga',
                    streets: ['Magunga', 'Makongati', 'Kiponzelo'],
                },
                {
                    ward: 'Wasa',
                    streets: [
                        'Wasa',
                        'Ikungwe',
                        'Ufyambe',
                        'Usengelindete',
                        'Ihomasa',
                        'Ulata',
                        'Mahanzi',
                    ],
                },
                {
                    ward: 'Mahuninga',
                    streets: ['Mahuninga', 'Kisilwa', 'Makifu'],
                },
                {
                    ward: 'Itunundu',
                    streets: ['Itunundu', 'Kimande', 'Mbuyuni'],
                },
                {
                    ward: 'Izazi',
                    streets: ['Makuka', 'Izazi', 'Mnadani'],
                },
                {
                    ward: 'Malengamakali',
                    streets: [
                        'Nyakavangala',
                        'Isaka',
                        'Makadupa',
                        'Iguluba',
                        'Mkulula',
                        'Usolanga',
                    ],
                },
                {
                    ward: 'Idodi',
                    streets: ['Idodi', 'Mapogoro', 'Kitisi', 'Tungamalenga'],
                },
                {
                    ward: "Nyang'oro",
                    streets: [
                        'Nyang’oro',
                        'Chamndindi',
                        'Holo',
                        'Mawindi',
                        'Ikengeza',
                        'Mangawe',
                    ],
                },
                {
                    ward: 'Migoli',
                    streets: [
                        'Migoli',
                        'Mtera',
                        'Makatapola',
                        'Mbweleli',
                        'Kinyali',
                        'Maperamengi',
                    ],
                },
                {
                    ward: "Kising'a",
                    streets: [
                        'Ilambilole',
                        'Matembo',
                        'Mkungugu',
                        'Kinywang’anga',
                        'Igingilanyi',
                        'Kising’a Ismani',
                    ],
                },
                {
                    ward: 'Mlenge',
                    streets: ['Kisanga', 'Magombwe', 'Kinyika', 'Isele Pawaga'],
                },
                {
                    ward: 'Lyamgungwe',
                    streets: [
                        'Lupembelwasenga',
                        'Kikombwe',
                        'Igunda',
                        'Malagosi',
                        'Lyamgungwe',
                    ],
                },
                {
                    ward: 'Luhota',
                    streets: ['Tagamenda', 'Kilambo', 'Nyabula', 'Ikuvilo', 'Wangama'],
                },
                {
                    ward: 'Kihanga',
                    streets: ['Makombe', 'Kihanga', 'Kidilo', "Igangidung'u", 'Chamgogo'],
                },
                {
                    ward: 'Masaka',
                    streets: ["Kaning'ombe", 'Sadani', 'Makota'],
                },
                {
                    ward: 'Mboliboli',
                    streets: ['Mboliboli', 'Mbugani', 'Mkumbwanyi'],
                },
            ],
        },
        {
            district: 'Kilolo',
            wards: [
                {
                    ward: 'Irole',
                    streets: ['Irole', 'Lundamatwe', 'Kitumbuka', 'Mawala'],
                },
            ],
        },
    ],
};

const kagera = {
    region: 'Kagera',
    districts: [
        {
            district: 'Bukoba Cbd',
            wards: [
                {
                    ward: 'Bukoba',
                    streets: [
                        'Nyakanyasi',
                        'Forodhani',
                        'Mtoni',
                        'Buyekera Asili',
                        'Kafuti',
                    ],
                },
                {
                    ward: 'Bilele',
                    streets: ['Omukigusha', 'Uhuru', 'Zamzam', 'Jamhuri'],
                },
                {
                    ward: 'Buhembe',
                    streets: ['Bulibata', 'Kyasha', 'Tungamo'],
                },
                {
                    ward: 'Hamugembe',
                    streets: ['Kabangamilembe', 'Kashabo', 'Omukishenye', 'Nyangoye'],
                },
                {
                    ward: 'Ijuganyondo',
                    streets: [
                        "Ijuganyondo'' A''",
                        "Ijunganyondo ''b''",
                        'Kabale Kangaiza',
                    ],
                },
                {
                    ward: 'Kagondo',
                    streets: ['Kagondokaruguru', 'Kagondo Kaifo', 'Kyamuzinga'],
                },
                {
                    ward: 'Kahororo',
                    streets: ['Rwazi', 'Kyaya', 'Makongo', 'Bushwa', 'Bunukangoma'],
                },
                {
                    ward: 'Kashai',
                    streets: [
                        'Kashai Halisi',
                        'Matopeni',
                        'Kisindi',
                        'Kashenye',
                        'Mafumbo',
                        'Rwome',
                        'Katatorwanso',
                        'Nhc',
                        'Kilimahewa',
                    ],
                },
                {
                    ward: 'Kibeta',
                    streets: ['Omukibeta', 'Omukituli', 'Anyama', 'Nyamulugo', 'Magoti'],
                },
                {
                    ward: 'Kitendaguro',
                    streets: [
                        'Kanazi',
                        'Bugambakamoi',
                        'Kagemu',
                        'Kigaze',
                        "Busimbe 'a'",
                        "Busimbe 'b'",
                        'Kyamuhumula',
                        'Kalelabana',
                    ],
                },
                {
                    ward: 'Miembeni',
                    streets: ['Jamhuri', 'Nyamukazi', 'Pepsi', 'Musira', 'Pwani'],
                },
                {
                    ward: 'Nshambya',
                    streets: ['Migera', 'Bunkango', 'Bushaga'],
                },
                {
                    ward: 'Nyanga',
                    streets: [
                        'Rubumba',
                        'Ihyoro',
                        'Kyamyosi',
                        'Nyarubanja',
                        'Kyakairabwa',
                    ],
                },
                {
                    ward: 'Rwamishenye',
                    streets: ['Chemba', 'Kamizilente', 'Nhc', 'Rwamishenye'],
                },
            ],
        },
        {
            district: 'Bukoba',
            wards: [
                {
                    ward: 'Behendangabo',
                    streets: ['Rushaka', 'Bushagara', 'Kibale'],
                },
                {
                    ward: 'Kaagya',
                    streets: ['Mushozi', 'Katangalala', 'Buzi'],
                },
                {
                    ward: 'Kishanje',
                    streets: ['Bushasha', 'Kishanje', 'Bumai'],
                },
                {
                    ward: 'Rubafu',
                    streets: ['Rubafu', 'Katare', 'Kyamarange'],
                },
                {
                    ward: 'Nyakato',
                    streets: ['Burugo', 'Ibosa', 'Igombe', 'Kashozi', 'Kiilima'],
                },
                {
                    ward: 'Katoro',
                    streets: ['Katoro', 'Ruhoko', 'Ngarama', 'Musira'],
                },
                {
                    ward: 'Bujugo',
                    streets: ['Buganguzi', 'Minazi', 'Katoju'],
                },
                {
                    ward: 'Katerero',
                    streets: ['Mulahya', 'Kyema'],
                },
                {
                    ward: 'Kyamulaile',
                    streets: ['Kyamulaile', 'Omukarama', 'Omukihisi', 'Mashule'],
                },
                {
                    ward: 'Mikoni',
                    streets: ['Rutete', 'Kagondo', 'Mikoni', 'Kahyoro'],
                },
                {
                    ward: 'Nyakibimbili',
                    streets: ['Nyakibimbili', 'Bundaza', 'Bugengere', 'Kitahya'],
                },
                {
                    ward: 'Kasharu',
                    streets: ['Kasharu', 'Kabajuga', 'Butainamwa'],
                },
                {
                    ward: 'Ibwera',
                    streets: ['Karonge', 'Ibwera', 'Kibona', 'Itongo'],
                },
                {
                    ward: 'Kaibanja',
                    streets: ['Kaibanja', 'Kazinga', 'Kiijongo', 'Nyakigando'],
                },
                {
                    ward: 'Kibirizi',
                    streets: ['Kibirizi', 'Kamuli', 'Omubweya'],
                },
                {
                    ward: 'Butelankuzi',
                    streets: ['Irango', 'Mishenye', 'Nyakabanga', 'Nyabushozi'],
                },
                {
                    ward: 'Ruhunga',
                    streets: ['Ruhunga', 'Kihumulo', 'Kagarama'],
                },
                {
                    ward: 'Kikomelo',
                    streets: ['Butakya', 'Nyakabulala', 'Kikomelo'],
                },
                {
                    ward: 'Izimbya',
                    streets: ['Izimbya', 'Butulage'],
                },
                {
                    ward: 'Rubale',
                    streets: ['Rubale', 'Migara', 'Kabirizi'],
                },
                {
                    ward: 'Katoma',
                    streets: ['Lukindo', 'Kashenge', 'Irogero'],
                },
                {
                    ward: 'Karabagaine',
                    streets: ['Itahwa', 'Ibaraizibu', 'Kiziru', 'Kitwe', 'Kangabusharo'],
                },
                {
                    ward: 'Maruku',
                    streets: ['Maruku', 'Bwizanduru', 'Kyansozi', 'Butairuka'],
                },
                {
                    ward: 'Kanyangereko',
                    streets: ['Butahyaibega', 'Buguruka', 'Bulinda'],
                },
                {
                    ward: 'Kemondo',
                    streets: ['Kanazi', 'Rwagati'],
                },
                {
                    ward: 'Kishogo',
                    streets: ['Kashule', 'Ntoija', 'Kishogo'],
                },
                {
                    ward: 'Mugajwale',
                    streets: ['Kobunshwi', 'Mugajwale'],
                },
                {
                    ward: 'Rukoma',
                    streets: ['Rukoma', 'Nsheshe', 'Bituntu'],
                },
                {
                    ward: 'Kyaitoke',
                    streets: ['Rugaze', 'Kyaitoke'],
                },
            ],
        },
        {
            district: 'Missenyi',
            wards: [
                {
                    ward: 'Ishozi',
                    streets: ['Katano', 'Luhano', 'Kabyaile', 'Nyarugongo', 'Katolerwa'],
                },
            ],
        },
        {
            district: 'Muleba',
            wards: [
                {
                    ward: 'Katoke',
                    streets: ['Kimbugu "a"', 'Kimbugu "b"*', 'Katoke', 'Kahumulo'],
                },
                {
                    ward: 'Kikuku',
                    streets: ['Kikuku', 'Rwanganiro', 'Nsisha', 'Bigaga', 'Rwazi'],
                },
                {
                    ward: 'Kerebe',
                    streets: ['Kerebe', 'Makibwa'],
                },
                {
                    ward: 'Mafumbo',
                    streets: ['Mafumbo', 'Kashenge', 'Buyego'],
                },
                {
                    ward: 'Buhangaza',
                    streets: ['Buyaga', 'Buhangaza', 'Kashenge'],
                },
                {
                    ward: 'Gwanseli',
                    streets: ['Gwanseli', 'Katunguru', 'Misikilo', 'Kasheno', 'Ilemera'],
                },
                {
                    ward: 'Ikuza',
                    streets: ['Ikuza', 'Kasenyi'],
                },
                {
                    ward: 'Nyakabango',
                    streets: ['Katembe', 'Kangaza', 'Nyakabango', 'Nsambya', 'Musalala'],
                },
                {
                    ward: 'Rulanda',
                    streets: ['Bugara', 'Rulanda', 'Kiga', 'Kihunge'],
                },
            ],
        },
    ],
};

const katavi = {
    region: 'Katavi',
    districts: [
        {
            district: 'Mpanda -cbd',
            wards: [
                {
                    ward: 'Kawajense',
                    streets: ['Kawajense', 'Majengo Mapya', 'Ikulu'],
                },
                {
                    ward: 'Ilembo',
                    streets: ['Ilembo', 'Kasimba', 'Mapinduzi'],
                },
                {
                    ward: 'Misunkumilo',
                    streets: ['Misunkumilo', 'Kampuni', 'Mtemi Beda', 'Milala'],
                },
                {
                    ward: 'Nsemulwa',
                    streets: [
                        'Nsemulwa',
                        'Migazini',
                        'Kilimani',
                        'Kichangani',
                        'Tulieni',
                        'Shankala',
                    ],
                },
                {
                    ward: 'Shanwe',
                    streets: ['Shanwe', 'Kigamboni', 'Kivukoni', 'Kilimahewa'],
                },
                {
                    ward: 'Kashaulili',
                    streets: ['Kashaulili', 'Buzogwe', 'Kotazi'],
                },
                {
                    ward: 'Mpanda Hotel',
                    streets: ['Tambukareli', 'Mpanda Hotel', 'Msasani'],
                },
                {
                    ward: 'Makanyagio',
                    streets: ['Makanyagio', 'Kachoma', 'Kigoma', 'Mpadeco', 'Mwangaza'],
                },
                {
                    ward: 'Kakese',
                    streets: ['Kakese'],
                },
                {
                    ward: 'Uwanja Wa\r\nNdege',
                    streets: ['Airtel', 'Msufini'],
                },
                {
                    ward: 'Kazima',
                    streets: ['Kapalangao', 'Rungwa', 'Kazima'],
                },
                {
                    ward: 'Mwamkulu',
                    streets: ['Nseso', 'Senta Maria', 'Mkokwa', 'Mkwajuni', 'Nguvumali'],
                },
                {
                    ward: 'Magamba',
                    streets: ['Magamba', 'Makongolo', 'Dirifu', 'Society', 'Mtakumbuka'],
                },
                {
                    ward: 'Kasokola',
                    streets: ['Kasokola', 'Manga', 'Sungamila'],
                },
                {
                    ward: 'Nsimbo',
                    streets: ['Isanjandugu', 'Kanoge', 'Mwenge'],
                },
                {
                    ward: 'Kapalala',
                    streets: ['Kapalala', 'Mtakuja', 'Songambele'],
                },
                {
                    ward: 'Mtapenda',
                    streets: [
                        'Isinde',
                        'Mtapenda',
                        "Ikolongo 'a'",
                        'Ndurumo `a‘',
                        'Ikolongo `b‘',
                    ],
                },
                {
                    ward: 'Machimboni',
                    streets: ['Katisunga', 'Kapanda'],
                },
                {
                    ward: 'Ibindi',
                    streets: ['Muungano', 'Masewela', 'Ibindi Kusini'],
                },
                {
                    ward: 'Itenka',
                    streets: [
                        'Tumaini',
                        'Itenka ‘a’',
                        'Itenka ‘b’',
                        'Jilabela',
                        'Tukoma',
                    ],
                },
                {
                    ward: 'Sitalike',
                    streets: ['Mtisi', 'Sitalike', 'Igongwe', 'Matandalani'],
                },
                {
                    ward: 'Urwila',
                    streets: ['Urwira', 'Ikondamoyo', 'Usense'],
                },
                {
                    ward: 'Ugalla',
                    streets: ['Katambike', 'Mnyamasi', 'Kasisi'],
                },
                {
                    ward: 'Litapunga',
                    streets: [
                        'Kaboroge "a"',
                        'Kaburonge "b"',
                        "Kambuzi 'a'",
                        "Kambuzi 'b'",
                        'Litapunga',
                    ],
                },
                {
                    ward: 'Katumba',
                    streets: [
                        'Mnyaki \'b"',
                        'Nduwi Station',
                        'Kaminula',
                        'Nzaga',
                        'Mtambo',
                        'Ivungwe A',
                        'Ivungwe B',
                        'Iwimbi',
                        'Kalungu',
                    ],
                },
            ],
        },
        {
            district: 'Tanganyika',
            wards: [
                {
                    ward: 'Karema',
                    streets: ['Karema', 'Itetemya'],
                },
                {
                    ward: 'Kapalamsenga',
                    streets: ['Kapalamsenga', 'Itunya', 'Songambele'],
                },
                {
                    ward: 'Ikola',
                    streets: ['Ikola', 'Mchangani', 'Kafisha'],
                },
                {
                    ward: 'Katuma',
                    streets: ['Katuma', 'Mpembe', 'Kapanga', 'Kamilala'],
                },
                {
                    ward: 'Sibwesa',
                    streets: ['Sibwesa', 'Nkungwi', 'Kabage'],
                },
                {
                    ward: 'Mwese',
                    streets: ['Mwese', 'Lwega', 'Lugonesi', 'Bujombe'],
                },
                {
                    ward: 'Kabungu',
                    streets: ['Kabungu', 'Kasinde'],
                },
                {
                    ward: 'Mpanda Ndogo',
                    streets: ['Mchakamchaka', 'Katobo', 'Igalula', 'Igagala', 'Ifukutwa'],
                },
                {
                    ward: 'Mishamo',
                    streets: ['Isenga', 'Ifumbula', 'Kapemba', 'Isumbwe'],
                },
                {
                    ward: 'Isengule',
                    streets: ['Isengule', 'Shukula', 'Kasangantongwe'],
                },
                {
                    ward: 'Kasekese',
                    streets: ['Kasekese', 'Kagunga', 'Kaseganyama'],
                },
                {
                    ward: 'Mnyagala',
                    streets: ['Mnyagala', 'Kamsanga', 'Ikaka'],
                },
                {
                    ward: 'Tongwe',
                    streets: ['Vikonge', 'Ngomalusambo', 'Bugwe', 'Majalila'],
                },
                {
                    ward: 'Ilangu',
                    streets: ['Ilangu', 'Kabanga', 'Isubangala', 'Mgansa'],
                },
                {
                    ward: 'Bulamata',
                    streets: ['Bulamata', 'Kamjela', 'Kusi', 'Busongola'],
                },
                {
                    ward: 'Ipwaga',
                    streets: ['Mazwe', 'Mlibansi', 'Lugufu', 'Ipwaga'],
                },
            ],
        },
        {
            district: 'Mlele',
            wards: [
                {
                    ward: 'Inyonga',
                    streets: ['Inyonga', 'Kalovya', 'Kamalampaka'],
                },
                {
                    ward: 'Nsenkwa',
                    streets: ['Nsekwa', 'Kaulolo', 'Mtakuja'],
                },
                {
                    ward: 'Ilela',
                    streets: ['Mapili', 'Ipwaga', 'Masingo'],
                },
                {
                    ward: 'Utende',
                    streets: ['Utende', 'Mgombe', 'Wachawaseme', 'Kanoge'],
                },
                {
                    ward: 'Mbede',
                    streets: ['Mbede', 'Minyoso', 'Mwamatiga'],
                },
                {
                    ward: 'Mamba',
                    streets: ['Mamba', 'Mamba B', 'Kanindi', 'Kilida', 'Kabunde'],
                },
                {
                    ward: 'Usevya',
                    streets: ['Usevya', 'Msadya', 'Nyambwe'],
                },
                {
                    ward: 'Kibaoni',
                    streets: ['Kibaoni', 'Mirumba', 'Ilalangulu'],
                },
                {
                    ward: 'Ikuba',
                    streets: ['Ikuba', 'Kashishi'],
                },
                {
                    ward: 'Majimoto',
                    streets: [
                        'Majimoto',
                        'Kitupa',
                        'Mkuyuni',
                        'Migunga',
                        'Luchima',
                        'Ilulwe',
                    ],
                },
                {
                    ward: 'Kasansa',
                    streets: ['Igalukilo', 'Kikonko', 'Iziwasungu', 'Ntibili'],
                },
                {
                    ward: 'Mwamapuli',
                    streets: ['Mwamapuli', 'Ukingwaminzi', 'Lunguya'],
                },
                {
                    ward: 'Ilunde',
                    streets: ['Ilunde', 'Isengenezya'],
                },
                {
                    ward: 'Kamsisi',
                    streets: ['Kamsisi', 'Songambele', 'Imalauduki'],
                },
                {
                    ward: 'Chamalendi',
                    streets: ['Chamalendi', 'Mkwajuni'],
                },
            ],
        },
    ],
};

const kigoma = {
    region: 'Kigoma',
    districts: [
        {
            district: 'Kigoma\r\nCbd',
            wards: [
                {
                    ward: 'Kigoma',
                    streets: ['Katonga', 'Mji Mwema', 'Shede', 'Lumumba'],
                },
                {
                    ward: 'Bangwe',
                    streets: [
                        'Katonga Mashariki',
                        'Katonga Magharibi',
                        'Kamala Mashariki A',
                        'Kamala Mashariki B',
                        'Kamala Magharibi',
                        'Kamala Kisiwani',
                        'Kamala Kati',
                        'Buteko',
                    ],
                },
                {
                    ward: 'Mwanga Kaskazini',
                    streets: ['Kisangani', 'Mlole', 'Ujenzi'],
                },
                {
                    ward: 'Mwanga Kusini',
                    streets: [
                        'Kilima Hewa',
                        'Msikiti',
                        'Shaurimoyo',
                        'Game',
                        'Lumumba',
                        'Simu',
                        'Yusufu',
                        'Rusimbi',
                        'Muhogwe',
                        'Vamia',
                    ],
                },
                {
                    ward: 'Gungu',
                    streets: [
                        'Bushabani',
                        'Butunga',
                        'Buronge',
                        'Mwenge',
                        'Gezaulole',
                        'Masanga',
                        'Kikungu',
                    ],
                },
                {
                    ward: 'Buhanda',
                    streets: ['Msufini', 'Mgeo', 'Masanga', 'Mungonya'],
                },
                {
                    ward: 'Kitongoni',
                    streets: ['Mnazi Mmoja', 'Wafipa', 'Rutale', 'Kawawa', 'Kabondo'],
                },
                {
                    ward: 'Kasingirima',
                    streets: ['Livingstone', 'Matofalini', 'Kasuki', 'Mgombewa'],
                },
                {
                    ward: 'Machinjioni',
                    streets: ['Ukumbi', 'Wakuha', 'Kiruga', 'Kitenge'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Bogogwa', 'Rusimbi', 'Katonyanga', 'Bonde'],
                },
                {
                    ward: 'Rubuga',
                    streets: ['Ndarabu', 'Rubuga', 'Wahombo', 'Kipande'],
                },
                {
                    ward: 'Kasimbu',
                    streets: ['Ndahiriyo', 'Busomero', 'Mashine', 'Lumumba'],
                },
                {
                    ward: 'Kagera',
                    streets: ['Kanswa', 'Mgumile', 'Mkese', 'Kibwe'],
                },
                {
                    ward: 'Rusimbi',
                    streets: ['Sokoine', 'Lake Tanganyika', 'Taifa', 'Kawawa', 'Burega'],
                },
                {
                    ward: 'Katubuka',
                    streets: ['Mwanga Sokoni', 'Katubuka', 'Uwanja Ndege'],
                },
                {
                    ward: 'Kibirizi',
                    streets: [
                        'Kibirizii A',
                        'Kibirizi B',
                        'Rasini',
                        'Katandala',
                        'Bushabani',
                        'Kichwele',
                        'Kahabwa',
                        'Mgombewa',
                        'Butunga',
                        'Mtolele',
                        'Buronge',
                    ],
                },
                {
                    ward: 'Buzebazeba',
                    streets: [
                        'Vamia',
                        'Tanu',
                        'Sokoine',
                        'Shindika',
                        'Samora',
                        'Ngwandu',
                        'Mikoroshini',
                        'Mandela',
                        'Lumumba',
                        'Lake Tanganyika',
                        'Karuta',
                        'Jumbe',
                        'Burega',
                    ],
                },
                {
                    ward: 'Kipampa',
                    streets: ['Kawawa', 'Boiharo', 'Kazaroho', 'Rutale'],
                },
                {
                    ward: 'Businde',
                    streets: [
                        'Kirugu',
                        'Mwanzini',
                        'Msikitini',
                        'Pima',
                        'Toro',
                        'Mnazimoja',
                        'Bidyoha',
                        'Kitwalo',
                        'Rubabi',
                    ],
                },
            ],
        },
        {
            district: 'Kigoma',
            wards: [
                {
                    ward: 'Mahembe',
                    streets: ['Mahembe', 'Nkungwe', 'Chankabwimba'],
                },
                {
                    ward: 'Bitale',
                    streets: [
                        'Kizenga',
                        'Bitale',
                        'Mkongoro',
                        'Nyamhoza',
                        'Chankele',
                        'Bubango',
                    ],
                },
                {
                    ward: 'Mkongoro',
                    streets: ['Mkongoro', 'Chankere', 'Nyamhoza'],
                },
                {
                    ward: 'Matendo',
                    streets: ['Matendo', 'Samwa', 'Kidahwe', 'Pamila'],
                },
                {
                    ward: 'Mkigo',
                    streets: ['Mkigo', 'Nyarubanda'],
                },
                {
                    ward: 'Kalinzi',
                    streets: ['Kalinzi', 'Matyazo', 'Mkabogo'],
                },
                {
                    ward: 'Kagunga',
                    streets: ['Zashe', 'Kagunga'],
                },
                {
                    ward: 'Mwamgongo',
                    streets: ['Mwamgongo', 'Kiziba', 'Bugamba'],
                },
                {
                    ward: 'Kagongo',
                    streets: [
                        'Kigalye',
                        'Kagongo',
                        'Kalalangabo',
                        'Mgaraganza',
                        'Mtanga',
                    ],
                },
                {
                    ward: 'Kamara',
                    streets: ['Kamara', 'Msimba'],
                },
                {
                    ward: 'Mwandiga',
                    streets: ['Mwandiga', 'Kibingo', 'Kiganza'],
                },
            ],
        },
        {
            district: 'Kasulu',
            wards: [
                {
                    ward: 'Kasulu Mjini',
                    streets: ['Kiganza'],
                },
                {
                    ward: 'Kwaga',
                    streets: ['Kwaga', 'Kalela'],
                },
                {
                    ward: 'Rusesa',
                    streets: ['Rusesa', 'Zeze'],
                },
                {
                    ward: 'Muzye',
                    streets: ['Muzye', 'Mutala', 'Kamembe'],
                },
                {
                    ward: 'Rungwe Mpya',
                    streets: ['Rungwe Mpya', 'Kaguruka'],
                },
                {
                    ward: 'Murufiti',
                    streets: ['Murufiti', 'Nyantare', 'Nyansha'],
                },
                {
                    ward: 'Musambara',
                    streets: ['Kabanga', 'Musambara'],
                },
                {
                    ward: 'Kigondo',
                    streets: ['Kigondo', 'Kidyama'],
                },
                {
                    ward: 'Ruhita',
                    streets: ['Ruhita', 'Kanazi', 'Nyenge', 'Migunga'],
                },
                {
                    ward: 'Titye',
                    streets: ['Titye', 'Lalambe'],
                },
                {
                    ward: 'Nyamunyusi',
                    streets: ['Nyamunyusi', 'Kitema', 'Mkiheta'],
                },
                {
                    ward: 'Buhoro',
                    streets: ['Buhoro', 'Shunga', 'Kibilizi'],
                },
                {
                    ward: 'Nyakitonto',
                    streets: ['Nyakitonto', 'Mugombe'],
                },
                {
                    ward: 'Kitagata',
                    streets: ['Kitagata', 'Makere'],
                },
                {
                    ward: 'Kagera Nkanda',
                    streets: ['Kagera Nkanda', 'Mvinza'],
                },
                {
                    ward: 'Nyamidaho',
                    streets: ['Nyamidaho', 'Mvugwe'],
                },
                {
                    ward: 'Heru Ushingo',
                    streets: ['Heru Ushingo', 'Nyarugusu', 'Kigadye'],
                },
                {
                    ward: 'Kitanga',
                    streets: ['Kitanga'],
                },
                {
                    ward: 'Muhunga',
                    streets: [
                        'Marumba',
                        'Muhunga',
                        'Heru Juu',
                        'Karunga',
                        'Nyandura',
                        'Gwanyama',
                        'Kirungwe',
                        'Kasange',
                    ],
                },
                {
                    ward: 'Bugaga',
                    streets: ['Bugaga', 'Nkundutsi'],
                },
                {
                    ward: 'Kigembe',
                    streets: ['Kigembe', 'Kasangezi'],
                },
                {
                    ward: 'Nyumbigwa',
                    streets: ['Nyumbigwa', 'Kasyenene'],
                },
                {
                    ward: 'Asante Nyerere',
                    streets: ['Asante Nyerere', 'Sogeeni Kwiliba'],
                },
                {
                    ward: 'Kurugongo',
                    streets: ['Kurugongo', 'Chekenya', 'Kabulanzwili'],
                },
                {
                    ward: 'Shunguliba',
                    streets: ['Shunguliba', 'Malalo', 'Kazage'],
                },
                {
                    ward: 'Nyachenda',
                    streets: ['Nyachenda', 'Mwali'],
                },
                {
                    ward: 'Muganza',
                    streets: ['Muganza', 'Mwanga'],
                },
            ],
        },
        {
            district: 'Kibondo',
            wards: [
                {
                    ward: 'Kibondo  Mjini',
                    streets: ['Kibondo', 'Nengo', 'Kumwambu', 'Nabuhima', 'Biturana'],
                },
                {
                    ward: 'Murungu',
                    streets: ['Kumhasha', 'Kumbanga'],
                },
                {
                    ward: 'Misezero',
                    streets: ['Twabagondozi', 'Kumukugwa'],
                },
                {
                    ward: 'Bunyambo',
                    streets: ['Minyinya', 'Bunyambo', 'Samvura'],
                },
                {
                    ward: 'Rugongwe',
                    streets: ['Kichananga', 'Magarama', 'Kigaga', 'Kigina', 'Kisogwe'],
                },
                {
                    ward: 'Busunzu',
                    streets: ['Busunzu', 'Nyakwi'],
                },
                {
                    ward: 'Busagara',
                    streets: ['Kifura', 'Kigendeka', 'Nyaruyoba', 'Kasaka'],
                },
                {
                    ward: 'Mabamba',
                    streets: ['Nyange', 'Mabamba', 'Mkarazi', 'Nyakasanda'],
                },
                {
                    ward: 'Kizazi',
                    streets: ['Nyarugusu', 'Nyabitaka', 'Kumshwabure'],
                },
                {
                    ward: 'Kumsenga',
                    streets: ['Kumsenga', 'Kibuye', 'Kagezi'],
                },
                {
                    ward: 'Itaba',
                    streets: ['Buyezi', 'Mukabuye', 'Kigogo'],
                },
            ],
        },
        {
            district: 'Buhigwe',
            wards: [
                {
                    ward: 'Buhigwe',
                    streets: ['Buhigwe', 'Nyankoronko', 'Mulera', 'Kavomo'],
                },
                {
                    ward: 'Munzeze',
                    streets: ['Munzeze', 'Kigogwe', 'Murungu', 'Kishanga'],
                },
                {
                    ward: 'Rusaba',
                    streets: ['Rusaba', 'Kinazi', 'Kimala'],
                },
                {
                    ward: 'Janda',
                    streets: ['Janda', 'Bukuba', 'Mahanga', 'Nyamihanga'],
                },
                {
                    ward: 'Munyegera',
                    streets: ['Munyegera', 'Songambele'],
                },
                {
                    ward: 'Muganza',
                    streets: ['Muganza', 'Nyamakala', 'Msivyi', 'Mwibuye'],
                },
                {
                    ward: 'Mwanga B',
                    streets: ['Mwanga B', 'Musanga'],
                },
                {
                    ward: 'Muyama',
                    streets: ['Nyanga', 'Kalege', 'Kasumo'],
                },
                {
                    ward: 'Kajana',
                    streets: ['Kajana', 'Katundu'],
                },
                {
                    ward: 'Kilelema',
                    streets: ['Kilelema', 'Migongo'],
                },
                {
                    ward: 'Nyamugali',
                    streets: ['Nyamugali', 'Bulimanyi', 'Kigege'],
                },
                {
                    ward: 'Munanila',
                    streets: [
                        'Munanila',
                        'Kitambuka',
                        'Mkatanga',
                        'Nyakimwe',
                        'Nyarutabwe',
                        'Mnanila B',
                        'Msagara',
                        'Kishengezi',
                        'Kafene',
                    ],
                },
                {
                    ward: 'Muhinda',
                    streets: [
                        'Muhinda',
                        'Mubanga',
                        'Nyaruboza',
                        'Changwe',
                        'Mbweru',
                        'Ruhororo',
                    ],
                },
                {
                    ward: 'Mugera',
                    streets: ['Mugera', 'Katundu'],
                },
                {
                    ward: 'Biharu',
                    streets: ['Biharu', 'Kigege'],
                },
                {
                    ward: 'Kibande',
                    streets: ['Kibande', 'Bweranka'],
                },
                {
                    ward: 'Mwayaya',
                    streets: ['Mwayaya', 'Kibwigwa'],
                },
            ],
        },
        {
            district: 'Uvinza',
            wards: [
                {
                    ward: 'Uvinza',
                    streets: ['Mwamila', 'Chakulu', 'Basanza', 'Uvinza'],
                },
                {
                    ward: 'Nguruka',
                    streets: ['Bweru', 'Nguruka', 'Nyangabo', 'Itebula'],
                },
                {
                    ward: 'Buhingu',
                    streets: ['Kalilani', 'Nkonkwa', 'Katumbi', 'Buhingu'],
                },
                {
                    ward: 'Sigunga',
                    streets: ['Kaparamsenga', 'Sigunga', 'Herembe'],
                },
                {
                    ward: 'Kalya',
                    streets: ['Sibwesa', 'Kalya', 'Kashughulu'],
                },
                {
                    ward: 'Simbo',
                    streets: ['Simbo', 'Kasuku', 'Nyamoli', 'Kaseke'],
                },
                {
                    ward: 'Kandaga',
                    streets: ['Mlela', 'Kandaga', 'Kazuramimba', 'Kalenge', 'Nyanganga'],
                },
                {
                    ward: 'Sunuka',
                    streets: ['Kirando', 'Lyabusende', 'Karago', 'Sunuka', 'Songambele'],
                },
                {
                    ward: 'Ilagala',
                    streets: ['Mwakizega', 'Ilagala', 'Kajeje'],
                },
            ],
        },
        {
            district: 'Kakonko',
            wards: [
                {
                    ward: 'Kakonko',
                    streets: [
                        'Kakonko',
                        'Mbizi',
                        'Itumbuko',
                        'Muganza',
                        'Kanyonza',
                        'Kabingo',
                    ],
                },
                {
                    ward: 'Kasanda',
                    streets: ['Kasanda', 'Chilambo', 'Kazilamihunda'],
                },
                {
                    ward: 'Mugunzu',
                    streets: ['Mugunzu', 'Kiduduye', 'Nyagwijima'],
                },
                {
                    ward: 'Gwanumpu',
                    streets: ['Gwanumpu', 'Katanga', 'Bukirilo', 'Ilabiro'],
                },
                {
                    ward: 'Kiziguzigu',
                    streets: ['Kiziguzigu', 'Kiyobera'],
                },
                {
                    ward: 'Kasuga',
                    streets: ['Kasuga', 'Kinonko', 'Nyakayenzi'],
                },
                {
                    ward: 'Rugenge',
                    streets: ['Kiga', 'Kasongati'],
                },
                {
                    ward: 'Muhange',
                    streets: ['Gwarama', 'Kabare', 'Muhange'],
                },
                {
                    ward: 'Nyabibuye',
                    streets: [
                        'Rumashi',
                        'Nyabibuye',
                        'Nyamtukuza',
                        'Kinyinya',
                        'Chuzaro',
                    ],
                },
            ],
        },
    ],
};

const kilimanjaro = {
    region: 'Kilimanjaro',
    districts: [
        {
            district: 'Moshi Cbd',
            wards: [
                {
                    ward: 'Mawenzi',
                    streets: ['Hindu', 'Mawenzi'],
                },
                {
                    ward: 'Kilimanjaro',
                    streets: ['Kilimanjaro', 'Makongoro', 'Mawenzi'],
                },
                {
                    ward: 'Rau',
                    streets: ['Karikacha', 'Kariwa Chini', 'Sabasaba'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Sokoni', 'Makange', 'Shaurimoyo'],
                },
                {
                    ward: 'Njoro',
                    streets: ['Dobi', 'Railway', 'Sokoni', 'Viwanda'],
                },
                {
                    ward: 'Bondeni',
                    streets: ['Mbuyuni', 'Sokoni'],
                },
                {
                    ward: 'Kiusa',
                    streets: ['Kiusa Sokoni', 'Kiusa Line'],
                },
                {
                    ward: 'Korongoni',
                    streets: ['Korongoni', 'Vijana', 'Viwanda'],
                },
                {
                    ward: 'Pasua',
                    streets: ['Majengo Mapya', 'Geti Fonga', 'Matindigani'],
                },
                {
                    ward: 'Kaloleni',
                    streets: ['Kalimani', 'Kaloleni'],
                },
                {
                    ward: 'Mji Mpya',
                    streets: ['Kwa Komba', 'Kwa Mtei', 'Langoni', 'Sokoni'],
                },
                {
                    ward: 'Msaranga',
                    streets: ['Msaranga', 'Msufini', 'Rauya'],
                },
                {
                    ward: 'Kiborloni',
                    streets: ['Kdc', 'Mnazi Mmoja', 'Sokoni'],
                },
                {
                    ward: 'Soweto',
                    streets: ['Sabasaba', 'Wailes', 'Khambaita'],
                },
                {
                    ward: 'Karanga',
                    streets: ['Magereza', 'Katanini'],
                },
                {
                    ward: 'Longuo',
                    streets: ['Kati', 'Kibo', 'Kitandu'],
                },
                {
                    ward: 'Miembeni',
                    streets: ['Miembeni', 'Arabica', 'Mji Mwema'],
                },
                {
                    ward: "Ng'ambo",
                    streets: ['Mnazi', 'Lombeta', "Ng'ambo"],
                },
                {
                    ward: 'Shirimatunda',
                    streets: ['Kigongoni', 'Bonite'],
                },
                {
                    ward: 'Bomambuzi',
                    streets: ['Bomambuzi', 'Sokoni', 'Kilimani', 'Kanisani', 'Relini'],
                },
                {
                    ward: 'Mfumuni',
                    streets: ['Mwereni', 'Ushirika'],
                },
            ],
        },
        {
            district: 'Moshi',
            wards: [
                {
                    ward: 'Mabogini',
                    streets: [
                        'Chekereni',
                        'Mabogini',
                        'Mtakuja',
                        'Mserekia',
                        'Muungano',
                        'Maendeleo',
                        'Mji Mpya',
                        'Mvuleni',
                    ],
                },
                {
                    ward: 'Kimochi',
                    streets: ['Sango', 'Mdawi', 'Shia', 'Mowo', 'Kisaseni', 'Lyakombila'],
                },
                {
                    ward: 'Old Moshi Mashariki',
                    streets: ['Tsuduni', 'Kikarara', 'Mahoma', 'Kidia'],
                },
                {
                    ward: 'Old Moshi Magharibi',
                    streets: ['Tella', 'Mande', 'Mandaka Mnono'],
                },
                {
                    ward: 'Uru Kusini',
                    streets: [
                        "Longuo 'a'",
                        'Okaseni',
                        'Kariwa',
                        'Rau',
                        'Kitandu',
                        'Kimanganuni',
                        'Shinga',
                    ],
                },
                {
                    ward: 'Uru Mashariki',
                    streets: [
                        'Materuni',
                        'Mruwia',
                        'Kyaseni',
                        'Mnini',
                        'Kishumundu',
                        'Mwasi Kaskazini',
                        'Mwasi Kusini',
                    ],
                },
                {
                    ward: 'Uru Kaskazini',
                    streets: ['Msuni', 'Ongoma', 'Mrawi', 'Njari'],
                },
                {
                    ward: 'Uru Shimbwe',
                    streets: ['Shimbwe Juu', 'Shimbwe Chini'],
                },
                {
                    ward: 'Mbokomu',
                    streets: ['Korini Juu', 'Korini Kusini', 'Tema', 'Korini Kati'],
                },
                {
                    ward: 'Arusha Chini',
                    streets: ['Chemchem', 'Mikocheni'],
                },
                {
                    ward: 'Kibosho Kirima',
                    streets: ['Kirima Juu', 'Kirima Kati', 'Boro'],
                },
                {
                    ward: 'Kindi',
                    streets: [
                        'Kindi',
                        'Kindi Msasani',
                        'Chekereni Weruweru',
                        'Sambarai',
                        'Kindi Juu',
                    ],
                },
                {
                    ward: 'Kibosho Okaoni',
                    streets: [
                        'Omarini',
                        'Kitandu',
                        'Mloe',
                        'Sisamaro',
                        'Dakau',
                        'Mkomilo',
                    ],
                },
                {
                    ward: 'Kibosho Kati',
                    streets: [
                        'Uri',
                        'Otaruni',
                        'Uchau Kaskazini',
                        'Uchau Kusini',
                        'Maua',
                    ],
                },
                {
                    ward: 'Kibosho Magharibi',
                    streets: [
                        'Manushi Ndoo',
                        'Manushi Sinde',
                        'Kombo',
                        'Mkomongo',
                        'Umbwe Sinde',
                        'Kifuni',
                        'Umbwe Onana',
                        'Munishi Sinde Mashariki',
                        'Manushi Kati',
                        'Umbwe Kati',
                    ],
                },
                {
                    ward: 'Kibosho Mashariki',
                    streets: ['Singa', 'Mweka', 'Sungu'],
                },
                {
                    ward: 'Mwika Kusini',
                    streets: ['Kimangaro', 'Kiruweni', 'Kondeni', 'Mawanjeni', 'Matala'],
                },
                {
                    ward: 'Mwika Kaskazini',
                    streets: [
                        'Mrimbo Uuo',
                        'Maringa',
                        'Lole Marera',
                        'Msae Nganyeni',
                        'Msae Kinyamvuo',
                        'Lole',
                    ],
                },
                {
                    ward: 'Mamba Kusini',
                    streets: ['Mkolowony', 'Lekura', 'Kiria', 'Kimbogho', 'Kimangara'],
                },
                {
                    ward: 'Mamba Kaskazini',
                    streets: ['Kotela', 'Kokirie', 'Komakundi', 'Mboni'],
                },
                {
                    ward: 'Marangu Mashariki',
                    streets: [
                        'Lyamrakana',
                        'Sembeti',
                        'Rauya',
                        'Lyasongoro',
                        'Samanga',
                        'Arisi',
                        'Ashira',
                        'Mshiri',
                    ],
                },
                {
                    ward: 'Marangu Magharibi',
                    streets: [
                        'Komalyangoe',
                        'Kitowo',
                        'Kiraracha',
                        'Nduweni',
                        'Kyala',
                        'Mbahe',
                        'Komela',
                    ],
                },
                {
                    ward: 'Makuyuni (himo)',
                    streets: ['Komela'],
                },
                {
                    ward: 'Kilema Kaskazini',
                    streets: ['Ruwa', 'Makami Juu', 'Kyou', 'Makami Chini'],
                },
                {
                    ward: 'Kilema Kati',
                    streets: ['Rosho', 'Kimaroroni', 'Mkyashi', 'Ngangu'],
                },
                {
                    ward: 'Kilema Kusini',
                    streets: ['Marawe Kyura', 'Masaera', 'Leghomulo', 'Kilema  Chini'],
                },
                {
                    ward: 'Kirua Vunjo Kusini',
                    streets: ['Mabungo', 'Yamu Makaa', 'Yamu', 'Uchira', 'Koresa'],
                },
                {
                    ward: 'Kirua Vunjo Mashariki',
                    streets: ['Nganjoni', 'Mrumeni', 'Kileuwo', 'Mero'],
                },
                {
                    ward: 'Kirua Vunjo Magharibi',
                    streets: [
                        'Nduoni',
                        'Kwamare',
                        'Iwa',
                        'Kanji',
                        'Manu',
                        'Kanango',
                        'Marua',
                    ],
                },
                {
                    ward: 'Kahe Magharibi',
                    streets: [
                        'Ngasinyi',
                        'Ngasinyi B',
                        'Mwangaria',
                        'Kisangesangeni',
                        'Oria',
                        'Rau River',
                        'Mawala',
                        'Miwaleni',
                    ],
                },
                {
                    ward: 'Kahe Mashariki',
                    streets: [
                        'Soko',
                        'Kyomu',
                        'Ghona',
                        'Kochakindo',
                        'Kiterini',
                        'Mikameni',
                    ],
                },
                {
                    ward: 'Njia Panda',
                    streets: ['Mikameni'],
                },
            ],
        },
        {
            district: 'Hai',
            wards: [
                {
                    ward: 'Machame Mashariki',
                    streets: [
                        'Lyamungo-kilanya',
                        'Lyamungo-kati',
                        'Lyamungo-sinde',
                        'Nkuu Ndoo',
                        'Nkuu Sinde',
                    ],
                },
                {
                    ward: 'Machame Narumu',
                    streets: ['Tella', 'Orori', 'Usari', 'Mulama'],
                },
                {
                    ward: 'Weruweru',
                    streets: ['Ngosero', 'Mbatakero', 'Kikavu Chini', 'Longoi'],
                },
                {
                    ward: 'Mnadani',
                    streets: [
                        'Shiri Njoro',
                        'Shiri Mgungani',
                        'Kimashuku',
                        'Kwatito',
                        'Mijongweni',
                        'Shirimatunda',
                    ],
                },
                {
                    ward: 'Machame Uroki',
                    streets: ['Mamba', 'Uswaa', 'Uraa', 'Kiselu'],
                },
                {
                    ward: 'Machame Magharibi',
                    streets: ['Nronga', 'Kyeeri'],
                },
                {
                    ward: 'Machame Kaskazini',
                    streets: ['Foo', 'Wari Ndoo', 'Wari Sinde', 'Nshara', 'Uduru'],
                },
                {
                    ward: 'Masama Magharibi',
                    streets: ['Lukani', 'Nkwansira', 'Kyuu', 'Mashua', 'Losaa'],
                },
                {
                    ward: 'Masama Kusini',
                    streets: ['Kwasadala', 'Kware', 'Mungushi', 'Mkombozi'],
                },
                {
                    ward: 'Masama Rundugai',
                    streets: ['Kawaya', 'Mkalama', 'Chekimaji', 'Chemka', 'Rundugai'],
                },
                {
                    ward: 'Kia',
                    streets: ['Tindigani', 'Sanya Station', 'Mtakuja'],
                },
                {
                    ward: "Bomang'ombe",
                    streets: ['Mtakuja'],
                },
                {
                    ward: 'Masama Mashariki',
                    streets: ['Mbweera', 'Mboreny', 'Ngira', 'Sonu', 'Saawe'],
                },
                {
                    ward: 'Masama Kati',
                    streets: ['Mbosho', 'Mroma', 'Lemira Kati', 'Isuki', "Ng'uni"],
                },
                {
                    ward: 'Romu',
                    streets: ['Roo Ndoo', 'Roo Sinde', 'Isawerwa', 'Kimira', 'Mudio'],
                },
                {
                    ward: 'Muungano',
                    streets: ['Mudio'],
                },
                {
                    ward: 'Bondeni',
                    streets: ['Mudio'],
                },
            ],
        },
        {
            district: 'Siha',
            wards: [
                {
                    ward: 'Ivaeny',
                    streets: ['Wanri', 'Mae', 'Kishisha', 'Mae Juu'],
                },
                {
                    ward: 'Kashashi',
                    streets: [
                        'Kashashi',
                        'Kyengia',
                        'Lokiri',
                        'Kirisha',
                        'Manio',
                        'Naweru',
                    ],
                },
                {
                    ward: 'Karansi',
                    streets: [
                        'Karansi',
                        'Kandashi',
                        'Lekrimuni',
                        'Ashengai',
                        'Mendai',
                        'Ndinyika',
                    ],
                },
                {
                    ward: 'Gararagua',
                    streets: ['Wiri', 'Mawasiliano', 'Magadini', 'Mlangoni'],
                },
                {
                    ward: 'Sanya Juu',
                    streets: ['Sanya Juu', 'Sanya Hoyee', 'Kilingi', 'Merali'],
                },
                {
                    ward: 'Biriri',
                    streets: ['Naibilie', 'Majengo'],
                },
                {
                    ward: 'Makiwaru',
                    streets: [
                        'Makiwaru',
                        'Mowara',
                        'Mwinuko',
                        'Ngaritati',
                        'Ndarara',
                        'Tindigani',
                    ],
                },
                {
                    ward: 'Olkolili',
                    streets: ['Mkombozi', 'Olkolili'],
                },
                {
                    ward: 'Livishi',
                    streets: [
                        'Mowonjamu',
                        'Samaki Maini',
                        'Ngaroni',
                        'Mese',
                        'Nsherehehe',
                    ],
                },
                {
                    ward: 'Nasai',
                    streets: [
                        'Koboko Kusini',
                        'Koboko Kaskazini',
                        'Nrao Kisangara',
                        'Ngiriny',
                    ],
                },
                {
                    ward: 'Ngarenairobi',
                    streets: ['Namwai', 'Ngarenairobi', 'Mwangaza'],
                },
                {
                    ward: 'Ndumeti',
                    streets: ['Matadi', 'Roselyne'],
                },
                {
                    ward: 'Songu',
                    streets: ['Ngumbaru'],
                },
                {
                    ward: 'Ormelili',
                    streets: ['Ormelili', 'Sinai'],
                },
                {
                    ward: 'Donyomurwak',
                    streets: ['Donyomurwak', 'Embukoi', 'Oloiwang', 'Munge'],
                },
                {
                    ward: 'Miti Mirefu',
                    streets: ['Miti Mirefu', 'Kali Maji'],
                },
                {
                    ward: 'Kirua',
                    streets: ['Fuka', 'Lomakaa', 'Lawate'],
                },
            ],
        },
        {
            district: 'Mwanga',
            wards: [
                {
                    ward: 'Jipe',
                    streets: ['Jipe', 'Kambi Ya Simba', 'Ugweno'],
                },
                {
                    ward: 'Kigonigoni',
                    streets: ['Kigonigoni', 'Ruru', 'Kwakihindi', 'Butu Usangi'],
                },
                {
                    ward: 'Kivisini',
                    streets: ['Kivisini', 'Kitongoto', 'Kwanyange'],
                },
                {
                    ward: 'Kwakoa',
                    streets: ['Kwakoa', 'Ngulu'],
                },
                {
                    ward: 'Toloha',
                    streets: ['Gongoni', 'Karamba/ Ndea', 'Simu/ Kizungo'],
                },
                {
                    ward: 'Msangeni',
                    streets: ['Msangeni', 'Mruma', 'Simbomu', 'Mamba', 'Mwai'],
                },
                {
                    ward: 'Kifula',
                    streets: ['Masumbeni', 'Kadengere', 'Kisanjuni', 'Raa', 'Rangaa'],
                },
                {
                    ward: 'Mwaniko',
                    streets: ['Mwaniko', 'Mangio', 'Vuchamangofi', 'Mriti'],
                },
                {
                    ward: 'Shighatini',
                    streets: [
                        'Shighatini',
                        'Mfinga',
                        'Mkuu',
                        'Vuchamandambwe',
                        'Lambo',
                        'Ibaya',
                    ],
                },
                {
                    ward: 'Kileo',
                    streets: ['Kileo', 'Kivulini', 'Kifaru', 'Kituri'],
                },
                {
                    ward: 'Mwanga',
                    streets: ['Kituri'],
                },
                {
                    ward: "Lang'ata",
                    streets: ["Lang'atabora", "Lang'ata Kagongo", 'Nyabinda', 'Handeni'],
                },
                {
                    ward: 'Lembeni',
                    streets: [
                        'Lembeni',
                        'Kiruru Ibweijewa',
                        'Kisangara',
                        'Mbambua',
                        'Mangara',
                    ],
                },
                {
                    ward: 'Magagao',
                    streets: ['Kiverenge', 'Mgagao', 'Pangaro'],
                },
                {
                    ward: 'Ngujini',
                    streets: ['Ngujini', 'Chanjale', 'Songoa'],
                },
                {
                    ward: 'Kirya',
                    streets: ['Kirya', 'Kiti Cha Mungu', 'Njia Panda'],
                },
                {
                    ward: 'Kilomeni',
                    streets: ['Kilomeni', 'Sofe'],
                },
                {
                    ward: 'Kighare',
                    streets: ['Kighare', 'Kirongaya', 'Kilaweni', 'Ndanda'],
                },
                {
                    ward: 'Chomvu',
                    streets: ['Ndorwe', 'Mshewa', 'Chomvu', 'Kimbale'],
                },
                {
                    ward: 'Kirongwe',
                    streets: ['Mbore', 'Lomwe', 'Kiriche', 'Vuagha', 'Mwero'],
                },
            ],
        },
        {
            district: 'Same',
            wards: [
                {
                    ward: 'Same',
                    streets: ['Mwero'],
                },
                {
                    ward: 'Stesheni',
                    streets: ['Mwero'],
                },
                {
                    ward: 'Kisima',
                    streets: ['Mwero'],
                },
                {
                    ward: 'Ruvu',
                    streets: [
                        'Ruvu Jiungeni',
                        'Ruvu Mferejini',
                        'Marwa',
                        'Ruvu Darajani',
                    ],
                },
                {
                    ward: 'Njoro',
                    streets: ['Njoro', 'Ishinde', 'Emuguri'],
                },
                {
                    ward: 'Vumari',
                    streets: ['Vumari', 'Kizungo', 'Minyala'],
                },
                {
                    ward: 'Mwembe',
                    streets: ['Mwembe', 'Chajo', 'Nasuro'],
                },
                {
                    ward: 'Mhezi',
                    streets: ['Mteke', 'Mtunguja', 'Mhezi'],
                },
                {
                    ward: 'Vudee',
                    streets: ['Vudee', 'Kisesa', 'Ndolwa', 'Menam'],
                },
                {
                    ward: 'Mshewa',
                    streets: ['Kwizu', 'Marindi', 'Mshewa', 'Manka', 'Goma'],
                },
                {
                    ward: 'Msindo',
                    streets: ['Duma', 'Msindo', 'Mbakweni'],
                },
                {
                    ward: 'Kisiwani',
                    streets: ['Kisiwani', 'Mkonga-ijinyu'],
                },
                {
                    ward: 'Hedaru',
                    streets: ['Hedaru', 'Gunde Sine', 'Kijomu'],
                },
                {
                    ward: 'Suji',
                    streets: ['Malindi', 'Gonjanza'],
                },
                {
                    ward: 'Mabilioni',
                    streets: ['Mabilioni', 'Chekereni', 'Ruvu - Mbuyuni'],
                },
                {
                    ward: 'Chome',
                    streets: ['Marieni', 'Mhero', "Gwang'a"],
                },
                {
                    ward: 'Makanya',
                    streets: ['Makanya', 'Mgwasi', 'Kasapo'],
                },
                {
                    ward: 'Vunta',
                    streets: ['Vunta', 'Njagu', 'Kidunda', 'Mwala', 'Papa'],
                },
                {
                    ward: 'Maore',
                    streets: ['Maore', 'Mheza', 'Kadando', 'Mpirani'],
                },
                {
                    ward: 'Ndungu',
                    streets: ['Ndungu', 'Misufini'],
                },
                {
                    ward: 'Kalemawe',
                    streets: ['Kalemawe', 'Makokane', 'Karamba'],
                },
                {
                    ward: 'Kihurio',
                    streets: [
                        'Uzambara',
                        'Kankokoro',
                        'Mvure Kongei',
                        'Mbuyuni',
                        'Kongei',
                    ],
                },
                {
                    ward: 'Bendera',
                    streets: ['Bendera', 'Majengo', 'Mgandu'],
                },
                {
                    ward: 'Kirangare',
                    streets: ['Kirangare', 'Makasa', 'Idaru'],
                },
                {
                    ward: 'Bwambo',
                    streets: ['Vugwama', 'Mwateni', 'Bwambo'],
                },
                {
                    ward: 'Myamba',
                    streets: ['Kambeni', "Mang'a", 'Kirore', 'Goha', 'Kitubwa'],
                },
                {
                    ward: 'Mpinji',
                    streets: ['Mpinji', 'Ivuga', 'Kirongwe', 'Sambweni'],
                },
                {
                    ward: 'Mtii',
                    streets: ['Myombo', 'Mtii', 'Mafingiro'],
                },
                {
                    ward: 'Lugulu',
                    streets: ['Lugulu', 'Kanza', 'Vumba'],
                },
                {
                    ward: 'Bombo',
                    streets: ['Mvaa', 'Mjema', 'Bombo'],
                },
                {
                    ward: 'Vuje',
                    streets: ['Vuje', 'Mvango', 'Ntenga'],
                },
                {
                    ward: 'Bangalala',
                    streets: ['Mbangalala', 'Mkanyeni'],
                },
                {
                    ward: 'Gavao - Saweni',
                    streets: ['Gavao - Ngarito', 'Saweni'],
                },
                {
                    ward: 'Tae',
                    streets: ['Tae', 'Heikont', 'Rikweni'],
                },
            ],
        },
        {
            district: 'Rombo',
            wards: [
                {
                    ward: 'Mahida',
                    streets: ['Mahango', 'Nguduni'],
                },
                {
                    ward: 'Holili',
                    streets: ['Holili Mjini', 'Holili Vijijini'],
                },
                {
                    ward: 'Mamsera',
                    streets: ['Mamsera Juu', 'Mamsera Kati'],
                },
                {
                    ward: 'Mengwe',
                    streets: ['Mengwe Juu', 'Mengwe Chini'],
                },
                {
                    ward: 'Ngoyoni',
                    streets: ['Ngareni', 'Ngoyoni'],
                },
                {
                    ward: 'Manda',
                    streets: ['Manda Juu', 'Manda Chini'],
                },
                {
                    ward: 'Mengeni',
                    streets: ['Mengeni Chini', 'Mengeni Kitasha', 'Mfuruwashe'],
                },
                {
                    ward: 'Aleni',
                    streets: ['Machame Aleni', 'Aleni Chini'],
                },
                {
                    ward: 'Makiidi',
                    streets: ['Makiidi', 'Maharo'],
                },
                {
                    ward: 'Shimbi',
                    streets: ['Shimbi Kati', 'Shimbi Masho'],
                },
                {
                    ward: 'Kelamfua/mokala',
                    streets: ['Shimbi Masho'],
                },
                {
                    ward: 'Ushiri/ikuini',
                    streets: ['Ikuini', 'Ubaa', 'Ushiri'],
                },
                {
                    ward: 'Mrao Keryo',
                    streets: ['Mrao', 'Mmomwe', 'Keryo', 'Mashuba'],
                },
                {
                    ward: 'Kirwakeni',
                    streets: ['Keni', 'Kirwa', 'Kiraeni'],
                },
                {
                    ward: 'Katangara/mrere',
                    streets: ['Katangara', 'Mrere'],
                },
                {
                    ward: 'Kisale Msaranga',
                    streets: ['Kisale', 'Mahorosha', 'Msaranga'],
                },
                {
                    ward: 'Olele',
                    streets: ['Kilema', 'Kooti'],
                },
                {
                    ward: 'Marangu Kitowo',
                    streets: ['Marangu', 'Kitowo'],
                },
                {
                    ward: 'Kirongo Samanga',
                    streets: [
                        'Kirongo Juu',
                        'Kirongo Chini',
                        'Samanga',
                        'Kiwanda',
                        'Sangasa',
                    ],
                },
                {
                    ward: 'Kitirima',
                    streets: ['Msinga', 'Lesoroma', 'Kwalakamu'],
                },
                {
                    ward: 'Ubetu Kahe',
                    streets: ['Ubetu', 'Ngaseni', 'Kahe', 'Wama', 'Ture'],
                },
                {
                    ward: 'Nanjara',
                    streets: ['Msangai', 'Kibaoni', 'Nayeme'],
                },
                {
                    ward: 'Tarakea Motamburu',
                    streets: ['Mbomai', 'Kikelelwa'],
                },
                {
                    ward: 'Chala',
                    streets: ['Mamsera Chini', 'Chala', 'Kidondoni'],
                },
                {
                    ward: 'Shimbi Kwadele',
                    streets: ['Shimbi Mashami', 'Shimbi Mashariki'],
                },
                {
                    ward: 'Kingachi',
                    streets: ['Kingachi', 'Leto', 'Usongo'],
                },
                {
                    ward: 'Reha',
                    streets: ['Urauri', 'Nesae'],
                },
            ],
        },
    ],
};

const lindi = {
    region: 'Lindi',
    districts: [
        {
            district: 'Lindi  Cbd',
            wards: [
                {
                    ward: 'Makonde',
                    streets: ['Amani', 'Sheikh Badi'],
                },
                {
                    ward: 'Msinjahili',
                    streets: [
                        'Msonobari Juu',
                        'Msonobari Chini',
                        'Benki',
                        'Kanisa',
                        'Mlandege',
                        'Tankini',
                    ],
                },
                {
                    ward: 'Ndoro',
                    streets: [
                        'Ndoro Juu',
                        'Ndoro Chini',
                        'Ndoro Kaskazini',
                        'Ndoro Kusini',
                    ],
                },
                {
                    ward: 'Mikumbi',
                    streets: ['Uganda', 'Shule', 'Mikumbi Magharibi'],
                },
                {
                    ward: 'Mitandi',
                    streets: [
                        'Manispaa',
                        'Mnubi',
                        'Navetaveta',
                        'Ida Hoti',
                        'Jaffu Pembe',
                        'Maisala',
                    ],
                },
                {
                    ward: 'Rahaleo',
                    streets: ['Mchinga Road', 'Rahaleo', 'Ufukoni', 'Majengo'],
                },
                {
                    ward: 'Mwenge',
                    streets: ['Magogoni', 'Nhc', 'Kilimahewa', 'Mwenge', 'Migombani'],
                },
                {
                    ward: 'Matopeni',
                    streets: [
                        'Mtuleni A',
                        'Mtuleni B',
                        'Kawawa',
                        'Msikiti',
                        'Kota',
                        'Matopeni',
                        'Rips',
                    ],
                },
                {
                    ward: 'Wailesi',
                    streets: [
                        'Angaza',
                        'Angola',
                        'Majani Mapana',
                        'Rutamba',
                        'Kilimahewa',
                    ],
                },
                {
                    ward: 'Nachingwea',
                    streets: [
                        'Sabasaba',
                        'Mpilipili Kaskazini',
                        'Mpilipili Kusini',
                        'Nachingwea',
                    ],
                },
                {
                    ward: 'Rasbura',
                    streets: [
                        'Kariakoo',
                        'Likotwa',
                        'Stendi Mitwero',
                        'Mitema',
                        'Mmongo',
                        'Banduka',
                        'Muhimbili',
                        'Milonji',
                        'Mitwero Zahanati',
                        'Mabano',
                    ],
                },
                {
                    ward: 'Mtanda',
                    streets: [
                        'Mmukule',
                        'Mchochoro',
                        'Mtanda Kariakoo',
                        'Mtanda Kati',
                        'Mtanda Juu',
                        'Nanembo',
                        'Mtutu',
                    ],
                },
                {
                    ward: 'Jamhuri',
                    streets: ['Mtange', 'Kiduni', 'Tulieni', 'Mitumbati', 'Mayani'],
                },
                {
                    ward: 'Mingoyo',
                    streets: [
                        'Mingoyo',
                        'Mawasiliano',
                        'Raha Leo A',
                        'Raha  Leo B',
                        'Sokoni',
                        'Makonde',
                        'Mtele',
                        'Majengo',
                    ],
                },
                {
                    ward: "Ng'apa",
                    streets: [
                        'Mbuyuni',
                        'Mkupama',
                        'Mapokezi',
                        'Mahakamani',
                        'Livengula',
                        'Kumbaila',
                        'Cheleweni',
                    ],
                },
                {
                    ward: 'Tandangongoro',
                    streets: [
                        'Tandangongoro',
                        'Nalunyu',
                        'Nandambi',
                        'Mkanga',
                        'Msikiti',
                        'Zawiani',
                        'Zahanati',
                        'Muungano',
                    ],
                },
                {
                    ward: 'Chikonji',
                    streets: [
                        'Nyanyanje',
                        'Jangwani',
                        'Nanjinga',
                        'Likabuko',
                        'Koleji',
                        'Kiwanjani',
                    ],
                },
                {
                    ward: 'Mbanja',
                    streets: [
                        'Mbanja',
                        'Kikwetu',
                        "Likong'o",
                        'Mitonga',
                        'Nagiriki',
                        'Makonde',
                        'Masasi Ya Leo',
                        'Mtomkavu',
                    ],
                },
                {
                    ward: 'Kitumbikwela',
                    streets: ['Kitunda', 'Kitumbikwela', 'Nachingwea', 'Mnali', 'Sinde'],
                },
                {
                    ward: 'Mnazimmoja',
                    streets: [
                        'Sekondari',
                        'Zahanati',
                        'Muungano',
                        'Stendi',
                        'Ruaha',
                        'Mihogoni',
                        'Majengo',
                    ],
                },
            ],
        },
        {
            district: 'Lindi',
            wards: [
                {
                    ward: 'Nachunyu',
                    streets: ['Nachunyu', 'Mmumbu'],
                },
                {
                    ward: 'Sudi',
                    streets: ['Sudi', 'Kilimani', 'Madangwa', 'Mtegu'],
                },
                {
                    ward: 'Mnolela',
                    streets: [
                        'Mnolela',
                        'Mbuta',
                        'Ruhokwe',
                        'Namunda',
                        'Zingatia',
                        'Simana',
                    ],
                },
                {
                    ward: 'Kiwalala',
                    streets: [
                        'Mmangawanga',
                        'Narunyu',
                        'Kiwalala',
                        'Mandawa',
                        'Ruo',
                        'Mpembe',
                        'Mahumbika',
                    ],
                },
                {
                    ward: 'Mchinga',
                    streets: ['Mchinga I', 'Mchinga Ii', 'Ruvu'],
                },
                {
                    ward: 'Matimba',
                    streets: [
                        'Matimba',
                        'Moka',
                        'Likwaya',
                        'Kikomolela',
                        'Komolo',
                        'Kitohavi',
                    ],
                },
                {
                    ward: 'Nangaru',
                    streets: ['Makumba', 'Mkumbamosi', 'Muungano'],
                },
                {
                    ward: 'Rutamba',
                    streets: ['Rutamba Zamani', 'Michee', 'Rutamba Sasa', 'Chilala'],
                },
                {
                    ward: 'Chiponda',
                    streets: [
                        'Chiponda',
                        'Mwangu',
                        'Ntauna',
                        'Chiodya',
                        'Chiodya B',
                        'Mihanga',
                    ],
                },
                {
                    ward: 'Mtua',
                    streets: ['Kilimahewa A', 'Kilimahewa B'],
                },
                {
                    ward: 'Nyangamara',
                    streets: [
                        'Nyangamara A',
                        'Nyangamara B',
                        'Litipu',
                        'Madingo',
                        'Utimbe',
                    ],
                },
                {
                    ward: 'Mandwanga',
                    streets: [
                        'Chiuta',
                        'Mikonge',
                        'Mandwanga',
                        'Malungo',
                        'Nambahu',
                        'Nyundo I',
                        'Mnazimmoja',
                        'Milamba',
                        'Lindwandwali',
                    ],
                },
                {
                    ward: 'Nahukahuka',
                    streets: [
                        'Nahukahuka',
                        'Nahukahuka B',
                        'Lipome',
                        'Linoha',
                        'Mbawala',
                    ],
                },
                {
                    ward: 'Nyengedi',
                    streets: ['Luwale', 'Nyengedi', 'Nyengedi B'],
                },
                {
                    ward: 'Mtama',
                    streets: ['Makonde', 'Mihogoni', 'Mvuleni', 'Mpenda'],
                },
                {
                    ward: 'Nyangao',
                    streets: [
                        'Nyangao A',
                        'Nyangao B',
                        'Mtakuja Ii',
                        'Mahiwa',
                        'Litingi',
                    ],
                },
                {
                    ward: 'Namupa',
                    streets: ['Namupa', 'Muungano Ii', 'Mihima', 'Nndawa', 'Mnamba'],
                },
                {
                    ward: 'Mnara',
                    streets: [
                        'Mnara',
                        'Mkanga Ii',
                        'Chikombe',
                        'Mtakuja',
                        'Ntene',
                        'Ntene B',
                        'Liganga',
                    ],
                },
                {
                    ward: 'Milola',
                    streets: [
                        'Milola A',
                        'Milola B',
                        'Milola Magharibi',
                        'Legezamwendo',
                        'Mkangaulani',
                        'Ruchemi',
                        'Namtamba',
                    ],
                },
                {
                    ward: 'Kiwawa',
                    streets: ['Kiwawa', 'Mputwa'],
                },
                {
                    ward: 'Mipingo',
                    streets: ['Mipingo', 'Matapwa', 'Mnyangara', 'Namkongo', 'Lihimilo'],
                },
                {
                    ward: 'Kitomanga',
                    streets: ['Kitomanga', 'Mkwajuni'],
                },
                {
                    ward: 'Kilola Mbwani',
                    streets: ['Maloo', "Mnang'ole", 'Kilolambwani', 'Dimba'],
                },
                {
                    ward: 'Kilangala',
                    streets: ['Mnimbila', 'Mtumbikile', 'Kilangala', 'Kilangala B'],
                },
                {
                    ward: 'Pangatena',
                    streets: ['Pangatena', 'Njonjo', 'Hingawali'],
                },
                {
                    ward: 'Navanga',
                    streets: ['Navanga', 'Mongomongo', 'Shuka', 'Nampunga'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Masasi', 'Majengo B', 'Mbalala', "Nang'aka", 'Mkwajuni'],
                },
                {
                    ward: 'Namangale',
                    streets: [
                        'Chiwerere',
                        'Namangale',
                        'Utimbura',
                        'Namangale B',
                        'Mawilo',
                    ],
                },
                {
                    ward: 'Longa',
                    streets: ['Tulieni', 'Mtua Longa', 'Narwadi'],
                },
                {
                    ward: 'Mtumbya',
                    streets: [
                        'Mtumbya',
                        'Kilimanjaro',
                        'Luwale',
                        'Nyengedi',
                        'Nyengedi B',
                    ],
                },
                {
                    ward: 'Kinyope',
                    streets: ['Kinyope', 'Namkopo', 'Ruhoma', 'Makangara'],
                },
                {
                    ward: 'Mvuleni',
                    streets: ['Kijiweni', 'Mvuleni A', 'Mvuleni Mashariki', 'Mvuleni B'],
                },
            ],
        },
        {
            district: 'Nachingwea',
            wards: [
                {
                    ward: 'Nachingwea Mjini',
                    streets: ['Mvuleni B'],
                },
                {
                    ward: 'Nambambo',
                    streets: ['Nambambo', 'Mazoezi', 'Nampemba'],
                },
                {
                    ward: 'Kilimanihewa',
                    streets: ['Kilima Hewa', 'Mtepeche', 'Sungura'],
                },
                {
                    ward: 'Stesheni',
                    streets: [
                        'Stesheni',
                        'Songambele',
                        'Chiumbati  Miembeni',
                        'Chekeleni',
                        'Chemchem',
                        "Nang'olola",
                        'Mchangani',
                    ],
                },
                {
                    ward: 'Namatula',
                    streets: ['Muungano', 'Namatula'],
                },
                {
                    ward: 'Nangowe',
                    streets: ['Nangowe (m)', 'Nangowe(s)'],
                },
                {
                    ward: 'Mpiruka',
                    streets: ['Mpiruka', 'Mkumba', 'Libea', 'Mpiruka B'],
                },
                {
                    ward: 'Mkotokuyana',
                    streets: ['Mkotokuyana', 'Mandai', 'Matemanga', 'Maili Sita'],
                },
                {
                    ward: 'Naipanga',
                    streets: ['Naipanga', 'Nagaga', 'Joshoni'],
                },
                {
                    ward: 'Ndomoni',
                    streets: ['Ndomoni', 'Makitikiti', 'Mkurupilo', 'Ndomondo'],
                },
                {
                    ward: 'Naipingo',
                    streets: ['Naipingo', 'Kihuwe', 'Mapochelo'],
                },
                {
                    ward: 'Mtua',
                    streets: ['Mtua', 'Nalengwe', 'Namanga'],
                },
                {
                    ward: 'Mnero Miembeni',
                    streets: [
                        'Mnero Miembeni',
                        'Namkula',
                        'Mkonjera Chini',
                        'Ntila',
                        'Farm Eight',
                        'Mkonjela',
                    ],
                },
                {
                    ward: 'Ruponda',
                    streets: [
                        'Nammanga',
                        'Mandawa',
                        'Ruponda',
                        'Mwananyamala',
                        'Mibondo',
                    ],
                },
                {
                    ward: 'Marambo',
                    streets: [
                        'Marambo A',
                        'Maramba B',
                        'Litula',
                        'Mituguru',
                        'Ikungu',
                        'Rupota',
                    ],
                },
                {
                    ward: 'Chiola',
                    streets: ['Chiola', 'Chiola B', 'Mtimbo', 'Chingunduli', 'Namauni'],
                },
                {
                    ward: 'Mkoka',
                    streets: [
                        'Mkoka',
                        'Rweje',
                        'Likwela',
                        'Narungombe',
                        'Nandile',
                        'Chilaile',
                    ],
                },
                {
                    ward: 'Kipara Mnero',
                    streets: [
                        'Kipara Mnero',
                        'Nambalapala',
                        'Mwandila',
                        'Miumbuti',
                        'Libundu',
                    ],
                },
                {
                    ward: 'Mnero Ngongo',
                    streets: ['Mnero Ngongo', 'Mpute', 'Kitandi', 'Kimawe'],
                },
                {
                    ward: 'Namikango',
                    streets: ['Namikango "a"', 'Namikango "b"', 'Nangunde'],
                },
                {
                    ward: 'Lionja',
                    streets: ['Lionja "a"', 'Lionja "b"', 'Litanda Mtama', 'Naulingo'],
                },
                {
                    ward: 'Nditi',
                    streets: ['Ngangambo', 'Namanja'],
                },
                {
                    ward: 'Namapwia',
                    streets: ['Namapwia', 'Likongowele', 'Mbute'],
                },
                {
                    ward: 'Mbondo',
                    streets: ['Mbondo', 'Nahimba', 'Nakalonji', 'Chimbendenga'],
                },
                {
                    ward: 'Matekwe',
                    streets: ['Matekwe', 'Majonanga', 'Majengo'],
                },
                {
                    ward: 'Kilimarondo',
                    streets: ['Kilimarondo', 'Nanjihi', 'Namatunu'],
                },
                {
                    ward: 'Kiegei',
                    streets: ['Kiegei "a"', 'Kiegei "b"'],
                },
                {
                    ward: 'Mitumbati',
                    streets: [
                        'Mshikamano',
                        'Mitumbati',
                        'Mwenge',
                        'Maziwa',
                        'Mitumbati B',
                    ],
                },
                {
                    ward: 'Kipara Mtua',
                    streets: ['Kipara Mtua', 'Manowali', 'Farm 17', 'Farm 18', 'Farm 19'],
                },
                {
                    ward: "Nang'ondo",
                    streets: ["Nang'ondo", 'Namatumbusi', 'Kwa Kampanga', 'Mtawatawa'],
                },
                {
                    ward: 'Mchonda',
                    streets: ['Mchonda', 'Mkukwe', 'Mkatapori'],
                },
                {
                    ward: 'Ngunichile',
                    streets: ['Ngunichile', 'Lipuyu', 'Ilolo'],
                },
                {
                    ward: 'Raha Leo',
                    streets: ['Maendeleo', 'Raha Leo', 'Kilombero'],
                },
                {
                    ward: 'Chiumbati Shuleni',
                    streets: ['Chiwindi', 'Chiumbati Shuleni', 'Tandika', 'Luagara'],
                },
                {
                    ward: 'Boma',
                    streets: ['Luagara'],
                },
                {
                    ward: 'Ugawaji',
                    streets: ['Luagara'],
                },
            ],
        },
        {
            district: 'Kilwa',
            wards: [
                {
                    ward: 'Kilwa Masoko',
                    streets: ['Luagara'],
                },
                {
                    ward: 'Kivinje/singino',
                    streets: [
                        'Magengeni',
                        'Miramba A',
                        'Kinyonga',
                        'Kisangi Shamba',
                        'Mayungiyungi',
                        'Mgongeni',
                        'Marumba',
                        "Mkang'anda",
                        'Matandu Darajani',
                        'Mkenda',
                        'Njenga',
                        'Nangurukuru',
                        'Mpingoni',
                        'Lingaula',
                        'Ukote',
                        'Kisangi Mjini',
                        'Magofuni',
                        'Bonde',
                        'Dodomezi',
                        'Kilembe',
                        'Malumba',
                        'Mtambuu',
                        'Kitumbini',
                    ],
                },
                {
                    ward: 'Miteja',
                    streets: ['Miteja A', 'Mtoni', 'Tilawandu', 'Mtukwao'],
                },
                {
                    ward: 'Tingi',
                    streets: ['Njianne', 'Tingi', 'Mtandango'],
                },
                {
                    ward: 'Mingumbi',
                    streets: [
                        'Mingumbi',
                        'Nambondo',
                        'Chapita',
                        'Nangambi',
                        'Nampunga',
                        'Kililima',
                    ],
                },
                {
                    ward: 'Chumo',
                    streets: ['Chumo', 'Ingirito', 'Kinywanyu', 'Hongwe'],
                },
                {
                    ward: 'Kikole',
                    streets: ['Kikole', 'Ruhatwe', 'Kisangi', 'Migeregere'],
                },
                {
                    ward: 'Mandawa',
                    streets: [
                        'Mandawa',
                        'Hotelitatu',
                        'Mchakama',
                        'Kiwawa',
                        'Mavuji',
                        'Mkondaji',
                    ],
                },
                {
                    ward: 'Pande / Mikoma',
                    streets: [
                        'Pande',
                        'Malalani',
                        'Mtitimira',
                        'Songomnara',
                        'Mikoma/nakimwera',
                        "Nang'oo Kiwala",
                        'Namwedo',
                    ],
                },
                {
                    ward: 'Lihimalyao',
                    streets: [
                        'Lihimalyao Kaskazini',
                        'Ruyaya',
                        'Lihimalyao Kusini',
                        'Rushungi',
                        'Kisongo',
                        'Namakongoro',
                    ],
                },
                {
                    ward: 'Kiranjeranje',
                    streets: [
                        'Kiranjeranje',
                        'Makangaga',
                        'Mbwemkuru',
                        'Mtandi',
                        'Mirumba',
                        'Kiswere',
                    ],
                },
                {
                    ward: 'Nanjirinji',
                    streets: ['Nanjirinji A', 'Nanjirinji B', 'Nakiu'],
                },
                {
                    ward: 'Likawage',
                    streets: ['Likawage', 'Nainokwe', 'Liwiti'],
                },
                {
                    ward: 'Mitole',
                    streets: ['Mitole', 'Ngea'],
                },
                {
                    ward: 'Njinjo',
                    streets: ['Njinjo', 'Kisimamkika', 'Kipindimbi'],
                },
                {
                    ward: 'Miguruwe',
                    streets: ['Miguruwe', 'Zinga Kibaoni', 'Nakingombe', 'Mtepera'],
                },
                {
                    ward: 'Kandawale',
                    streets: ['Kandawale', 'Ngarambi', 'Namatewa', 'Mtumbei Mpopera'],
                },
                {
                    ward: 'Kipatimu',
                    streets: [
                        'Kipatimu',
                        'Mtondo Kimwaga',
                        'Nandembo',
                        'Darajani',
                        'Mkarango',
                        'Nandete',
                    ],
                },
                {
                    ward: 'Kinjumbi',
                    streets: ['Kinjumbi Kihema', 'Miumbu', 'Pungutini', 'Mtyalambuko'],
                },
                {
                    ward: 'Songosongo',
                    streets: ['Songosongo'],
                },
                {
                    ward: 'Kibata',
                    streets: ['Kibata', 'Mwengei', 'Hanga', 'Mtende'],
                },
                {
                    ward: 'Namayuni',
                    streets: ['Namayuni', 'Lyomanga', 'Namakolo', 'Ngorongoro', 'Nahama'],
                },
                {
                    ward: 'Somanga',
                    streets: [
                        'Somanga Kaskazini',
                        'Somanga Kusini',
                        'Namatungutungu',
                        'Marendego',
                        'Somanga Simu',
                    ],
                },
            ],
        },
        {
            district: 'Liwale',
            wards: [
                {
                    ward: 'Liwale Mjini',
                    streets: [
                        'Makonjiganga',
                        'Kilipwike',
                        'Naluleo',
                        'Mungurumo',
                        'Mpirani',
                        'Tepetepe',
                    ],
                },
                {
                    ward: 'Liwale B',
                    streets: [
                        "Liwale 'b'",
                        'Nanjegeja',
                        'Mahonga',
                        'Mikunya',
                        'Tuungane',
                        'Legezamwendo',
                    ],
                },
                {
                    ward: 'Mbaya',
                    streets: ['Mbaya', 'Namtumbwa', 'Nduruka', 'Namihu', 'Mtawango'],
                },
                {
                    ward: 'Mirui',
                    streets: ['Mirui', "Lineng'ene", 'Naujombo', 'Kipelele'],
                },
                {
                    ward: 'Kiangara',
                    streets: ['Kiangara', 'Litou', 'Kitogoro', 'Mtawatawa'],
                },
                {
                    ward: 'Mangirikiti',
                    streets: [
                        'Mangirikiti',
                        'Kimbemba',
                        'Ngorongopa',
                        'Kipule',
                        'Mkongonage',
                        'Makinda',
                    ],
                },
                {
                    ward: 'Nangano',
                    streets: ['Nangano', 'Nahoro', 'Mtungunyu'],
                },
                {
                    ward: 'Ngongowele',
                    streets: ['Ngongowele', 'Mikuyu', 'Ngunja'],
                },
                {
                    ward: 'Mihumo',
                    streets: ['Mihumo', 'Darajani', 'Likombora', 'Turuki'],
                },
                {
                    ward: 'Makata',
                    streets: [
                        'Makata',
                        'Mitawa',
                        'Mkundi',
                        'Kigwema',
                        'Mpengere',
                        'Lubaba',
                    ],
                },
                {
                    ward: 'Mpigamiti',
                    streets: ['Mpigamiti', 'Namakololo', 'Mitawa'],
                },
                {
                    ward: 'Mlembwe',
                    streets: ['Mlembwe', 'Nambinda', 'Ndapata'],
                },
                {
                    ward: 'Barikiwa',
                    streets: ['Barikiwa', 'Chimbuko', 'Ndunyungu'],
                },
                {
                    ward: 'Mkutano',
                    streets: ['Mkutano', 'Kikulyungu'],
                },
                {
                    ward: 'Kimambi',
                    streets: ['Kimambi'],
                },
                {
                    ward: 'Kichonda',
                    streets: ['Kichonda', 'Mbuli', 'Nyela'],
                },
                {
                    ward: 'Nangando',
                    streets: [
                        'Nangando',
                        'Mbonde',
                        'Lindota',
                        'Kinguluwila',
                        'Kitamamuhi',
                    ],
                },
                {
                    ward: 'Likongowele',
                    streets: ['Likongowele', 'Nganyaga', 'Kuchocholokana', 'Hulia'],
                },
                {
                    ward: 'Lilombe',
                    streets: ['Lilombe', 'Luwele', 'Chigugu'],
                },
                {
                    ward: 'Kibutuka',
                    streets: ['Kibutuka', 'Ngumbu'],
                },
            ],
        },
        {
            district: 'Ruangwa',
            wards: [
                {
                    ward: 'Ruangwa',
                    streets: ['Mchangani', 'Lipande', 'Likangala'],
                },
                {
                    ward: 'Chunyu',
                    streets: ['Chunyu', 'Namikulo', 'Mihewe'],
                },
                {
                    ward: 'Mbekenyera',
                    streets: [
                        'Mbekenyera',
                        'Naunambe',
                        'Chingumbwa',
                        'Namilema',
                        'Mkutingome',
                    ],
                },
                {
                    ward: 'Mandarawe',
                    streets: ['Mandarawe', 'Nachinyimba', 'Nandenje'],
                },
                {
                    ward: 'Nkowe',
                    streets: ['Nkowe', 'Mpumbe', 'Kipindimbi'],
                },
                {
                    ward: 'Likunja',
                    streets: [
                        'Likunja',
                        'Mitope',
                        'Mpara',
                        'Mtimbo-ruangwa',
                        'Mmawa',
                        'Kitandi',
                    ],
                },
                {
                    ward: 'Makanjiro',
                    streets: [
                        'Makanjiro',
                        'Chilangalile',
                        'Chikoko',
                        'Chinokole',
                        'Mbangara',
                    ],
                },
                {
                    ward: "Narung'ombe",
                    streets: ['Liuguru', 'Narungombe'],
                },
                {
                    ward: 'Namichiga',
                    streets: ['Namichiga A', 'Namichiga B', 'Namkonjela'],
                },
                {
                    ward: 'Mandawa',
                    streets: ['Mchichili', 'Nahanga', 'Mandawa Chini', 'Chikundi'],
                },
                {
                    ward: 'Nambilanje',
                    streets: ['Nambilanje', 'Nanjaru', 'Mkaranga', 'Mtondo'],
                },
                {
                    ward: 'Mnacho',
                    streets: ["Ng'au", 'Manokwe', 'Chimbila  B', 'Chimbila  A'],
                },
                {
                    ward: 'Chienjele',
                    streets: ['Chienjele', 'Namakuku', 'Mibure', "Ng'imbwa", 'Njawale'],
                },
                {
                    ward: 'Malolo',
                    streets: [
                        'Malolo',
                        'Nangumbu  A',
                        'Nangumbu B',
                        'Michenga  A',
                        'Michenga  B',
                        'Mtawilile',
                    ],
                },
                {
                    ward: 'Luchelengwa',
                    streets: ['Luchelegwa', 'Nandanga', 'Ipingo'],
                },
                {
                    ward: 'Chinongwe',
                    streets: [
                        'Chinongwe  A',
                        'Chinongwe  B',
                        'Juhudi  A',
                        'Juhudi  B',
                        'Litama',
                        'Likwachu',
                    ],
                },
                {
                    ward: 'Nanganga',
                    streets: ['Nanganga', 'Mbecha', 'Mchenganyumba', 'Mtakuja'],
                },
                {
                    ward: 'Nandagala',
                    streets: [
                        'Nandagala  A',
                        'Nandagala B',
                        'Mmawa',
                        'Namahema  A',
                        'Namahema  B',
                    ],
                },
                {
                    ward: 'Nachingwea',
                    streets: ['Nachingwea', 'Kilimanihewa', 'Dodoma'],
                },
                {
                    ward: 'Matambarale',
                    streets: [
                        'Nandandara',
                        'Matambarale Kaskazini',
                        'Matambarale Kusini',
                        'Namkatila',
                    ],
                },
                {
                    ward: 'Chibula',
                    streets: [
                        'Chibula',
                        'Namienje',
                        'Lichwachwa',
                        'Nachikalala',
                        'Muhuru',
                    ],
                },
                {
                    ward: "Mbwemkuru (machang'anja)",
                    streets: ['Nangurugai', "Machang'anja", 'Chikwale', 'Chiundu'],
                },
            ],
        },
    ],
};

const manyara = {
    region: 'Manyara',
    districts: [
        {
            district: 'Babati Cbd',
            wards: [
                {
                    ward: 'Babati',
                    streets: [
                        'Mrara',
                        'Babati Mjini',
                        'Maisaka  B',
                        'Kwere',
                        'Hangoni',
                        'Majengo',
                        "Waang'waray",
                    ],
                },
                {
                    ward: 'Nangara',
                    streets: [
                        'Nangara Ziwani',
                        'Nangara Kati',
                        'Mkuyuni  A',
                        'Mkuyuni  B',
                        'Maweni',
                        'Arri',
                        'Balowa',
                        'Halla',
                    ],
                },
                {
                    ward: 'Bagara',
                    streets: [
                        'Nyunguu',
                        'Komoto',
                        'Osterbay',
                        'Mji Mpya',
                        'Ngarenaro',
                        'Negamsi',
                        'Bagara Ziwani',
                        'Miomboni',
                        'Nakwa',
                    ],
                },
                {
                    ward: 'Maisaka',
                    streets: [
                        'Maisaka  A',
                        'Maisaka  Kati',
                        'Muruki',
                        'Sawe',
                        'Kiongozi',
                        'Malangi',
                    ],
                },
                {
                    ward: 'Singe',
                    streets: [
                        'Gendi Kuu',
                        'Nyawari',
                        'Gendi Barazani',
                        'Majengo Mapya',
                        'Managhat',
                    ],
                },
                {
                    ward: 'Mutuka',
                    streets: ['Mutuka', 'Chemchem'],
                },
                {
                    ward: 'Bonga',
                    streets: [
                        'Dawar',
                        'Bonga Mjini',
                        'Kandaka',
                        'Aya Badine',
                        'Wangboo',
                        'Haraa',
                        'Himiti',
                    ],
                },
                {
                    ward: 'Sigino',
                    streets: ['Sigino', 'Daghailoy', 'Singu', 'Imbilili'],
                },
            ],
        },
        {
            district: 'Babati',
            wards: [
                {
                    ward: 'Magugu',
                    streets: [
                        'Magugu',
                        'Gichameda',
                        'Mapea',
                        'Sarame',
                        'Masware',
                        'Mawemairo',
                        'Matufa',
                    ],
                },
                {
                    ward: 'Mwada',
                    streets: ['Mwada', 'Ngoley', 'Sangaiwe'],
                },
                {
                    ward: 'Nkaiti',
                    streets: ['Vilima Vitatu', 'Minjingu', 'Olasiti', 'Kakoi'],
                },
                {
                    ward: 'Magara',
                    streets: ['Manyara', 'Mayomayoka', 'Magara', 'Maweni', 'Moya'],
                },
                {
                    ward: 'Dareda',
                    streets: ['Seloto', 'Loto', 'Bermi'],
                },
                {
                    ward: 'Dabil',
                    streets: ['Maganjwa', 'Dabil', 'Mandi', 'Sabilo', 'Gidewari'],
                },
                {
                    ward: 'Bashnet',
                    streets: ['Bashnet', 'Guse', 'Walahu', 'Long'],
                },
                {
                    ward: 'Nar',
                    streets: ['Gabadaw', 'Nar', 'Endamanang'],
                },
                {
                    ward: 'Ufana',
                    streets: ['Diffir', 'Ufana', 'Saydoda'],
                },
                {
                    ward: 'Madunga',
                    streets: ['Madunga', 'Utwari', 'Gidng’war'],
                },
                {
                    ward: 'Endakiso',
                    streets: ['Gijedabung', 'Kwaraa', 'Endakiso'],
                },
                {
                    ward: 'Gallapo',
                    streets: ['Gallapo', 'Endanoga', 'Ayamango', 'Hallu', 'Gedamar'],
                },
                {
                    ward: 'Qash',
                    streets: [
                        'Qash',
                        'Majengo',
                        "Ornga'dida",
                        'Tsamasi',
                        'Ng’wang’weri',
                        'Endadosh',
                    ],
                },
                {
                    ward: 'Riroda',
                    streets: ['Sangara', 'Riroda', 'Endaberg', 'Hewasi'],
                },
                {
                    ward: 'Ayasanda',
                    streets: ['Ayasanda', 'Endanachan'],
                },
                {
                    ward: 'Gidas',
                    streets: ['Bubu', 'Gidas', 'Endadmet', 'Endamaghay'],
                },
                {
                    ward: 'Boay',
                    streets: ['Boay', 'Gijedaboshka', 'Gidabaghar'],
                },
                {
                    ward: 'Duru',
                    streets: ['Duru', 'Gesbert', 'Endagwe', 'Hoshani', 'Yarotonic'],
                },
                {
                    ward: 'Arri',
                    streets: [
                        'Dohom',
                        'Managha',
                        'Tsaayo',
                        'Dudiye',
                        'Sharmo',
                        'Endasago',
                        'Arri',
                    ],
                },
                {
                    ward: 'Kiru',
                    streets: [
                        'Kiamara',
                        'Kiru Ndogo',
                        'Kiru Six',
                        'Kiru  Dick',
                        'Erri',
                        'Kokomay',
                    ],
                },
                {
                    ward: 'Mamire',
                    streets: ['Endagile', 'Mwinkantsi', 'Mamire'],
                },
                {
                    ward: 'Ayalagaya',
                    streets: ['Dareda Kati', 'Haysam', 'Gajal'],
                },
                {
                    ward: 'Secheda',
                    streets: ['Darwedick', 'Luxmanda', 'Secheda', 'Orbesh'],
                },
                {
                    ward: 'Kisangaji',
                    streets: ['Kisangaji', 'Shaurimoyo', 'Kazaroho'],
                },
                {
                    ward: 'Qameyu',
                    streets: ['Endaw', 'Qameyu', 'Merr', 'Gawal'],
                },
            ],
        },
        {
            district: "Hanang'",
            wards: [
                {
                    ward: 'Katesh',
                    streets: ['Gawal'],
                },
                {
                    ward: 'Ganana',
                    streets: ['Gawal'],
                },
                {
                    ward: 'Mogitu',
                    streets: ['Gabadaw', 'Gidagamowd', 'Mogitu', 'Jorodom'],
                },
                {
                    ward: 'Gendabi',
                    streets: ['Gendabi', 'Harghushay', 'Sebasi', 'Sarjanda'],
                },
                {
                    ward: 'Gitting',
                    streets: ['Barjomot', 'Gocho', 'Gitting'],
                },
                {
                    ward: 'Nangwa',
                    streets: ['Bashang', 'Nangwa', 'Ngorongoro', 'Mlimani'],
                },
                {
                    ward: 'Dirma',
                    streets: ['Dirma', 'Gawlolo', 'Qalosendo'],
                },
                {
                    ward: 'Simbay',
                    streets: ['Gidagharbu', 'Simbay', 'Gemunda'],
                },
                {
                    ward: 'Hidet',
                    streets: ['Bassotughang', 'Hidet', 'Orbesh'],
                },
                {
                    ward: 'Measkron',
                    streets: [
                        'Getaghul',
                        'Majengo',
                        'Measkron',
                        'Sagong',
                        'Mara',
                        'Qutesh',
                    ],
                },
                {
                    ward: 'Endasiwold',
                    streets: ['Endasiwold', 'Garbapi'],
                },
                {
                    ward: 'Masakta',
                    streets: ['Lambo', 'Masakta', 'Homari'],
                },
                {
                    ward: 'Masqaroda',
                    streets: ['Getasam', 'Masqaroda', 'Ng’alda'],
                },
                {
                    ward: 'Endasak',
                    streets: ['Endasak', 'Qarebay'],
                },
                {
                    ward: 'Gidahababieg',
                    streets: ['Endasaboghechan', 'Gidahababieg', 'Gidamula'],
                },
                {
                    ward: 'Sirop',
                    streets: ['Matangarimo', 'Kinachere', 'Sirop'],
                },
                {
                    ward: 'Gisambalang',
                    streets: ['Gisambalang', 'Waama', 'Masusu', 'Waranga'],
                },
                {
                    ward: 'Lalaji',
                    streets: ['Murumba', 'Lalaji', 'Gorimba', 'Diloda'],
                },
                {
                    ward: 'Balangdalalu',
                    streets: ['Balangdalalu', 'Gidabwanja', 'Mureru'],
                },
                {
                    ward: 'Gehandu',
                    streets: ['Gehandu', 'Ming’enyi', 'Mughucha'],
                },
                {
                    ward: 'Laghanga',
                    streets: ['Dajameda', 'Gawidu', 'Muungano', 'Laghanga'],
                },
                {
                    ward: 'Getanuwas',
                    streets: ['Getanuwas', 'Gidika', 'Wandela'],
                },
                {
                    ward: 'Bassotu',
                    streets: ['Bassotu'],
                },
            ],
        },
    ],
};

const mara = {
    region: 'Mara',
    districts: [
        {
            district: 'Musoma Cbd',
            wards: [
                {
                    ward: 'Mukendo',
                    streets: [''],
                },
                {
                    ward: 'Mwigobero',
                    streets: [''],
                },
                {
                    ward: 'Iringo',
                    streets: [''],
                },
                {
                    ward: 'Kitaji',
                    streets: [''],
                },
                {
                    ward: 'Kamunyonge',
                    streets: [''],
                },
                {
                    ward: 'Mwisenge',
                    streets: [''],
                },
                {
                    ward: 'Nyamatare',
                    streets: [''],
                },
                {
                    ward: 'Nyasho',
                    streets: [''],
                },
                {
                    ward: 'Nyakato',
                    streets: [''],
                },
                {
                    ward: 'Makoko',
                    streets: [''],
                },
                {
                    ward: 'Buhare',
                    streets: [''],
                },
                {
                    ward: 'Kigera',
                    streets: [''],
                },
                {
                    ward: 'Bweri',
                    streets: [''],
                },
                {
                    ward: 'Rwamlimi',
                    streets: [''],
                },
                {
                    ward: 'Kwangwa',
                    streets: [''],
                },
                {
                    ward: 'Mshikamano',
                    streets: [''],
                },
                {
                    ward: 'Mugango',
                    streets: ['Kurwaki', 'Kwibara', "Nyang'oma"],
                },
                {
                    ward: 'Nyamrandirira',
                    streets: ['Seka', 'Mikuyu', 'Chumwi', 'Kasoma', 'Kaboni'],
                },
                {
                    ward: 'Nyambono',
                    streets: ['Saragana', 'Nyambono'],
                },
                {
                    ward: 'Bugoji',
                    streets: ['Bugoji', 'Kanderema', 'Kaburabura'],
                },
                {
                    ward: 'Bwasi',
                    streets: ['Bwasi', 'Bugunda', 'Kome'],
                },
                {
                    ward: 'Suguti',
                    streets: ['Suguti', 'Kusenyi', 'Chirorwe', 'Wanyere'],
                },
                {
                    ward: 'Bukumi',
                    streets: ['Bukumi', 'Busekera', 'Buira', 'Buraga'],
                },
                {
                    ward: 'Makojo',
                    streets: ['Makojo', 'Chitare', 'Chimati'],
                },
                {
                    ward: 'Tegeruka',
                    streets: ['Tegeruka', 'Mayani', 'Kataryo'],
                },
                {
                    ward: 'Bugwema',
                    streets: ['Masinono', "Kinyang'erere", 'Bugwema', 'Muhoji'],
                },
                {
                    ward: 'Kiriba',
                    streets: ['Bwai Kwitururu', 'Bwai Kumsoma', 'Kiriba'],
                },
                {
                    ward: 'Murangi',
                    streets: ['Murangi', 'Lyasembe'],
                },
                {
                    ward: 'Musanja',
                    streets: ['Musanja', 'Nyabaengere', 'Mabui Merafuru'],
                },
                {
                    ward: 'Bukima',
                    streets: ['Bukima', 'Butata', 'Kastam'],
                },
                {
                    ward: 'Rusoli',
                    streets: ['Buanga', 'Kwikerege', 'Rusoli'],
                },
                {
                    ward: 'Busambara',
                    streets: ['Kwikuba', 'Maneke', 'Mwiringo'],
                },
                {
                    ward: 'Bulinga',
                    streets: ['Bulinga', 'Bujaga', 'Busungu'],
                },
                {
                    ward: 'Ifulifu',
                    streets: ['Kabegi', 'Nyasaungu', 'Kiemba'],
                },
                {
                    ward: 'Etaro',
                    streets: ['Rukuba', 'Etaro', 'Mmahare', 'Busamba'],
                },
                {
                    ward: 'Nyegina',
                    streets: ['Mkirira', 'Nyegina', 'Kurukerege'],
                },
                {
                    ward: 'Nyakatende',
                    streets: ['Nyakatende', 'Kigera', 'Kakisheri', 'Kamuguruki'],
                },
            ],
        },
        {
            district: 'Butiama',
            wards: [
                {
                    ward: 'Butiama',
                    streets: ['Butiama', 'Rwamkoma', 'Buturu'],
                },
                {
                    ward: 'Buruma',
                    streets: ['Songora', 'Ryamugabo', 'Isaba', 'Tonyo', 'Mwikoro'],
                },
                {
                    ward: 'Bwiregi',
                    streets: ['Ryamisanga', 'Ketasakwa', 'Masurura', 'Kamgendi'],
                },
                {
                    ward: 'Bukabwa',
                    streets: ['Bukwaba', 'Mmazami', 'Kirumi'],
                },
                {
                    ward: 'Muriaza',
                    streets: ['Muriaza', 'Bumangi', 'Kizaru'],
                },
                {
                    ward: 'Masaba',
                    streets: ['Bisarye', 'Nyasirori', 'Kwigutu'],
                },
                {
                    ward: 'Butuguri',
                    streets: ['Kibubwa', 'Kisamwene', 'Busirime'],
                },
                {
                    ward: 'Kukirango',
                    streets: [
                        'Nyamisisye',
                        'Singu',
                        'Kiabakari',
                        'Kyawazaru',
                        'Mwanzaburiga',
                    ],
                },
                {
                    ward: 'Kyanyari',
                    streets: ['Nyakiswa', 'Nyamikoma', 'Mwibagi'],
                },
                {
                    ward: 'Buhemba',
                    streets: ['Matongo', 'Kinyariri', 'Biatika'],
                },
                {
                    ward: 'Nyamimange',
                    streets: ['Nyankoma', 'Kwisaro'],
                },
                {
                    ward: 'Buswahili',
                    streets: ['Buswahili', 'Kongoto', 'Wegero', 'Baranga'],
                },
                {
                    ward: 'Mirwa',
                    streets: ['Mirwa', 'Magunga', 'Tarani'],
                },
                {
                    ward: 'Bisumwa',
                    streets: ['Bisumwa', 'Nyabekwabi', 'Kyamajoje', 'Nyarukoru'],
                },
                {
                    ward: 'Busegwe',
                    streets: ['Busegwe', 'Nyanza', 'Kigori'],
                },
                {
                    ward: 'Sirorisimba',
                    streets: ['Sirorisimba.', 'Rwasereta', 'Nyambili', 'Kitaramanka'],
                },
                {
                    ward: 'Nyankanga',
                    streets: ['Nyankanga', 'Nyabange'],
                },
                {
                    ward: 'Kamugegi',
                    streets: ['Kamugegi', 'Kyantungwe', 'Kyawazaru'],
                },
            ],
        },
        {
            district: 'Rorya',
            wards: [
                {
                    ward: 'Bukura',
                    streets: ['Bubombi', 'Kirongwe', 'Nyambori', 'Thabache', 'Bwiri'],
                },
                {
                    ward: 'Tai',
                    streets: ['Shirati Sota', 'Nyamagongo', 'Nyahera', 'Masonga'],
                },
                {
                    ward: 'Kitembe',
                    streets: ['Kitembe', 'Nyambogo', 'Sakawa'],
                },
                {
                    ward: 'Roche',
                    streets: ['Roche', 'Osiri', "Ng'ope"],
                },
                {
                    ward: 'Mkoma',
                    streets: ["Ng'ope"],
                },
                {
                    ward: 'Nyahongo',
                    streets: ['Minigo', 'Nyamkonge', 'Manyanyi', 'Ryagati'],
                },
                {
                    ward: 'Nyamtinga',
                    streets: ['Rwangenyi', 'Busanga', 'Nyarombo', 'Manila'],
                },
                {
                    ward: 'Nyamagaro',
                    streets: ["Nyang'ombe", 'Bugendi', 'Muharango'],
                },
                {
                    ward: 'Kirogo',
                    streets: ['Burere', 'Kirogo', 'Radienya', 'Nyabiwe'],
                },
                {
                    ward: 'Kigunga',
                    streets: ['Masike', 'Luanda', 'Randa', 'Bukama'],
                },
                {
                    ward: 'Mirare',
                    streets: ['Ryagoro', 'Ingri Juu', 'Malongo', 'Sudi'],
                },
                {
                    ward: 'Goribe',
                    streets: ['Panyakoo', 'Tatwe', 'Nyamusi'],
                },
                {
                    ward: 'Ikoma',
                    streets: ['Ikoma', 'Kogaja', 'Nyamasanda'],
                },
                {
                    ward: 'Koryo',
                    streets: ['Nyanduga', "Mang'ore", 'Utegi', 'Majengo'],
                },
                {
                    ward: 'Bukwe',
                    streets: ['Nyasoro', 'Mika'],
                },
                {
                    ward: 'Nyathorogo',
                    streets: ['Omuga', 'Nyasoko', 'Kowak'],
                },
                {
                    ward: "Kyang'ombe",
                    streets: ['Nyihara', 'Ruhu', 'Muhundwe'],
                },
                {
                    ward: 'Nyamunga',
                    streets: ['Kibuyi', 'Mkengwa', 'Kinesi', 'Isango'],
                },
                {
                    ward: 'Komuge',
                    streets: ['Komuge', 'Buganjo', 'Kyamwame', 'Irienyi', 'Kuruya'],
                },
                {
                    ward: 'Rabour',
                    streets: ['Rabour', 'Oliyo', 'Makongoro'],
                },
                {
                    ward: 'Kisumwa',
                    streets: [
                        'Nyanchabakenye',
                        'Nyanjagi',
                        'Kisumwa',
                        'Kwibuse',
                        'Marasibora',
                    ],
                },
                {
                    ward: 'Kinyenche',
                    streets: ['Nyabikondo', 'Omoche', 'Nyamirende', 'Lolwe'],
                },
                {
                    ward: 'Kyangasaga',
                    streets: ['Gabimori', 'Kyangasaga'],
                },
                {
                    ward: 'Baraki',
                    streets: ['Bitiryo', 'Kyanyamosana', 'Baraki'],
                },
                {
                    ward: 'Nyaburongo',
                    streets: ['Chereche', 'Mori', 'Ochuna', 'Dett'],
                },
                {
                    ward: 'Raranya',
                    streets: ['Dett'],
                },
            ],
        },
        {
            district: 'Tarime',
            wards: [
                {
                    ward: 'Bomani',
                    streets: [
                        'Buhemba',
                        'Mawasiliano',
                        'Nhc',
                        'Anglikana',
                        'Biambwi',
                        'Magereza',
                        'Bomani',
                    ],
                },
                {
                    ward: 'Sabasaba',
                    streets: [
                        'Sabasaba',
                        'Serengeti',
                        'Songambele "a"',
                        'Songambele "b"',
                        'Samartani',
                        'Chomete',
                        'Nyangai',
                        'Kimusi',
                        'Makire',
                        'Nyarusahi',
                        'Iganana',
                        'Kibasa',
                    ],
                },
                {
                    ward: 'Nyamisangura',
                    streets: [
                        'Masati Highway',
                        'Starehe',
                        'Musati',
                        'Mwangaza',
                        'Ronsoti',
                        'Bugosi',
                    ],
                },
                {
                    ward: 'Turwa',
                    streets: [
                        'Rebu Centre',
                        'Uwanja Wa Ndege',
                        'Kebikini',
                        'Gimenya',
                        'Kokehogoma',
                        'Rebu Shuleni',
                        'Buguti',
                        'Mkuyuni',
                    ],
                },
                {
                    ward: 'Nyandoto',
                    streets: [
                        'Masurura,',
                        'Nyakisese',
                        'Kemoge',
                        'Nyansurura',
                        'Nguku',
                        'Biambwi',
                        'Nyamokange',
                        'Itununu',
                        'Nyasebe',
                        'Nyakehenene',
                        'Mnagusi',
                    ],
                },
                {
                    ward: 'Bumera',
                    streets: ['Kitenga', 'Kiterere', 'Turugeti', 'Kwisarara'],
                },
                {
                    ward: 'Susuni',
                    streets: ['Keroti', 'Kiongera'],
                },
                {
                    ward: 'Mbogi',
                    streets: ['Borega "b"', 'Getenga'],
                },
                {
                    ward: 'Kiore',
                    streets: ['Nkerege', 'Nyagisya', 'Kewamamba'],
                },
                {
                    ward: 'Komaswa',
                    streets: ['Sombanyasoko', 'Nyamirambaro', 'Surubu'],
                },
                {
                    ward: 'Nyasincha',
                    streets: ['Nyantira', 'Nyasincha'],
                },
                {
                    ward: 'Itiryo',
                    streets: ['Itiryo', 'Nyankoni', 'Kangariani'],
                },
                {
                    ward: 'Katere',
                    streets: [
                        'Binagi',
                        'Nyagasara',
                        'Maruru',
                        'Kitatukya',
                        'Kedeli',
                        'Mogabiri Centre',
                        'Nyamiobo',
                        'Nyamaisana',
                        'Kibumayi',
                        'Nyamasamore',
                        'Kwigoronto',
                        'Butirya',
                        'Nsomba',
                    ],
                },
                {
                    ward: 'Ganyange',
                    streets: ['Ganyange', 'Borega "a"', 'Nyakalima'],
                },
                {
                    ward: 'Nkende',
                    streets: [
                        'Romoli',
                        'Kirumi',
                        'Rembirwi',
                        'Kwibanga',
                        'Nkende Shuleni',
                        'Itebe',
                        'Nyametembe',
                        'Nyamiobo',
                        'Ketare',
                        'Taramoroni',
                        'Kumuturu',
                        'Kogesenda',
                        'Kenyambi',
                        'Shuleni',
                    ],
                },
                {
                    ward: 'Kenyamanyori',
                    streets: [
                        'Ronga',
                        'Makao',
                        'Chira',
                        'Nyametembe',
                        'Kogete',
                        'Mwibari',
                        'Kebaga',
                        'Tagota "a"',
                    ],
                },
                {
                    ward: 'Regicheri',
                    streets: ['Remagwe', 'Nyabichune', "Ng'ereng'ere"],
                },
                {
                    ward: 'Kwihancha',
                    streets: ['Gibaso', 'Karakatonga', 'Nyabirongo'],
                },
            ],
        },
        {
            district: 'Bunda',
            wards: [
                {
                    ward: 'Bunda Mjini',
                    streets: ['Sabasaba', 'Stendi / Zamani', 'Posta', 'Nyerere'],
                },
                {
                    ward: 'Bunda Stoo',
                    streets: [
                        'Migungani',
                        'Mtukula',
                        'Miembeni',
                        'Bigutu',
                        'Isenyi',
                        'Mashine Ya Maji',
                        'Kilimani',
                        'Idara Ya Maji',
                        'Bondeni',
                        'Butakale',
                    ],
                },
                {
                    ward: 'Balili',
                    streets: ['Rubana', 'Stoo', 'Mashariki', 'Mlimani', 'Balili'],
                },
                {
                    ward: 'Nyasura',
                    streets: ["Nyasura 'a'", "Nyasura 'b'", "Nyasura 'c'", "Nyasura 'd'"],
                },
                {
                    ward: 'Guta',
                    streets: [
                        'Nyabehu Chini',
                        'Senta',
                        'Busimbiti',
                        'Mtakuja',
                        'Nyantare',
                        'Makongeni',
                        'Mabatini A',
                        'Mabatini B',
                        'Kilumi',
                        'Busigwala',
                        'Nyandago',
                        'Masufini',
                        'Ihale',
                        'Mtoni',
                        'Mlangi Mwitoto',
                        'Guta Mjini',
                        'Mlangi Mwitoto B',
                        'Bukokwa',
                        'Nyamsegenya',
                        'Kurugongo',
                        'Mazingira',
                        'Shuleni',
                        'Nyawegale',
                        'Changombe',
                        'Shinyanga',
                        'Bombani',
                        'Kunanga',
                        'Ikuleli',
                        'Stooni',
                    ],
                },
                {
                    ward: 'Kabasa',
                    streets: [
                        'Majengo',
                        'Nyaka',
                        'Miembe Sita',
                        "Kung'ombe Kati",
                        "Nyamkong'oti",
                        "Nyang'oso",
                        'Nyihanga',
                        'Kalisumba/stoo',
                        'Kalisumba/shuleni',
                        'Busweta',
                        'Mungutu',
                        'Kisami',
                        'Mikongeni',
                        'Songambele',
                        'Ibigi',
                        'Nyasana Kati',
                        'Nyamilama Ya Juu',
                        'Nyamilama Ya Chini',
                        'Kimanyilwentemi',
                        'Mine',
                    ],
                },
                {
                    ward: 'Kunzugu',
                    streets: [
                        'Nyamtaja',
                        'Kiganga A',
                        'Kiginga B',
                        'Kati',
                        'Magharibi A',
                        'Magharibi B',
                        'Mashiriki',
                        'Kaskazini',
                        'Kusini',
                        'Imalangoye',
                        'Karikoo',
                        'Meza',
                        'Kilabela A',
                        'Kilabela B',
                        'Serengeti A',
                        'Serengeti B',
                        'Ccm',
                        'Shuleni',
                        'Magharibi',
                        'Stooni',
                        'Mashariki',
                    ],
                },
                {
                    ward: 'Mcharo',
                    streets: ['Changuge', 'Mihale', 'Nyamatoke', 'Kisangwa', 'Mcharo'],
                },
                {
                    ward: 'Sazira',
                    streets: [
                        'Ruselu',
                        'Misisi Senta',
                        'Nyambitilwa',
                        'Buloswa',
                        'Masengete',
                        'Bukore',
                        'Shuleni',
                        'Nyiendo',
                        'Nyaruga',
                        'Mirungu',
                        'Nyamigunga',
                        'Kati',
                        'Mwalina',
                        'Itabi',
                        'Chabutwa',
                        'Mbugani',
                        'Nyamunyu',
                        'Wisegere',
                        'Kinamo',
                        'Isambya',
                        'Senta',
                        'Mkurubi',
                        'Suguti',
                        'Muheme',
                        'Kwigunga',
                    ],
                },
                {
                    ward: 'Wariku',
                    streets: ['Kamkenga', 'Kangetutya', 'Kiwasi', 'Rwabu'],
                },
                {
                    ward: 'Nyamuswa',
                    streets: ['Nyamuswa', 'Makongoro "a"', 'Bukama', 'Makongoro "b"'],
                },
                {
                    ward: 'Hunyari',
                    streets: ['Mariwanda', 'Hunyari', 'Kihumbu', 'Sabasita', 'Sarakwa'],
                },
                {
                    ward: 'Mugeta',
                    streets: [
                        'Mugeta',
                        'Kyandege',
                        'Tingirima',
                        'Sanzati',
                        'Rakana',
                        "Nyang'aranga",
                    ],
                },
                {
                    ward: 'Mihingo',
                    streets: ['Mihingo', 'Mekomariro', 'Manchimweru', 'Mahanga'],
                },
                {
                    ward: 'Salama',
                    streets: ['Salama Kati', 'Kurusanga', "Sarama  'a'"],
                },
                {
                    ward: 'Butimba',
                    streets: ['Bulamba', 'Buzimbwe', 'Mwiseni'],
                },
                {
                    ward: 'Namhula',
                    streets: ['Mranda', 'Chingurubila', 'Namhula', 'Karukekere'],
                },
                {
                    ward: 'Neruma',
                    streets: ['Kasahunga', 'Mmagunga', 'Namibu'],
                },
            ],
        },
    ],
};

const mbeya = {
    region: 'Mbeya',
    districts: [
        {
            district: 'Mbeya Cbd',
            wards: [
                {
                    ward: 'Mbalizi Road',
                    streets: ['Sabasaba', 'Kabisa', 'Kisoki', 'Mwasyoge'],
                },
                {
                    ward: 'Mabatini',
                    streets: [
                        'Senjele',
                        'Mabatini',
                        'Mianzini',
                        'Kajigili',
                        'Kisunga',
                        'Simike',
                    ],
                },
                {
                    ward: 'Forest',
                    streets: [
                        'Meta',
                        'Kadege',
                        'Muungano',
                        'Makanisani',
                        'Benki Kuu',
                        'Maghorofani',
                        'Forest Mpya',
                    ],
                },
                {
                    ward: 'Maanga',
                    streets: [
                        'Maanga A',
                        'Maanga B',
                        'Maendeleo',
                        'Mafiat',
                        'Ndongole',
                        'Sinde',
                        'Mwamfupe',
                    ],
                },
                {
                    ward: 'Sinde',
                    streets: ['Kagwina', 'Ilolo Kati', 'Janibichi', 'Sinde A'],
                },
                {
                    ward: 'Isanga',
                    streets: [
                        'Isanga Kati',
                        'Ilolo',
                        'Wigamba',
                        'Mkuju',
                        'Igoma Ilolo A',
                        'Igoma Ilolo B',
                        'Mmita',
                    ],
                },
                {
                    ward: 'Sisimba',
                    streets: [
                        'Uzunguni A',
                        'Soko Kuu',
                        'Uzunguni B',
                        'Jakaranda B',
                        'Tanesco',
                        'Jakaranda A',
                    ],
                },
                {
                    ward: 'Itiji',
                    streets: ['Mwasanga', 'Mbwile', 'Itiji', 'Makaburini'],
                },
                {
                    ward: 'Maendeleo',
                    streets: [
                        'Community\r\nCentre',
                        'Kiwanja Ngoma',
                        'Soko Matola',
                        'Kiwanja Mpaka',
                        'Kati',
                    ],
                },
                {
                    ward: 'Majengo',
                    streets: ['Majengo\r\nKaskazini', 'Majengo Kusini'],
                },
                {
                    ward: 'Ghana',
                    streets: ['Mbata', 'Ghana Mashariki', 'Ghana\r\nMagharibi'],
                },
                {
                    ward: 'Nonde',
                    streets: ['Mwalingo', 'Mbwile B', 'Mbwile A', 'Nonde'],
                },
                {
                    ward: 'Ilemi',
                    streets: [
                        'Mwafute',
                        'Masewe',
                        'Mapelele',
                        'Maanga Veta',
                        'Ilindi',
                        'Ilemi',
                    ],
                },
                {
                    ward: 'Ruanda',
                    streets: [
                        'Soko',
                        'Ilolo',
                        'Mkombozi',
                        'Kati',
                        'Kabwe',
                        'Makunguru',
                        'Soweto',
                        'Benki',
                        'Mwenge',
                        'Wakulima',
                        'Mtoni',
                    ],
                },
                {
                    ward: 'Iyela',
                    streets: [
                        'Ilembo',
                        'Pambogo',
                        'Mapambano',
                        'Block   T',
                        'Iyela Namba 1',
                        'Nyibuko',
                        'Iyela Namba 2',
                        'Airport',
                    ],
                },
                {
                    ward: 'Nzovwe',
                    streets: ['Ndanyela', 'Kilimahewa', 'Halengo', 'Nzovwe'],
                },
                {
                    ward: 'Itende',
                    streets: [
                        'Isonta',
                        'Itende Kati',
                        'Gombe',
                        'Inyala',
                        'Lusungo',
                        'Itete',
                    ],
                },
                {
                    ward: 'Kalobe',
                    streets: [
                        'Majengo A',
                        'Majengo Mapya',
                        'Maendeleo A',
                        'Maendeleo B',
                        'Kalobe',
                        'Ddc',
                    ],
                },
                {
                    ward: 'Iyunga',
                    streets: ['Maendeleo', 'Inyala', 'Sisintila', 'Igale', 'Ikuti'],
                },
                {
                    ward: 'Iwambi',
                    streets: [
                        'Utulivu',
                        'Lumbila',
                        'Ilembo',
                        'Ivwanga',
                        'Kandete',
                        'Ndeje',
                        'Mayombo',
                    ],
                },
                {
                    ward: 'Ilomba',
                    streets: [
                        'Kagera',
                        'Tonya',
                        'Ituha',
                        'Hayanga',
                        'Sae',
                        'Ilomba',
                        'Ihanga',
                    ],
                },
                {
                    ward: 'Mwakibete',
                    streets: [
                        "Ng'osi",
                        'Nyibuko',
                        'Ivumwe',
                        'Shewa',
                        'Viwandani',
                        'Itongo',
                        'Bomba Mbili',
                    ],
                },
                {
                    ward: 'Tembela',
                    streets: ['Reli', 'Tembela'],
                },
                {
                    ward: 'Mwansanga',
                    streets: ['Nduguya', 'Isoso'],
                },
                {
                    ward: 'Iganzo',
                    streets: ['Iganzo', 'Nkuyu', 'Mwambenja', 'Igodima'],
                },
                {
                    ward: 'Uyole',
                    streets: ['Hasanga', 'Ibara', 'Iwambala', 'Utukuyu'],
                },
                {
                    ward: 'Isyesye',
                    streets: ['Mwantengule', 'Vingunguti', 'Rrm'],
                },
                {
                    ward: 'Itezi',
                    streets: [
                        'Itezi Magharibi',
                        'Mwasote',
                        'Gombe Kaskazini',
                        'Gombe Kusini',
                    ],
                },
                {
                    ward: 'Mwansenkwa',
                    streets: ['Luwala', 'Mengo', 'Mwanzumbo', 'Ilembo'],
                },
                {
                    ward: 'Itagano',
                    streets: ['Ipombo', 'Itagano'],
                },
                {
                    ward: 'Nsoho',
                    streets: ['Nsoho', 'Kilabuni', 'Idunda', 'Mbeya Peak'],
                },
                {
                    ward: 'Iziwa',
                    streets: ['Isumbi', 'Isengo', 'Iduda', 'Ilungu', 'Imbega'],
                },
                {
                    ward: 'Nsalaga',
                    streets: [
                        'Nsalaga',
                        'Ntundu',
                        'Itezi Mashariki',
                        'Itezi Mlimani',
                        'Majengo Mapya',
                        'Kibonde Nyasi',
                        'Igamba',
                    ],
                },
                {
                    ward: 'Igawilo',
                    streets: ['Sokoni', 'Chemchem', 'Mwanyanje', 'Mponja'],
                },
                {
                    ward: 'Iganjo',
                    streets: [
                        'Mtakuja',
                        'Ilowe',
                        'Ishinga',
                        'Mwanyanje',
                        'Ikhanga',
                        'Itanji',
                    ],
                },
                {
                    ward: 'Iduda',
                    streets: [
                        'Kanda Ya Chini',
                        'Kanda Ya Kati',
                        'Kanda Ya Juu',
                        'Mwahala',
                    ],
                },
            ],
        },
        {
            district: 'Mbeya',
            wards: [
                {
                    ward: 'Ijombe',
                    streets: [
                        'Iwalanje',
                        'Ifiga',
                        'Ijombe\r\nNtangano',
                        'Nsongwi\r\nMantanji',
                        'Hatwelo',
                        'Nsongwi Juu',
                    ],
                },
                {
                    ward: 'Inyala',
                    streets: [
                        'Inyala',
                        'Shamwengo',
                        'Imezu',
                        'Iyawaya',
                        'Makwenje',
                        'Darajani',
                        'Mwashoma',
                    ],
                },
                {
                    ward: 'Tembela',
                    streets: [
                        'Galijembe',
                        'Simambwe',
                        'Usoha\r\nNjiapanda',
                        'Shibolya',
                        'Ilembo/ Usafwa',
                        'Ngoha',
                    ],
                },
                {
                    ward: 'Ulenje',
                    streets: [
                        'Ulenje',
                        'Itala',
                        'Mkuyuni',
                        'Mbonile',
                        'Wambishe',
                        'Ihango',
                    ],
                },
                {
                    ward: 'Ilungu',
                    streets: [
                        'Kikondo',
                        'Shango',
                        'Nyalwela',
                        'Ngole',
                        'Mwela',
                        'Ifupa',
                        'Mashese',
                    ],
                },
                {
                    ward: 'Iyunga Mapinduzi',
                    streets: [
                        'Isangati',
                        'Izuo',
                        'Igowe',
                        'Iyunga\r\nMapinduzi',
                        'Shuwa',
                        'Madugu',
                    ],
                },
                {
                    ward: 'Bonde La Songwe',
                    streets: ['Songwe\r\nViwandani', 'Ikumbi', 'Songwe'],
                },
                {
                    ward: 'Isuto',
                    streets: [
                        'Mlowo',
                        'Itete',
                        'Shinzingo',
                        'Idiwili',
                        'Shisonta',
                        'Isuto',
                        'Shitete',
                        'Ilindi',
                    ],
                },
                {
                    ward: 'Santilya',
                    streets: [
                        'Santilya',
                        'Sanje',
                        'Iswago',
                        'Mpande',
                        'Jojo',
                        'Nsheha',
                        'Itizi',
                    ],
                },
                {
                    ward: 'Maendeleo',
                    streets: ['Izumbwe/\r\nUsafwa', 'Usoha\r\nMuungano'],
                },
                {
                    ward: 'Itewe',
                    streets: ['Itewe', 'Tembela'],
                },
            ],
        },
        {
            district: 'Mbarali',
            wards: [
                {
                    ward: 'Utengule Usangu',
                    streets: [
                        'Mahango\r\nMswiswi',
                        'Magulula',
                        'Simike',
                        'Utengule\r\nUsangu',
                    ],
                },
                {
                    ward: 'Mahongole',
                    streets: [
                        'Ilaji',
                        'Ilongo',
                        'Kapyo',
                        'Mahongole',
                        'Nsonyanga',
                        'Igalako',
                    ],
                },
                {
                    ward: 'Ruiwa',
                    streets: [
                        'Ijumbi',
                        'Malamba',
                        'Motomoto',
                        'Ruiwa',
                        'Udindilwa',
                        'Wimba\r\nMahango',
                    ],
                },
                {
                    ward: 'Madibira',
                    streets: [
                        'Iheha',
                        'Ikoga',
                        'Mahango-\r\nMadibira',
                        'Chalisuka',
                        'Mkunywa',
                        'Nyakadete',
                        'Nyamakuyu',
                    ],
                },
                {
                    ward: 'Imalilo Songwe',
                    streets: [
                        'Ibumila',
                        'Imalilo Songwe',
                        'Mwanavala',
                        'Urunda',
                        'Warumba',
                    ],
                },
                {
                    ward: 'Ipwani',
                    streets: ['Iberege', 'Ipwani', 'Limseni', 'Luwango', 'Matemela'],
                },
                {
                    ward: 'Igava',
                    streets: [
                        'Iwalanje',
                        'Igava',
                        'Igunda -\r\nMuungano',
                        'Ikanutwa',
                        'Vikaye',
                    ],
                },
                {
                    ward: 'Miyombweni',
                    streets: [
                        'Magigiwe',
                        'Mapogoro',
                        'Mlungu',
                        'Myombweni',
                        'Nyakazombe',
                    ],
                },
                {
                    ward: 'Ihahi',
                    streets: ['Kibaoni', 'Ihahi', 'Mwaluma'],
                },
                {
                    ward: 'Itamboleo',
                    streets: ['Matebete', 'Itamboleo', 'Kapunga', 'Mbalino'],
                },
                {
                    ward: 'Mwatenga',
                    streets: ['Kilambo', 'Mwatenga', 'Mhwela', 'Mapogoro'],
                },
                {
                    ward: 'Luhanga',
                    streets: ['Luhanga', 'Madundasi', 'Msanga', 'Yala'],
                },
                {
                    ward: 'Kongolo',
                    streets: [
                        'Azimio Mapula',
                        'Azimio Mswiswi',
                        'Kongolo Mkola',
                        'Kongolo\r\nMswiswi',
                        '',
                        'Mambi',
                    ],
                },
                {
                    ward: 'Lugelele',
                    streets: [''],
                },
            ],
        },
        {
            district: 'Kyela',
            wards: [
                {
                    ward: 'Kyela',
                    streets: [''],
                },
                {
                    ward: 'Mwaya',
                    streets: [
                        'Ilondo',
                        'Lukuyu',
                        'Lugombo',
                        'Ndola',
                        'Tenende',
                        'Mwaya',
                        'Kasala',
                        'Malungo',
                        'Masebe',
                        'Kapamisya',
                    ],
                },
                {
                    ward: 'Kajunjumele',
                    streets: ['Kajunjumele', 'Buloma', 'Lupaso', 'Kilwa', 'Kingila'],
                },
                {
                    ward: 'Ikolo',
                    streets: ['Ikolo', 'Lupembe', 'Muungano'],
                },
            ],
        },
    ],
};

const morogoro = {
    region: 'Morogoro',
    districts: [
        {
            district: 'Morogoro\r\nCbd',
            wards: [
                {
                    ward: 'Sultani Area',
                    streets: [
                        'Kikundi',
                        'Ulugulu',
                        'Umbunga',
                        'Shule',
                        'Mlali Road',
                        'Ukwere',
                        'Kati',
                        'Kota',
                        'Bushiri',
                    ],
                },
                {
                    ward: 'Mji Mkuu',
                    streets: [
                        'Short',
                        'Boma Road',
                        'Mlapakolo',
                        'Amani',
                        'Uhuru',
                        'Karume A',
                        'Karume B',
                    ],
                },
                {
                    ward: 'Sabasaba',
                    streets: [
                        'Betelo',
                        'Makongoro',
                        'Ngoto  A',
                        'Polisi Kota',
                        'Kingo',
                        'Mlali',
                        'Kikundi',
                        'Mindu',
                        'Ngoto B',
                        'Kenyatta',
                        'Konga',
                        'John Mahenge',
                    ],
                },
                {
                    ward: 'Mafiga',
                    streets: [
                        'Kidondolo A',
                        'Kidondolo B',
                        'Madox',
                        'Misufini',
                        'Msikiti',
                        'Kituo Cha Polisi',
                        'Mafiga A',
                        'Mafiga B',
                        'Ccm',
                        'Kambaya',
                        'Majumba Saba',
                        'Ngazengwa',
                        'Zahanati',
                        'Lusegwa',
                        'Manzese',
                    ],
                },
                {
                    ward: 'Uwanja Wa Taifa',
                    streets: [
                        'Ukutu',
                        'Maelewano A',
                        'Maelewano B',
                        'Kanisani',
                        'Unguu B',
                        'Kiswanya A',
                        'Kiswanya  B',
                        'Sabu',
                        'Kidugalo',
                        'Mindu',
                        'Unguu A',
                    ],
                },
                {
                    ward: 'Kingo',
                    streets: ['Reli', 'Mwere', 'Kingo', 'Salum Abdallah', 'Mango'],
                },
                {
                    ward: 'Mji Mpya',
                    streets: [
                        'Makaburi A',
                        'Makaburi B',
                        'Makaburi C',
                        'Fumilwa A',
                        'Fumilwa B',
                        'Fumilwa C',
                        'Ngoma A',
                        'Ngoma B',
                        'Ngoma C',
                        'Simu A',
                        'Simu B',
                        'Simu C',
                    ],
                },
                {
                    ward: 'Kiwanja Cha\r\nNdege',
                    streets: [
                        'Tumbaku',
                        'Lukwagule',
                        'Azimio',
                        'Mtagwa',
                        'Kiwalani',
                        'Lusogo',
                        'Ujenzi',
                        'Kimunyu',
                        'Bondwa',
                        'Ngazengwa',
                        'Lungo',
                        'Lusanga',
                        'Mkota',
                    ],
                },
                {
                    ward: 'Boma',
                    streets: [
                        'Kibwe',
                        'Wamo',
                        'Kihimbwa',
                        'Rock Garden',
                        'Nguzo',
                        'Mzigila',
                        'Jumbe Mtoto',
                        'Old Dar Road',
                        'Kingalu',
                        "Kin'gola",
                        'Forest Hill',
                        'Forest Nhc',
                        'Madizini',
                        'Visole',
                        'Msigala',
                    ],
                },
                {
                    ward: 'Kilakala',
                    streets: [
                        'Bigwa Kisiwani',
                        'Bigwa Sokoni',
                        'Ualimu',
                        'Migombani',
                        'Kolla',
                        'Mahedu',
                        'Kigurunyembe',
                        'Kigurunyembe\r\nMizambarauni',
                        "Ng'atigwa",
                        'Bwinila',
                        'Kilakala',
                        'Mbogo',
                        "Bong'ola",
                        'Nughutu',
                        'Chalumbi',
                    ],
                },
                {
                    ward: 'Bigwa',
                    streets: [
                        'Bigwa Barabarani',
                        'Stendi',
                        'Lukuyu',
                        'Kindimbwa',
                        'Misongeni A',
                        'Zahanati',
                        'Misongeni B',
                        'Transfoma',
                        'Bohomela',
                        'Vituli',
                        'Mgolole',
                        'Korogoso',
                        'Mungi',
                    ],
                },
                {
                    ward: 'Kichangani',
                    streets: [
                        'Kola B',
                        'Kola A',
                        'Area Six',
                        'Area Six B',
                        'Area Five',
                        'Mchuma',
                        'Railways Estate',
                        'Mwande',
                        'Mkwajuni',
                        'Karakana',
                        'Kichangani',
                        'Fungafunga',
                    ],
                },
                {
                    ward: 'Mwembesongo',
                    streets: [
                        'Mwigole',
                        'Mkwajuni',
                        'Sume',
                        'Mzambarauni',
                        'Juma Hamsini',
                        'Saadan C',
                        'Magodoro',
                        'Mwanzo Mgumu',
                        'Mfungua Kinywa',
                        'Genda',
                        'Gohalema',
                        'Mtawala',
                        'Riverside',
                        'Mwembesongo',
                        'Makaburi',
                        'Ndege Wengi',
                    ],
                },
                {
                    ward: 'Kihonda',
                    streets: [
                        'Kilimanjaro',
                        'Yespa',
                        'Kilombero',
                        'Kihonda B',
                        'Kihonda Kaskazini',
                        'Msimamo',
                        'Azimio',
                        'Magereza',
                        'Nguvu Kazi',
                        'Kiegea A',
                    ],
                },
                {
                    ward: 'Mazimbu',
                    streets: [
                        'Mazimbu Darajani',
                        'Boma',
                        'Boma B',
                        'Modeco A',
                        'Modeco B',
                        'Nguzo',
                        'Reli',
                    ],
                },
                {
                    ward: 'Mbuyuni',
                    streets: [
                        'Mtoni B',
                        'Magurumbasi',
                        'Mgonahazeru',
                        'Bambalawe',
                        'Sabasaba',
                        'Mtoni A',
                    ],
                },
                {
                    ward: 'Mlimani',
                    streets: [
                        'Mbete',
                        'Kireka',
                        'Choma',
                        'Kisosa',
                        'Nyandila',
                        'Liti',
                        'Kikundi',
                        'Ruvuma',
                        "Mng'ongo",
                        'Tulo',
                        'Chalagule',
                    ],
                },
                {
                    ward: 'Mzinga',
                    streets: ['Kidangawa', 'Misasa', 'Konga A', 'Mtoni', 'Konga B'],
                },
                {
                    ward: 'Kingolwira',
                    streets: [
                        'Zahanati',
                        'Seminari',
                        'Mahakama',
                        'Tambuka Reli',
                        'Tangi La Maji',
                        'Shule',
                        'Bomba La Zambia',
                        'Mwembe Msafa',
                    ],
                },
                {
                    ward: 'Lukobe',
                    streets: [
                        'Tuelewane',
                        'Lukobe Juu',
                        'Lukobe Kambi 5',
                        'Mgudeni',
                        'Maendeleo',
                        'Manyuki',
                        'Tushikamane',
                        'Majengo Mapya',
                    ],
                },
                {
                    ward: 'Mafisa',
                    streets: [
                        'Sina',
                        'Mambi',
                        'Kayenzi',
                        'Kihonda Mbuyuni',
                        'Kilima Hewa',
                        'White House',
                        'Nyerere',
                        'Mafisa',
                    ],
                },
                {
                    ward: 'Tungi',
                    streets: [
                        'Nanenane',
                        'Nanenane B',
                        'Mji Mwema',
                        'Mji Mwema B',
                        'Tubuyu',
                        'Tubuyu B',
                        'Mfuruni',
                        'Mkwajuni',
                        'Mfaranyaki',
                        'Tungi Kambini A',
                        'Mafisa',
                        'Tungi Kambini B',
                    ],
                },
                {
                    ward: 'Kauzeni',
                    streets: [
                        'Kauzeni',
                        'Viswayu',
                        'Tindigo',
                        'Minazini',
                        'Gezaulole',
                        'Nyambutwa',
                    ],
                },
                {
                    ward: 'Luhungo',
                    streets: [
                        'Mambani',
                        'Mundu',
                        'Kilala',
                        'Kivaza',
                        'Mlulu',
                        'Mfine',
                        'Mkoya',
                    ],
                },
                {
                    ward: 'Magadu',
                    streets: [
                        'Magadu',
                        'Tiba Sua/road',
                        'Kilimo Sua',
                        'Folk Land',
                        'Mgambazi',
                        'Kididimo Sua',
                        'Kididimo',
                        'Baraka',
                    ],
                },
                {
                    ward: 'Mkundi',
                    streets: [
                        'Maili 18',
                        'Mawasiliano',
                        'Mgulu Ya Ndege',
                        'Kilongo',
                        'Kilongo B',
                        'Mlimani',
                        'Bwawani',
                        'Cct Forest',
                        'Kiegea B',
                        'Kipera',
                        'Ngerengere',
                    ],
                },
                {
                    ward: 'Chamwino',
                    streets: [
                        'Msikitini',
                        'Misufini',
                        'Mwande',
                        'Shule',
                        'Tupendane',
                        'Mgulasi',
                        'Napome',
                        'Chamwino',
                        'Usalama',
                        'Visegese',
                        'Mwembeni',
                        'Mahita',
                        'Kiwalani',
                        'Malipula',
                        'Mafiga Sua',
                    ],
                },
                {
                    ward: 'Kihonda\r\nMaghorofani',
                    streets: [
                        'Kihonda Maghorofani',
                        'Kihonda Maghorofani B',
                        'Msamvu B',
                        'Godes',
                        'Air Port',
                        'Bima',
                        'Ngerengere',
                        'Mbuyuni',
                        'Kitata',
                    ],
                },
                {
                    ward: 'Mindu',
                    streets: [
                        'Kasanga',
                        'Mgaza',
                        'Mindu',
                        'Mikoroshini',
                        'Madaganya',
                        'Mkwajuni',
                        'Lugala',
                        'Mazimbu Campus',
                    ],
                },
            ],
        },
        {
            district: 'Morogoro',
            wards: [
                {
                    ward: 'Tegetero',
                    streets: ['Tegetero', 'Bagilo', 'Hewe', 'Mifulu'],
                },
                {
                    ward: 'Kinole',
                    streets: [
                        'Tandai',
                        'Amini',
                        'Kalundwa',
                        'Rudewa',
                        'Mangala',
                        "Lung'ala",
                    ],
                },
                {
                    ward: 'Mkuyuni',
                    streets: ['Mkuyuni', 'Mfumbwe', 'Changa', 'Madamu', 'Kibwaya'],
                },
                {
                    ward: 'Kiroka',
                    streets: ['Kiroka', 'Diovuva', 'Kiziwa', 'Bamba'],
                },
                {
                    ward: 'Mkalambani',
                    streets: ['Mkalambani', 'Mkono Wa Mara', 'Kizinga', 'Pangawe'],
                },
                {
                    ward: 'Mikese',
                    streets: [
                        'Mikese Mjini',
                        'Fulwe',
                        'Mtego Wa Simba',
                        'Newland',
                        'Mhunga Mkola',
                        "Lubungo 'a'",
                    ],
                },
                {
                    ward: 'Gwata',
                    streets: ['Gwataujembe', 'Kinonko', 'Maseyu'],
                },
                {
                    ward: 'Ngerengere',
                    streets: ['Ngerengere', 'Mgude', 'Kiwege', 'Sinyaulime'],
                },
                {
                    ward: 'Matuli',
                    streets: ['Matuli', 'Kwaba', 'Lulongwe', 'Diguzi'],
                },
                {
                    ward: 'Kidugalo',
                    streets: [
                        'Kidugalo',
                        'Pulambili',
                        'Visaraka',
                        'Kisemo',
                        'Magera',
                        "Seregete 'a'",
                        "Seregete 'b'",
                        'Lubumu',
                    ],
                },
                {
                    ward: 'Mkulazi',
                    streets: ['Mkulazi', 'Kidunda', 'Chanyumbu', 'Usungura'],
                },
                {
                    ward: 'Tununguo',
                    streets: ['Tununguo', 'Kisanga Stendi', 'Dete', 'Mlilingwa'],
                },
                {
                    ward: 'Lundi',
                    streets: [
                        'Lundi',
                        "Ngong'olo",
                        'Misaga',
                        'Tambuu',
                        'Muungano',
                        'Vihengele',
                    ],
                },
                {
                    ward: 'Tawa',
                    streets: [
                        'Tawa',
                        'Kisarawe',
                        'Kifindike',
                        'Milawilila',
                        'Uponda',
                        'Kilemela',
                        'Kitungwa',
                        'Logo',
                    ],
                },
                {
                    ward: 'Kisemu',
                    streets: ['Mtamba', 'Gozo', 'Nige', 'Kibangile'],
                },
                {
                    ward: 'Konde',
                    streets: ['Konde', 'Mlono', 'Kiswila'],
                },
                {
                    ward: 'Mtombozi',
                    streets: [
                        'Mtombozi',
                        'Kibwege',
                        'Lugeni',
                        "Ng'weme",
                        'Lusange',
                        'Tandali',
                        'Baga',
                    ],
                },
                {
                    ward: 'Kasanga',
                    streets: ['Kasanga', 'Ukwama', 'Longwe', 'Kitonga', 'Kizagila'],
                },
                {
                    ward: 'Bungu',
                    streets: ['Bungu', 'Balani', 'Mihange', 'Koloni'],
                },
                {
                    ward: 'Mvuha',
                    streets: ['Mvuha', 'Dala', 'Msonge', 'Kongwa', 'Lukulunge', 'Tulo'],
                },
                {
                    ward: 'Selembala',
                    streets: [
                        'Magogoni',
                        'Kiganila',
                        'Bwila Chini',
                        'Bwila Juu',
                        'Kiburumo',
                    ],
                },
                {
                    ward: 'Kisaki',
                    streets: ['Gomero', 'Nyarutanga', 'Kisaki Kituoni', 'Kichangani'],
                },
                {
                    ward: 'Bwakira Chini',
                    streets: ['Bwakira Chini', 'Mbwade', 'Bonye', 'Dakawa'],
                },
                {
                    ward: 'Kolero',
                    streets: [
                        'Kolero',
                        'Temekero',
                        'Lukange',
                        'Mlagano',
                        'Malani',
                        'Lubasazi',
                    ],
                },
                {
                    ward: 'Bwakira Juu',
                    streets: ['Bwakira Juu', 'Kumba', 'Mgata'],
                },
                {
                    ward: 'Mngazi',
                    streets: ['Mngazi', 'Vigolegole', 'Sesenga', 'Milengwelengwe'],
                },
                {
                    ward: 'Singisa',
                    streets: [
                        'Singisa',
                        "Nyamigadu 'a'",
                        'Ntala',
                        "Nyamigadu 'b'",
                        'Lumba Chini',
                        'Kitengu',
                        'Lumba Juu',
                    ],
                },
                {
                    ward: 'Kibungo',
                    streets: ['Lukenge', 'Dimilo', 'Kibungo', 'Lanzi', 'Nyingwa'],
                },
                {
                    ward: 'Kibogwa',
                    streets: [
                        'Kibogwa',
                        'Nyachiro',
                        'Kaloni',
                        'Kilunga',
                        'Mambani',
                        'Kifulu',
                    ],
                },
                {
                    ward: 'Kibuko',
                    streets: ['Kibuko', 'Luholole', 'Kivuma', 'Mwarazi'],
                },
                {
                    ward: 'Tomondo',
                    streets: ['Kikundi', 'Lukonde', 'Kungwe', 'Vuleni'],
                },
            ],
        },
        {
            district: 'Mvomero',
            wards: [
                {
                    ward: 'Mvomero',
                    streets: ['Mvomero', 'Makuyu', 'Mgudeni', 'Dibamba', 'Matale'],
                },
                {
                    ward: 'Dakawa',
                    streets: [
                        'Wami Luhindo',
                        'Wami Sokoine',
                        'Wami Dakawa',
                        'Kwa Mhunzi',
                        'Milama',
                    ],
                },
                {
                    ward: 'Hembeti',
                    streets: ['Hembeti', 'Dihombo', 'Msufini', 'Kisimangulu'],
                },
                {
                    ward: 'Mtibwa',
                    streets: [
                        'Madizini',
                        'Kunke',
                        'Kidudwe',
                        'Mlumbilo',
                        'Lukenge',
                        'Lungo',
                    ],
                },
                {
                    ward: 'Sungaji',
                    streets: [
                        'Kilimanjaro',
                        'Kisala',
                        'Komtonga',
                        'Mlaguzi',
                        'Mbogo',
                        'Kigugu',
                    ],
                },
                {
                    ward: 'Mhonda',
                    streets: ['Kichangani', 'Mhonda', 'Kwelikweiji'],
                },
                {
                    ward: 'Maskati',
                    streets: ['Maskati', 'Dibago', 'Kipangilo', 'Magunga'],
                },
                {
                    ward: 'Kibati',
                    streets: ['Dibuluma', 'Kibogoji', 'Pandambili', 'Hoza', 'Salawe'],
                },
                {
                    ward: 'Diongoya',
                    streets: ['Manyinga', 'Digoma', 'Lusanga', 'Kwadoli', 'Digalama'],
                },
                {
                    ward: 'Kanga',
                    streets: ['Difinga', 'Kanga', 'Dihinda'],
                },
                {
                    ward: 'Mzumbe',
                    streets: [
                        'Tangeni',
                        'Mnyanza',
                        'Changarawe',
                        'Sangasanga',
                        'Vikenge',
                    ],
                },
                {
                    ward: 'Melela',
                    streets: ['Melela', 'Kibaoni', 'Magali'],
                },
                {
                    ward: 'Mlali',
                    streets: [
                        'Mlali',
                        'Pekomisegese',
                        'Vitonga',
                        'Mkuyuni',
                        'Kipera',
                        'Lugono',
                        'Kinyenze',
                        'Mongwe',
                    ],
                },
                {
                    ward: 'Bunduki',
                    streets: ['Kibigiri', 'Bunduki', 'Tandali', 'Vinile', 'Maguruwe'],
                },
                {
                    ward: 'Langali',
                    streets: ['Pinde', 'Langali', 'Bumu'],
                },
                {
                    ward: 'Tchenzema',
                    streets: ['Tchenzema', 'Mwarazi', 'Kibuko'],
                },
                {
                    ward: 'Kikeo',
                    streets: ['Kikeo', 'Mhale', "Ng'owo", 'Chohelo', 'Lukunguni'],
                },
                {
                    ward: 'Doma',
                    streets: [
                        'Doma',
                        'Maharaka',
                        'Sewekipera',
                        'Misengele',
                        'Dasi',
                        'Kihondo',
                    ],
                },
                {
                    ward: 'Pemba',
                    streets: ['Pemba', 'Gonja', 'Masimba', 'Msolokelo'],
                },
                {
                    ward: 'Kinda',
                    streets: ['Ndole', 'Kinda', 'Semwali', 'Makate'],
                },
                {
                    ward: 'Mgeta',
                    streets: ['Lusungi', 'Kibaoni', 'Lukuyu'],
                },
                {
                    ward: 'Luale',
                    streets: ['Luale', 'Kododo', 'Masalawe', 'Londo'],
                },
                {
                    ward: 'Nyandira',
                    streets: ['Nyandira', "Ng'ungulu", 'Ndugutu', 'Kibagala'],
                },
                {
                    ward: 'Mangae',
                    streets: ['Mela', 'Mlandizi', 'Mangae'],
                },
                {
                    ward: 'Homboza',
                    streets: ['Homboza', 'Chohero', 'Manza', 'Yowe'],
                },
                {
                    ward: 'Lubungo',
                    streets: ['Lubungo B', 'Mingo', 'Kimambila', 'Vianzi', 'Mafuru'],
                },
                {
                    ward: 'Msongozi',
                    streets: ['Msongozi', 'Mitupile', 'Mkata'],
                },
                {
                    ward: 'Mkindo',
                    streets: ['Mkindo', 'Bungoma', 'Kambala', 'Mndela'],
                },
                {
                    ward: 'Kichangani',
                    streets: ['Luwamba', 'Mafuta', 'Ubiri'],
                },
                {
                    ward: 'Mziha',
                    streets: ['Mziha', 'Kibatula', 'Njeula', 'Kaole', 'Bwage'],
                },
            ],
        },
        {
            district: 'Kilosa',
            wards: [
                {
                    ward: 'Kasiki',
                    streets: ['Bwage'],
                },
                {
                    ward: 'Mbumi',
                    streets: ['Bwage'],
                },
                {
                    ward: 'Mkwatani',
                    streets: ['Bwage'],
                },
                {
                    ward: 'Magubike',
                    streets: ['Chaumbele"a"', 'Mwandi'],
                },
                {
                    ward: 'Parakuyo',
                    streets: ['Twatwatwa', 'Parakuyo', 'Ngaite', 'Mkata Station'],
                },
                {
                    ward: 'Berega',
                    streets: ['Berega'],
                },
                {
                    ward: 'Mamboya',
                    streets: ['Nyangala "a"', 'Uponela', 'Mwisini'],
                },
                {
                    ward: 'Mvumi',
                    streets: ['Makwambe', 'Mhowe', 'Mvumi', 'Gongwe'],
                },
                {
                    ward: 'Maguha',
                    streets: ['Ibindo', 'Maguha', 'Nyangala Bondeni', 'Inyunywe'],
                },
                {
                    ward: 'Mabula',
                    streets: ['Mabula', 'Mbili', 'Nhembo', 'Magera'],
                },
                {
                    ward: 'Mtumbatu',
                    streets: ['Mtumbatu'],
                },
                {
                    ward: 'Malolo',
                    streets: ['Malolo"a"', 'Malolo "b"', 'Mgogozi', 'Chabi'],
                },
                {
                    ward: 'Kisanga',
                    streets: ['Kisanga', 'Wedo', 'Madizini', 'Msolwa', 'Mululu'],
                },
                {
                    ward: 'Ruhembe',
                    streets: ['Ruhembe', 'Kihelezo', 'Kidogobasi', 'Kitete Msindazi'],
                },
                {
                    ward: 'Ruaha',
                    streets: ['Ruaha'],
                },
            ],
        },
        {
            district: 'Kilombero',
            wards: [
                {
                    ward: "Mang'ula",
                    streets: ['Mang\'ula "a"', 'Msalise'],
                },
                {
                    ward: 'Mkula',
                    streets: ['Magombera', 'Katurukila', 'Sole', 'Msufini', 'Mkula'],
                },
                {
                    ward: 'Kidatu',
                    streets: [
                        'Kidatu "a"',
                        'Kidatu "b"',
                        'Kidatu Kati',
                        'Mkamba',
                        'Chikago',
                    ],
                },
                {
                    ward: 'Lumemo',
                    streets: ['Lumemo', 'Mahutanga', 'Ihanga'],
                },
                {
                    ward: 'Idete',
                    streets: ['Idete', 'Idete "b"', 'Miwangani'],
                },
                {
                    ward: 'Mang\'ula "b"',
                    streets: ['Kanyenja', 'Mang\'ula "b"', 'Mshikamano'],
                },
                {
                    ward: 'Signal',
                    streets: ['Signal', 'Sululu', 'Sagamanga'],
                },
                {
                    ward: 'Katindiuka',
                    streets: ['Katindiuka "b"', 'Katindiuka "c"'],
                },
                {
                    ward: 'Lipangalala',
                    streets: [
                        'Kiyongwile',
                        'Lipangalala',
                        'Mkuya',
                        'Mahakamani',
                        'Kiyongwile "b"',
                        'Lihami',
                    ],
                },
                {
                    ward: 'Mlabani',
                    streets: ['Mlabani "a"', 'Mlabani "b"', 'Muungano', 'Mchangani'],
                },
                {
                    ward: 'Viwanjasitini',
                    streets: [
                        'Mhola',
                        'Viwanjasitini',
                        'Viwandani',
                        'Magengeni',
                        'Jongo',
                        'Matonga',
                        'Viwanjasitini "b"',
                        'Uwanja Wa Taifa "a"',
                        'Uwanja Wa Taifa "b"',
                        'Minarani',
                    ],
                },
                {
                    ward: "Ching'anda",
                    streets: ["Ching'anda", 'Lufulu', 'Udagaji'],
                },
                {
                    ward: 'Igima',
                    streets: ['Mpofu', 'Igima', 'Namalumbo', 'Ngajenwa'],
                },
            ],
        },
        {
            district: 'Ulanga',
            wards: [
                {
                    ward: 'Mahenge Mjini',
                    streets: ['Mahenge', 'Safari Road'],
                },
                {
                    ward: 'Vigoi',
                    streets: ['Vigoi', 'Mbagula', 'Namgezi', 'Makanga'],
                },
                {
                    ward: 'Isongo',
                    streets: ['Isongo', 'Mbangayao'],
                },
                {
                    ward: 'Msogezi',
                    streets: ['Msogezi'],
                },
            ],
        },
    ],
};

const mtwara = {
    region: 'Mtwara',
    districts: [
        {
            district: 'Mtwara Cbd',
            wards: [
                {
                    ward: 'Reli',
                    streets: [
                        'Kizota',
                        'Mkunguni',
                        'Msikitini',
                        'Relini A',
                        'Relini B',
                        'Serengeti',
                    ],
                },
                {
                    ward: 'Likombe',
                    streets: ['Mdenga', 'Madaba', 'Mtepwezi', 'Mlimani', 'Lilungu'],
                },
                {
                    ward: 'Vigaeni',
                    streets: [
                        'Kisutu A',
                        'Kisutu B',
                        'Kisutu C',
                        'Mabatini A',
                        'Mabatini B',
                        'Soko Kuu',
                        'Sinani',
                    ],
                },
                {
                    ward: 'Shangani',
                    streets: [
                        'Ligula Kati',
                        'Ligula Mbelenje',
                        'Kiyangu A',
                        'Kiyangu B',
                        'Shangani East',
                        'Ligula Tes',
                        'Maduka Makubwa',
                        'Ligula Shuleni',
                        'Ligula Umoja',
                        'Shangani West',
                        'Indian Quarters',
                        'Ttc Ufundi',
                    ],
                },
                {
                    ward: 'Chikongola',
                    streets: ['Ofisi Kuu', 'Mwera', 'Muungano', 'Citus', 'Sabasaba'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Biafra', 'Gezaulole', 'Guinea', 'Msikitini'],
                },
                {
                    ward: 'Chuno',
                    streets: [
                        'Miseti',
                        'Namtibwili',
                        'Majengo',
                        "Ligula 'b'",
                        "Ligula 'a'",
                        "Ligula 'c'",
                        'Chuno Kati',
                    ],
                },
                {
                    ward: 'Ufukoni',
                    streets: [
                        'Ufukoni Standi',
                        'Chundi',
                        'Mbae Mashariki',
                        'Mbae Magharibi',
                        'Mianzini',
                    ],
                },
                {
                    ward: 'Mitengo',
                    streets: ['Kilima Hewa', 'Mnazi Mmoja', 'Mnaida'],
                },
                {
                    ward: 'Magengeni',
                    streets: ['Mkundi', 'Magengeni', 'Ndolo', 'Bomani', 'Mjimwema'],
                },
                {
                    ward: 'Mtonya',
                    streets: ['Mtonya A', 'Mtonya B', 'Singino', 'Haikata'],
                },
                {
                    ward: 'Kisungule',
                    streets: ['Kisungule A', 'Kisungule B', 'Kisungule C'],
                },
                {
                    ward: 'Jangwani',
                    streets: [
                        'Mahuta',
                        'Mirumba',
                        'Mchangani',
                        'Mtangashari',
                        'Lwelu',
                        'Mabatini',
                        'Dimbuzi',
                    ],
                },
                {
                    ward: 'Rahaleo',
                    streets: [
                        'Rahaleo Juu',
                        'Pentekoste',
                        'Ffu Nandope',
                        'Shapriya',
                        'Rahaleo Chini',
                    ],
                },
                {
                    ward: 'Naliendele',
                    streets: [
                        'Mkangala Kaskazini',
                        'Mkangala Kusini',
                        'Mkunjanguo',
                        'Mbawala Chini',
                        'Mbawala Shangani',
                        'Naulongo',
                        'Pwani A',
                        'Pwani B',
                        'Pwani C',
                        'Mihambwe',
                        'Pachoto A',
                        'Pachoto B',
                        'Sogea',
                    ],
                },
                {
                    ward: 'Magomeni',
                    streets: [
                        'Magomeni A',
                        'Magomeni B',
                        'Magomeni Shuleni',
                        'Tulivu',
                        'Kagera',
                        'Bomba La Bure',
                        'Chipuputa',
                        'Matopeni',
                    ],
                },
                {
                    ward: 'Mtawanya',
                    streets: [
                        'Namayanga',
                        'Chihiko',
                        'Mtawanya Hospitali',
                        'Mtawanya Sokoni',
                        'Mangamba Chini',
                        'Mangamba Juu',
                        'Uwanja Wa Ndege',
                    ],
                },
                {
                    ward: 'Tandika',
                    streets: [
                        'Mmingano',
                        'Mtawike',
                        'Liyawile',
                        'Tandika',
                        'Shule Ya Msingi  Majengo',
                    ],
                },
            ],
        },
        {
            district: 'Mtwara',
            wards: [
                {
                    ward: 'Ziwani',
                    streets: ['Msakala', 'Majengo', 'Mnawene', 'Nambeleketela'],
                },
                {
                    ward: 'Madimba',
                    streets: [
                        'Mngoji',
                        'Litembe',
                        'Mitambo',
                        'Madimba',
                        'Mtendachi',
                        'Namindondi',
                        'Mayaya',
                    ],
                },
                {
                    ward: 'Mahurunga',
                    streets: [
                        'Kihimika',
                        'Kitunguli',
                        'Mahurunga',
                        'Kivava',
                        'Kilombero',
                    ],
                },
                {
                    ward: 'Nanguruwe',
                    streets: [
                        'Ngorongoro',
                        'Nanguruwe',
                        'Namahyakata  Shuleni',
                        'Namahyakata Barabarani',
                        'Mtemba',
                    ],
                },
                {
                    ward: 'Mayanga',
                    streets: ['Msijute', 'Mayanga', 'Hiyari', 'Likonde', 'Nangumi'],
                },
                {
                    ward: 'Naumbu',
                    streets: [
                        'Namgogoli',
                        'Mgao',
                        'Naumbu Kusini',
                        'Kisiwa',
                        'Majengo',
                        'Imekuwa',
                        'Naumbu',
                        'Mkungu',
                    ],
                },
                {
                    ward: 'Ndumbwe',
                    streets: ['Ndumbwe', 'Changalawe', 'Mbuo', 'Mwatehi', 'Mnyundo'],
                },
                {
                    ward: 'Dihimba',
                    streets: [
                        'Dihimba',
                        'Kinyamu',
                        'Njumbuli',
                        'Manamawa',
                        'Namkapi',
                        'Mpondomo',
                        'Namanjele',
                    ],
                },
                {
                    ward: 'Mtiniko',
                    streets: [
                        'Mtiniko',
                        'Maili',
                        'Malamba',
                        'Maranje',
                        'Tulia',
                        'Mnivata',
                        'Mkulanga',
                    ],
                },
                {
                    ward: 'Chawi',
                    streets: [
                        'Ngonja',
                        'Navikole',
                        'Arusha',
                        'Arusha Juu',
                        'Mkomo',
                        'Ngorongoro',
                        'Chawi',
                        'Chawi Sokoni',
                    ],
                },
                {
                    ward: 'Kitaya',
                    streets: [
                        'Mayembe Juu',
                        'Dindwa',
                        'Mayembe Chini',
                        'Mchanje',
                        'Kitaya',
                        'Kihamba',
                    ],
                },
                {
                    ward: 'Kiromba',
                    streets: [
                        'Msufini',
                        'Kiromba',
                        'Mji Mwema',
                        'Nachuma',
                        'Mikumbi',
                        'Kiromba Chini',
                    ],
                },
                {
                    ward: 'Nanyamba',
                    streets: [
                        'Namkuku',
                        'Nanyamba',
                        'Nanyamba B',
                        'Mibobo',
                        'Madina',
                        'Kilimanjaro',
                    ],
                },
                {
                    ward: 'Namtumbuka',
                    streets: [
                        'Namtumbuka',
                        'Majengo',
                        'Kilimahewa',
                        'Namtumbuka Shuleni',
                        'Likwaya',
                    ],
                },
                {
                    ward: 'Njengwa',
                    streets: [
                        'Njengwa',
                        'Njengwa Sokoni',
                        'Mtendachi Juu',
                        'Narunga',
                        'Majengo',
                        "Nang'awanga",
                        'Ziwani  Juu',
                    ],
                },
                {
                    ward: 'Nitekela',
                    streets: [
                        'Chiwilo',
                        'Migombani',
                        'Kitamabondeni',
                        'Miule',
                        'Nitekela',
                        'Maendeleo',
                    ],
                },
                {
                    ward: 'Mnima',
                    streets: [
                        'Namdimba',
                        'Mnima',
                        'Kilimahewa',
                        'Namahukula',
                        'Chihokwe',
                        'Namambi',
                    ],
                },
                {
                    ward: 'Kitere',
                    streets: [
                        'Chemchem',
                        'Kitere',
                        'Lilido',
                        'Nakada',
                        'Mkonye',
                        'Chekeleni',
                    ],
                },
                {
                    ward: 'Msanga Mkuu',
                    streets: ['Msanga Mkuu', 'Sinde', 'Namela'],
                },
                {
                    ward: 'Mbawala',
                    streets: [
                        'Mduwi',
                        'Nachenjele',
                        'Mbawala',
                        'Makome',
                        'Makome B',
                        'Maili Kumi',
                        'Mwindi',
                        'Mihembe',
                        "Ching'olola",
                    ],
                },
                {
                    ward: 'Kianga',
                    streets: ['Kianga', 'Mwenge', 'Mkahara', 'Mpanyani'],
                },
                {
                    ward: 'Tangazo',
                    streets: ['Mnaida', 'Tangazo', 'Kilambo', 'Magomeni'],
                },
                {
                    ward: 'Muungano',
                    streets: [
                        'Muungano',
                        'Mkwajuni Chini',
                        'Lyowa',
                        'Mwembetogwa',
                        'Mkwajuni Juu',
                    ],
                },
                {
                    ward: 'Libobe',
                    streets: [
                        'Mnyija',
                        'Libobe',
                        'Libobe B',
                        'Unguja',
                        "Ming'wena",
                        'Namuhi',
                    ],
                },
                {
                    ward: 'Mpapura',
                    streets: ['Utende', 'Mpapura', 'Nanyani', 'Mabatini'],
                },
                {
                    ward: 'Mbembaleo',
                    streets: [
                        "Mwang'anga",
                        'Magomeni',
                        'Mbembaleo',
                        'Mwamko',
                        'Shangani',
                    ],
                },
                {
                    ward: 'Mtimbwilimbwi',
                    streets: [
                        'Mtimbwilimbwi',
                        'Shaba',
                        'Mtopwa',
                        'Pachani',
                        'Mbambakofi',
                        'Nanjedya',
                        'Namisangi',
                    ],
                },
                {
                    ward: 'Milango Minne',
                    streets: [
                        'Mnyahi',
                        'Milango Minne',
                        'Mnyawi',
                        'Mkubwanana',
                        'Mnyawi Barabarani',
                        'Umoja',
                        'Myawi Shuleni',
                    ],
                },
                {
                    ward: 'Dinyecha',
                    streets: ['Dinyecha', 'Natoto', 'Chitondola', 'Chikwaya', 'Kibaoni'],
                },
                {
                    ward: 'Nyundo',
                    streets: ['Nyundo', 'Niyumba', 'Nyundo B', 'Naucheche'],
                },
                {
                    ward: 'Mnongodi',
                    streets: [
                        'Mnongodi',
                        'Kilimahewa',
                        'Mnongodi Magharib1',
                        'Mnongodi Magharib2',
                        'Mnongodi Magharib3',
                        'Kiwengulo',
                    ],
                },
                {
                    ward: 'Hinju',
                    streets: ['Hinju', 'Chiwindi', 'Kitachi', 'Malongo'],
                },
                {
                    ward: 'Msimbati',
                    streets: ['Mtandi', 'Msimbati', 'Ruvula', 'Mnuyo'],
                },
                {
                    ward: 'Nalingu',
                    streets: ['Mnete', 'Mkubiru', 'Nalingu', 'Milamba', 'Mnazi'],
                },
                {
                    ward: 'Moma',
                    streets: ["Ding'wida", 'Minyembe', 'Moma', 'Lukweta'],
                },
                {
                    ward: 'Lipwidi',
                    streets: ['Lipwidi', 'Mtama', 'Nambela'],
                },
                {
                    ward: 'Mangopachanne',
                    streets: [
                        'Mangopachanne',
                        'Mbagala',
                        'Ilala',
                        'Mkutimango',
                        'Ushirika',
                    ],
                },
                {
                    ward: 'Mkunwa',
                    streets: [
                        'Nanyati',
                        'Mnyengedi',
                        'Mkunwa',
                        'Nachua',
                        'Kawawa',
                        'Mawindi',
                    ],
                },
            ],
        },
        {
            district: 'Tandahimba',
            wards: [
                {
                    ward: 'Tandahimba',
                    streets: [''],
                },
                {
                    ward: 'Kitama 1',
                    streets: ['Kitama Mjini'],
                },
                {
                    ward: 'Kitama 2',
                    streets: ['Kitama Mjini'],
                },
                {
                    ward: 'Kitama 3',
                    streets: ['Kitama Mjini'],
                },
                {
                    ward: 'Kitama 4',
                    streets: ['Mitondi A'],
                },
                {
                    ward: 'Kitama 5',
                    streets: ['Mitondi A'],
                },
                {
                    ward: 'Kitama 6',
                    streets: ['Mitondi A'],
                },
                {
                    ward: 'Kitama 7',
                    streets: ['Mitondi B'],
                },
                {
                    ward: 'Kitama 8',
                    streets: ['Mitondi B'],
                },
                {
                    ward: 'Kitama 9',
                    streets: ['Mitondi B'],
                },
                {
                    ward: 'Kitama 10',
                    streets: ['Mitondi B'],
                },
                {
                    ward: 'Kitama 11',
                    streets: ['Mitondi B'],
                },
                {
                    ward: 'Kitama 12',
                    streets: ['Kitama Shuleni'],
                },
                {
                    ward: 'Kitama 13',
                    streets: ['Kitama Shuleni'],
                },
                {
                    ward: 'Kitama 14',
                    streets: ['Kitama Shuleni'],
                },
                {
                    ward: 'Kitama 15',
                    streets: ['Mwenge B'],
                },
                {
                    ward: 'Kitama 16',
                    streets: ['Mwenge B'],
                },
                {
                    ward: 'Kitama 17',
                    streets: ['Mwenge B'],
                },
                {
                    ward: 'Kitama 18',
                    streets: ['Mwenge A'],
                },
                {
                    ward: 'Kitama 19',
                    streets: ['Mwenge A'],
                },
                {
                    ward: 'Kitama 20',
                    streets: ['Mwenge A'],
                },
                {
                    ward: 'Kitama 21',
                    streets: ['Namunda'],
                },
                {
                    ward: 'Kitama 22',
                    streets: ['Namunda'],
                },
                {
                    ward: 'Kitama 23',
                    streets: ['Namunda'],
                },
                {
                    ward: 'Lyenje',
                    streets: ['Lyenje', 'Mwembemmoja', 'Mahoha'],
                },
                {
                    ward: 'Milongodi',
                    streets: [
                        'Mtingida',
                        'Namkomolela',
                        'Miledi',
                        'Milongodi',
                        'Mmwindi',
                    ],
                },
                {
                    ward: 'Nanhyanga',
                    streets: [
                        "Nahyanga 'a'",
                        "Nahyanga 'c'",
                        '',
                        "Nanhyanga 'b'",
                        'Miule',
                        'Mnaida',
                        'Mnauke',
                    ],
                },
                {
                    ward: 'Namikupa',
                    streets: [
                        'Namikupa',
                        "Ching'ati",
                        'Pemba',
                        'Milidu',
                        'Chihangi',
                        'Ilala',
                    ],
                },
                {
                    ward: 'Naputa',
                    streets: [
                        'Mpikula',
                        'Mwangaza Sokoni',
                        'Namdwani',
                        'Naputa Shuleni',
                        'Naputa Sokoni',
                        'Mwangaza Shuleni',
                    ],
                },
                {
                    ward: 'Mkoreha',
                    streets: ['Namunda', 'Mchangani', 'Chikongo', 'Dinyeke', 'Misufini'],
                },
                {
                    ward: 'Mihambwe',
                    streets: [
                        'Mihambwe',
                        'Ruvuma',
                        'Lembela',
                        'Kisagani',
                        'Nakale',
                        'Mkaha',
                    ],
                },
                {
                    ward: 'Michenjele',
                    streets: [
                        'Michenjele',
                        'Bandari',
                        'Mpunda',
                        'Mmalala',
                        'Shangani',
                        'Ngongo',
                    ],
                },
                {
                    ward: 'Maundo',
                    streets: [
                        'Maundo',
                        'Namahonga',
                        "Chang'ombe",
                        'Kunandundu',
                        'Chiumo',
                    ],
                },
                {
                    ward: 'Mnyawa',
                    streets: ['Mnyawa', 'Maheha', 'Mundamkulu', 'Jangwani', 'Umoja'],
                },
                {
                    ward: 'Lukokoda',
                    streets: ['Lukokoda', 'Mnazimmoja', 'Ghana Juu', 'Ghana Chini'],
                },
                {
                    ward: 'Mkundi',
                    streets: [
                        'Lipalwe I',
                        'Dinembo',
                        'Chitoholi Juu',
                        'Mikunda Sokoni',
                        'Mikunda Shuleni',
                        'Lipalwe Ii',
                        'Chitoholi',
                    ],
                },
                {
                    ward: 'Mahuta',
                    streets: ['Chitoholi'],
                },
                {
                    ward: 'Chingungwe',
                    streets: [
                        'Chingungwe',
                        'Mkupete',
                        'Mtenda',
                        'Salama',
                        'Chikunda',
                        'Kuchele',
                        'Kiule',
                    ],
                },
                {
                    ward: 'Mdimba Mnyoma',
                    streets: [
                        'Mnyoma',
                        'Tukuru',
                        'Mdenga',
                        'Mtegu',
                        'Liponde',
                        'Mweru Shuleni',
                        'Mweru Sokoni',
                        'Chaume',
                        'Sokoine',
                        'Mkonjowano',
                        'Chimbuko',
                        'Mkula',
                        'Ulodaleo',
                    ],
                },
                {
                    ward: 'Luagala',
                    streets: [
                        'Michinji',
                        'Mkola  Chini',
                        'Mkola  Juu',
                        'Chidede',
                        'Luagala',
                        'Kigamboni',
                    ],
                },
                {
                    ward: 'Ngunja',
                    streets: [
                        'Ngunja',
                        'Namindondi Juu',
                        'Namindondi Chini',
                        'Mangombya',
                        'Nanjanga',
                        'Nannala',
                        'Mkuti',
                    ],
                },
                {
                    ward: 'Mkwiti',
                    streets: ['Mkwiti Chini', 'Mkwiti Juu', 'Likolombe', 'Kidoo'],
                },
                {
                    ward: 'Mchichira',
                    streets: ['Mchichira', 'Shangani', 'Pachani', 'Mnarani', 'Mkwajuni'],
                },
                {
                    ward: 'Litehu',
                    streets: ['Litehu', 'Mmeda', 'Mabeti', 'Libobe'],
                },
                {
                    ward: 'Nambahu',
                    streets: [
                        'Mivanga',
                        'Mikuyu',
                        'Muungano',
                        'Nambahu',
                        'Nachunyu',
                        'Mnaida',
                    ],
                },
                {
                    ward: 'Miuta',
                    streets: ['Namedi', "Ng'ongolo", 'Miuta'],
                },
                {
                    ward: 'Kwanyama',
                    streets: ['Kwanyama', 'Huruma', 'Sinyangi', 'Mitumbati'],
                },
                {
                    ward: 'Dinduma',
                    streets: [
                        'Nanyuwila',
                        'Mitene',
                        'Dinduma Barabarani',
                        'Dinduma Shuleni',
                        'Tandika',
                    ],
                },
                {
                    ward: 'Chikongola',
                    streets: ['Tandika'],
                },
                {
                    ward: 'Mndumbwe',
                    streets: [
                        'Mndumbwe',
                        'Mambamba',
                        'Majengo',
                        'Mtandavala',
                        'Mfyatula',
                    ],
                },
                {
                    ward: 'Malopokelo',
                    streets: ['Mfyatula'],
                },
                {
                    ward: 'Mkwedu',
                    streets: ['Luheya', 'Machedi', 'Mkwedu Ii'],
                },
            ],
        },
        {
            district: 'Newala',
            wards: [
                {
                    ward: 'Luchingu',
                    streets: ['Mahakama', 'Mzalendo', 'Butiama', 'Ujenzi'],
                },
                {
                    ward: 'Mkunya',
                    streets: ['Kiuta', 'Rahaleo', 'Matokeo', 'Mkunya', 'Chihanga'],
                },
                {
                    ward: 'Nanguruwe',
                    streets: [
                        'Nanguruwe',
                        'Kilimani',
                        'Magumchila',
                        'Mnanje',
                        'Mtawe',
                        'Samora',
                        'Mapili',
                    ],
                },
                {
                    ward: 'Mcholi  I',
                    streets: ['Pachoto', 'Chiunjila', 'Amani', 'Mnalale', 'Chikwedu'],
                },
                {
                    ward: 'Makote',
                    streets: ['Kipimi', 'Makondeko', 'Makote'],
                },
                {
                    ward: 'Mcholi Ii',
                    streets: [
                        'Tawala',
                        'Mnaida',
                        'Lidumbe Shuleni',
                        'Mitumbati',
                        'Msilili',
                    ],
                },
                {
                    ward: 'Mnekachi',
                    streets: ['Nambunga', 'Chiwambo', 'Mkoma I', 'Imani', 'Kazamoyo'],
                },
                {
                    ward: 'Namiyonga',
                    streets: ['Namiyonga', 'Nakachela', 'Mandumba'],
                },
                {
                    ward: 'Mkwedu',
                    streets: [
                        'Tengulengu',
                        'Mkwedu',
                        'Mnyambachi',
                        'Matale',
                        'Luheya',
                        'Machedi',
                        'Mkwedu Ii',
                    ],
                },
                {
                    ward: 'Makukwe',
                    streets: ['Makukwe', 'Mnamunjelele', 'Mnachi', 'Mnaudya', 'Mmongo'],
                },
                {
                    ward: 'Mchemo',
                    streets: [
                        'Mchemo A',
                        'Mkupete',
                        'Lengo',
                        'Mchedebwa',
                        'Chiule',
                        'Mchemo B',
                    ],
                },
                {
                    ward: 'Malatu',
                    streets: [
                        'Malatu Juu',
                        'Tuyangatana',
                        'Malatu Shuleni',
                        'Mkunjo',
                        'Mtanda',
                        'Mnonela',
                    ],
                },
                {
                    ward: 'Chitekete',
                    streets: ['Chitekete', 'Mchangani', 'Nambudi', 'Namkonda'],
                },
                {
                    ward: 'Mnyambe',
                    streets: [
                        'Mnyambe',
                        'Mnima',
                        'Majembe Juu',
                        'Mnayope',
                        'Hengapano',
                        'Bahati',
                    ],
                },
                {
                    ward: 'Maputi',
                    streets: [
                        'Maputi',
                        'Mikwanga',
                        'Kadengwa',
                        'Mnauya',
                        'Mtongwele Chini',
                        'Likwaya',
                    ],
                },
                {
                    ward: 'Kitangari',
                    streets: [
                        'Kitangari Sokoni',
                        'Kitangani Hospitali',
                        'Niamoja',
                        'Mandala',
                        'Mitema',
                    ],
                },
                {
                    ward: 'Mtopwa',
                    streets: ['Mtopwa', 'Tukazane', 'Chilondolo'],
                },
                {
                    ward: 'Chiwonga',
                    streets: [
                        'Chiwonga',
                        'Chihwindi',
                        'Chikuti',
                        'Pachanne',
                        'Ukombozi',
                        'Mmulunga',
                    ],
                },
                {
                    ward: 'Mkoma Ii',
                    streets: [
                        'Mkoma Ii',
                        'Lihanga',
                        'Lochinu',
                        'Nangudyane',
                        'Chikalule',
                    ],
                },
                {
                    ward: 'Chilangala',
                    streets: [
                        'Namdimba',
                        'Miyuyu',
                        'Chilangala',
                        'Mnyegachi',
                        'Mkudumba',
                    ],
                },
                {
                    ward: 'Mdimba Mpelempele',
                    streets: ['Mdimba', 'Ngalu', 'Minjale', 'Chitenda'],
                },
                {
                    ward: 'Mtonya',
                    streets: ['Majengo', 'Moneka', 'Lekanelo'],
                },
                {
                    ward: 'Nakahako',
                    streets: ['Nakahako', 'Mnauke', 'Mitahu', 'Mpalu', 'Lukohe'],
                },
                {
                    ward: 'Makonga',
                    streets: ['Makonga', 'Juhudi', 'Nanyonda', 'Kilindu', 'Mtangalanga'],
                },
                {
                    ward: 'Mtunguru',
                    streets: ['Mtunguru', 'Ngongo', 'Mango', 'Mkwaya'],
                },
                {
                    ward: 'Chihangu',
                    streets: ['Mtongwele Juu', 'Chihangu A', 'Chihangu B', 'Idamnole'],
                },
                {
                    ward: 'Nambali',
                    streets: ['Nambali A', 'Mahoha', 'Mmalachi', 'Nambali B', 'Chilende'],
                },
                {
                    ward: 'Nandwahi',
                    streets: [
                        'Nandwahi',
                        'Madaba',
                        'Mbembele',
                        'Vihokoli',
                        'Chikunda / Lubido',
                        'Mpirani',
                        'Chipito',
                    ],
                },
                {
                    ward: 'Mpwapwa',
                    streets: ['Songambele', 'Machenje', 'Mpwapwa'],
                },
                {
                    ward: 'Mnyeu',
                    streets: ['Mnyeu', 'Mbeya', 'Tulieni', 'Mbebede'],
                },
                {
                    ward: 'Mikumbi',
                    streets: ['Mdenga', 'Navanga', 'Mkongi', 'Namangudu', 'Mikumbi'],
                },
                {
                    ward: 'Julia',
                    streets: ['Julia', 'Kilimahewa', 'Mwanoha'],
                },
                {
                    ward: 'Nangwala',
                    streets: [
                        'Uwanja Wa Ndege',
                        'Kotazi',
                        'Nangwala Chini',
                        'Jeshini',
                        'Shuleni Chitandi',
                        'Godauni Chitandi',
                    ],
                },
                {
                    ward: 'Tulindane',
                    streets: [
                        'Nakachela',
                        'Pachoto',
                        'Makote',
                        'Mbenga',
                        'Luchingu A',
                        'Amkeni',
                        'Mfaranyaki',
                        'Chiwembi',
                        'Matankini',
                        'Majengo',
                    ],
                },
                {
                    ward: "Mkulung'ulu",
                    streets: ['Londo', 'Magombo', "Mkulung'ulu"],
                },
                {
                    ward: 'Mahumbika',
                    streets: ['Mahumbika', 'Kikuyu', 'Chikwaya'],
                },
                {
                    ward: 'Mtumachi',
                    streets: ['Mcholi Godauni', 'Tumaini', 'Makorongo', 'Chihwindi'],
                },
                {
                    ward: 'Muungano',
                    streets: ['Mnali', 'Mapinduzi', 'Namkonda', 'Nanda', 'Mmovo', ''],
                },
            ],
        },
        {
            district: 'Masasi',
            wards: [
                {
                    ward: 'Mkuti',
                    streets: [
                        'Saba Saba',
                        'Madeko',
                        'Kitunda',
                        'Robeni',
                        'Kisiwani',
                        'Majimaji',
                        'Mkutikati',
                    ],
                },
                {
                    ward: 'Marika',
                    streets: ['Namatunu', 'Mnarani', 'Marika', 'Machombe'],
                },
                {
                    ward: 'Lukuledi',
                    streets: ['Lukuledi A', 'Lukuledi B', 'Mraushi', 'Mkolopola'],
                },
                {
                    ward: 'Namajani',
                    streets: [
                        'Namahinga',
                        'Namajani',
                        'Amani Chiroro',
                        'Ngalole',
                        'Migombani',
                    ],
                },
                {
                    ward: 'Namatutwe',
                    streets: ['Chingulungulu', 'Mkwapa', 'Namatutwe'],
                },
                {
                    ward: 'Chigugu',
                    streets: ['Chigugu', 'Mbaju', 'Mbemba', 'Mkuyuni'],
                },
                {
                    ward: 'Chiwata',
                    streets: ['Chiwata', 'Chidya'],
                },
                {
                    ward: 'Mkundi',
                    streets: [
                        'Mkoropola',
                        'Majembe',
                        'Nakalola',
                        'Nakachindu',
                        'Chipango',
                    ],
                },
                {
                    ward: 'Nanjota',
                    streets: ['Nanjota A', 'Nairombo', 'Milunda'],
                },
                {
                    ward: 'Mkululu',
                    streets: [
                        'Mkululu',
                        'Mkundi Amani',
                        'Mfuto',
                        'Miba',
                        'Mpopo',
                        'Mbugo',
                        'Syenjela',
                        'Chingopoli',
                        'Mnolela',
                        'Chipunda',
                    ],
                },
                {
                    ward: 'Chiungutwa',
                    streets: [
                        'Chiungutwa',
                        'Maugura',
                        'Misechela',
                        'Mipande',
                        'Chilimba',
                        'Kalipinde',
                    ],
                },
                {
                    ward: 'Mbuyuni',
                    streets: [
                        'Majembendago',
                        'Mbuyuni',
                        'Ndibwa',
                        'Mpulima',
                        'Miungo',
                        'Mitonji',
                        'Matogoro',
                    ],
                },
                {
                    ward: 'Lulindi',
                    streets: [
                        'Lulindi',
                        'Ndwika Chini',
                        'Mkaseka',
                        'Chiwambo',
                        'Muungano',
                        'Luagala',
                        'Kivukoni',
                        'Mnopwe',
                    ],
                },
                {
                    ward: 'Namalenga',
                    streets: ['Mkangaula', 'Nagaga', 'Namalenga', 'Mvita'],
                },
                {
                    ward: 'Lipumburu',
                    streets: ['Mchoti', 'Lipumburu', 'Nantona'],
                },
                {
                    ward: 'Sindano',
                    streets: ['Sindano', 'Luatala', 'Ulungu', 'Lichehe'],
                },
                {
                    ward: 'Mchauru',
                    streets: [
                        'Namombwe',
                        'Mirewe',
                        'Mchauru',
                        'Rivango',
                        'Mkowo',
                        'Nangomwa',
                        'Maparawe',
                        'Mwitika',
                        'Mhata',
                    ],
                },
                {
                    ward: 'Mnavira',
                    streets: ['Mnavira', 'Geuza', 'Manyuli'],
                },
                {
                    ward: 'Mwena',
                    streets: ['Mwena', 'Chibwini', 'Ndunda'],
                },
                {
                    ward: 'Nanganga',
                    streets: [
                        'Nanganga A',
                        'Namihungo',
                        'Mkungu',
                        "Mkang'u",
                        'Chipite',
                        'Nangangab',
                    ],
                },
                {
                    ward: 'Jida',
                    streets: ['Jida', 'Magumchila', 'Madaraka', 'Zahanati', 'Jamhuri'],
                },
                {
                    ward: 'Mkomaindo',
                    streets: [
                        'Rest Camp',
                        'Darajani',
                        'Mchema',
                        'Hospitali',
                        "Mkadaenda 'a'",
                        'Misufini',
                        'Mkadaenda B',
                    ],
                },
                {
                    ward: 'Migongo',
                    streets: [
                        'Kilimani',
                        'Nangaya',
                        "Nangaya  'a'",
                        "Nangaya  'b'",
                        'Misufini',
                        'Mkunguni',
                        'Migongo Kati',
                    ],
                },
                {
                    ward: 'Mtandi',
                    streets: [
                        'Mtandi A',
                        'Mtandi B',
                        'Nanjuva',
                        'Minazini',
                        'Marambo Juu',
                        'Marambo Chini',
                        'Benako',
                        'Pachani',
                        'Kachulu',
                    ],
                },
                {
                    ward: 'Nyasa',
                    streets: [
                        'Nyasa Chini',
                        'Nyasa A',
                        'Nyasa B',
                        'Matankini',
                        'Mchema',
                        'Maendeleo',
                        'Nyasa Ofisini',
                    ],
                },
                {
                    ward: 'Temeke',
                    streets: ['Temeke', 'Mkarango', 'Nambose Juu', 'Mtakuja'],
                },
                {
                    ward: 'Mwenge Mtapika',
                    streets: ['Mbonde', 'Mayula', 'Mwenge Mtapika', 'Namkungwi'],
                },
                {
                    ward: 'Chiwale',
                    streets: ['Chiwale', 'Nanyindwa', 'Kivukoni', 'Lilala'],
                },
                {
                    ward: 'Mpanyani',
                    streets: [
                        'Mpanyani',
                        'Muungano',
                        'Mihima',
                        'Nambawala A',
                        'Nambawala B',
                    ],
                },
                {
                    ward: 'Mlingula',
                    streets: [
                        'Mlingula',
                        'Namichi',
                        'Masikunyingi',
                        'Chikoweti',
                        'Nambaya',
                    ],
                },
                {
                    ward: 'Sululu',
                    streets: [
                        'Makulani',
                        'Mtakeni',
                        'Mkarakate',
                        'Sululu',
                        'Mkapunda A',
                        'Mkapunda B',
                    ],
                },
                {
                    ward: 'Chikoropora',
                    streets: [
                        'Chikoropora',
                        'Namyomyo',
                        'Rahaleo',
                        'Mkaliwata',
                        'Mkachima',
                        'Mapili',
                    ],
                },
                {
                    ward: 'Matawale',
                    streets: [
                        'Mpekeso',
                        'Tukaewote',
                        'Navai',
                        'Machenje',
                        'Ngalinje',
                        'Mkaranga',
                        'Chakama',
                    ],
                },
                {
                    ward: 'Mitesa',
                    streets: ['Msanga', 'Mitesa', 'Msokosela', 'Maendeleo', 'Mburusa'],
                },
                {
                    ward: "Makong'onda",
                    streets: ["Makong'onda", 'Kilidu', 'Nakarara', 'Mkwaya'],
                },
                {
                    ward: 'Mpeta',
                    streets: ['Mpeta', 'Huwe', 'Makanyama', 'Kalangwale'],
                },
                {
                    ward: 'Lupaso',
                    streets: ['Mtojo', 'Utimbe', 'Liurungu', 'Mbangara', 'Lupaso'],
                },
                {
                    ward: 'Mjelejele',
                    streets: ['Mputeni', 'Nambunda', 'Mijelejele', 'Mtengula'],
                },
                {
                    ward: 'Chikukwe',
                    streets: [
                        'Chikukwe',
                        'Maparagwe',
                        'Liloya',
                        'Mji Mwema',
                        'Mandiwa',
                        'Mwambao',
                    ],
                },
                {
                    ward: 'Nangoo',
                    streets: ['Mumburu A', 'Mumburu B', 'Mwongozo', 'Nangoo', 'Mdenga'],
                },
                {
                    ward: 'Chikundi',
                    streets: ['Chikundi', 'Msigalila', 'Mtunungu', 'Namali', 'Mkalapa'],
                },
                {
                    ward: 'Ndanda',
                    streets: ['Njenga', 'Mpowora', 'Liputu', 'Tuungane', 'Majengo'],
                },
                {
                    ward: 'Mpindimbi',
                    streets: [
                        'Shauri Moyo',
                        'Kanyimbi',
                        'Kachepa',
                        'Mpindimbi',
                        'Mapale',
                    ],
                },
                {
                    ward: 'Msikisi',
                    streets: ['Miwale', 'Msikisi', 'Namalembo'],
                },
                {
                    ward: 'Chanikanguo',
                    streets: [
                        'Mchokonyo',
                        'Ndunda',
                        'Magumuchila',
                        'Chisegu',
                        'Maili Sita',
                        'Namakongwa',
                        'Mkajamila',
                        'Tuleane',
                        'Chanikanguo',
                    ],
                },
                {
                    ward: 'Napupa',
                    streets: [
                        'Wapi Wapi A',
                        'Wapi Wapi B',
                        'Kagera',
                        'Stendi Ya Newala',
                        'Misufini',
                        'Silabu',
                        'Napupa',
                        'Chiwisi',
                    ],
                },
                {
                    ward: 'Mumbaka',
                    streets: [
                        'Mumbaka',
                        'Mlundelunde',
                        'Namikunda A',
                        'Chipole',
                        'Namikunda B',
                    ],
                },
                {
                    ward: 'Chikunja',
                    streets: [
                        'Chikunja',
                        'Napata',
                        'Nasindi',
                        'Nasindi Mission',
                        'Nanditi',
                    ],
                },
            ],
        },
        {
            district: 'Nanyumbu',
            wards: [
                {
                    ward: 'Nangomba',
                    streets: ['Nangomba', 'Mjimwema', 'Chihuve', 'Mneneka', 'Maswera'],
                },
                {
                    ward: 'Mikangaula',
                    streets: [
                        "Chang'ombe",
                        'Mikangaula',
                        'Namatumbusi',
                        'Mkwajuni',
                        'Kilosa',
                        'Lowasa',
                    ],
                },
                {
                    ward: 'Maratani',
                    streets: ['Maratani', 'Mchangani A', 'Lipupu', 'Malema'],
                },
                {
                    ward: 'Nanyumbu',
                    streets: [
                        'Nanyumbu',
                        'Chungu',
                        'Chitowe',
                        'Maneme',
                        'Mtawatawa',
                        'Nanderu',
                        'Mkuula',
                        'Makanya',
                    ],
                },
                {
                    ward: 'Chipuputa',
                    streets: [
                        'Chipuputa',
                        'Mkohora',
                        'Namasogo',
                        'Namaguluvi',
                        'Mpwahia',
                        'Nakatete',
                    ],
                },
                {
                    ward: 'Nakopi',
                    streets: [
                        'Nakopi',
                        'Kazamoyo',
                        'Mburusa',
                        'Mpombe',
                        'Ndechela',
                        'Chimika',
                    ],
                },
                {
                    ward: 'Likokona',
                    streets: ['Likokona', 'Namaka', 'Msinyasi', 'Misawaji'],
                },
                {
                    ward: 'Sengenya',
                    streets: [
                        'Sengenya',
                        'Mkumbaru',
                        'Matimbeni',
                        'Rukumbi',
                        'Chinyanyira',
                        'Mara',
                        'Nachiura',
                        'Namarupi',
                        'Kisimatuli',
                        'Amani',
                        'Masyalele',
                    ],
                },
                {
                    ward: 'Lumesule',
                    streets: [
                        'Lumesule',
                        'Mchenjeuka',
                        'Chigweje',
                        'Changwale',
                        'Nandembo',
                    ],
                },
                {
                    ward: 'Masuguru',
                    streets: ['Masuguru', 'Lukula', 'Lukwika'],
                },
                {
                    ward: 'Mkonona',
                    streets: [
                        'Mitumbati',
                        'Njisa',
                        'Marumba',
                        'Chilunda',
                        'Namijati',
                        'Mbangala Mbuyuni',
                    ],
                },
                {
                    ward: 'Nandete',
                    streets: [
                        'Nandete',
                        'Ulanga',
                        'Chivirikiti',
                        'Nakole',
                        'Mtalikachau',
                    ],
                },
                {
                    ward: 'Mangaka',
                    streets: ['Mangaka'],
                },
            ],
        },
    ],
};

const mwanza = {
    region: 'Mwanza',
    districts: [
        {
            district: 'Nyamagana',
            wards: [
                {
                    ward: 'Nyamagana',
                    streets: [
                        'Capripoint',
                        'Nyamagana Mashariki',
                        'Nyamagana Magharibi',
                        'Idara Ya Maji',
                    ],
                },
                {
                    ward: 'Pamba',
                    streets: [
                        'Pamba  A',
                        'Pamba  B',
                        'Miembeni  A',
                        'Miembeni  B',
                        'Bugarika  Kusini',
                        'Bugarika  Kaskazini',
                        'Mission',
                        'Mlimani',
                        'Zahanati',
                        'Jeshini',
                    ],
                },
                {
                    ward: 'Mirongo',
                    streets: ['Rufiji', 'Uhuru', 'Utemini'],
                },
                {
                    ward: 'Isamilo',
                    streets: [
                        'Nyakabungo  A',
                        'Nyakabungo  C',
                        'Nyakabungo',
                        'Nera',
                        'Isamilo  Kaskazini   A',
                        'Isamilo  Kaskazini   B',
                        'S.d.a',
                        'Nyakabungo B',
                        'Lake',
                        'National',
                        'Msikiti',
                    ],
                },
                {
                    ward: 'Mbugani',
                    streets: [
                        'Unguja',
                        'Nyashana',
                        'Mbugani A',
                        'Mbugani B',
                        'Kasulu',
                        'Uhuru',
                    ],
                },
                {
                    ward: 'Igogo',
                    streets: [
                        'Igogo Kaskazini  A',
                        'Kambarage',
                        'Minja',
                        'Bugando',
                        'Jiwe',
                        'Mulungushi',
                        'Kwimba',
                        'Azimio',
                        'Mwenge',
                        'Malulu',
                    ],
                },
                {
                    ward: 'Mkuyuni',
                    streets: [
                        'Mkuyuni Sokoni',
                        'Relwe',
                        'Shede',
                        "Kang'anga",
                        'Mulumbani',
                        'Mahina Relini',
                        'Mahakama',
                        'Nyakurunduma',
                    ],
                },
                {
                    ward: 'Mabatini',
                    streets: [
                        'Mission',
                        'Majengo Mapya',
                        'Nyerere A',
                        'Nyerere B',
                        'Mabatini Kusini',
                        'Mabatini Kaskazini',
                    ],
                },
                {
                    ward: 'Mkolani',
                    streets: [
                        "Nyang'hingi",
                        'Utemini',
                        'Ibanda',
                        'Majengo',
                        'Mkolani',
                        'Nyamazobe',
                        'Kasese',
                        'Buganda',
                        'Nyamalango',
                        'Nyanza',
                    ],
                },
                {
                    ward: 'Luchelele',
                    streets: [
                        'Silivini',
                        'Kasamiko',
                        'Nganza',
                        'Nyakalekwa',
                        'Sweya',
                        'Kisoko',
                        'Malimbe',
                        'Luchelele Ziwani',
                        'Ihumilo',
                        'Shadi',
                    ],
                },
                {
                    ward: 'Buhongwa',
                    streets: [
                        'Buhongwa Mashariki',
                        'Buhongwa Magharibi',
                        'Sahwa',
                        'Bulale',
                        'Bugayamba',
                        'Nyakagwa',
                        'Semba',
                        'Nyambiti',
                        "Ng'wanhalanga",
                        'Buguku',
                        'Isebanda',
                        "Ng'washi",
                        'Igwambiti',
                        'Ihyila',
                        'Nyaluhama',
                        'Mitimirefu',
                        'Nyanembe',
                        'Nyangwi',
                        'Kigoto',
                        'Kishira',
                        'Nyamatara',
                        'Ihyila B',
                        'Shibayi',
                    ],
                },
                {
                    ward: 'Lwanhima',
                    streets: [
                        'Nyakamanga',
                        'Kageye',
                        'Kagera',
                        'Igwambiti B',
                        'Igwambiti D',
                        'Ihushi',
                        'Igwambiti C',
                        'Mwalukila',
                        'Nhobola',
                        'Nyabahigi',
                        'Isabenda',
                        'Igwambiti',
                        'Semba',
                        'Bugayamba',
                        'Sahwa',
                        'Maliza',
                        'Lwanhima Magharibi',
                        'Kibundubundu',
                    ],
                },
                {
                    ward: 'Butimba',
                    streets: [
                        'Tambukareli',
                        'Kambarage',
                        'Ziwa',
                        'Amani',
                        'Iseni',
                        'Bohari',
                        'Hospitali',
                        'Kanyerere',
                    ],
                },
                {
                    ward: 'Nyegezi',
                    streets: [
                        'Swila',
                        'Nkamba',
                        'Califonia',
                        'Kuzenza',
                        'Nyabulogoya',
                        'Nchenga',
                        'Igubinya',
                        'Ibanda',
                    ],
                },
                {
                    ward: 'Igoma',
                    streets: [
                        'Igoma Mashariki',
                        'Igoma Kati',
                        'Mwembeni',
                        'Shamaliwa A',
                        'Kishili A',
                        'Ndofe',
                        'Kikwete',
                        'Bukaga',
                        'Kanenwa',
                        'Fumangila Mashariki',
                        'Mandela',
                        'Nyerere',
                        'Mbugani',
                        'Ihushi',
                    ],
                },
                {
                    ward: 'Kishili',
                    streets: [
                        'Mtakuja',
                        'Kilimo A',
                        'Kilimo B',
                        'Shamaliwa B',
                        'Kishili B',
                        'Dokta Shein',
                        'Kakebe',
                        'Mkapa',
                        'Fumangila Magharibi',
                        'Kanindo',
                        'Igoma Magharibi A',
                        'Igoma Magharibi B',
                    ],
                },
                {
                    ward: 'Mahina',
                    streets: [
                        'Bugarika',
                        'Mahina Kati',
                        'Mwananchi',
                        'Mahina',
                        'Nyangulugulu',
                        'Kagomu',
                        'Ipuli',
                        'Igelegele',
                        'Suzuni',
                    ],
                },
                {
                    ward: 'Mhandu',
                    streets: [
                        'Kasota',
                        'Sokoni',
                        'Kisiwani',
                        'Shigunga',
                        'Mahango',
                        'Temeke',
                        'Maswa Mashariki',
                        'Maswa Magharibi',
                        'Mhandu',
                        "Isengeng'he A",
                        "Isengeng'he B",
                    ],
                },
            ],
        },
        {
            district: 'Ilemela',
            wards: [
                {
                    ward: 'Nyakato',
                    streets: [
                        'Nhc Mashariki',
                        'Nhc Magharibi',
                        'Nhc',
                        'Ihangilo',
                        'Gedeli',
                        'Majengo Mapya',
                        'Kangaye A',
                        'Kangaye B',
                    ],
                },
                {
                    ward: 'Buswelu',
                    streets: [
                        'Bujingwa',
                        'Buswelu A',
                        'Buswelu B',
                        'Buhyila',
                        'Bulola A',
                        'Bulola B',
                        'Busenga',
                        'Zembwela',
                        'Bulola Mlimani',
                        'Majengo Mapya',
                        'Kigala',
                    ],
                },
                {
                    ward: 'Ilemela',
                    streets: [
                        'Ilemela',
                        'Balyeheye',
                        'Nyangungulu',
                        'Bukengwa',
                        'Kahasa',
                        'Mwambani',
                        'Butuja',
                        'Sabasaba',
                        'Madukulu',
                    ],
                },
                {
                    ward: 'Pasiansi',
                    streets: [
                        'Pasiansi Juu',
                        'Pasiansi Magharibi',
                        'Bwiru Ziwani',
                        'Bwiru Mchangani',
                        'Pasiansi Chini',
                        'Bwiu Elimu',
                        'Bwiru Press',
                        'Bwiru Bima',
                    ],
                },
                {
                    ward: 'Bugogwa',
                    streets: [
                        'Igombe A',
                        'Bugogwa',
                        'Lugezi',
                        'Kabangaja',
                        'Kasamwa',
                        'Igombe B',
                        'Kigote',
                        'Kilabela',
                        'Bujimwa',
                        'Kayenze Ndogo',
                        'Kisundi',
                        'Isanzu',
                        'Igogwe',
                        'Nkoroto',
                        'Kilimanilwe Mtemi',
                    ],
                },
                {
                    ward: 'Sangabuye',
                    streets: [
                        'Isesa',
                        'Sangabuye',
                        'Nyafula',
                        'Kabusungu',
                        'Nyashimba',
                        'Lugeye',
                        'Nyamiswi',
                        "Mg'wang'wila",
                        'Ilekako',
                        'Ihalalo',
                        'Igalagala',
                        "Imalang'ombe",
                        'Lwashi',
                        'Igumamoyo',
                    ],
                },
                {
                    ward: 'Mecco',
                    streets: [
                        'Mecco Mashariki',
                        'Mecco Kaskazini',
                        'Mecco Kusini',
                        'Nundu',
                        'Gedeli Kivukoni',
                    ],
                },
                {
                    ward: 'Buzuruga',
                    streets: [
                        'Buzuruga Kaskazini',
                        'Buzuruga Kusini',
                        'Nyambiti',
                        'Ustawi',
                        'Buzuruga Mashariki',
                    ],
                },
                {
                    ward: 'Nyasaka',
                    streets: [
                        'Kiloleli B',
                        'Chamwenda',
                        'Nyasaka',
                        'Nyasaka Senta',
                        'Nyamhuge',
                        'Nyanda',
                    ],
                },
                {
                    ward: 'Kahama',
                    streets: [
                        'Buduku',
                        'Buyombe',
                        'Lukobe',
                        'Butega',
                        'Isela',
                        'Kahama',
                        'Magaka',
                        'Kadinda',
                        'Wiluhnya',
                    ],
                },
                {
                    ward: 'Kiseke',
                    streets: [
                        'Kibambo',
                        'Kiseke',
                        'Green View',
                        'Isenga',
                        'P.p.f',
                        'Nyabusalu',
                        'Nsumba',
                        'Zenze',
                    ],
                },
                {
                    ward: 'Kayenze',
                    streets: ['Kayenze', 'Bezi', 'Lutongo', 'Iponyabugale', 'Iseni'],
                },
                {
                    ward: 'Shibula',
                    streets: [
                        'Semba A',
                        'Semba B',
                        'Buganda',
                        'Mhonze A',
                        'Mhonze B',
                        'Nyamwilolelwa',
                        'Kihiri',
                        'Shibula',
                        'Bulyang’hulu',
                        'Ibaya',
                        'Butindo',
                        'Ilaila',
                        'Chabakima',
                        'Masemele',
                    ],
                },
                {
                    ward: 'Kawekamo',
                    streets: [
                        'Nyasaka A',
                        'Nyasaka B',
                        'Nyasaka C',
                        'Msumbiji',
                        'Kawekamo B',
                        'Pasiansi Mashariki A',
                        'Pasiansi Mashariki B',
                    ],
                },
                {
                    ward: 'Kitangiri',
                    streets: [
                        'Jiwe Kuu',
                        'Kitangiri Kati',
                        'Kitangiri A',
                        'Kitangiri B',
                        'Medical Research',
                        'Mihama',
                        'Kileleni',
                        'Mwinuko',
                    ],
                },
                {
                    ward: 'Kirumba',
                    streets: [
                        'Kirumba Kati',
                        'Ngara',
                        'Kabohoro',
                        'Ibanda Juu',
                        'Ibanda Ziwani',
                        'Mlimani',
                        'Kigoto',
                        'Ibanda Busisi',
                        'Kabuhoro B',
                        'Kiyungi',
                        'Magomeni',
                        'Mlimani B',
                    ],
                },
                {
                    ward: 'Nyamanoro',
                    streets: [
                        'Kilimahewa A',
                        'Nyamanoro A',
                        'Nyamanoro Mashariki',
                        'Kilimahewa B',
                        'Mkudi',
                        'Nenetwa',
                        'Myampala',
                    ],
                },
                {
                    ward: 'Ibungilo',
                    streets: [
                        'Ibungilo A',
                        'Ibungilo B',
                        'Nyamanoro Kaskazini',
                        'Nyamanoro C',
                        'Kiloleli A',
                        'Kiloleli B',
                        'Nyamanoro B',
                    ],
                },
                {
                    ward: 'Nyamhongolo',
                    streets: [
                        'Nyamadoke',
                        'Ibinza',
                        'Ikigijo',
                        'Lwenyashinga',
                        'Nyamhongolo',
                        'Bupumla',
                        'Kashishi',
                        'Ilamba A',
                        'Ilamba B',
                        'Kagihwa',
                        'Mtakuja',
                        'Busimile',
                    ],
                },
            ],
        },
        {
            district: 'Sengerema',
            wards: [
                {
                    ward: 'Ibisabageni',
                    streets: [
                        'Sekondari Road',
                        'Mjini Kati',
                        'Ibisabageni',
                        'Busisi Road',
                        'Bukara',
                    ],
                },
                {
                    ward: 'Nyatukara',
                    streets: [
                        'Bomani',
                        'Kisima Cha Chumvi',
                        'Geita Road',
                        'Nyatukala',
                        "Isung'ang'olo",
                    ],
                },
                {
                    ward: 'Nyampulukano',
                    streets: ['Igogo', 'Migombani', 'Mnadani'],
                },
                {
                    ward: 'Mwabaluhi',
                    streets: [
                        "Isung'ang'holo",
                        'Ofisini',
                        'Kilabela',
                        'Kanyamwanza',
                        'Balatogwa',
                    ],
                },
                {
                    ward: 'Kafunzo',
                    streets: ['Kafunzo', 'Bilulumo', 'Luhorongoma'],
                },
                {
                    ward: 'Bupandwa',
                    streets: ['Bupandwamhela', 'Itulabusiga', 'Chema', 'Mnazi Mmoja'],
                },
                {
                    ward: 'Katwe',
                    streets: ['Katwe', 'Kahunda'],
                },
                {
                    ward: 'Kalebezo',
                    streets: [
                        'Magulukenda',
                        'Nyashana',
                        'Katoma',
                        'Busekeseke',
                        'Kalebezo',
                    ],
                },
                {
                    ward: 'Nyehunge',
                    streets: ['Nyamadoke', 'Isaka', 'Nyehunge', 'Mwabasabi', 'Kayenze'],
                },
                {
                    ward: 'Maisome',
                    streets: ['Kisaba', 'Kanoni', 'Busikimbi'],
                },
                {
                    ward: 'Nyakasasa',
                    streets: ['Nyakasasa'],
                },
                {
                    ward: 'Lugata',
                    streets: [
                        'Nyakabanga',
                        'Lugata',
                        'Izindabo',
                        'Nyonga',
                        'Kabaganga',
                        'Mgogo',
                    ],
                },
                {
                    ward: 'Nyakaliro',
                    streets: ['Nyakaliro', 'Lumeya', 'Kasela', 'Itumbili'],
                },
                {
                    ward: 'Nyakasungwa',
                    streets: ['Nyakasungwa', 'Majengo'],
                },
                {
                    ward: 'Kazunzu',
                    streets: ['Kakobe', 'Nyambeba', 'Kasalaji', 'Ilyamchele'],
                },
                {
                    ward: 'Nyanzenda',
                    streets: ['Nyamabano', 'Nyanzenda', 'Migukulama'],
                },
            ],
        },
        {
            district: 'Magu',
            wards: [
                {
                    ward: 'Nkungulu',
                    streets: ['Kayenze "b"'],
                },
                {
                    ward: 'Shishani',
                    streets: ['Isolo', 'Shishani', 'Mahaha'],
                },
                {
                    ward: 'Lubugu',
                    streets: ['Bubinza', 'Kisamba', 'Sayaka', 'Lubugu', 'Nsolla'],
                },
                {
                    ward: 'Kandawe',
                    streets: ['Sagani', 'Ng’watelesha', 'Kipeja', 'Ihimbili'],
                },
                {
                    ward: 'Buhumbi',
                    streets: [
                        'Buhumbi',
                        'Mwamibanga',
                        'Kitongo',
                        'Nyashoshi',
                        'Misungwi',
                    ],
                },
                {
                    ward: 'Bujora',
                    streets: ["Kisesa 'a'", 'Bujora', 'Kanyama'],
                },
                {
                    ward: 'Bukandwe',
                    streets: ['Isangijo', 'Welamasonga', 'Ihayabuyaga'],
                },
                {
                    ward: 'Chabula',
                    streets: ['Chabula', 'Bugando', 'Nyashigwe'],
                },
                {
                    ward: 'Kabila',
                    streets: ['Kabila', 'Mwamagoli', 'Igombe', 'Ndagalu'],
                },
                {
                    ward: 'Jinjimili',
                    streets: ['Jinjimili', 'Kabale', 'Nyasato'],
                },
                {
                    ward: 'Itumbili',
                    streets: ['Nyasato'],
                },
                {
                    ward: 'Isandula',
                    streets: ['Nyasato'],
                },
            ],
        },
        {
            district: 'Misungwi',
            wards: [
                {
                    ward: 'Nhundulu',
                    streets: ['Mwagiligili'],
                },
                {
                    ward: 'Mamaye',
                    streets: ['Ibongoya "b"', 'Mwalwigi', 'Magaka'],
                },
                {
                    ward: 'Mondo',
                    streets: ['Mondo', 'Ntulya'],
                },
                {
                    ward: 'Fella',
                    streets: ['Fella', 'Ngeleka', 'Bujingwa'],
                },
            ],
        },
    ],
};

const njombe = {
    region: 'Njombe',
    districts: [
        {
            district: 'Njombe Cbd',
            wards: [
                {
                    ward: 'Njombe Mjini',
                    streets: [
                        'Kwivaha',
                        'Posta Kati',
                        'Nhc',
                        'Mgendela',
                        'Kihesa',
                        'Sido',
                        'Buguruni',
                        'Idundilanga',
                        'Kambarage',
                    ],
                },
                {
                    ward: 'Luponde',
                    streets: ['Miva', 'Luponde', 'Igola', 'Lusitu'],
                },
            ],
        },
        {
            district: "Wanging'o\r\nMbe",
            wards: [
                {
                    ward: 'Mdandu',
                    streets: ['Itambo', 'Ihanja', 'Mungate', 'Itowo', 'Mdandu'],
                },
                {
                    ward: 'Igima',
                    streets: [
                        'Mlevela',
                        'Igima',
                        'Lusisi',
                        'Mhadzi',
                        'Nyumbanitu',
                        'Lulanzi',
                        'Mawindi',
                    ],
                },
                {
                    ward: 'Usuka',
                    streets: ['Matowo', 'Lugoda', 'Usuka', 'Ikwega', 'Iteni'],
                },
                {
                    ward: 'Luduga',
                    streets: [
                        'Luduga',
                        'Mambegu',
                        'Korintho',
                        'Hanjawanu',
                        'Igando',
                        'Iyayi',
                    ],
                },
                {
                    ward: 'Ilembula',
                    streets: ['Ilembula', 'Igelehedza', 'Igula', 'Iponda', 'Kanamalenga'],
                },
                {
                    ward: 'Uhambule',
                    streets: [
                        'Ujindile',
                        'Mtewele',
                        'Uhambule',
                        'Wangutwa',
                        'Igelango',
                        'Msimbazi',
                    ],
                },
                {
                    ward: "Wanging'ombe",
                    streets: [
                        "Wanging'ombe",
                        'Litundu',
                        'Katenge',
                        'Mbembe',
                        'Utiga',
                        'Ufwala',
                        "Mng'elenge",
                        'Mayale',
                        'Itandula',
                    ],
                },
                {
                    ward: 'Kijombe',
                    streets: ['Lyadebwe', 'Kijombe', 'Ukomola', 'Lyamluki', 'Ikwavila'],
                },
                {
                    ward: 'Saja',
                    streets: ['Saja', 'Igenge', 'Igomba', 'Isimike', 'Idenyimembe'],
                },
                {
                    ward: 'Igosi',
                    streets: ['Igosi', 'Ivigo', 'Ujindile'],
                },
                {
                    ward: 'Wangama',
                    streets: ['Wangama', 'Ikanga', 'Imalilo'],
                },
                {
                    ward: 'Kidugala',
                    streets: ['Kidugala', 'Mkeha', 'Gonelamafuta', 'Masilu', 'Masage'],
                },
                {
                    ward: 'Ulembwe',
                    streets: ['Ulembwe', 'Usita', 'Igagala', 'Usalule'],
                },
                {
                    ward: 'Kipengele',
                    streets: [
                        'Kipengele',
                        'Mwilamba',
                        'Mafinga',
                        'Moronga',
                        "Ing'enyango",
                    ],
                },
                {
                    ward: 'Makoga',
                    streets: [
                        "Ng'anda",
                        'Samaria',
                        'Idunda',
                        'Utelewe',
                        'Makoga',
                        'Uhekule',
                        'Mdasi',
                    ],
                },
                {
                    ward: 'Imalinyi',
                    streets: ['Imalinyi', 'Kinenulo', 'Masaulwa', 'Igodivaha', 'Ilulu'],
                },
                {
                    ward: 'Itulahumba',
                    streets: ['Sakalenga', 'Isindagosi', 'Itulahumba', 'Ihanzutwa'],
                },
                {
                    ward: 'Igwachanya',
                    streets: [
                        'Idindilimunyo',
                        'Igwachanya',
                        'Chalowe',
                        'Dulamu',
                        'Kanani',
                        'Palangawanu',
                        'Mtapa',
                    ],
                },
                {
                    ward: 'Uhenga',
                    streets: ['Ikulimambo', 'Itengelo', 'Uhenga', 'Mapogoro'],
                },
                {
                    ward: 'Udonja',
                    streets: ['Udonja', 'Ujange', 'Kasagala', 'Banawanu', 'Mpululu'],
                },
                {
                    ward: 'Malangali',
                    streets: ['Mpanga', 'Malangali', 'Wangamiko'],
                },
            ],
        },
        {
            district: 'Ludewa',
            wards: [
                {
                    ward: 'Ludewa',
                    streets: ['Ludewa Mjini', 'Ludewa Kijijini'],
                },
                {
                    ward: 'Luana',
                    streets: ['Luana', 'Mbwila', 'Mholo'],
                },
                {
                    ward: 'Mawengi',
                    streets: ['Mawengi', 'Madunda', 'Kiwe', 'Lupande', 'Kitewele'],
                },
                {
                    ward: 'Makonde',
                    streets: ['Makonde', 'Ndowa', 'Kimata', 'Luvuyo'],
                },
                {
                    ward: 'Lupingu',
                    streets: ['Lupingu', 'Nindi', 'Ntumbati', 'Nkwimbili'],
                },
                {
                    ward: 'Lumbila',
                    streets: ['Lumbila', 'Chanjale', 'Nkanda'],
                },
                {
                    ward: 'Kilondo',
                    streets: ['Kilondo', 'Nsele'],
                },
                {
                    ward: 'Lifuma',
                    streets: ['Nsisi', 'Lifuma'],
                },
                {
                    ward: 'Ludende',
                    streets: ['Ludende', "Maholong'wa", 'Madindo'],
                },
                {
                    ward: 'Milo',
                    streets: ['Milo', 'Mavala', 'Mapogoro'],
                },
                {
                    ward: 'Mlangali',
                    streets: ['Itundu', 'Mlangali', 'Ligumbiro', 'Lufumbu'],
                },
                {
                    ward: 'Lupanga',
                    streets: ['Lupanga', 'Lusala', 'Utilili'],
                },
                {
                    ward: 'Madope',
                    streets: ['Madope', 'Mangalanyene'],
                },
                {
                    ward: 'Madilu',
                    streets: ['Madilu', 'Manga', 'Mfalasi', 'Ilawa', 'Ilininda'],
                },
                {
                    ward: 'Mundindi',
                    streets: ['Mundindi', 'Amani', 'Njelela'],
                },
                {
                    ward: 'Mavanga',
                    streets: ['Mavanga', 'Mbugani'],
                },
                {
                    ward: 'Ibumi',
                    streets: ['Ibumi', 'Masimavalafu'],
                },
                {
                    ward: 'Lugarawa',
                    streets: ['Lugarawa', 'Shaurimoyo', 'Mdilidili'],
                },
                {
                    ward: 'Mkongobaki',
                    streets: ['Lipangala', 'Mkongobaki', 'Ugera'],
                },
                {
                    ward: "Nkomang'ombe",
                    streets: ["Nkomang'ombe", 'Kimelembe'],
                },
                {
                    ward: 'Luilo',
                    streets: ['Luilo', 'Kipangala', 'Lifua', 'Liughai'],
                },
                {
                    ward: 'Masasi',
                    streets: ['Kingole', 'Lihagule', 'Kiyogo'],
                },
                {
                    ward: 'Manda',
                    streets: ['Nsungu', 'Mbongo', 'Igalu'],
                },
                {
                    ward: 'Ruhuhu',
                    streets: ['Ilela', 'Kipingu', 'Ngelenge'],
                },
                {
                    ward: 'Iwela',
                    streets: ['Iwela'],
                },
                {
                    ward: 'Lubonde',
                    streets: ['Mkiu', 'Kiyombo', 'Masimbwe'],
                },
            ],
        },
        {
            district: 'Makete',
            wards: [
                {
                    ward: 'Iwawa',
                    streets: ['Iwawa'],
                },
                {
                    ward: "Mang'oto",
                    streets: [
                        'Usungilo',
                        'Makangalawe',
                        "Mang'oto",
                        'Ibaga',
                        'Malembuli',
                        'Ilindiwe',
                    ],
                },
                {
                    ward: 'Lupalilo',
                    streets: ['Lupalilo', 'Mago', 'Kisinga', 'Ilevelo', 'Ugabwa'],
                },
                {
                    ward: 'Ukwama',
                    streets: ['Ukwama', 'Ihanga', 'Masisiwe', 'Utweve'],
                },
                {
                    ward: 'Isapulano',
                    streets: ['Luvulunge', 'Isapulano', 'Ivilikinge'],
                },
                {
                    ward: 'Tandala',
                    streets: ['Tandala', 'Ikonda', 'Ihela', 'Usagatikwa'],
                },
                {
                    ward: 'Ikuwo',
                    streets: ['Ikuwo', 'Nkondo', 'Matenga'],
                },
                {
                    ward: 'Mfumbi',
                    streets: ['Usalimwani', 'Ikovo', 'Kimani', 'Mfumbi', 'Ruaha'],
                },
                {
                    ward: 'Kigala',
                    streets: ['Mlengu', 'Kigala'],
                },
                {
                    ward: 'Matamba',
                    streets: ['Matamba', 'Mpangala', 'Ngoje', 'Mahanji'],
                },
                {
                    ward: 'Kitulo',
                    streets: ['Ujuni', 'Nkenja'],
                },
                {
                    ward: 'Mlondwe',
                    streets: ['Mlondwe', 'Mbela', "Ng'onde"],
                },
                {
                    ward: 'Itundu',
                    streets: ['Ikungula', 'Magoye', 'Lugoda', 'Igenge', 'Makusi'],
                },
                {
                    ward: 'Bulongwa',
                    streets: ['Bulongwa', 'Ilolo', 'Utanziwa', 'Imehe', 'Idende'],
                },
                {
                    ward: 'Luwumbu',
                    streets: ['Unenamwa', 'Uganga', 'Lugao', 'Usililo', 'Luwumbu'],
                },
                {
                    ward: 'Kapagalo',
                    streets: [
                        'Iyoka',
                        'Madihani',
                        'Kitula',
                        'Mahulu',
                        'Unyangala',
                        'Kilanji',
                        'Utengule',
                    ],
                },
                {
                    ward: 'Ipepo',
                    streets: ['Ipepo', 'Igolwa', 'Ilungu', 'Ikete', 'Maliwa'],
                },
                {
                    ward: 'Lupila',
                    streets: [
                        'Lupila',
                        'Malanduku',
                        'Ludilu',
                        'Igumbilo',
                        'Ukange',
                        'Kijiyombo',
                    ],
                },
                {
                    ward: 'Mbalatse',
                    streets: ['Kisasatu', 'Lupombwe', 'Mbalatse'],
                },
                {
                    ward: 'Ipelele',
                    streets: [
                        'Ubiliko',
                        'Mbanga',
                        'Ipelele',
                        'Makeve',
                        'Misiwa',
                        'Makwaranga',
                    ],
                },
                {
                    ward: 'Kigulu',
                    streets: ['Kigulu'],
                },
                {
                    ward: 'Iniho',
                    streets: [
                        'Iniho',
                        'Mwakauta',
                        'Nkunga',
                        'Unyangogo',
                        'Lumage',
                        'Kidope',
                    ],
                },
                {
                    ward: 'Kinyika',
                    streets: ['Nhungu', "N'dapo", 'Kinyika'],
                },
            ],
        },
    ],
};

const pwani = {
    region: 'Pwani',
    districts: [
        {
            district: 'Kibaha Cbd',
            wards: [
                {
                    ward: 'Tumbi',
                    streets: [
                        'Mkoani A',
                        'Mkoani B',
                        'Bokotemboni',
                        'Bokotimiza',
                        'Mwanalugali',
                        'Mwanalugali B',
                    ],
                },
                {
                    ward: 'Mailimoja',
                    streets: ['Mailimoja A', 'Uyaoni', 'Shuleni Mailimoja', 'Muheza'],
                },
                {
                    ward: 'Pangani',
                    streets: [
                        'Pangani',
                        'Mtakuja',
                        'Kidimu',
                        'Lumumba',
                        'Mkombozi',
                        'Vikawe Bondeni',
                        'Vikawe Shule',
                        'Miwale',
                    ],
                },
                {
                    ward: 'Picha Ya Ndege',
                    streets: ['Picha Ya Ndege', 'Lulanzi', 'Muharakani'],
                },
                {
                    ward: 'Mkuza',
                    streets: [
                        'Bungo',
                        'Kibondeni',
                        'Mkongoni',
                        'Mbwate',
                        'Mkuza',
                        'Mpakani',
                    ],
                },
                {
                    ward: 'Msangani',
                    streets: [
                        'Kidenge',
                        'Msangani',
                        'Simbani',
                        'Kumba',
                        'Kidenge B',
                        'Madina',
                    ],
                },
                {
                    ward: 'Kibaha',
                    streets: [
                        'Mwendapole A',
                        'Mwendapole B',
                        'Kwamfipa',
                        'Simbani',
                        'Kitende',
                    ],
                },
                {
                    ward: 'Kongowe',
                    streets: [
                        'Miembesaba A',
                        'Miembesaba B',
                        'Mwambisi',
                        'Bamba',
                        'Ungindoni',
                        'Kongowe',
                    ],
                },
                {
                    ward: 'Misugusugu',
                    streets: [
                        'Misugusugu',
                        'Miyomboni',
                        'Zogowale',
                        'Karabaka',
                        'Jonug”ha',
                        'Saeni',
                        'Vitendo',
                    ],
                },
                {
                    ward: 'Visiga',
                    streets: [
                        'Madafu',
                        'Miwaleni',
                        'Zegereni',
                        'Maili 35',
                        'Visiga Kati',
                        'Visiga  B',
                        'Kichangani',
                    ],
                },
                {
                    ward: 'Mbwawa',
                    streets: ['Mbwawa', 'Mkoleni', 'Miswe Duka', 'Miswe Chini'],
                },
                {
                    ward: 'Tangini',
                    streets: ['Tangini', 'Mailimoja B', 'Kilimahewa', 'Machinjioni'],
                },
                {
                    ward: 'Sofu',
                    streets: ['Sofu', 'Msufini', 'Twendepamoja'],
                },
                {
                    ward: 'Viziwa Ziwa',
                    streets: [
                        'Viziwaziwa',
                        'Mikongeni',
                        'Sagale Kambini',
                        'Sagale Magengeni',
                    ],
                },
            ],
        },
        {
            district: 'Kibaha',
            wards: [
                {
                    ward: 'Mlandizi',
                    streets: ['Kibaha'],
                },
                {
                    ward: 'Kilangalanga',
                    streets: ['Kibaha'],
                },
                {
                    ward: 'Janga',
                    streets: ['Kibaha'],
                },
                {
                    ward: 'Kikongo',
                    streets: ['Kibaha'],
                },
                {
                    ward: 'Ruvu',
                    streets: ['Ruvu Stesheni', 'Kitomondo', 'Minazimikinda'],
                },
                {
                    ward: 'Soga',
                    streets: ['Soga', 'Kipangege', 'Vikuge', 'Misufini'],
                },
                {
                    ward: 'Bokomnemela',
                    streets: ['Bokomnemela', 'Mpiji', 'Mnemela Kibaoni', 'Mkalambati'],
                },
                {
                    ward: 'Kwala',
                    streets: ['Kwala', 'Mperamumbi'],
                },
                {
                    ward: 'Dutumi',
                    streets: ['Mwembengozi', 'Dutumi', 'Madege'],
                },
                {
                    ward: 'Gwata',
                    streets: ['Gumba', 'Milalazi', 'Gwata', 'Ngwale', 'Kigoda', 'Ndwati'],
                },
                {
                    ward: 'Magindu',
                    streets: ['Lukenge', 'Magindu', 'Mizuguni'],
                },
                {
                    ward: 'Mtambani',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Mtongani',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Kawawa',
                    streets: ['Mizuguni'],
                },
            ],
        },
        {
            district: 'Bagamoyo',
            wards: [
                {
                    ward: 'Dunda',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Magomeni',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Kiromo',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Zinga',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Kerege',
                    streets: ['Mizuguni'],
                },
                {
                    ward: 'Yombo',
                    streets: ['Yombo', 'Chasimba', 'Kongo', 'Matimbwa'],
                },
                {
                    ward: 'Fukayosi',
                    streets: ['Fukayosi', 'Mwavi', 'Kidomole', 'Mkenge'],
                },
                {
                    ward: 'Vigwaza',
                    streets: [
                        'Buyuni',
                        'Kidogozero',
                        'Kitonga',
                        'Milo',
                        'Ruvu Darajani',
                        'Vigwaza',
                        'Visezi',
                    ],
                },
                {
                    ward: 'Kiwangwa',
                    streets: ['Kiwangwa', 'Bago', 'Msinune', 'Masunguru', 'Mwetemo'],
                },
                {
                    ward: 'Msata',
                    streets: [
                        'Kihangaiko',
                        'Mkoko',
                        'Mazizi',
                        'Msata',
                        'Pongwe Msungura',
                    ],
                },
                {
                    ward: 'Lugoba',
                    streets: [
                        'Mindutulieni',
                        'Saleni',
                        'Kinzagu',
                        'Lunga',
                        'Makombe',
                        'Lugoba',
                    ],
                },
                {
                    ward: 'Msoga',
                    streets: ['Diozile', 'Mboga', 'Msoga', 'Tonga'],
                },
                {
                    ward: 'Talawanda',
                    streets: [
                        'Mindukene',
                        'Msigi',
                        'Malivundo',
                        'Kisanga',
                        'Talawanda',
                        'Maglumatari',
                    ],
                },
                {
                    ward: 'Pera',
                    streets: ['Pera', 'Pingo', 'Chamakweza', 'Malivundo'],
                },
                {
                    ward: 'Bwilingu',
                    streets: [
                        'Bwilingu',
                        'Msolwa',
                        'Chachu',
                        'Mdaula',
                        'Matuli',
                        'Majengo',
                        'Mtambani',
                    ],
                },
                {
                    ward: 'Ubenazomozi',
                    streets: [
                        'Ubenazomozi',
                        'Tukamisasa',
                        'Matuli',
                        'Mwidu',
                        'Kaloleni',
                        'Visakazi',
                    ],
                },
                {
                    ward: 'Mandera',
                    streets: [
                        'Mandera',
                        'Hondogo',
                        'Kilemera',
                        'Rupungwi',
                        'Makole',
                        'Kibaoni',
                    ],
                },
                {
                    ward: 'Kimange',
                    streets: [
                        'Changalikwa',
                        'Kimange',
                        'Kifuleta',
                        'Kikwanzu',
                        'Pongwekiona',
                        'Pongwemnazi',
                    ],
                },
                {
                    ward: 'Mbwewe',
                    streets: ['Mbwewe', 'Mpaji', "Kwang'andu", 'Kwaruhumbo'],
                },
                {
                    ward: 'Kibindu',
                    streets: ['Kibindu', 'Kwamsanja', 'Kwamduma'],
                },
                {
                    ward: 'Miono',
                    streets: [
                        'Miono',
                        'Masimbani',
                        'Kikaro',
                        'Mandera',
                        'Mihuga',
                        'Kweikonje',
                    ],
                },
                {
                    ward: 'Mkange',
                    streets: [
                        'Mkange',
                        'Matipwili',
                        'Gongo',
                        'Mandamazingara',
                        'Saadani',
                    ],
                },
                {
                    ward: 'Mapinga',
                    streets: ['Saadani'],
                },
                {
                    ward: 'Nia Njema',
                    streets: ['Saadani'],
                },
                {
                    ward: 'Kisutu',
                    streets: ['Saadani'],
                },
                {
                    ward: 'Makurunge',
                    streets: ['Saadani'],
                },
            ],
        },
        {
            district: 'Kisarawe',
            wards: [
                {
                    ward: 'Kisarawe',
                    streets: ['Kisarawe'],
                },
                {
                    ward: 'Kiluvya',
                    streets: ['Kisarawe'],
                },
                {
                    ward: 'Masaki',
                    streets: ['Masaki', 'Sungwi', 'Kisanga', 'Gumba'],
                },
                {
                    ward: 'Msimbu',
                    streets: ['Gumba'],
                },
                {
                    ward: 'Mzenga',
                    streets: ['Mzenga ‘a’', 'Mitengwe', 'Vilabwa', 'Chakenge'],
                },
                {
                    ward: 'Vihingo',
                    streets: [
                        'Chamalale',
                        'Mihugwe',
                        'Kibwemwenda',
                        'Mzenga ‘b’',
                        'Malangalanga',
                        'Sangwe',
                        'Vihingo',
                    ],
                },
                {
                    ward: 'Kurui',
                    streets: ['Kurui', 'Zegero', 'Mtakayo', 'Kidugalo'],
                },
                {
                    ward: 'Marui',
                    streets: ['Titu', 'Kihare', 'Mngwata', 'Kisangire', 'Mipera'],
                },
                {
                    ward: 'Mafizi',
                    streets: ['Mafizi', 'Nyani', 'Kimalamisale', 'Gwata', 'Ving’andi'],
                },
                {
                    ward: 'Marumbo',
                    streets: [
                        'Marumbo',
                        'Kitonga',
                        'Palaka',
                        'Kivukoni',
                        'Kikwete',
                        'Chang’ombe',
                    ],
                },
                {
                    ward: 'Msanga',
                    streets: ['Msanga', 'Mianzi', 'Bembeza', 'Visiga'],
                },
                {
                    ward: 'Maneromango',
                    streets: [
                        'Maneromango Sokoni',
                        'Manaromango Kaskazini',
                        'Msegamo',
                        'Kidugalo Chakanga',
                    ],
                },
                {
                    ward: 'Kibuta',
                    streets: [
                        'Mtamba',
                        'Kauzeni',
                        'Kibuta',
                        'Mloo',
                        'Bwama',
                        'Chang’ombe ‘b’',
                        'Masanganya',
                        'Muhaga',
                    ],
                },
                {
                    ward: 'Chole',
                    streets: [
                        'Chole',
                        'Kwala',
                        'Kurui',
                        'Yombo Lukinga',
                        'Mafumbi',
                        'Sofu',
                    ],
                },
                {
                    ward: 'Vikumburu',
                    streets: [
                        'Vikumburu',
                        'Koresa',
                        'Kitonga',
                        'Mtunani',
                        'Panga La Mwingereza',
                    ],
                },
                {
                    ward: 'Boga',
                    streets: ['Megwa', 'Boga', 'Ngongele', 'Chale'],
                },
                {
                    ward: 'Kazimzumbwi',
                    streets: ['Chale'],
                },
            ],
        },
        {
            district: 'Mkuranga',
            wards: [
                {
                    ward: 'Mkuranga',
                    streets: ['Mkuranga', 'Mkwalia Kitumbo', 'Sunguvuni', 'Dundani'],
                },
                {
                    ward: "Kiparang'anda",
                    streets: [
                        "Kiparang'anda A",
                        "Kiparang'anda B",
                        'Magoza',
                        'Kibululu',
                        'Kise',
                    ],
                },
                {
                    ward: 'Mbezi',
                    streets: [
                        'Mihekela',
                        'Mponga',
                        'Ngarambe',
                        'Msufini/kidete',
                        'Mwanzenga',
                        'Msorwa',
                        'Kisayani',
                    ],
                },
                {
                    ward: 'Tambani',
                    streets: ['Mlamleni', 'Luzando', 'Tambani'],
                },
                {
                    ward: 'Bupu',
                    streets: ['Bupu', 'Mamdimpera', 'Mamdikongo', 'Tundu'],
                },
                {
                    ward: 'Vikindu',
                    streets: [
                        'Vikindu',
                        'Kazole',
                        'Picha Ya Ndege',
                        'Magodani',
                        'Kisemvule',
                    ],
                },
                {
                    ward: 'Mwarusembe',
                    streets: ['Mwarusembe', 'Kinene', 'Bigwa', 'Kiziko', 'Kitonga'],
                },
                {
                    ward: 'Shungubweni',
                    streets: ['Shungubweni', 'Funza', 'Boza', 'Kuruti'],
                },
                {
                    ward: 'Kitomondo',
                    streets: ['Kitomondo', 'Mitaranda', 'Kiwambo', 'Kikoo', 'Kipera'],
                },
                {
                    ward: 'Njianne',
                    streets: ['Njianne', 'Mikere', 'Mingombe', 'Miteza'],
                },
                {
                    ward: 'Vianzi',
                    streets: ['Mfurumwambao', 'Marogoro', 'Yavayava', 'Malela', 'Vianzi'],
                },
                {
                    ward: 'Kimanzichana',
                    streets: [
                        'Kimanzichana Kaskazini',
                        'Kimanzichana  Kusini',
                        'Kimanzichana Magharibi',
                        'Kilimahewa Kaskazini',
                        'Mkwechembe',
                        'Kiimbwanindi',
                    ],
                },
                {
                    ward: 'Kisiju',
                    streets: [
                        'Kalole',
                        'Mavunja',
                        'Koma',
                        'Kwale',
                        'Kisiju Pwani',
                        'Kerekese',
                    ],
                },
                {
                    ward: 'Mkamba',
                    streets: [
                        'Kikundi',
                        'Kizomla',
                        'Kizapala',
                        'Tungi',
                        'Lupondo',
                        'Mkerezange',
                        'Kigoda',
                        'Kibunguchana',
                    ],
                },
                {
                    ward: 'Panzuo',
                    streets: [
                        'Kibuyuni',
                        'Mkuruwili',
                        'Nyatanga',
                        'Kibudi',
                        'Mbulani',
                        'Kibesa',
                        'Mbezi Mlungwana',
                    ],
                },
                {
                    ward: 'Nyamato',
                    streets: [
                        'Nyanduturu',
                        'Mkiu',
                        'Mvuleni',
                        'Nyamato Tipo',
                        'Mkanoge',
                        'Kilamba',
                        'Kilimahewa Kusini',
                    ],
                },
                {
                    ward: 'Lukanga',
                    streets: [
                        'Sangalani',
                        'Misasa',
                        'Lukanga',
                        'Malenda',
                        'Mpimio',
                        'Njopeka',
                        'Mkola',
                    ],
                },
                {
                    ward: 'Magawa',
                    streets: ['Magawa', 'Makumbea', 'Kifumangao', 'Mdimni', 'Nganje'],
                },
                {
                    ward: 'Dondo',
                    streets: ['Binga', 'Sotele', 'Dondo', 'Mpafu', 'Kibewa'],
                },
                {
                    ward: 'Msonga',
                    streets: [
                        'Msonga',
                        'Mtongani',
                        'Nasibugani',
                        'Sangasanga',
                        'Nyamihimbo',
                    ],
                },
                {
                    ward: 'Kisegesege',
                    streets: ['Kisegese', 'Vianzi', 'Chamgoi'],
                },
                {
                    ward: 'Beta',
                    streets: ['Matanzi', 'Mkenge', 'Nyangunguti'],
                },
                {
                    ward: 'Tengelea',
                    streets: ['Tengelea', 'Hoyoyo', 'Kolagwa', 'Dondwe'],
                },
                {
                    ward: 'Mwandege',
                    streets: ['Mwandege', 'Kipala', 'Mkokozi', 'Lugwadu'],
                },
                {
                    ward: 'Mipeko',
                    streets: ['Mipeko', 'Kibamba', 'Mwanambaya', 'Mwanadilatu'],
                },
            ],
        },
        {
            district: 'Rufiji',
            wards: [
                {
                    ward: 'Utete',
                    streets: ['Utete'],
                },
                {
                    ward: 'Chemchem',
                    streets: ['Utete'],
                },
                {
                    ward: 'Ngarambe',
                    streets: ['Utete'],
                },
                {
                    ward: 'Mkongo',
                    streets: [
                        'Mkongo Kaskazini',
                        'Mbunju Mvuleni',
                        'Mkongo Kusini',
                        'Ruwe',
                    ],
                },
                {
                    ward: 'Mbwara',
                    streets: ['Mbwara', 'Nambunju', 'Tawi', 'Nyamwage', 'Kitapi'],
                },
                {
                    ward: 'Chumbi',
                    streets: ['Chumbi "a"', 'Chumbi "b"', 'Chumbi "c"'],
                },
                {
                    ward: 'Ikwiriri',
                    streets: ['Ikwiriri Kaskazini', 'Ikwiriri Kati', 'Ikwiriri Kusini'],
                },
                {
                    ward: 'Umwe',
                    streets: ['Umwe Kaskazini', 'Umwe Kati', 'Umwe Kusini'],
                },
                {
                    ward: 'Mgomba',
                    streets: ['Mgomba Kusini', 'Mgomba Kati', 'Mgomba Kaskazini'],
                },
                {
                    ward: 'Bungu',
                    streets: [
                        'Bungu "a"',
                        'Bungu B',
                        'Nyambunda',
                        'Nyambili',
                        'Pagae',
                        'Msafiri',
                        'Mangombela',
                    ],
                },
                {
                    ward: 'Ngorongo',
                    streets: [
                        'Kilimani Mashariki',
                        'Kilimani Magharibi',
                        'Ngorongo Mashariki',
                        'Ngorongo Magharibi',
                    ],
                },
                {
                    ward: 'Mwaseni',
                    streets: ['Mtanza /msona', 'Mloka', 'Mwaseni'],
                },
                {
                    ward: 'Kipugira',
                    streets: ['Kipugira', 'Nyaminywili', 'Ndundunyikanza', 'Kipo'],
                },
                {
                    ward: 'Mohoro',
                    streets: [
                        'Shela',
                        'Mohoro Mashariki',
                        'Kiwanga',
                        'Ndundutawa',
                        'Mohoro Magharibi',
                        "King'ong'o",
                    ],
                },
            ],
        },
        {
            district: 'Mafia',
            wards: [
                {
                    ward: 'Kilindoni',
                    streets: ['Kilindoni', 'Dongo'],
                },
                {
                    ward: 'Kiegeani',
                    streets: ['Marimbani', 'Kiegeani'],
                },
                {
                    ward: 'Miburani',
                    streets: ['Miburani', 'Mlongo', 'Chemchem'],
                },
                {
                    ward: 'Ndagoni',
                    streets: ['Chunguruma', 'Ndagoni', 'Gonge'],
                },
                {
                    ward: 'Jibondo',
                    streets: ['Jibondo', 'Chole', 'Juani'],
                },
                {
                    ward: 'Baleni',
                    streets: ['Baleni', 'Kifinge', 'Kibada', 'Kungwi'],
                },
                {
                    ward: 'Kirongwe',
                    streets: ['Banja', 'Jojo', 'Kirongwe', 'Jimbo'],
                },
                {
                    ward: 'Kanga',
                    streets: ['Bweni', 'Kanga'],
                },
            ],
        },
        {
            district: 'Kibiti',
            wards: [
                {
                    ward: 'Salale',
                    streets: ['Nyamisati', 'Kiomboni', 'Mchinga', 'Mfisini'],
                },
                {
                    ward: 'Kiongoroni',
                    streets: ['Ruma', 'Jaja', 'Pombwe', 'Kiongoroni'],
                },
                {
                    ward: 'Maparoni',
                    streets: ['Kiechuru', 'Maparoni'],
                },
                {
                    ward: 'Mbuchi',
                    streets: ['Mbuchi', 'Mbwera Mashariki', 'Mbwera Magharibi'],
                },
                {
                    ward: 'Msala',
                    streets: ['Msala', 'Kiasi', 'Twasalie'],
                },
                {
                    ward: 'Mlanzi',
                    streets: ['Mlanzi', 'Machipi', 'Nyamwimbe', 'Ngondai'],
                },
                {
                    ward: 'Mahege',
                    streets: ['Mahege', 'Nyakinyo', 'Tomoni', 'Nyanjati', 'Hanga'],
                },
                {
                    ward: 'Mchukwi',
                    streets: ['Mchukwi A', 'Mchukwi  B', 'Mangwi', 'Mkupuka'],
                },
                {
                    ward: 'Mjawa',
                    streets: [
                        'Jaribu Mpakani',
                        'Jaribu Magharibi',
                        'Mjawa',
                        'Uponda',
                        'Motomoto',
                        'Uchembe',
                        'Ngalengwa',
                    ],
                },
                {
                    ward: 'Mtunda',
                    streets: ['Mtunda A', 'Mtunda B', 'Muyuyu', 'Kikale'],
                },
                {
                    ward: 'Mwambao',
                    streets: [
                        'Mchungu',
                        'Kivinja "a"',
                        'Kivinja "b"',
                        'Msindaji',
                        'Mkenda',
                        'Kigunguli',
                    ],
                },
                {
                    ward: 'Ruaruke',
                    streets: [
                        'Ruaruke',
                        'Nyamatanga',
                        'Kilulatambwe',
                        'Rungungu',
                        'Ruaruke B',
                    ],
                },
                {
                    ward: 'Kibiti',
                    streets: ['Ruaruke B'],
                },
                {
                    ward: 'Mtawanya',
                    streets: ['Ruaruke B'],
                },
                {
                    ward: 'Dimani',
                    streets: ['Ruaruke B'],
                },
            ],
        },
    ],
};

const rukwa = {
    region: 'Rukwa',
    districts: [
        {
            district: 'Sumbawanga\r\nCbd',
            wards: [
                {
                    ward: 'Sumbawanga',
                    streets: [
                        'Sumbawanga',
                        'Kaswepepe',
                        'Mpasi',
                        'Yeswe',
                        'Kamita',
                        'Tambasi',
                        'Katuma',
                        'Mbalika',
                        'Hija',
                        'Makutano',
                        'Ufipa',
                        'Chisicha Mfipa',
                        "Wakuung'anga",
                        'Isachi',
                        'Kasoni',
                        'Kiatu',
                        'Kimalaunga',
                        'Kapufi',
                        'Katolile',
                        'Momoka',
                        'Mtumbuka',
                        'Katusa',
                        'Ngalu',
                    ],
                },
                {
                    ward: 'Izia',
                    streets: [
                        'Halmashauri',
                        'Izia',
                        'Mtoni',
                        'Makaza',
                        'Manzitiswe',
                        'Shule',
                        'Bangwe',
                        'Masimba',
                        'Kati',
                        'Zimamoto',
                        'U/ndege',
                        'Burudani',
                        'Soko',
                        'Kaozya',
                        'Mbugani',
                        'Reginamundi',
                        'Yatima',
                    ],
                },
                {
                    ward: 'Katandala',
                    streets: [
                        'Katandala ‘c’',
                        'Katandala ‘d’',
                        'Bomani',
                        'Bomani ‘b’',
                        'Mbizi ‘c’',
                        'Mbizi ‘b’',
                        'Comunity Center',
                        'Jangwani',
                        'Nhc',
                        'Sokomatola',
                        "Anglikan 'a'",
                        "Anglikan 'b'",
                        'Mbizi ‘a’',
                        "Katandala 'a'",
                        "Katandala 'b'",
                        'Kasakalawe',
                    ],
                },
                {
                    ward: 'Malangali',
                    streets: [
                        'Nyengele',
                        'Muhama',
                        'Mji Mwema',
                        'Isofu',
                        'Kilimahewa "a"',
                        'Kilimahewa "b"',
                        'Katindi',
                        'Malangali',
                        'Makazi Mapya',
                    ],
                },
                {
                    ward: 'Kizwite',
                    streets: [
                        'Senti',
                        'Kalangasa',
                        'Mbugani',
                        'Kawama',
                        'Bible',
                        'Sokolo',
                        'Vuta',
                        'Otc',
                        'Nantacha',
                        'Ndua',
                        'Majengo',
                        'Kizwite',
                        'Trm',
                        'Makwasa',
                        'Mtumbuka',
                    ],
                },
                {
                    ward: 'Mazwi',
                    streets: [
                        'Rtc',
                        'Tukuyu',
                        'Nhc',
                        'Clinic',
                        'Lwiche',
                        'Msikitini',
                        'Kimiti',
                        'Chitepo',
                        'Lyangalile',
                        'Nmc',
                        'Zambezi',
                        'Viwanda Vidogo',
                        'Mashine',
                        'Mandela',
                        'Karume',
                        'Itwelele',
                        'Nkasi',
                        'Rurecu',
                        'Majengo',
                    ],
                },
                {
                    ward: 'Majengo',
                    streets: [
                        'Mponda',
                        'Namabangasa',
                        'Highway',
                        'Majengo ‘b’',
                        "Bwawani 'a'",
                        "Bwawani B'",
                        "Majengo  'a'",
                        "Majengo  'c'",
                        "Majengo  'd'",
                        "Mtakuja  'a'",
                        "Mtakuja 'b'",
                        'Kristu Mfalme',
                        'Kaloleni',
                        "King'ombe",
                    ],
                },
                {
                    ward: 'Chanji',
                    streets: [
                        'Sokodogo',
                        'Mianzi',
                        'Kawama',
                        'Chanji ‘a’',
                        'Kichangani',
                        'Namteketa',
                        'Nankasi',
                        'Kati',
                        'Bondeni',
                        'Bombani',
                        'K/mazoezi',
                        'Hali Ya Hewa',
                        'St Theresia',
                        'Vodacom',
                        'Mkuyuni',
                    ],
                },
                {
                    ward: 'Ntendo',
                    streets: ['Luwa', 'Ntendo', 'Fyengelezya', 'Kanondo'],
                },
                {
                    ward: 'Senga',
                    streets: ['Senga', 'Kankwale', 'Wipanga'],
                },
                {
                    ward: 'Milanzi',
                    streets: ['Mlanda B', 'Milanzi', 'Nambogo'],
                },
                {
                    ward: 'Kasense',
                    streets: ['Kasense', 'Chipu', 'Mtimbwa'],
                },
                {
                    ward: 'Mollo',
                    streets: ['Malonje', 'Ulinji', 'Isesa', 'Mawenzusi'],
                },
                {
                    ward: 'Matanga',
                    streets: ['Matanga', 'Kisumba', 'Chelenganya'],
                },
                {
                    ward: 'Pito',
                    streets: ['Katumba Azimio', 'Tamasenga', 'Malagano', 'Pito'],
                },
                {
                    ward: 'Mafulala',
                    streets: [
                        'Mafulala',
                        'K.k.k.t',
                        'Tanesco',
                        'Sido',
                        'Malechela',
                        'Transfoma',
                        'Nkana',
                        'Kanisa',
                        'Jola',
                        'Maduka',
                        'Momoka',
                        'Sekondari',
                    ],
                },
                {
                    ward: 'Msua',
                    streets: [
                        'Msua',
                        'Maweni',
                        'Chemchem',
                        'Chemka',
                        'King’ombe',
                        'Kisiwani',
                        'Kilimani',
                        'Mzee Nyanya',
                        'Shule',
                        'Fr. Luka',
                        'Kichangani',
                        'Malinga',
                    ],
                },
                {
                    ward: 'Momoka',
                    streets: [
                        'Kashai',
                        'Retco',
                        'Edeni  ‘a’',
                        'Edeni  ‘b’',
                        'Mtakumbuka',
                    ],
                },
                {
                    ward: 'Lwiche',
                    streets: [
                        'Utengule',
                        'Lwiche',
                        'Shengetela',
                        'Kaungwa',
                        'Majumbasita',
                        'Katai',
                        'Kafumbusi',
                        'Magomeni',
                    ],
                },
            ],
        },
        {
            district: 'Sumbawanga',
            wards: [
                {
                    ward: 'Laela',
                    streets: ['Magomeni'],
                },
                {
                    ward: 'Kaengesa',
                    streets: ['Kaengesa A', 'Lyapona', 'Mkunda', 'Ltela', 'Kaengesa B'],
                },
                {
                    ward: 'Mpui',
                    streets: [
                        'Mpui A',
                        'Ilembo',
                        'Ntumbi',
                        'Mpui B',
                        'Mkima',
                        'Kapewa',
                        'Mtetezi',
                    ],
                },
                {
                    ward: 'Sandulula',
                    streets: ['Sandulula', 'Mumba', 'Jangwani', 'Kalole'],
                },
                {
                    ward: 'Kalambanzite',
                    streets: ['Kalambazite', 'Mleche', 'Kilembo', 'Mshani', 'Mlombo'],
                },
                {
                    ward: 'Milepa',
                    streets: ['Milepa', 'Kinambo', 'Mayenje', 'Kisa', 'Talanda', 'Msia'],
                },
                {
                    ward: 'Mtowisa',
                    streets: [
                        'Mtowisa A',
                        'Sontaukia',
                        'Mtowisa B',
                        "Ng'ongo",
                        'Kifinga',
                        'Mkamba',
                    ],
                },
                {
                    ward: 'Muze',
                    streets: [
                        'Muze',
                        'Uzia',
                        'Mbwilo',
                        'Kizungu',
                        'Ilanga',
                        'Kalakala',
                        'Isangwa',
                    ],
                },
                {
                    ward: 'Lusaka',
                    streets: ['Lusaka', 'Lowe', 'Kizumbi', 'Mpembano'],
                },
                {
                    ward: 'Kipeta',
                    streets: ['Kipeta', 'Kilyamatundu', 'Legeza', 'Mpona', 'Kirando'],
                },
                {
                    ward: 'Kaoze',
                    streets: ['Kaoze', 'Tululu', 'Chombe', 'Kiandaigonda'],
                },
                {
                    ward: 'Miangalua',
                    streets: [
                        'Miangalua',
                        'Tunko',
                        'Movu',
                        'Mkowe',
                        'Kavifuti',
                        'Nampako',
                        'Kamsamba',
                    ],
                },
                {
                    ward: 'Ilemba',
                    streets: ['Ilemba A', 'Kaswepa', 'Sakalilo', 'Ilemba B', 'Lyanza'],
                },
                {
                    ward: 'Nankanga',
                    streets: ['Nankanga', 'Nankanga C', 'Solola'],
                },
                {
                    ward: 'Kapenta',
                    streets: [
                        'Mkusi',
                        'Ngomeni',
                        'Kawila',
                        'Kapenta',
                        'Nsanga',
                        'Liwelyamvula',
                    ],
                },
                {
                    ward: 'Kilangawana',
                    streets: ['Maleza', 'Kilangawana', 'Mpande', 'Ilambo'],
                },
                {
                    ward: 'Zimba',
                    streets: ['Zimba', 'Mission', 'Lwanji', 'Kanyala'],
                },
                {
                    ward: 'Kalumbaleza',
                    streets: [
                        'Kalumbaleza A',
                        'Kalumbaleza B',
                        'Mnazimmoja',
                        'Mnazimmoja Asilia',
                    ],
                },
                {
                    ward: 'Mfinga',
                    streets: ['Mfinga', 'Kasekela', 'Msila'],
                },
                {
                    ward: 'Mwadui',
                    streets: ['Mpete', 'Kipa', 'Nkwilo', 'Katoo', 'Mtapenda', 'Mwadui'],
                },
                {
                    ward: 'Ikozi',
                    streets: ['Ikozi', 'Kazwila', 'Chituo', 'Tentula'],
                },
                {
                    ward: 'Mpwapwa',
                    streets: ['Mpwapwa', 'Malolwa', 'Memya', 'Kapoka'],
                },
                {
                    ward: 'Lyangalile',
                    streets: ['Kianda', 'Kazi', 'Katonto'],
                },
                {
                    ward: 'Kanda',
                    streets: ['Lula', 'Chitete', 'Lyapona B', 'Lyapona'],
                },
                {
                    ward: 'Msanda Muungano',
                    streets: [
                        'Msandamuungano A',
                        'Songambele Azimio',
                        'Msandamuungano B',
                        'Sikaungu',
                    ],
                },
                {
                    ward: 'Kasanzama',
                    streets: ['Sikaungu'],
                },
                {
                    ward: 'Mnokola',
                    streets: ['Sikaungu'],
                },
            ],
        },
        {
            district: 'Nkasi',
            wards: [
                {
                    ward: 'Namanyere',
                    streets: ['Sikaungu'],
                },
                {
                    ward: 'Nkomolo',
                    streets: ['Sikaungu'],
                },
                {
                    ward: 'Isale',
                    streets: ['Ntuchi', 'Ntuchi Kusini', 'Kitosi', 'Ifundwa'],
                },
                {
                    ward: 'Kipande',
                    streets: ['Kipande', 'Nkundi', 'Kantawa', 'Kalundi', 'Nkomolo Ii'],
                },
                {
                    ward: 'Chala',
                    streets: [
                        'Chima',
                        'Chala A',
                        'Chala C',
                        'Chatelekesha',
                        'Kacheche',
                        'Chala B',
                        'Isasa',
                        'Londokazi',
                    ],
                },
                {
                    ward: 'Mtenga',
                    streets: ['Londokazi'],
                },
                {
                    ward: 'Kabwe',
                    streets: [
                        'Kabwe',
                        'Kabwe Camp',
                        'Kanchui',
                        'Mpenge',
                        'Mkombe',
                        'Kalila',
                        'Udachi',
                    ],
                },
                {
                    ward: 'Kirando',
                    streets: ['Kamwanda', 'Mpata', 'Mtakuja', 'Kichangani'],
                },
                {
                    ward: 'Ninde',
                    streets: ['Ninde', 'Namansi', 'Kisambala', 'Kasanga', 'Msamba'],
                },
                {
                    ward: 'Kate',
                    streets: ['Kate', 'Mwenge', 'Nchenje', 'Ntemba', 'China'],
                },
                {
                    ward: 'Sintali',
                    streets: ['Sintali', 'Nkana', 'Nkomachindo', 'Kasapa'],
                },
                {
                    ward: 'Wampembe',
                    streets: ['Wampembe', 'Mwinza', 'Izinga'],
                },
                {
                    ward: 'Kala',
                    streets: ['Kala', 'Mpasa'],
                },
            ],
        },
        {
            district: 'Kalambo',
            wards: [
                {
                    ward: 'Matai',
                    streets: ['Matai  Asilia"a"', 'Mikonko', 'Kisungamile', 'Kateka'],
                },
                {
                    ward: 'Mkali',
                    streets: ['Kizombwe', 'Kalalasi', 'Myunga', 'Mpanzi'],
                },
                {
                    ward: 'Mnamba',
                    streets: ['Mnamba', 'Kantalemwa', 'Luse', 'Mtula', 'Msipazi'],
                },
                {
                    ward: 'Msanzi',
                    streets: ['Msanzi', 'Kambiala', 'Nachula', 'Katuka'],
                },
                {
                    ward: 'Mkowe',
                    streets: ['Mkowe', 'Mbuza', 'Katapulo', 'Sengakalonje', 'Ilimba'],
                },
                {
                    ward: 'Kasanga',
                    streets: ['Muzi', 'Kasanga', 'Kapele', 'Kilewani', 'Kipwa'],
                },
                {
                    ward: 'Katazi',
                    streets: ['Katazi', 'Ninga', 'Mwaya', 'Mvula'],
                },
                {
                    ward: 'Mwazye',
                    streets: ['Kazila', 'Mpenje', 'Msoma', 'Mwazye'],
                },
                {
                    ward: 'Ulumi',
                    streets: [
                        'Ulumi "a"',
                        "Ulumi ''b''",
                        'Mnazi',
                        'Kale',
                        'Kalepula "a"',
                        'Kalepula "b"',
                    ],
                },
                {
                    ward: 'Samazi',
                    streets: ['Kipanga', 'Katili', 'Samazi', 'Kisala'],
                },
                {
                    ward: 'Mpombwe',
                    streets: ['Mpombwe', 'Mpombwe "b"', 'Kapozwa', 'Kalambo', 'Ngorotwa'],
                },
            ],
        },
    ],
};

const ruvuma = {
    region: 'Ruvuma',
    districts: [
        {
            district: 'Songea Cbd',
            wards: [
                {
                    ward: 'Mjini',
                    streets: ['Mpambalyoto', 'Ccm', 'Mahenge', 'Mashujaa'],
                },
                {
                    ward: 'Misufini',
                    streets: ['Mabatini', 'Majimaji', 'Msikitini'],
                },
                {
                    ward: 'Mfaranyaki',
                    streets: ['Mbalika', 'Bilauri', 'Mfaranyaki', 'Matomondo'],
                },
                {
                    ward: 'Majengo',
                    streets: ['Kotazi', 'Mwinyi Mkuumoyo', 'Matuli'],
                },
                {
                    ward: 'Matarawe',
                    streets: ['Msafiri', 'Sabasaba', 'Asia Kovu'],
                },
                {
                    ward: 'Lizaboni',
                    streets: [
                        'Polisi',
                        'Londoni',
                        'Sokoni',
                        'Mloweka',
                        'Kibulang’oma',
                        'Madizini',
                    ],
                },
                {
                    ward: 'Ruvuma',
                    streets: [
                        "Mbulani  'a'",
                        'Ruvuma Juu',
                        'Ruvuma Chini',
                        "Mbulani ' B'",
                    ],
                },
                {
                    ward: 'Bombambili',
                    streets: ['Mtakuja', 'Miembeni', 'Merikebu', 'Sokoine', 'Muungano'],
                },
                {
                    ward: 'Mashangano',
                    streets: [
                        'Mtaa Wa Chandarua',
                        'Muhombezi',
                        'Namanyigu',
                        'Mitendewawa',
                        'Mshangano',
                    ],
                },
                {
                    ward: 'Ruhuwiko',
                    streets: [
                        'Ruhuwiko Kanisani',
                        'Ruhuwiko Shuleni',
                        'Namanditi',
                        "Ruhuiko 'c'",
                    ],
                },
                {
                    ward: 'Subira',
                    streets: [
                        'Lami',
                        'Ngandula',
                        'Kihekwa',
                        'Subira Kati',
                        'Nangwahi',
                        'Kisiwani ‘c’',
                        'Mahinya',
                        'Muungano',
                    ],
                },
                {
                    ward: 'Matogoro',
                    streets: ['Mtogoro Kati', 'Mahiro', 'Mkwawa', 'Chemchem'],
                },
                {
                    ward: 'Mletele',
                    streets: [
                        'Mletele',
                        'Mdundiko',
                        'Nonganonga',
                        'Liwumbu',
                        'Mjimwema',
                        'Makemba',
                    ],
                },
                {
                    ward: 'Tanga',
                    streets: [
                        'Tanga',
                        'Mlete',
                        'Masigira',
                        'Sanangula',
                        'Mitawa',
                        'Pambazuko',
                    ],
                },
                {
                    ward: 'Lilambo',
                    streets: [
                        'Lilambo ‘a’',
                        'Lilambo “b”',
                        'Mwanamonga',
                        'Likuyufusi',
                        'Sinai',
                        'Myegeya',
                        'Luwawasi',
                        "Mang'ua",
                    ],
                },
                {
                    ward: 'Ndilimalitembo',
                    streets: ['Matogoro Shuleni', 'Makambi', 'Ndilimalitembo'],
                },
                {
                    ward: 'Msamala',
                    streets: [
                        'Mkuzo',
                        'Oysterbay',
                        'Miembeni',
                        "Making'inda",
                        'Mtaungana',
                    ],
                },
                {
                    ward: 'Seedfarm',
                    streets: ['Ruhila', 'Ruhilaseko', 'Kuchile', 'Unangwa'],
                },
                {
                    ward: 'Mateka',
                    streets: ['Mateka ‘a’', 'Mateka ‘b’', "Mateke 'c'"],
                },
                {
                    ward: 'Mwengemshindo',
                    streets: ['Ruhila Kati', 'Mwengemshindo'],
                },
                {
                    ward: 'Mjimwema',
                    streets: [
                        'Mjimwema A',
                        'Misufini',
                        'Pachanne A',
                        'Pachanne B',
                        'Mjimwema B',
                    ],
                },
            ],
        },
        {
            district: 'Songea',
            wards: [
                {
                    ward: 'Maposeni',
                    streets: ['Maposeni', 'Mdunduwalo'],
                },
                {
                    ward: 'Matimila',
                    streets: [
                        'Mpangula',
                        'Matimila A',
                        'Matimila B',
                        'Liula',
                        'Kikunja',
                        'Mpingi',
                    ],
                },
                {
                    ward: 'Mpitimbi',
                    streets: ['Mpitimbi A', 'Mpitimbi B', 'Lipaya'],
                },
                {
                    ward: 'Ndongosi',
                    streets: ['Ndongosi', 'Nambendo', 'Namatuhi'],
                },
                {
                    ward: 'Magagula',
                    streets: ['Magagula', 'Masangu', 'Lusonga'],
                },
                {
                    ward: 'Litisha',
                    streets: ['Nakahuga', 'Morogoro', 'Magima', 'Litisha'],
                },
                {
                    ward: 'Kilagano',
                    streets: [
                        'Mgazini',
                        'Kilagano',
                        'Mhepai',
                        'Muungano Zomba',
                        'Lugagara',
                    ],
                },
                {
                    ward: 'Gumbiro',
                    streets: ['Gumbiro'],
                },
                {
                    ward: 'Mahanje',
                    streets: ['Madaba', 'Mahanje'],
                },
                {
                    ward: 'Wino',
                    streets: ['Wino', 'Igawisenga', 'Lilondo'],
                },
                {
                    ward: 'Matumbi',
                    streets: ['Ifinga'],
                },
                {
                    ward: 'Muhukuru',
                    streets: [
                        'Muhukuru Barabarani',
                        'Mipeta',
                        'Maniamba',
                        'Muhukuru Nakawale',
                    ],
                },
                {
                    ward: 'Peramiho',
                    streets: ['Peramiho‘a’', 'Peramiho‘b’', 'Nguvumoja', 'Lundusi'],
                },
                {
                    ward: 'Mpandangindo',
                    streets: ['Mpandangindo', 'Kituro', 'Liweta'],
                },
                {
                    ward: 'Mbinga Mhalule',
                    streets: ['Mbinga Mhalule', 'Nakahegwa', 'Matomondo', 'Lipokera'],
                },
                {
                    ward: 'Mkongotema',
                    streets: ['Magingo', 'Lutukira'],
                },
                {
                    ward: 'Mtyangimbole',
                    streets: ['Mtyangimbole', 'Likalangilo', 'Luhimba'],
                },
                {
                    ward: 'Parangu',
                    streets: ['Parangu', 'Litowa', 'Chiwurungi'],
                },
                {
                    ward: 'Liganga',
                    streets: ['Liganga', 'Serekano', 'Mborongo'],
                },
                {
                    ward: 'Lilahi',
                    streets: ['Muhukuru Lilahi', 'Makwaya', 'Magwamila'],
                },
                {
                    ward: 'Kizuka',
                    streets: ['Kizuka', 'Ngahokora', 'Mbiro'],
                },
                {
                    ward: 'Litapwasi',
                    streets: ['Litapwasi', 'Lyangweni', 'Uyaudini'],
                },
                {
                    ward: 'Mateteleka',
                    streets: ['Mateteleka', 'Maweso', 'Mwande', 'Mkongotema'],
                },
                {
                    ward: 'Lituta',
                    streets: ['Kipingo', 'Mtepa', 'Lituta'],
                },
            ],
        },
        {
            district: 'Namtumbo',
            wards: [
                {
                    ward: 'Namtumbo',
                    streets: ['Namtumbo'],
                },
                {
                    ward: 'Mchomoro',
                    streets: ['Songambele', 'Mchomoro', 'Masuguru', 'Kilimasera'],
                },
                {
                    ward: 'Luchili',
                    streets: ['Kilangalanga', 'Namanguli', 'Misufini', 'Chengena'],
                },
                {
                    ward: 'Ligera',
                    streets: [
                        'Njoomlole',
                        'Ligera',
                        'Muungano',
                        'Namahoka',
                        'Mtelawamwahi',
                    ],
                },
                {
                    ward: 'Lusewa',
                    streets: ['Mtelawamwahi'],
                },
                {
                    ward: 'Magazini',
                    streets: ['Magazini', 'Sasawala', 'Likusanguse', 'Amani'],
                },
                {
                    ward: 'Rwinga',
                    streets: ['Minazini', 'Rwinga', 'Migelegele', 'Mandepwende'],
                },
                {
                    ward: 'Namabengo',
                    streets: ['Namabengo', 'Namahimba', 'Utwango', 'Mdwema'],
                },
                {
                    ward: 'Mkongo',
                    streets: ['Njalamatata', 'Mkongonakawale', 'Mwinuko'],
                },
                {
                    ward: 'Luegu',
                    streets: ['Luegu'],
                },
            ],
        },
    ],
};

const shinyanga = {
    region: 'Shinyanga',
    districts: [
        {
            district: 'Shinyanga\r\nCbd',
            wards: [
                {
                    ward: 'Mjini',
                    streets: ['Kaunda', 'Buzuka', 'Mitimirefu', 'Viwandani'],
                },
                {
                    ward: 'Kambarage',
                    streets: [
                        'Kambarage',
                        'Jomu',
                        'Majengo',
                        'Mwasele A',
                        'Mwasele B',
                        'Mwasele Mihogoni',
                    ],
                },
                {
                    ward: 'Ngokolo',
                    streets: [
                        'Magadula',
                        'Ngokolo',
                        'Mwinamila',
                        'Kalonga',
                        'Mwadui',
                        'Mageuzi',
                        'Majengo Mapya',
                    ],
                },
                {
                    ward: 'Chamaguha',
                    streets: ['Tanesco', 'Chamaguha', 'Sanjo'],
                },
                {
                    ward: 'Kitangili',
                    streets: [
                        'Kitangili',
                        'Busulwa',
                        'Iwelyangula',
                        'Songambele',
                        'Sokoine',
                        'Majengo Mapya',
                    ],
                },
                {
                    ward: 'Ibinzamata',
                    streets: ['Bugwandege', 'Sido', 'Ibinzamata'],
                },
                {
                    ward: 'Ndala',
                    streets: ['Banduka', 'Mlepa', 'Ndala', 'Mapinduzi', 'Mwabundu'],
                },
                {
                    ward: 'Kizumbi',
                    streets: ['Nhelegani', 'Bugayambele', 'Mwamashele'],
                },
                {
                    ward: 'Mwawaza',
                    streets: ['Negezi', 'Mwawaza', 'Bugimbagu'],
                },
                {
                    ward: 'Chibe',
                    streets: ['Chibe', 'Mwalugoye', 'Busambilo', 'Mwamapalala'],
                },
                {
                    ward: 'Mwamalili',
                    streets: ['Mwamalili', 'Seseko'],
                },
                {
                    ward: 'Ibadakuli',
                    streets: [
                        'Bugweto A',
                        'Bugweto B',
                        'Mwagala',
                        'Ibadakuli',
                        'Uzogore',
                    ],
                },
                {
                    ward: 'Kolandoto',
                    streets: ['Kolandoto', 'Mwamagunguli', 'Galamba'],
                },
                {
                    ward: 'Lubaga',
                    streets: [
                        'Lubaga,',
                        'Bushuhsu',
                        'Lubaga Farm',
                        'Azimio',
                        'Lubaga Ll',
                    ],
                },
                {
                    ward: 'Masekelo',
                    streets: ['Masekelo', 'Luhende', 'Mwamala', 'Bondeni'],
                },
                {
                    ward: 'Ndembezi',
                    streets: [
                        'Tambukareli',
                        'Dome',
                        'Mabambasi',
                        'Mbuyuni',
                        'Butengwa',
                        'Ndembezi',
                    ],
                },
                {
                    ward: 'Old Shinyanga',
                    streets: ['Old Shinyanga', 'Ihapa'],
                },
            ],
        },
        {
            district: 'Shinyanga',
            wards: [
                {
                    ward: 'Samuye',
                    streets: [
                        'Ng’wang’halanga',
                        'Ibingo',
                        'Isela',
                        'Ishinabulandi',
                        'Idodoma',
                    ],
                },
                {
                    ward: 'Mwamala',
                    streets: ['Milyungu'],
                },
            ],
        },
        {
            district: 'Kishapu',
            wards: [
                {
                    ward: 'Bubiki',
                    streets: ['Bubiki "b"', 'Nyansamba', 'Mwamishoni'],
                },
                {
                    ward: 'Bunambiyu',
                    streets: ['Bunambiyu', 'Butuyu'],
                },
                {
                    ward: 'Maganzo',
                    streets: ['Maganzo', 'Masagala', 'Ikonongo'],
                },
                {
                    ward: 'Mwaweja',
                    streets: ['Ikonda A', 'Bubata', "Mwajiginya ' A'"],
                },
                {
                    ward: 'Bupipi',
                    streets: ['Bupigi', 'Butungwa', 'Wela'],
                },
                {
                    ward: 'Busangwa',
                    streets: ['Mwanima', 'Mwajiningu', 'Busangwa', 'Mwajipugila'],
                },
                {
                    ward: 'Mwataga',
                    streets: ['Mwajipugila'],
                },
                {
                    ward: 'Ndoleleji',
                    streets: ['Ndoleleji', 'Sanjo', 'Gimagi', 'Mwalata'],
                },
                {
                    ward: 'Mwasubi',
                    streets: ['Mwasubi', "Ng'wang'hili", 'Itongoitale'],
                },
                {
                    ward: 'Igaga',
                    streets: ['Dugushilu', "Igaga ''a''", "Igaga''b''"],
                },
                {
                    ward: 'Idukilo',
                    streets: ['Bulima', 'Idukilo', 'Sanjo', 'Igumangobo'],
                },
            ],
        },
    ],
};

const simiyu = {
    region: 'Simiyu',
    districts: [
        {
            district: 'Bariadi',
            wards: [
                {
                    ward: 'Bariadi',
                    streets: [
                        'Viwandani',
                        'Majengo',
                        'Kidinda',
                        'Buzunza',
                        'Nyangaka',
                        'Bariadi',
                    ],
                },
                {
                    ward: 'Bunamhala',
                    streets: [
                        'Bunamhala',
                        'Songambele',
                        'Kidalimanda',
                        'Itongo',
                        'Mwamhuba',
                        'Imalilo',
                        'Mahaha',
                        'Isanzu',
                        'Kilulu',
                        'Mwanzimbila',
                        'Giriku',
                        'Sakayi',
                        "Ng'wakibolo",
                    ],
                },
                {
                    ward: 'Somanda',
                    streets: [
                        'Yoma',
                        'Nyamhimbi',
                        'Izunya',
                        'Bomani',
                        'Somanda',
                        'Ntuzu',
                        'Kisiwani',
                        'Sanungu',
                        'Nyaumata',
                        'Mahina',
                    ],
                },
                {
                    ward: 'Sima',
                    streets: [
                        'Sokoni',
                        'Salunda',
                        'Lyalu',
                        'Sima',
                        'Budeka',
                        'Butiama',
                        "Ng'waswale",
                    ],
                },
                {
                    ward: 'Malambo',
                    streets: [
                        'Voda',
                        'Sima Juu',
                        'Malambo',
                        'Benki',
                        'Gitoya',
                        'Ngashanda',
                    ],
                },
                {
                    ward: 'Sakwe',
                    streets: ['Sakwe', 'Ibulyu', "Ng'wangimu"],
                },
                {
                    ward: 'Mhango',
                    streets: [
                        'Mbiti Mlimani',
                        'Mbiti Sokoni',
                        'Mhango',
                        'Isengwa',
                        'Shimbale',
                        'Isanga',
                        'Ngogote',
                        'Busulwa',
                    ],
                },
                {
                    ward: 'Kasoli',
                    streets: ['Kasoli', 'Mwamlapa', 'Nduha'],
                },
                {
                    ward: 'Kilalo',
                    streets: [
                        'Kilalo',
                        'Nyamisagusa',
                        'Kilalo Mashariki',
                        'Ikungulyambeshi B',
                        'Ikungulyambeshi A',
                    ],
                },
                {
                    ward: 'Gambosi',
                    streets: ['Nyamswa', 'Gambosi'],
                },
                {
                    ward: 'Ngulyati',
                    streets: ['Ngulyati', 'Nyangunge', 'Ngalla', 'Nyasosi'],
                },
                {
                    ward: 'Nkololo',
                    streets: [
                        'Mwamoto',
                        'Nkololo',
                        'Bubale',
                        'Mwabadimi',
                        'Chungu Cha Bawawa',
                    ],
                },
                {
                    ward: 'Mwaubingi',
                    streets: ['Gasuma', 'Mwaubingi', 'Bulumbaka'],
                },
                {
                    ward: 'Mwadobana',
                    streets: ['Mwadobana', 'Ikungulyandili', 'Byuna', 'Mwabuluda'],
                },
                {
                    ward: 'Nkindwabiye',
                    streets: ['Songambele', 'Halawa', 'Nkindwabiye', 'Damidami'],
                },
                {
                    ward: 'Mwaumatondo',
                    streets: ['Mwaumatondo', 'Mwasinasi'],
                },
                {
                    ward: 'Dutwa',
                    streets: [
                        'Igaganulwa',
                        'Isenge',
                        'Mwamondi',
                        'Sengerema',
                        'Majengo',
                        'Mwamabu',
                    ],
                },
                {
                    ward: 'Gilya',
                    streets: ['Nyawa', 'Gilya', 'Mwauchumu', 'Isuyu', 'Ikinabushu'],
                },
                {
                    ward: 'Sapiwi',
                    streets: [
                        'Igegu',
                        'Igegu Magharibi',
                        'Mwandama',
                        'Nyamikoma',
                        'Sapiwi',
                    ],
                },
                {
                    ward: 'Matongo',
                    streets: ['Matongo', 'Mwantimba', "Ng'alita", 'Salalilya'],
                },
                {
                    ward: 'Nyakabindi',
                    streets: [
                        'Hinda Maliga',
                        'Wala',
                        'Sesele',
                        'Ngagabali',
                        'Nyakabindi',
                        'Mwembeni',
                        'Mwakibuga',
                        'Duma',
                        'Old-maswa',
                        "Ng'wahabi",
                        'Nyangaka',
                        'Bupandagila',
                        'Gisadi',
                    ],
                },
                {
                    ward: 'Ikungulyabashashi',
                    streets: ['Lulayu', 'Mwahalaja', 'Ikungulyabashashi', 'Mkuyuni'],
                },
                {
                    ward: 'Guduwi',
                    streets: [
                        'Guduwi',
                        'Nyalele',
                        'Ditima',
                        "Ng'wanhande",
                        'Nkuli',
                        'Mbugani',
                        'Yeya',
                        'Mondo',
                    ],
                },
                {
                    ward: 'Isanga',
                    streets: [
                        'Isanga',
                        'Londo',
                        'Katenga',
                        'Wala',
                        'Mwatungu',
                        'Bundilya',
                        'Mhuli',
                        'Majahida',
                    ],
                },
                {
                    ward: 'Nyangokolwa',
                    streets: [
                        'Nyangokolwa',
                        'Zina',
                        'Mbalanga',
                        "Ng'wang'wali",
                        'Ilalambuli',
                        "Ng'wahesa",
                        'Matale',
                        "Ng'wagululi",
                        'Missi',
                        'Bipyayi',
                        'Gamihusi',
                        'Mwakilalo',
                        'Mwagiti',
                    ],
                },
                {
                    ward: 'Masewa',
                    streets: ['Masewa', 'Senta', 'Igabanhilo'],
                },
                {
                    ward: 'Mwasubuya',
                    streets: ['Mwasubuya', 'Isengwa', 'Igabulilo', 'Miswaki'],
                },
                {
                    ward: 'Itubukilo',
                    streets: [
                        'Itubukilo',
                        'Mwambalange',
                        'Mwanzoya',
                        'Kihalahala',
                        'Pugu',
                    ],
                },
                {
                    ward: 'Ihusi',
                    streets: ['Mwashagata', 'Ihusi', 'Mwamalula', 'Mwasilimbi'],
                },
                {
                    ward: 'Gibishi',
                    streets: ['Gibishi', 'Chungu', 'Mwabasabi', 'Ihula'],
                },
                {
                    ward: 'Benemhi',
                    streets: [
                        'Kilabela',
                        'Mwaunkwaya',
                        'Banemhi',
                        'Mbugani',
                        'Nsanzaguma',
                    ],
                },
            ],
        },
        {
            district: 'Itilima',
            wards: [
                {
                    ward: 'Lagangabilili',
                    streets: [
                        'Lagangabilili',
                        'Isengwa',
                        'Ng’esha Kanadi',
                        'Nguno',
                        'Lali',
                    ],
                },
                {
                    ward: 'Budalabujiga',
                    streets: ['Mitobo', 'Budalabujiga', 'Mwakatale', 'Mwabasabi'],
                },
                {
                    ward: 'Mhunze',
                    streets: ['Mhunze', 'Madilana', 'Ngando', 'Ng’wabulugu'],
                },
                {
                    ward: 'Migato',
                    streets: [
                        'Migato',
                        'Simiyu',
                        'Shishani',
                        'Mwanhunda',
                        'Longalombogo',
                    ],
                },
                {
                    ward: 'Ndolelezi',
                    streets: ['Ndolelezi', 'Nangale', 'Ng’wanyitanga', 'Ng’waogama'],
                },
                {
                    ward: 'Chinamili',
                    streets: ['Nanga', 'Chinamili', 'Senani', 'Sali'],
                },
                {
                    ward: 'Bumera',
                    streets: ['Bumera', 'Bulolambeshi', 'Mwazimbi', 'Mwandulu', 'Habiya'],
                },
                {
                    ward: 'Ikindilo',
                    streets: [
                        'Ikindilo',
                        'Ntenga',
                        'Mwamungesha',
                        'Mwabuki',
                        'Nyang’ombe',
                    ],
                },
                {
                    ward: 'Sagata',
                    streets: ['Sagata', 'Gaswa', 'Laini A', 'Laini B'],
                },
                {
                    ward: 'Mwamtani',
                    streets: ['Mwamtani', 'Manasubi', 'Mbogo', 'Mwamakili'],
                },
                {
                    ward: 'Nkuyu',
                    streets: ['Nkuyu', 'Nyantugutu', 'Lungwa', 'Pijulu'],
                },
                {
                    ward: 'Mwaswale',
                    streets: ['Mwaswale', 'Mwamalizi', 'Nding’ho', 'Ng’walali'],
                },
                {
                    ward: 'Nkoma',
                    streets: [
                        'Nkoma',
                        'Dasina',
                        'Mwambagwa',
                        'Gambasingu',
                        'Ng’wang’wita',
                        'Musoma',
                        'Ntagwasa',
                    ],
                },
                {
                    ward: 'Mwalushu',
                    streets: [
                        'Mwalushu',
                        'Mwamigagani',
                        'Mwamanyangu',
                        'Mwanunui',
                        "Ng'homango",
                    ],
                },
                {
                    ward: 'Nyamalapa',
                    streets: [
                        'Nyamalapa',
                        'Kimali',
                        'Itilima',
                        'Bunamhala Mbugani',
                        'Isakang’wale',
                    ],
                },
                {
                    ward: 'Mwamapalala',
                    streets: [
                        'Mwamapalala',
                        'Nkololo Itilima',
                        'Ngeme',
                        'Mwamunhu',
                        'Idoselo',
                    ],
                },
                {
                    ward: 'Luguru',
                    streets: ['Luguru', 'Ikungulipu', 'Itubilo', 'Inalo'],
                },
                {
                    ward: 'Nhobora',
                    streets: [
                        'Nhobora',
                        'Mwabuyunge',
                        'Mwaumisheni',
                        'Tagawi',
                        'Kilugala',
                    ],
                },
                {
                    ward: 'Kinang’weli',
                    streets: ['Kinang’weli', 'Mwakilangi', 'Mwagimagi', 'Lalang’ombe'],
                },
                {
                    ward: 'Mbita',
                    streets: [
                        'Sunzula',
                        "Ng'hesha Itilima",
                        'Mahembe',
                        'Kidula',
                        'Mwamnemha',
                        'Isagala',
                        'Songambele',
                    ],
                },
                {
                    ward: 'Sawida',
                    streets: ['Sawida', 'Isagala', 'Mahembe', 'Songambele'],
                },
                {
                    ward: 'Zagayu',
                    streets: [
                        'Bukingwaminzi',
                        'Zanzui',
                        'Mlimani',
                        'Sasago',
                        'Kabale',
                        'Kashishi',
                    ],
                },
            ],
        },
        {
            district: 'Maswa',
            wards: [
                {
                    ward: 'Buchambi',
                    streets: ['Kizungu', 'Kinamwigulu', 'Sayusayu', 'Nghaya', 'Inenwa'],
                },
                {
                    ward: 'Zanzui',
                    streets: ['Malita', 'Mwabujiku', 'Zanzui'],
                },
                {
                    ward: 'Mwamashimba',
                    streets: ['Buyubi', 'Dodoma', 'Ikungulyasubi'],
                },
                {
                    ward: 'Isanga',
                    streets: ['Njiapanda', 'Funika', 'Isanga'],
                },
                {
                    ward: 'Masela',
                    streets: ['Masela', 'Wigelekelo', 'Mwasayi', 'Gumali', "Ng'wabuki"],
                },
                {
                    ward: "Seng'wa",
                    streets: ['Mandela', "Seng'wa", 'Mwabomba', 'Mwanundi', 'Manawa'],
                },
                {
                    ward: 'Lalago',
                    streets: ['Lalago', 'Gula', 'Mwakidiga'],
                },
                {
                    ward: 'Dakama',
                    streets: ['Shinyanga Mwenge', 'Sanga Mwampuya'],
                },
                {
                    ward: 'Budekwa',
                    streets: ['Budekwa', 'Kiloleli'],
                },
                {
                    ward: 'Busilili',
                    streets: ['Masanwa', 'Bushitala'],
                },
                {
                    ward: 'Sukuma',
                    streets: ['Hinduki', 'Mwadila', "Isageng'he", 'Zabazaba'],
                },
                {
                    ward: "Ng'wigwa",
                    streets: ['Nyashimba', 'Mwabayanda', 'Mwasita', 'Igongwa'],
                },
                {
                    ward: 'Ngulinguli',
                    streets: ['Nguliguli', 'Chugambuli', 'Mwashegeshi', 'Mwabalogi'],
                },
                {
                    ward: 'Mwamanenge',
                    streets: ["Mwang'holo", 'Mwamanenge', 'Iwelimo'],
                },
                {
                    ward: 'Mpindo',
                    streets: [
                        'Kidaganda',
                        'Igumangobo',
                        'Somanda',
                        'Mwafumbuka',
                        'Tamanu',
                        'Ifungilo',
                    ],
                },
                {
                    ward: 'Senani',
                    streets: [
                        'Senani',
                        'Mwabadimi',
                        'Jilago',
                        'Ilambambasa',
                        'Zebeya',
                        'Mbugamita',
                        'Mwabalaturu',
                    ],
                },
                {
                    ward: 'Ipililo',
                    streets: [
                        'Ipililo',
                        'Mwamitumai',
                        'Ikungulyankoma',
                        "Ng'wakabeya",
                        'Bushashi',
                        'Songambele',
                    ],
                },
                {
                    ward: 'Binza',
                    streets: ['Songambele'],
                },
                {
                    ward: 'Nyalikungu',
                    streets: ['Songambele'],
                },
                {
                    ward: 'Malampaka',
                    streets: ['Malampaka', "Ngulug'washi", 'Bukigi'],
                },
                {
                    ward: 'Badi',
                    streets: [
                        'Muhida',
                        'Nyashimba',
                        'Jihu',
                        'Ikungu',
                        'Bukangilija',
                        'Nhelela',
                    ],
                },
                {
                    ward: 'Nyabubinza',
                    streets: [
                        'Mwabagalu',
                        'Mwanhegele',
                        'Kidabu',
                        'Mwakulilima',
                        'Igwata',
                    ],
                },
                {
                    ward: "Mwan'honoli",
                    streets: ["Mwang'honoli", 'Zawa', 'Mwabulimbu', 'Nganzu'],
                },
                {
                    ward: 'Kulimi',
                    streets: ['Kulimi', 'Mwamihanza'],
                },
                {
                    ward: 'Kadoto',
                    streets: ['Kadoto', 'Malekano', "Mwang'anda", "Dulung'wa"],
                },
                {
                    ward: 'Shishiyu',
                    streets: ['Shishiyu', 'Kakola', 'Mwaliga', 'Mwatumbe'],
                },
                {
                    ward: 'Busangi',
                    streets: ['Kidema', 'Ngongwa', 'Isulilo', 'Busamuda'],
                },
                {
                    ward: 'Jija',
                    streets: ['Igunya', 'Jija', 'Irobi'],
                },
                {
                    ward: 'Mbaragane',
                    streets: [
                        'Mbaragane',
                        "Mandang'ombe",
                        'Sulu',
                        'Mlimani',
                        'Buhangija',
                    ],
                },
                {
                    ward: 'Sangamwalugesha',
                    streets: ['Sangamwalugesha', 'Mwandete'],
                },
                {
                    ward: 'Mwabaratulu',
                    streets: ['Mwamashindike', 'Mwabaraturu'],
                },
                {
                    ward: 'Bugarama',
                    streets: ['Buhungukila', 'Bugarama', 'Ngudu', 'Ishima'],
                },
                {
                    ward: 'Mataba',
                    streets: ['Lali', 'Nyabubinza'],
                },
                {
                    ward: 'Mwabayanda',
                    streets: ["Ng'wandu", 'Ilamata', 'Mwabayanda'],
                },
                {
                    ward: 'Sola',
                    streets: ['Mwabayanda'],
                },
                {
                    ward: 'Shanwa',
                    streets: ['Mwabayanda'],
                },
            ],
        },
        {
            district: 'Meatu',
            wards: [
                {
                    ward: 'Lubiga',
                    streets: ['Lubiga', 'Mwandu Itinje', 'Isagijo'],
                },
                {
                    ward: 'Mwandoya',
                    streets: [
                        'Mwandoya',
                        'Mwakaluba',
                        'Igobe',
                        'Makomangwa',
                        'Inonelwa',
                        'Mwagumada',
                    ],
                },
                {
                    ward: 'Mwakisandu',
                    streets: ['Mwakisandu', 'Mwanindwa', 'Nyanza'],
                },
                {
                    ward: 'Mwabusalu',
                    streets: ['Mwabusalu', 'Nzanza', 'Ikigijo', 'Mwakipugila'],
                },
                {
                    ward: 'Sakasaka',
                    streets: ['Sakasaka', 'Bulyandulu', 'Butuli', "Ming'ongwa"],
                },
                {
                    ward: 'Tindabuligi',
                    streets: ['Longalonhiga', 'Matale', 'Malwilo Mnadani', 'Tindabuligi'],
                },
                {
                    ward: 'Lingeka',
                    streets: ['Lingeka', 'Masanga'],
                },
                {
                    ward: 'Mwasengela',
                    streets: ['Mwabulutago', "Ng'hanga", 'Mwasengela', 'Mwamhongo'],
                },
                {
                    ward: 'Mwabuma',
                    streets: ['Mwabuma', 'Mwakasumbi', 'Mwashata', 'Baluli'],
                },
                {
                    ward: 'Kisesa',
                    streets: ['Kisesa', 'Ngugunu', 'Mwandu Kisesa', 'Mwaukoli', 'Ntobo'],
                },
                {
                    ward: 'Itinje',
                    streets: ['Itinje', 'Mwagayi', 'Mwasungura'],
                },
                {
                    ward: 'Mwanhuzi',
                    streets: ['Bomani', 'Mshikamano', 'Mwambegwa', 'Bulyanaga'],
                },
                {
                    ward: 'Mwanyahina',
                    streets: ['Mwanyahina', 'Mwagwila', 'Buganza', 'Mwajidalala'],
                },
                {
                    ward: 'Mwamishali',
                    streets: [
                        'Mwamishali',
                        'Mwamagingo',
                        'Bulyashi',
                        'Dakama',
                        'Mwambiti',
                        "Itongolyang'hamba",
                        'Malwilo',
                    ],
                },
                {
                    ward: 'Kimali',
                    streets: ['Paji', 'Mwanyagula', 'Sapa'],
                },
                {
                    ward: 'Mwangudo',
                    streets: ['Mwangudo', 'Iramba Ndogo', 'Sungu', 'Makao'],
                },
                {
                    ward: 'Nkoma',
                    streets: ['Nkoma', 'Itaba', 'Mwabagalu', 'Ikigijo'],
                },
                {
                    ward: 'Imalaseko',
                    streets: ['Imalaseko', 'Nata', "Mwang'humbi", 'Isanga'],
                },
                {
                    ward: "Ng'hoboko",
                    streets: ["Ng'hoboko", 'Maweni', 'Isebanda'],
                },
                {
                    ward: 'Mwamanongu',
                    streets: ['Mwakipopo', 'Mwamanongu', 'Mwamagembe', 'Igushilu'],
                },
                {
                    ward: 'Mwamalole',
                    streets: ['Mwamalole', 'Lata', 'Usiulize'],
                },
                {
                    ward: 'Mwamanimba',
                    streets: ['Mwamanimba', 'Mwamatiga'],
                },
                {
                    ward: 'Bukundi',
                    streets: ['Bukundi', 'Lukale', 'Mwabagimu', 'Witamhiya'],
                },
                {
                    ward: 'Mwabuzo',
                    streets: ['Mwabuzo', 'Mwamanoni', 'Mwanzugi'],
                },
            ],
        },
    ],
};

const singida = {
    region: 'Singida',
    districts: [
        {
            district: 'Singida Cbd',
            wards: [
                {
                    ward: 'Utemini',
                    streets: ['Utemini', 'Station', 'Sabasaba'],
                },
                {
                    ward: 'Mughanga',
                    streets: ['Bomani', 'Mji Wa Zamani'],
                },
                {
                    ward: 'Mitunduruni',
                    streets: [
                        'Mitunduruni',
                        'Unyankindi',
                        'Manguamitogho',
                        'Kasembe',
                        'Msufuni',
                        'Bima',
                        'N.h.c.',
                    ],
                },
                {
                    ward: 'Mtamaa',
                    streets: ['Mtamaa A', 'Mtamaa B', 'Mtisi', 'Mnyituka', 'Kimai'],
                },
                {
                    ward: 'Mandewa',
                    streets: ['Mandewa', 'Manguanjuki', 'Mwaja', 'Unyankhae'],
                },
                {
                    ward: 'Mwankoko',
                    streets: ['Isomia', 'Mwankoko A', 'Mwankoko B', 'Makungu'],
                },
                {
                    ward: 'Mungumaji',
                    streets: ['Mungumaji', 'Kititimo'],
                },
                {
                    ward: 'Ipembe',
                    streets: ['Ipembe', 'Soko', 'Zimamoto'],
                },
                {
                    ward: 'Majengo',
                    streets: [
                        'Mwenge',
                        "Ng'ongoajibu",
                        'Stand',
                        'Jitulize',
                        'Ukombozi',
                        'Majengo',
                    ],
                },
                {
                    ward: 'Kindai',
                    streets: [
                        'Kundai',
                        'Kilambida',
                        'Mahembe',
                        'Kibaoni',
                        'Bohari',
                        'Singida Mnangi',
                        'Kidinkuku',
                    ],
                },
                {
                    ward: 'Mtipa',
                    streets: ['Mtipa', 'Mtipa Mashariki', 'Manga'],
                },
                {
                    ward: 'Unyambwa',
                    streets: ['Unyambwa', 'Kisasida', 'Ipungi', 'Kinyakaya'],
                },
                {
                    ward: 'Unyamikumbi',
                    streets: ['Unyamikumbi A', 'Ughaugha A', 'Ughaugha B', 'Kihade'],
                },
                {
                    ward: 'Minga',
                    streets: ['Minga', 'Arusha Road', 'Itungukia', "Mnung'una"],
                },
                {
                    ward: 'Misuna',
                    streets: ['Misuna', 'Salmin', 'Kimpungua', 'Sokoine', 'Karakana'],
                },
                {
                    ward: 'Uhamaka',
                    streets: ['Mwamrafa', 'Uhamaka', 'Ititi'],
                },
                {
                    ward: 'Unyianga',
                    streets: ["Unyianga ''a''", "Unyianga ''b''"],
                },
                {
                    ward: 'Kisaki',
                    streets: ["Ng'aida", 'Ikenga', 'Kisaki', 'Unyamikumbi "b" .'],
                },
            ],
        },
        {
            district: 'Singida',
            wards: [
                {
                    ward: 'Mgori',
                    streets: ['Mgori', 'Munkhola', 'Sughana'],
                },
                {
                    ward: 'Mughunga',
                    streets: ['Nduamughanga', 'Mughunga', 'Unyampanda'],
                },
                {
                    ward: 'Ngimu',
                    streets: ['Ngimu', 'Mwighanji', 'Lamba', 'Pohama'],
                },
                {
                    ward: 'Itaja',
                    streets: ['Sagara', 'Itaja', 'Kinyamwenda'],
                },
                {
                    ward: 'Ilongero',
                    streets: ['Ilongero', 'Madamigha', 'Sekoutoure', 'Mwahango'],
                },
                {
                    ward: 'Mrama',
                    streets: ['Mwakiti', 'Mrama', 'Itamka', 'Iddi Simba', 'Makhandi'],
                },
                {
                    ward: 'Kinyeto',
                    streets: ['Minyaa', 'Ntunduu', 'Kinyeto', 'Mkimbii'],
                },
                {
                    ward: 'Kinyagigi',
                    streets: ['Kinyagigi', 'Mwanyonye', 'Mitula', 'Kihunadi'],
                },
                {
                    ward: 'Mwasauya',
                    streets: ['Ngamu', 'Mdilu', 'Mwasauya'],
                },
                {
                    ward: 'Mughamo',
                    streets: ['Msikii', 'Mughamo'],
                },
                {
                    ward: 'Ntonge',
                    streets: ['Ntonge', 'Ifombou', 'Igauri'],
                },
                {
                    ward: 'Ikhanoda',
                    streets: ['Ikhanoda', 'Mjughuda', 'Msimihi'],
                },
                {
                    ward: 'Merya',
                    streets: ['Merya', 'Kinyamwambo', 'Mvae', 'Mwarufyu'],
                },
                {
                    ward: 'Maghojoa',
                    streets: ['Mipilo', 'Maghojoa', 'Ghata', 'Mwachambia'],
                },
                {
                    ward: 'Msange',
                    streets: ['Msange', 'Mangida', 'Sefunga', 'Endeshi'],
                },
                {
                    ward: 'Mtinko',
                    streets: [
                        'Mtinko',
                        'Mwakichenche',
                        'Minyenye',
                        'Ndughwira',
                        'Mpambaa',
                        'Mughanga',
                        'Malolo',
                    ],
                },
                {
                    ward: 'Kijota',
                    streets: ['Mitonto', 'Ikiwu', 'Nduu', 'Kijota'],
                },
                {
                    ward: 'Ughandi',
                    streets: [
                        'Misinko',
                        'Laghanida',
                        'Ughandi B',
                        'Ughandi A',
                        'Semfuru',
                    ],
                },
                {
                    ward: 'Msisi',
                    streets: ['Msisi', 'Ntondo', 'Nkwae', "Mnung'una"],
                },
                {
                    ward: 'Makuro',
                    streets: [
                        'Makuro',
                        'Mwalala',
                        'Ghalunyangu',
                        'Ng’ongoampoku',
                        'Matumbo',
                        'Mikuyu',
                        'Mkenge',
                    ],
                },
                {
                    ward: 'Mudida',
                    streets: ['Mpipiti', 'Mudida', 'Kibaoni', 'Migugu'],
                },
            ],
        },
        {
            district: 'Iramba',
            wards: [
                {
                    ward: 'Kiomboi',
                    streets: ['Migugu'],
                },
            ],
        },
    ],
};

const songwe = {
    region: 'Songwe',
    districts: [
        {
            district: 'Songwe',
            wards: [
                {
                    ward: 'Gua',
                    streets: ['Gua', 'Some'],
                },
                {
                    ward: 'Ngwala',
                    streets: ['Ngwala', 'Itiziro'],
                },
                {
                    ward: 'Kapalala',
                    streets: ['Kapalala', 'Udinde', 'Rukwa'],
                },
                {
                    ward: 'Mbangala',
                    streets: ['Mbangala', 'Maleza'],
                },
                {
                    ward: 'Saza',
                    streets: ['Saza', 'Patamela'],
                },
                {
                    ward: 'Mkwajuni',
                    streets: ['Mkwajuni', 'Majengo', 'Chudeco', 'Kaloleni'],
                },
                {
                    ward: 'Mwambani',
                    streets: ['Mwambani', 'Mbala', 'Iseche'],
                },
                {
                    ward: 'Totowe',
                    streets: ['Totowe', 'Namambo'],
                },
                {
                    ward: 'Mpona',
                    streets: ['Mpona', 'Iyovyo'],
                },
                {
                    ward: 'Namkukwe',
                    streets: ['Namkukwe', 'Muheza'],
                },
                {
                    ward: 'Manda',
                    streets: ['Isanzu', 'Manda'],
                },
                {
                    ward: 'Magamba',
                    streets: ['Magamba', 'Kambarage', 'Halyongo', 'Songambele'],
                },
                {
                    ward: 'Galula',
                    streets: ['Galula', 'Ilasilo', 'Itindi'],
                },
                {
                    ward: 'Mbuyuni',
                    streets: ['Mbuyuni', 'Ndanga', 'Mwagala'],
                },
                {
                    ward: "Chang'ombe",
                    streets: ['Chang’ombe', 'Ifuko', 'Wanzani'],
                },
                {
                    ward: 'Kanga',
                    streets: ['Kanga', 'Tete'],
                },
                {
                    ward: 'Ifwenkenya',
                    streets: ['Ifwenkenya', 'Ileya'],
                },
            ],
        },
        {
            district: 'Mbozi',
            wards: [
                {
                    ward: 'Vwawa',
                    streets: ['Vwawa'],
                },
            ],
        },
    ],
};

const tabora = {
    region: 'Tabora',
    districts: [
        {
            district: 'Tabora Cbd',
            wards: [
                {
                    ward: "Ng'ambo",
                    streets: [
                        'Tukutuku',
                        'Kazehil',
                        'Tabora Girls',
                        'Kiyungi',
                        'Mpepo',
                        'Kalingonji',
                        'Milambo',
                        'Masempele',
                        'Kapaya',
                        'Mbilani',
                        'Mkaoni',
                        'Kwihara',
                        'Mlimani',
                        'Kizigo',
                    ],
                },
                {
                    ward: 'Kitete',
                    streets: [
                        'Hospital',
                        'New Nhc',
                        'Community',
                        'Old Nhc',
                        'Shule',
                        'Filter',
                        'Kijiweni',
                        'Kigamboni',
                        'Kaliakoo',
                    ],
                },
                {
                    ward: 'Malolo',
                    streets: [
                        'Ugundu',
                        'Urban Quarter',
                        'Miemba',
                        'Kanyenye',
                        "Chang'ombe",
                        'Kombomasai',
                        'Ulamba',
                    ],
                },
                {
                    ward: 'Mbugani',
                    streets: [
                        'Mwanzaroad',
                        'Kamna',
                        'Sukuma',
                        'Usule',
                        'Lumaliza',
                        'Kheri',
                        'Kijiweni',
                        'Shule',
                        'Minazimikinda',
                        'Mihogoni',
                        'Kazaroho',
                    ],
                },
                {
                    ward: 'Mtenedeni',
                    streets: [
                        'Mwanzo',
                        'Makunga',
                        'Mkinga',
                        'Ikindwa',
                        'Kidatu A',
                        'Kidatu B',
                    ],
                },
                {
                    ward: 'Tambuka-reli',
                    streets: [
                        'Mabatini',
                        'Rufita',
                        'Usagala',
                        'Mkonkole',
                        'Mwinyimlenda',
                    ],
                },
                {
                    ward: 'Ipuli',
                    streets: ['Nyerere', 'Mtungandi', 'Majengo', 'Mlenda'],
                },
                {
                    ward: 'Isevya',
                    streets: ['Kariakoo', 'Kilimbika', 'Azimio', 'Bombamzinga', 'Kazima'],
                },
                {
                    ward: 'Kanyenye',
                    streets: [
                        'Kombo',
                        'Maua',
                        'Mkunazini',
                        'Msikitini',
                        'Kazembe',
                        'Madrasat',
                        'Kakola',
                        'Sido',
                        'Uhindini',
                        'Kahama',
                        'Kanisani',
                        'Uhazili',
                        'Ttc',
                    ],
                },
                {
                    ward: 'Kiloleni',
                    streets: [
                        'Ghana',
                        'Mrema',
                        'Shule',
                        'Mtakuja',
                        'Bombamzinga',
                        'Milambo',
                    ],
                },
                {
                    ward: 'Chemchem',
                    streets: [
                        'Mnubi',
                        'Dawa',
                        'Sandawatu',
                        'Kalamata',
                        'Bakari',
                        'Matola',
                        'Subira',
                        'Juhudi',
                        'Umoja',
                        'Waitume',
                        'Makungu',
                        'Baruti',
                    ],
                },
                {
                    ward: 'Cheyo',
                    streets: ['Mayeye', 'Shalua', 'Boma', 'Nyuki', 'Ikulu', 'Maselele'],
                },
                {
                    ward: 'Gongoni',
                    streets: [
                        'Singo',
                        'Maganga',
                        'Sokoni',
                        'Ngomasakasi',
                        'Moshi',
                        'Mdoe',
                        'Nyaligwa',
                        'Milanzi',
                        'Mahakama',
                        'Swedi',
                        'Buheti',
                        'Zimamoto',
                    ],
                },
                {
                    ward: 'Uyui',
                    streets: [
                        'Uyui',
                        'Kalumwa',
                        'Kakulungu',
                        'Ugenge',
                        'Imalamihayo',
                        'Timkeni',
                    ],
                },
                {
                    ward: 'Kalunde',
                    streets: ['Kalunde', 'Ulamba', 'Izimbili', 'Lusangi', 'Blockfarm'],
                },
                {
                    ward: 'Ndevelwa',
                    streets: [
                        'Ndevelwa',
                        "Chang'ombe",
                        'Izenga',
                        'Itulu',
                        'Inala One',
                        'Shauri Moyo',
                        'Zugimulole',
                    ],
                },
                {
                    ward: 'Itetemia',
                    streets: ['Ntalikwa'],
                },
                {
                    ward: 'Kakola',
                    streets: ['Kakola', 'Magoweko', 'Masagala'],
                },
                {
                    ward: 'Misha',
                    streets: ['Igambilo', 'Itaga'],
                },
                {
                    ward: 'Tumbi',
                    streets: ['Tumbi'],
                },
                {
                    ward: 'Itonjanda',
                    streets: ['Itojanda'],
                },
                {
                    ward: 'Ikomwa',
                    streets: ['Itojanda'],
                },
                {
                    ward: 'Kabila',
                    streets: ['Kabila', 'Umanda'],
                },
                {
                    ward: 'Ntalikwa',
                    streets: ['Lusangi/mtakuja'],
                },
                {
                    ward: 'Ifucha',
                    streets: ['Ifucha Kati', 'Kazima', 'Usuhilo'],
                },
                {
                    ward: 'Mpela',
                    streets: ['Malabi', 'Mpela', 'Muhalitani', 'Uledi', 'Kazuge'],
                },
                {
                    ward: 'Mwinyi',
                    streets: [
                        'Sikanda',
                        'Kisarika',
                        'Kwihara',
                        'Ikunji',
                        'Sokoni',
                        'Simbamwene',
                    ],
                },
                {
                    ward: 'Kidongochekundu',
                    streets: ['Mgumia', 'Mkunazini', 'Msufini', 'Sokoni'],
                },
                {
                    ward: 'Mapambano',
                    streets: [
                        'Msikiti',
                        'Bahati',
                        'Masengese',
                        'Mkombozi',
                        'Zahanati',
                        'Mapambano',
                        'Makongoro',
                        'Magubhiko',
                    ],
                },
            ],
        },
        {
            district: 'Uyui',
            wards: [
                {
                    ward: 'Goweko',
                    streets: ['Goweko', 'Kamama', 'Imalakaseko', 'Mwitikila'],
                },
                {
                    ward: 'Lutende',
                    streets: ['Lutende', 'Simbodamalu', 'Mwisole', 'Itaga'],
                },
                {
                    ward: 'Kizengi',
                    streets: [
                        'Kizengi',
                        'Kabisile',
                        'Malongwe',
                        'Isuli',
                        'Mwamdaki',
                        'Mpumbuli',
                        'Gengesita',
                    ],
                },
                {
                    ward: 'Loya',
                    streets: [
                        'Lutona',
                        'Migongwa',
                        'Loya',
                        'Mlimani',
                        'Mwamabondo',
                        'Magulyati',
                    ],
                },
                {
                    ward: 'Igalula',
                    streets: ['Igalula', 'Isenefu', 'Kawekapina', 'Ipululu', 'Vumilia'],
                },
                {
                    ward: 'Ilolangulu',
                    streets: [
                        'Ilolangulu',
                        'Ilolangulu Kusini',
                        'Isenga',
                        "Kasisi 'a'",
                        'Mpenge',
                        'Ngokolo',
                    ],
                },
                {
                    ward: 'Mabama',
                    streets: ['Mabama', 'Tumaini', 'Ideka', 'Utula', 'Katunda'],
                },
                {
                    ward: 'Ndono',
                    streets: [
                        'Ndono',
                        'Itinka',
                        'Utemini',
                        'Chali',
                        'Imalamihayo',
                        'Nkulusi',
                        'Tupendane',
                        'Tulieni',
                    ],
                },
                {
                    ward: 'Ufuluma',
                    streets: [
                        'Ufuluma',
                        'Ugowola',
                        'Chesa',
                        'Mtimbola',
                        'Mfuto',
                        'Bulima',
                    ],
                },
                {
                    ward: 'Usagari',
                    streets: ['Migungumalo', 'Azimio', 'Msimba', 'Imalauduki A'],
                },
                {
                    ward: 'Ibiri',
                    streets: [
                        'Ibiri',
                        'Kilungu',
                        'Milumba',
                        'Isimu',
                        'Mwakashindye',
                        'Kagera',
                        'Inonelwa',
                        'Mkalya',
                    ],
                },
                {
                    ward: 'Ikongolo',
                    streets: ['Ikongolo', 'Kanyenye', 'Majengo', 'Kiwembe'],
                },
                {
                    ward: 'Isikizya',
                    streets: [
                        'Isikizya',
                        'Mswa',
                        'Ilolwansimba',
                        'Ikonola',
                        'Igoko',
                        'Ibushi',
                    ],
                },
                {
                    ward: 'Magiri',
                    streets: [
                        'Magiri',
                        'Mayombo',
                        'Kinyamwe',
                        'Imalampaka',
                        'Kalemela',
                        'Saw Mills',
                        'Kikungu',
                    ],
                },
                {
                    ward: 'Upuge',
                    streets: [
                        'Upuge',
                        'Uhuru',
                        'Kasenga',
                        'Lunguya',
                        'Mhogwe',
                        'Kongombiti',
                    ],
                },
                {
                    ward: 'Bukumbi',
                    streets: ['Ishihimulwa', 'Ilundo', 'Nyangahe', 'Kigwanhona'],
                },
                {
                    ward: 'Shitage',
                    streets: ['Shitage', 'Bukala', 'Nkutu', 'Mhulidede', 'Bukiri'],
                },
                {
                    ward: 'Nsololo',
                    streets: [
                        'Kimungi',
                        'Ntalasha',
                        'Tambukareli',
                        'Nyauwanga',
                        'Nsololo',
                    ],
                },
                {
                    ward: 'Miyenze',
                    streets: [
                        'Miyenze',
                        'Nsahulo',
                        'Matuga',
                        'Nyankombe',
                        'Songambele',
                        'Idekaminso',
                        'Mwadaudi',
                    ],
                },
                {
                    ward: 'Tura',
                    streets: [
                        'Tura',
                        'Malema',
                        'Kalangasi',
                        'Nkongwa',
                        'Munyu',
                        'Mwamlela',
                    ],
                },
                {
                    ward: 'Miswaki',
                    streets: ['Miswaki', 'Kalangale', 'Igudi', 'Mwamdalaigwe'],
                },
                {
                    ward: 'Kigwa',
                    streets: [
                        "Kigwa 'b'",
                        'Matanda',
                        'Nzigala',
                        'Itundakulu',
                        'Kinamagi',
                        'Mbuyuni',
                    ],
                },
                {
                    ward: 'Ibelamilundi',
                    streets: ['Ibelamilundi', 'Itobela', 'Mtakuja', 'Isenegezya'],
                },
                {
                    ward: 'Nsimbo',
                    streets: ['Nsimbo', 'Hiari Ya Moyo', 'Mputi', 'Kagera'],
                },
                {
                    ward: 'Kalola',
                    streets: ['Kalola', 'Maswanya', 'Mbiti', 'Msiliembe', 'Blockfarm'],
                },
                {
                    ward: 'Makazi',
                    streets: ['Makazi', 'Ndobha', 'Sawewe', 'Sala', 'Makomba'],
                },
                {
                    ward: 'Mmale',
                    streets: ['Mwakadala', 'Mmale', 'Mwamakoye', 'Mbulumbulu'],
                },
                {
                    ward: 'Igulungu',
                    streets: ['Mbeya', 'Busenda', 'Gilimba', 'Nhumbo'],
                },
                {
                    ward: 'Nzubuka',
                    streets: ['Nzubuka', 'Izuga Wima'],
                },
                {
                    ward: 'Isila',
                    streets: [
                        'Isila',
                        "Kasisi 'b'",
                        'Mbola',
                        'Mbola  Mashariki',
                        'Ulimakafu',
                    ],
                },
            ],
        },
        {
            district: 'Sikonge',
            wards: [
                {
                    ward: 'Sikonge',
                    streets: ['Sikonge', 'Igalula', 'Mkolye', 'Mlogolo'],
                },
                {
                    ward: 'Chabutwa',
                    streets: [
                        'Chabutwa',
                        'Kipanga Mlimani',
                        'Kabanga',
                        'Kikungu',
                        'Mitwigu',
                    ],
                },
                {
                    ward: 'Ipole',
                    streets: ['Ipole', 'Ugunda', 'Udongo', 'Makazi'],
                },
                {
                    ward: 'Tutuo',
                    streets: ['Tutuo', 'Muungano', 'Mitowo', 'Kidete'],
                },
                {
                    ward: 'Kiloleli',
                    streets: ['Kiloleli', 'Kanyamsenga', 'Mtakuja', 'Songambele'],
                },
                {
                    ward: 'Kipanga',
                    streets: ['Kipanga', 'Ukondamoyo', 'Mibono Mipya', 'Lembeli'],
                },
                {
                    ward: 'Igigwa',
                    streets: [
                        'Migumbu',
                        'Wankolongo',
                        'Igigwa',
                        'Tumbili',
                        'Lufwisi',
                        'Kasandalala',
                    ],
                },
                {
                    ward: 'Pangale',
                    streets: ['Pangale', 'Usesula', 'Majengo'],
                },
                {
                    ward: 'Kipili',
                    streets: ['Zugimlole', 'Kiyombo', 'Matagata'],
                },
                {
                    ward: 'Kiloli',
                    streets: ['Majojoro', 'Mwitikio'],
                },
                {
                    ward: 'Kitunda',
                    streets: ['Mgambo', 'Mwenge', 'Mkola', 'Kapumpa'],
                },
                {
                    ward: 'Misheni',
                    streets: ['Misheni', 'Usega', 'Usupilo'],
                },
                {
                    ward: 'Kisanga',
                    streets: ['Kisanga', 'Mwamayunga', 'Utyatya'],
                },
                {
                    ward: 'Ngoywa',
                    streets: ['Msuva', 'Utimule', 'Idekamiso', 'Mwamulu'],
                },
                {
                    ward: 'Mole',
                    streets: ['Ibumba', 'Mole Mlimani', 'Mole Kiloleni', 'Usanganya'],
                },
                {
                    ward: 'Usunga',
                    streets: ['Usunga', 'Isanjandugu', 'Urafiki', 'Mwanamkata'],
                },
                {
                    ward: 'Mpombwe',
                    streets: ['Mpombwe', 'Ibaya'],
                },
                {
                    ward: 'Mkolye',
                    streets: ['Isunda', 'Isongwa'],
                },
                {
                    ward: 'Nyahua',
                    streets: ['Nyahua', 'Nyauwanga', 'Makibo'],
                },
                {
                    ward: 'Kilumbi',
                    streets: ['Kilumbi', 'Muwele', 'Mwamalugu'],
                },
            ],
        },
        {
            district: 'Nzega',
            wards: [
                {
                    ward: 'Nzega Mjini Magharibi',
                    streets: [
                        'Humbi',
                        'Utemini',
                        'Majengo',
                        'Ushirika',
                        'Mbugani',
                        'Ipilili',
                    ],
                },
                {
                    ward: 'Nzega Ndogo',
                    streets: ['Zogolo', 'Iyuki'],
                },
                {
                    ward: 'Ijanija',
                    streets: ['Ijanija', 'Butandula', 'Makomelo'],
                },
                {
                    ward: 'Itilo',
                    streets: ['Itilo', 'Tazengwa', 'Silimuka'],
                },
                {
                    ward: 'Shigamba',
                    streets: ['Shigamba', 'Kagongwa'],
                },
                {
                    ward: 'Itobo',
                    streets: ['Itobo', 'Lakuyi', 'Chamwabo'],
                },
                {
                    ward: 'Isanzu',
                    streets: [
                        'Isanzu',
                        'Kilino A',
                        'Mhembe',
                        'Ipumbuli',
                        'Shila',
                        'Upambo',
                    ],
                },
                {
                    ward: 'Karitu',
                    streets: ['Gulumbai', 'Bulunde', 'Idubula', 'Itunda'],
                },
                {
                    ward: 'Kasela',
                    streets: ['Kasela', 'Nindo', 'Senge', 'Lububu', 'Udutu'],
                },
                {
                    ward: 'Mwangoye',
                    streets: [
                        'Chamipulu',
                        'Ilagaja',
                        'Kaselya',
                        'Igalula',
                        'Mwaguguli',
                        'Mwamikola',
                        'Sagida',
                    ],
                },
                {
                    ward: 'Nata',
                    streets: [
                        'Nata',
                        'Mwabangu',
                        'Mwamalulu',
                        'Kilabili',
                        'Kanolo',
                        'Kabale',
                    ],
                },
                {
                    ward: 'Lusu',
                    streets: ['Mwaluzwilo', 'Ifumba', 'Bujulu', 'Isanga'],
                },
                {
                    ward: 'Mbogwe',
                    streets: ['Mbogwe', 'Nhobola'],
                },
                {
                    ward: 'Wela',
                    streets: ['Wela', 'Malilita', 'Gulumuni', 'Mwasambo'],
                },
                {
                    ward: 'Miguwa',
                    streets: ['Miguwa'],
                },
            ],
        },
    ],
};

const tanga = {
    region: 'Tanga',
    districts: [
        {
            district: 'Tanga Cbd',
            wards: [
                {
                    ward: 'Central',
                    streets: [
                        'Raskazone',
                        'Bombo Area',
                        'Ambaoni Road',
                        'Darajani',
                        'Sakarani',
                        'Posta',
                        'Central',
                        'New Hotel',
                        'Halmashauri Ya Jiji',
                        'Miaka 21',
                        'Railways',
                    ],
                },
                {
                    ward: 'Mzingani',
                    streets: [
                        'Mzingani',
                        'Sahare',
                        'Muheza',
                        'Suji',
                        'Majengo Mapya',
                        'Mbolea',
                        'Bondeni',
                        'Msikitini',
                    ],
                },
                {
                    ward: 'Usagara',
                    streets: [
                        'Usagara "c"',
                        'Usagara "a"',
                        'Usagara Kati',
                        'Usagara Kijiji',
                        'Usagara "b"',
                    ],
                },
                {
                    ward: 'Ngamiani Kaskazini',
                    streets: [
                        'Askari',
                        'Karafuu',
                        'Lumumba',
                        'Makoko',
                        'Mkwakwani',
                        'Maua',
                        'Swahili',
                        'Pangani Road',
                    ],
                },
                {
                    ward: 'Ngamiani Kati',
                    streets: [
                        'Swahili',
                        'Karafuu',
                        'Lumumba',
                        'Makoko',
                        'Mkwakwani',
                        'Maua',
                        'Msikiti',
                        'Taifa Road',
                    ],
                },
                {
                    ward: 'Ngamiani Kusini',
                    streets: [
                        'Jamhuri "a"',
                        'Jamhuri "b"',
                        'Mapinduzi "a"',
                        'Mapinduzi "b"',
                        'Muungano "a"',
                        'Muungano "b"',
                        'Azimio "a"',
                        'Azimio "b"',
                    ],
                },
                {
                    ward: 'Majengo',
                    streets: [
                        'Chuda Quarters',
                        'Chuda Youth',
                        'Kanisani',
                        'Masiwani',
                        'Umba',
                        'Chuda Reli',
                        'Tembo Bar',
                        'Fadhila',
                        'Tangulia',
                        'Tawakali',
                    ],
                },
                {
                    ward: 'Chumbageni',
                    streets: [
                        'Kotazi',
                        'Tumaini',
                        'Kisosora Kusini',
                        'Kisosora Kaskazini',
                        'Ikulu',
                        'Chumvini',
                        'Mtupie',
                        'Kwaminchi',
                        'Juwata',
                        "Manzang'ombe",
                        'Jofu Juu A',
                        'Roma',
                    ],
                },
                {
                    ward: 'Makorora',
                    streets: [
                        'Community "a"',
                        'Community "b"',
                        'Kombezi "a"',
                        'Kombezi "b"',
                        'Makorora Kati',
                        'Mtakuja',
                    ],
                },
                {
                    ward: 'Mabawa',
                    streets: [
                        'Tapa',
                        'Mabawa "a"',
                        'Mabawa "b"',
                        'Mikanjuni "a"',
                        'Mikanjuni "b"',
                        'Kwakaeza "a"',
                        'Kwakaeza "b"',
                        'Donge',
                    ],
                },
                {
                    ward: 'Msambweni',
                    streets: [
                        'Madina',
                        'Msambweni "a"',
                        'Msambweni "b"',
                        'Msambweni "c"',
                        'Tamta',
                        'Mabawa',
                    ],
                },
                {
                    ward: 'Nguvumali',
                    streets: [
                        'Gofu Juu "a"',
                        'Gofu Juu "b"',
                        'Kwaminchi(gofu C)',
                        'Kagera',
                        'Nguvumali "a"',
                        'Nguvumali "b"',
                        'Old Nguvumali',
                        'Majani Mapana "a"',
                        'Majani Mapana "b"',
                        'Diary',
                    ],
                },
                {
                    ward: 'Mwanzange',
                    streets: ['Majengo', 'Maguzoni', 'Mwakizara', 'Mwanzange'],
                },
                {
                    ward: 'Duga',
                    streets: [
                        'Majengo "a"',
                        'Majengo "b"',
                        'Majengo "c"',
                        'Mapinduzi',
                        'Mwakizaro "b"',
                        'Magomeni "a"',
                        'Magomeni "b"',
                        'Magomeni "c"',
                        'Mji Mwema',
                        'Jaje',
                        'Duga Dampo',
                        'Duga Viwanjani',
                        'Duga Mpya',
                        'Duga Barabarani',
                    ],
                },
                {
                    ward: 'Magaoni',
                    streets: [
                        'Miembeni A',
                        'Miembeni B',
                        'Magaoni A',
                        'Magaoni B',
                        'Swahili',
                        'Kiboi',
                    ],
                },
                {
                    ward: 'Mnyanjani',
                    streets: [
                        'Mnyanjani',
                        'Kwanjeka Majengo',
                        'Kwanjeka A',
                        'Kwanjeka  Nyota',
                        'Mtambwe Kiungani',
                        'Makoko/ndumi',
                        'Gezaulole',
                    ],
                },
                {
                    ward: 'Masiwani',
                    streets: [
                        'Mwahako Kati',
                        'Mwahako Barabarani',
                        'Mwahako Msikitini',
                        'Machui',
                        'Neema',
                        'Mbugani',
                        'Masiwani Shamba',
                        'Njombe Mperani',
                    ],
                },
            ],
        },
        {
            district: 'Tanga',
            wards: [
                {
                    ward: 'Tangasisi',
                    streets: [
                        'Tangasisi',
                        'Chungurira',
                        "Mwang'ombe Magharibi",
                        "Mwang'ombe Mashariki",
                        'Bwagamoyo',
                        'Kivumbitifu',
                        'Mwambani',
                        'Mchukuuni',
                        'Mwakidila "a"',
                        'Mwakidila "b"',
                    ],
                },
                {
                    ward: 'Mzizima',
                    streets: ['Mleni', 'Mafuriko', 'Kongwa'],
                },
                {
                    ward: 'Kiomoni',
                    streets: ['Kiomoni', "Pande 'a'", 'Mabayani', 'Kivuleni', 'Ndumi'],
                },
                {
                    ward: 'Mabokweni',
                    streets: ['Mabokweni', 'Kibafuta', 'Kiruku'],
                },
                {
                    ward: 'Chongoleani',
                    streets: ['Chongoleani', 'Ndaoya', 'Mpirani', 'Putini'],
                },
                {
                    ward: 'Maweni',
                    streets: ['Kichangani', 'Kasera', 'Kange', 'Saruji'],
                },
                {
                    ward: 'Tongoni',
                    streets: ['Tongoni', 'Maere', 'Mwarongo'],
                },
                {
                    ward: 'Pongwe',
                    streets: [
                        'Kisimatui',
                        'Maranzara',
                        'Pongwe Kusini',
                        'Pongwe Kaskazini',
                        'Mgwisha',
                        'Sumbawanga',
                        'Pongwe Kati',
                    ],
                },
                {
                    ward: 'Marungu',
                    streets: ['Geza', 'Marungu'],
                },
                {
                    ward: 'Kirare',
                    streets: ['Mapojoni', 'Kirare'],
                },
            ],
        },
        {
            district: 'Pangani',
            wards: [
                {
                    ward: 'Pangani',
                    streets: ['Pangani Magharibi', 'Pangani Mashariki'],
                },
                {
                    ward: 'Bweni',
                    streets: ['Bweni'],
                },
                {
                    ward: 'Mwera',
                    streets: ['Mwera', 'Ushongo', 'Mzambarauni'],
                },
                {
                    ward: "Kimang'a",
                    streets: ['Kimang’a', 'Boza'],
                },
                {
                    ward: 'Madanga',
                    streets: ['Madanga', 'Jaira', 'Mwembeni'],
                },
                {
                    ward: 'Bushiri',
                    streets: ['Msaraza', 'Mivumoni'],
                },
                {
                    ward: 'Ubangaa',
                    streets: ['Ubangaa', 'Mkwajuni', 'Meka', 'Mseko'],
                },
                {
                    ward: 'Mikinguni',
                    streets: ['Mikinguni', 'Stahabu', 'Mtango', 'Mtonga'],
                },
                {
                    ward: 'Tungamaa',
                    streets: ['Tungamaa', 'Langoni'],
                },
                {
                    ward: 'Kipumbwi',
                    streets: ['Kipumbwi', 'Kwakibuyu'],
                },
                {
                    ward: 'Mkwaja',
                    streets: ['Mkwaja', 'Buyuni', 'Sange', 'Mikoncheni'],
                },
                {
                    ward: 'Mkalamo',
                    streets: ['Mkalamo', 'Mbulizaga'],
                },
                {
                    ward: 'Masaika',
                    streets: ['Kigurusimba', 'Masaika'],
                },
            ],
        },
        {
            district: 'Muheza',
            wards: [
                {
                    ward: 'Majengo',
                    streets: ['Majengo'],
                },
                {
                    ward: 'Genge',
                    streets: ['Genge'],
                },
                {
                    ward: 'Masuguru',
                    streets: ['Masuguru'],
                },
                {
                    ward: 'Kilulu',
                    streets: [
                        'Kwamdakeo Trm (kijiji\r\nKipya)',
                        'Semngano',
                        'Kwakopwe',
                        'Kwasemwariko',
                    ],
                },
                {
                    ward: 'Tingeni',
                    streets: ['Tingeni', 'Mkinga'],
                },
                {
                    ward: 'Kwakifua',
                    streets: ['Mpakani', 'Kwakifua', 'Ngarani'],
                },
            ],
        },
        {
            district: 'Lushoto',
            wards: [
                {
                    ward: 'Dule "b"',
                    streets: [
                        'Mtunda',
                        'Wena',
                        'Kwehangala',
                        'Dule" B"',
                        'Kilangwi',
                        'Mpalai',
                    ],
                },
                {
                    ward: 'Bumbuli',
                    streets: [
                        'Bumbuli Kaya',
                        'Kwanguruwe',
                        'Galambo',
                        'Bumbuli Mission',
                        'Tanda',
                        'Mbokoi',
                        'Kwemanolo',
                    ],
                },
                {
                    ward: 'Mayo',
                    streets: ['Kwabosa', 'Mayo'],
                },
                {
                    ward: 'Tamota',
                    streets: ['Nkelei  "b"', 'Ngwelo "b"', 'Mpalalu', 'Kwemashai  "t"'],
                },
                {
                    ward: 'Mahezangulu',
                    streets: [
                        'Mahezangulu',
                        'Kwemakonko',
                        'Mkalie',
                        'Msamaka',
                        'Tuliani "b"',
                    ],
                },
                {
                    ward: 'Mgwashi',
                    streets: ['Sagara', 'Malomboi', 'Mgwashi', 'Wanga', 'Kwemkole'],
                },
                {
                    ward: 'Nkongoi',
                    streets: ['Nkongoi', 'Mhanko', 'Mavumbi', 'Tuliani'],
                },
            ],
        },
        {
            district: 'Handeni',
            wards: [
                {
                    ward: 'Ndolwa',
                    streets: ['Komkole "b"', 'Luiye', 'Kwamwenda'],
                },
            ],
        },
    ],
};

const tanzania = {
    country: 'Tanzania',
    regions: [
        arusha,
        darEsSalaam,
        dodoma,
        geita,
        iringa,
        kagera,
        katavi,
        kigoma,
        kilimanjaro,
        lindi,
        manyara,
        mara,
        mbeya,
        morogoro,
        mtwara,
        mwanza,
        njombe,
        pwani,
        rukwa,
        ruvuma,
        shinyanga,
        simiyu,
        singida,
        songwe,
        tabora,
        tanga
    ],
};

const africa = {
    continent: 'Africa',
    countries: [tanzania],
};

const continents = [
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

class NgxMitaaService {
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

/*
 * Public API Surface of ngx-mitaa
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxMitaaService, continents };
//# sourceMappingURL=ngx-mitaa.mjs.map
