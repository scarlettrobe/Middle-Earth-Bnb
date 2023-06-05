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

        ownerId: 1,
        address: '300 Alamo Plaza',
        city: 'San Antonio',
        state: 'Texas',
        country: 'US',
        lat: 29.4260,
        lng: 98.4861,
        name: 'The Alamo',
        description: "The Alamo is a historic Spanish mission and fortress. Feel the history and the adventure sleeping somewhere you shouldn't!",
        price: 25,

      },
      {
        ownerId: 1,
        address: '245 wallabe way',
        city: 'Austin',
        state: 'Texas',
        country: 'US',
        lat: 39.34234234,
        lng: -50.345345,
        name: 'Cabin in the Woods',
        description: "Spend time in nature and get away from the noise of the city",
        price: 105,
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
