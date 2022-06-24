/**
 * @jest-environment jsdom
 */

const { itemCounter } = require('../counter.js');

test('Should output the total items from API displayed on homepage', () => {
  const result = [
    {
      id: 139,
      url: 'https://www.tvmaze.com/shows/139/girls',
      name: 'Girls',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Drama',
        'Romance',
      ],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2012-04-15',
      ended: '2017-04-16',
      officialSite: 'http://www.hbo.com/girls',
      schedule: {
        time: '22:00',
        days: [
          'Sunday',
        ],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: 'HBO',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: 'https://www.hbo.com/',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: 'tt1723816',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg',
      },
      summary: '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
      updated: 1611310521,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/139',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/1079686',
        },
      },
    },
    {
      id: 41734,
      url: 'https://www.tvmaze.com/shows/41734/girls',
      name: 'GIRLS',
      type: 'Scripted',
      language: 'Mongolian',
      genres: [
        'Comedy',
      ],
      status: 'Ended',
      runtime: 41,
      averageRuntime: null,
      premiered: null,
      ended: null,
      officialSite: null,
      schedule: {
        time: '',
        days: [
          'Thursday',
        ],
      },
      rating: {
        average: null,
      },
      weight: 57,
      network: {
        id: 1672,
        name: 'UBS',
        country: {
          name: 'Mongolia',
          code: 'MN',
          timezone: 'Asia/Ulaanbaatar',
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: 'tt8709752',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg',
      },
      summary: null,
      updated: 1632080861,
      links: {
        self: {
          href: 'https://api.tvmaze.com/shows/41734',
        },
      },
    },
  ];
  expect(itemCounter(result)).toBe(2);
});
