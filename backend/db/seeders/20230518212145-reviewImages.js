
'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
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
        reviewId: 1, //  Alamo
        url: 'https://independenttravelcats.com/wp-content/uploads/2019/01/unnamed-file.jpg',
      },
      {
        reviewId: 3, //Basecamp Terlingua 
        url: 'https://places.travel/wp-content/uploads/2020/06/Bubble-milky-way.jpg',
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {})
  }
};
