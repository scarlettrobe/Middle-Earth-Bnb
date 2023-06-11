'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Spots'
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1, // Bilbo
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
        ownerId: 1, // Bilbo's second home
        address: '100 Water Way',
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
        ownerId: 1, // Bilbo's third home
        address: '200 Mountain View',
        city: 'Erebor',
        state: 'Erebor',
        country: 'Middle Earth',
        lat: 38.34234234,
        lng: -58.345345,
        name: 'Bilbo\'s Mountain Estate',
        description: 'A luxury estate with stunning mountain views.',
        price: 150,
      },
      {
        ownerId: 2, // Gandalf
        address: '101 Wizard Ln',
        city: 'Valinor',
        state: 'Middle Earth',
        country: 'Arda',
        lat: 29.4360,
        lng: 98.4661,
        name: 'Gandalf\'s Wizards Tower',
        description: 'A place full of mystery and magic.',
        price: 500,
      },
      {
        ownerId: 2, // Gandalf's second home
        address: '202 Wizard Circle',
        city: 'Shire',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 30.4360,
        lng: 99.4661,
        name: 'Gandalf\'s Shire Residence',
        description: 'A charming residence in the heart of The Shire.',
        price: 200,
      },
      {
        ownerId: 3, // Frodo
        address: '102 Bag End',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 35.34234234,
        lng: -55.345345,
        name: 'Frodo\'s Residence',
        description: 'A comfortable hobbit hole with stunning Shire views.',
        price: 90,
      },
      {
        ownerId: 4, // Samwise Gamgee
        address: '2 Bagshot Row',
        city: 'Hobbiton',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 36.34234234,
        lng: -56.345345,
        name: 'Samwise\'s Hobbit Home',
        description: 'A homely hobbit hole with a beautiful garden.',
        price: 85,
      },
      {
        ownerId: 5, // Aragorn
        address: '1 Ranger Rd',
        city: 'Rivendell',
        state: 'Rivendell',
        country: 'Middle Earth',
        lat: 37.34234234,
        lng: -57.345345,
        name: 'Aragorn\'s Refuge',
        description: 'A rustic home hidden in the woods.',
        price: 120,
      },
      {
        ownerId: 5, // Aragorn's second home
        address: '1 Royal Palace',
        city: 'Minas Tirith',
        state: 'Gondor',
        country: 'Middle Earth',
        lat: 38.34234234,
        lng: -58.345345,
        name: 'Aragorn\'s Royal Residence',
        description: 'A grand palace in the heart of Gondor.',
        price: 300,
      },
      {
        ownerId: 6, // Legolas
        address: '300 Elven Path',
        city: 'Woodland Realm',
        state: 'Mirkwood',
        country: 'Middle Earth',
        lat: 35.444444,
        lng: -59.345345,
        name: 'Legolas\' Woodland Home',
        description: 'A serene elven home nestled in the woods.',
        price: 130,
      },
      {
        ownerId: 7, // Gimli
        address: '1 Mountain Pass',
        city: 'Moria',
        state: 'Khazad-dûm',
        country: 'Middle Earth',
        lat: 34.434343,
        lng: -56.345345,
        name: 'Gimli\'s Dwarven Keep',
        description: 'A sturdy dwarven keep in the heart of the mountain.',
        price: 150,
      },
      {
        ownerId: 8, // Saruman
        address: 'Orthanc',
        city: 'Isengard',
        state: 'Nan Curunír',
        country: 'Middle Earth',
        lat: 37.343434,
        lng: -58.345345,
        name: 'Saruman\'s Tower',
        description: 'An imposing tower in the fortress of Isengard.',
        price: 200,
      },
      {
        ownerId: 9, // Elrond
        address: 'Last Homely House East of the Sea',
        city: 'Rivendell',
        state: 'Rivendell',
        country: 'Middle Earth',
        lat: 38.343434,
        lng: -57.345345,
        name: 'Elrond\'s Sanctuary',
        description: 'An elven haven filled with wisdom and tranquility.',
        price: 250,
      },
      {
        ownerId: 10, // Galadriel
        address: 'Lothlórien Golden Wood',
        city: 'Caras Galadhon',
        state: 'Lothlórien',
        country: 'Middle Earth',
        lat: 37.343434,
        lng: -56.345345,
        name: 'Galadriel\'s Enchanted Forest',
        description: 'An ethereal elven home amidst golden woods.',
        price: 275,
      },
      {
        ownerId: 11, // Thorin Oakenshield
        address: 'Lonely Mountain',
        city: 'Erebor',
        state: 'Erebor',
        country: 'Middle Earth',
        lat: 39.343434,
        lng: -59.345345,
        name: 'Thorin\'s Royal Chamber',
        description: 'A regal dwarven chamber deep within the Lonely Mountain.',
        price: 250,
      },
      {
        ownerId: 12, // Tom Bombadil
        address: 'Old Forest',
        city: 'Withywindle',
        state: 'Old Forest',
        country: 'Middle Earth',
        lat: 39.343434,
        lng: -59.345345,
        name: 'Bombadil\'s Quirky Home',
        description: 'A peculiar home in the heart of the Old Forest.',
        price: 110,
      },
      {
        ownerId: 13, // Faramir
        address: 'Ithilien Hideout',
        city: 'Ithilien',
        state: 'Ithilien',
        country: 'Middle Earth',
        lat: 40.343434,
        lng: -59.345345,
        name: 'Faramir\'s Ranger Outpost',
        description: 'A secret hideout for Gondor rangers.',
        price: 120,
      },
      {
        ownerId: 14, // Treebeard
        address: 'Fangorn Forest',
        city: 'Fangorn',
        state: 'Fangorn',
        country: 'Middle Earth',
        lat: 41.343434,
        lng: -59.345345,
        name: 'Treebeard\'s Ent House',
        description: 'A unique abode in the depths of Fangorn Forest.',
        price: 100,
      },
      {
        ownerId: 15, // Eowyn
        address: 'Golden Hall',
        city: 'Edoras',
        state: 'Rohan',
        country: 'Middle Earth',
        lat: 42.343434,
        lng: -59.345345,
        name: 'Eowyn\'s Rohan Residence',
        description: 'A charming residence in the capital of Rohan.',
        price: 145,
      },
      {
        ownerId: 16, // Theoden
        address: 'Meduseld',
        city: 'Edoras',
        state: 'Rohan',
        country: 'Middle Earth',
        lat: 42.343434,
        lng: -59.345345,
        name: 'Theoden\'s Royal Hall',
        description: 'A grand hall atop the capital of Rohan.',
        price: 185,
      },
      {
        ownerId: 17, // Gollum
        address: 'Cave in Misty Mountains',
        city: 'Misty Mountains',
        state: 'Misty Mountains',
        country: 'Middle Earth',
        lat: 43.343434,
        lng: -59.345345,
        name: 'Gollum\'s Hidden Cave',
        description: 'A hidden cave in the depths of the Misty Mountains.',
        price: 70,
      },
      {
        ownerId: 18, // Merry
        address: 'Brandybuck Hall',
        city: 'Bucklebury',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 44.343434,
        lng: -59.345345,
        name: 'Merry\'s Buckland Home',
        description: 'A cheerful hobbit hole in Buckland.',
        price: 85,
      },
      {
        ownerId: 19, // Pippin
        address: 'Took Residence',
        city: 'Tookland',
        state: 'The Shire',
        country: 'Middle Earth',
        lat: 45.343434,
        lng: -59.345345,
        name: 'Pippin\'s Tookland Home',
        description: 'A comfortable hobbit hole in Tookland.',
        price: 85,
      },
      {
        ownerId: 20, // Radagast
        address: 'Rhosgobel',
        city: 'Mirkwood',
        state: 'Mirkwood',
        country: 'Middle Earth',
        lat: 46.343434,
        lng: -59.345345,
        name: 'Radagast\'s Mirkwood Retreat',
        description: 'A quaint home in the depths of Mirkwood, filled with the magic of nature.',
        price: 120,
      },
      {
        ownerId: 21, // Boromir
        address: 'Steward\'s Residence',
        city: 'Minas Tirith',
        state: 'Gondor',
        country: 'Middle Earth',
        lat: 46.343434,
        lng: -59.345345,
        name: 'Boromir\'s Gondor Home',
        description: 'A noble residence in the city of Gondor.',
        price: 175,
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots'
    // const Op = Sequelize.Op
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {}) //how should this delete look?
  }
};
