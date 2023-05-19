'use strict';
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
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
        ownerId: 2,
        address: '45 Kempf Rd',
        city: 'Terlingua',
        state: 'Texas',
        country: 'US',
        lat: 29.25000,
        lng: 103.25000,
        name: 'Basecamp Terlingua',
        description: "See the stars in our bubble tents, and spend your mornings and day hiking and experiencing Big Bend.",
        price: 200,
      },
      {
        ownerId: 2,
        address: '123 Lake Rd',
        city: 'Lakeway',
        state: 'Texas',
        country: 'US',
        lat: 30.4567,
        lng: -97.7654,
        name: 'Lakehouse',
        description: "Make a splash at this lovely lakehouse.",
        price: 180,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
