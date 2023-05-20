
'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = 'Bookings'
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
              startDate: '2023-05-20',
              endDate: '2023-05-25',
            },
            {
              spotId: 2, // Cabin in the Woods
              userId: 1,
              startDate: '2023-06-10',
              endDate: '2023-06-15',
            },
            {
              spotId: 3, // Basecamp Terlingua
              userId: 2,
              startDate: '2023-07-01',
              endDate: '2023-07-05',
            },
          ], {});
        },

        async down(queryInterface, Sequelize) {
          options.tableName = 'Bookings'
          /**
           * Add commands to revert seed here.
           *
           * Example:
           * await queryInterface.bulkDelete('People', null, {});
           */
          return queryInterface.bulkDelete(options, null, {}) //how should this delete look?
  
      }
  };
