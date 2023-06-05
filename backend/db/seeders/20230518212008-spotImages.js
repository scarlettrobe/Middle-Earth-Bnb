'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';

    return queryInterface.bulkInsert(options, [
      // Gandalf
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2023/02/07/19/55/wizard-7775002_1280.jpg',
        preview: false,
      },
      // Bilbo
      {
        spotId: 2,
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Baggins_residence_%27Bag_End%27_with_party_sign.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2021/05/26/18/36/hobbit-holes-6286046_1280.jpg',
        preview: false,
      },
      // Gimli
      {
        spotId: 3,
        url: 'https://i.pinimg.com/originals/ef/c9/64/efc9643061bbcfeeeb6e4ecc495debf8.jpg',
        preview: false,
      },
      // Legolas
      {
        spotId: 5,
        url: 'https://i.pinimg.com/736x/00/59/4e/00594ef72e6ee91481098f0211554ae8--earth-google-treehouses.jpg',
        preview: false,
      },
      // Aragorn
      {
        spotId: 6,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Frodo
      {
        spotId: 7,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Samwise
      {
        spotId: 8,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Peregrin
      {
        spotId: 9,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Meriadoc
      {
        spotId: 10,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Boromir
      {
        spotId: 11,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Sauron
      {
        spotId: 12,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Saruman
      {
        spotId: 13,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Galadriel
      {
        spotId: 14,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Éowyn
      {
        spotId: 15,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Théoden
      {
        spotId: 16,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Elrond
      {
        spotId: 17,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Treebeard
      {
        spotId: 18,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Faramir
      {
        spotId: 19,
        url: 'insert_your_url_here',
        preview: false,
      },

      // Golum
      {
        spotId: 20,
        url: 'insert_your_url_here',
        preview: false,
      },
      // Thorin Oakenshield
      {
        spotId: 21,
        url: 'insert_your_url_here',
        preview: false,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';

    /**
     * Add commands to revert seed here.
     */
    return queryInterface.bulkDelete(options, null, {});
  }
};
