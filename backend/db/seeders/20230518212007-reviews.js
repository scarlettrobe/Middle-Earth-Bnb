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

        spotId: 1, //  Bilbos Hobbit Hole
        userId: 2,
        review: 'Food was great, but everything was a bit cramped.',
        stars: 3,
      },
      {
        spotId: 2, //Bilbows Rivendell home
        userId: 1,
        review: 'Was a lovely time! There was quite a bit to explore outside, and the bed was comfortable.',
        stars: 5,
      },
      {
        spotId: 3, //Wizard Tower
        userId: 2,
        review: 'The stars and fireworks were beautiful',
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
