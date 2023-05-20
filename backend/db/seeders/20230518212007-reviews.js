'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = 'Reviews'
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

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews'
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {})
}
};
