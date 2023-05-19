
'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1, // Alamo
        userId: 2,
        review: 'Sleeping in the Alamo was kinda dated, I expected it to be more modern for some reason. Very dusty, would not stay again',
        stars: 2,
      },
      {
        spotId: 2, //Cabin in the Woods
        userId: 1,
        review: 'Some people kept knocking at our door asking us to help them save the world. Super scary. Will be booking again',
        stars: 5,
      },
      {
        spotId: 3, //Basecamp Terlingua
        userId: 2,
        review: 'The stars were beautiful',
        stars: 4,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};

