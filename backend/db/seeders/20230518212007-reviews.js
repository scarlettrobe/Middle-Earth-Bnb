'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews'


    return queryInterface.bulkInsert(options, [
      {
        "spotId": 1,
        "userId": 1,
        "review": "I had a wonderful time at Bilbo's Hobbit Hole! The food was delicious, the atmosphere was cozy, and the staff was friendly. I would definitely recommend this spot to anyone looking for a fun and relaxing experience.",
        "stars": 5
      },

      // Bilbo's Rivendell Home - User 2
      {
        "spotId": 2,
        "userId": 2,
        "review": "I had a magical time at Bilbo's Rivendell Home! The scenery was breathtaking, the food was delicious, and the staff was attentive. I would definitely recommend this spot to anyone looking for a romantic getaway.",
        "stars": 5
      },

      // Wizard Tower - User 3
      {
        "spotId": 3,
        "userId": 3,
        "review": "I had a blast at the Wizard Tower! The fireworks were amazing, the stars were beautiful, and the staff was knowledgeable. I would definitely recommend this spot to anyone looking for a fun and educational experience.",
        "stars": 5
      },

      // Merry's Buckland Home - User 1
      {
        "spotId": 4,
        "userId": 1,
        "review": "I had a great time at Merry's Buckland Home! The food was delicious, the atmosphere was lively, and the staff was friendly. I would definitely recommend this spot to anyone looking for a fun and social experience.",
        "stars": 4
      },

      // Pippin's Tookish Home - User 2
      {
        "spotId": 5,
        "userId": 2,
        "review": "I had a wonderful time at Pippin's Tookish Home! The scenery was beautiful, the food was delicious, and the staff was attentive. I would definitely recommend this spot to anyone looking for a romantic getaway.",
        "stars": 5
      },

      // Radagast's Woodland Home - User 3
      {
        "spotId": 6,
        "userId": 3,
        "review": "I had a blast at Radagast's Woodland Home! The animals were amazing, the stars were beautiful, and the staff was knowledgeable. I would definitely recommend this spot to anyone looking for a fun and educational experience.",
        "stars": 5
      },

      // Boromir's Gondorian Home - User 1
      {
        "spotId": 7,
        "userId": 1,
        "review": "I had a great time at Boromir's Gondorian Home! The food was delicious, the atmosphere was inspiring, and the staff was friendly. I would definitely recommend this spot to anyone looking for a fun and patriotic experience.",
        "stars": 4
      },

      // Faramir's Ithilien Home - User 2
      {
        "spotId": 8,
        "userId": 2,
        "review": "I had a wonderful time at Faramir's Ithilien Home! The scenery was beautiful, the food was delicious, and the staff was attentive. I would definitely recommend this spot to anyone looking for a romantic getaway.",
        "stars": 5
      },

      // Gollum's Cave - User 3
      {
        "spotId": 9,
        "userId": 3,
        "review": "I had a blast at Gollum's Cave! The fish was delicious, the atmosphere was creepy. I would definitely recommend this spot to anyone looking for a fun and unique experience.",
        "stars": 3
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
