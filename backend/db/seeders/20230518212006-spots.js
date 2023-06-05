'use strict';
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';

    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1, // Gandalf
        address: '101 Wizard Ln',
        city: 'Valinor',
        state: 'Middle Earth',
        country: 'Arda',
        lat: 29.4260,
        lng: 98.4861,
        name: 'Gandalf\'s Wizards Tower',
        description: 'A place full of mystery and magic.',
        price: 500,
      },
      {
        ownerId: 2, // Bilbo
        address: 'Bag End',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 35.34234234,
        lng: -55.345345,
        name: 'Bilbo\'s Hobbit Hole',
        description: 'A quaint and cozy hobbit hole.',
        price: 75,
      },
      {
        ownerId: 2, // Bilbo's second home
        address: 'Rivendell',
        city: 'Rivendell',
        state: 'Rivendell',
        country: 'Middle Earth',
        lat: 36.34234234,
        lng: -56.345345,
        name: 'Bilbo\'s Rivendell Retreat',
        description: 'A tranquil refuge in the elven city.',
        price: 100,
      },
      {
        ownerId: 3, // Gimli
        address: 'The Glittering Caves',
        city: 'Helm\'s Deep',
        state: 'Rohan',
        country: 'Middle Earth',
        lat: 37.34234234,
        lng: -57.345345,
        name: 'Gimli\'s Glittering Caves',
        description: 'A stunning cave system admired by Dwarves.',
        price: 80,
      },
      {
        ownerId: 4, // Legolas
        address: 'Greenwood the Great',
        city: 'Mirkwood',
        state: 'Rhosgobel',
        country: 'Middle Earth',
        lat: 38.34234234,
        lng: -58.345345,
        name: 'Legolas\'s Treehouse',
        description: 'A serene retreat nestled in the trees.',
        price: 95,
      },
      {
        ownerId: 5, // Aragorn
        address: 'House of Elrond',
        city: 'Rivendell',
        state: 'Rivendell',
        country: 'Middle Earth',
        lat: 39.34234234,
        lng: -59.345345,
        name: 'Aragorn\'s House of Elrond',
        description: 'A beautiful homestead located in Rivendell.',
        price: 120,
      },
      {
        ownerId: 6, // Frodo
        address: 'Bag End',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 39.4260,
        lng: -59.4861,
        name: 'Frodo\'s Hobbit Hole',
        description: 'A comfy hobbit home with a beautiful view of The Shire.',
        price: 60,
      },
      {
        ownerId: 7, // Samwise
        address: 'The Gamgee Residence',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 39.5270,
        lng: -59.5871,
        name: 'Samwise\'s Home',
        description: 'A humble and inviting hobbit hole, just a stone’s throw from Frodo’s.',
        price: 50,
      },
      {
        ownerId: 8, // Peregrin
        address: 'Tookborough',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 39.6280,
        lng: -59.6881,
        name: 'Peregrin\'s Pad',
        description: 'The mischievous hobbit’s home in the heart of The Shire.',
        price: 65,
      },
      {
        ownerId: 9, // Meriadoc
        address: 'Brandy Hall',
        city: 'Bucklebury',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 39.7290,
        lng: -59.7891,
        name: 'Meriadoc\'s Mansion',
        description: 'A large, sprawling hobbit home in Bucklebury.',
        price: 70,
      },
      {
        ownerId: 10, // Boromir
        address: 'Minas Tirith',
        city: 'Gondor',
        state: 'Gondor',
        country: 'Middle Earth',
        lat: 39.8300,
        lng: -59.8901,
        name: 'Boromir\'s Base',
        description: 'A comfortable spot in the heart of Minas Tirith.',
        price: 75,
      },
      {
        ownerId: 11, // Sauron
        address: 'Barad-dûr',
        city: 'Mordor',
        state: 'Mordor',
        country: 'Middle Earth',
        lat: 39.9310,
        lng: -59.9911,
        name: 'Sauron\'s Suite',
        description: 'Luxurious living in the heart of Mordor.',
        price: 500,
      },
      {
        ownerId: 12, // Saruman
        address: 'Orthanc',
        city: 'Isengard',
        state: 'Nan Curunír',
        country: 'Middle Earth',
        lat: 40.0320,
        lng: -60.0921,
        name: 'Saruman\'s Sanctuary',
        description: 'Live like a wizard in this tall tower.',
        price: 200,
      },
      {
        ownerId: 13, // Galadriel
        address: 'Caras Galadhon',
        city: 'Lothlórien',
        state: 'Lothlórien',
        country: 'Middle Earth',
        lat: 40.1330,
        lng: -60.1931,
        name: 'Galadriel\'s Grove',
        description: 'A beautiful treehouse in Lothlórien.',
        price: 150,
      },
      {
        ownerId: 14, // Éowyn
        address: 'Meduseld',
        city: 'Edoras',
        state: 'Rohan',
        country: 'Middle Earth',
        lat: 40.2340,
        lng: -60.2941,
        name: 'Éowyn\'s Estate',
        description: 'A stately home in the heart of Rohan.',
        price: 85,
      },
      {
        ownerId: 15, // Théoden
        address: 'Meduseld',
        city: 'Edoras',
        state: 'Rohan',
        country: 'Middle Earth',
        lat: 40.3350,
        lng: -60.3951,
        name: 'Théoden\'s Throne',
        description: 'A regal residence in Rohan, fit for a king.',
        price: 150,
      },
      {
        ownerId: 16, // Elrond
        address: 'House of Elrond',
        city: 'Rivendell',
        state: 'Rivendell',
        country: 'Middle Earth',
        lat: 40.4360,
        lng: -60.4961,
        name: 'Elrond\'s Enclave',
        description: 'A luxurious retreat in Rivendell, home of the Elves.',
        price: 180,
      },
      {
        ownerId: 17, // Treebeard
        address: 'Fangorn Forest',
        city: 'Fangorn',
        state: 'Fangorn',
        country: 'Middle Earth',
        lat: 40.5370,
        lng: -60.5971,
        name: 'Treebeard\'s Trunk',
        description: 'A peaceful place among the Ents of Fangorn Forest.',
        price: 60,
      },
      {
        ownerId: 18, // Faramir
        address: 'Ithilien',
        city: 'Ithilien',
        state: 'Gondor',
        country: 'Middle Earth',
        lat: 40.6380,
        lng: -60.6981,
        name: 'Faramir\'s Farm',
        description: 'A tranquil retreat in the green lands of Ithilien.',
        price: 95,
      },
      {
        ownerId: 19, // Gollum
        address: 'Caves of the Misty Mountains',
        city: 'Eregion',
        state: 'Rhudaur',
        country: 'Middle Earth',
        lat: 40.7390,
        lng: -60.7991,
        name: 'Gollum\'s Hideaway',
        description: 'Experience the mystery of Gollum\'s secluded hideaway in the Caves of the Misty Mountains. A unique and intriguing abode.',
        price: 60,
      },
      
      {
        ownerId: 20, // Thorin
        address: 'Lonely Mountain',
        city: 'Erebor',
        state: 'Erebor',
        country: 'Middle Earth',
        lat: 41.8400,
        lng: -61.9001,
        name: 'Thorin\'s Halls',
        description: 'A grand dwarven kingdom beneath the Lonely Mountain.',
        price: 200,
      },
      //... end of bulkInsert array
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkDelete(options, null, {});
  }
};
