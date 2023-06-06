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
        url: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1655962982870-445478528359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1617970912189-100b978b7587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://i0.wp.com/boingboing.net/wp-content/uploads/2015/06/ad_173572443.jpg?w=970',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://images.unsplash.com/photo-1624397925870-19a96f27d9dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/lotr/images/7/70/Jerry_Vanderstelt_-_Rivendell.jpg/revision/latest/scale-to-width-down/700?cb=20180501204919',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://www.msbarchitects.com/sites/default/files/frodo_bed_rivendell1-624x400.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://images.unsplash.com/photo-1655962982870-445478528359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
        preview: true,
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
