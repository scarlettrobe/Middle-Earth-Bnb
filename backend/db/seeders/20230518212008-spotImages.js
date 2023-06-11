'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
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
        spotId: 1, // Bilbo's Hobbit Hole
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 2, // Bilbo's Rivendell Retreat
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 3, // Bilbo's Mountain Estate
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 4, // Gandalf's Wizards Tower
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 5, // Gandalf's Shire Residence
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 6, // Frodo's Residence
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 7, // Samwise Gamgee's Hobbit Home
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 8, // Aragorn's Refuge
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 9, // Aragorn's Royal Residence
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 10, // Legolas' Woodland Home
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 11, // Gimli's Dwarven Keep
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 12, // Saruman's Tower
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 13, // Elrond's Sanctuary
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 14, // Galadriel's Enchanted Forest
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 15, // Thorin Oakenshield's Royal Chamber
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 16, // Tom Bombadil's Quirky Home
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 17, // Faramir's Ranger Outpost
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 18, // Treebeard's Ent House
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 19, // Eowyn's Rohan Residence
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 20, // Theoden's Royal Hall
        url: 'https://via.placeholder.com/400x300',
        preview: false,
      },
      {
        spotId: 21, // Gollum's Hidden Cave
        url: 'https://via.placeholder.com/4',
        preview: false,
      },      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    // const Op = Sequelize.Op
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {});
  }
};
