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
        spotId: 1,
        url: 'https://s3.amazonaws.com/gs-geo-images/a3eda856-fd35-4af4-9b3a-cd0034e5854d_l.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://en.wikipedia.org/wiki/File:1854_Alamo.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://www.greenbuilt.org/images/SamselCabin4.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://basecampterlingua.com/wp-content/uploads/2020/08/Basecamp-bubble-4-2-768x512.jpg',
        preview: false,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {})
}
};
