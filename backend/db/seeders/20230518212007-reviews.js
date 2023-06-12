'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews';

    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,  // Bilbo's Hobbit Hole
        userId: 2,  // Gandalf
        review: 'What an enchanting place! Bilbo\'s Hobbit Hole is the perfect spot for a quiet retreat. The lush surroundings and cozy interior made me feel right at home. Highly recommended!',
        stars: 5,
      },
      {
        spotId: 2,  // Bilbo's Rivendell Retreat
        userId: 3,  // Gollum
        review: 'My precious found this place delightful! Bilbo\'s Rivendell Retreat offers a serene escape from the troubles of Middle Earth. The elven architecture and soothing atmosphere made it a memorable experience.',
        stars: 4,
      },
      {
        spotId: 3,  // Bilbo's Mountain Estate
        userId: 4,  // Frodo
        review: 'Bilbo\'s Mountain Estate is truly a hidden gem! The breathtaking views of Erebor and the luxurious amenities provided an unforgettable stay. I would definitely visit again!',
        stars: 5,
      },
      {
        spotId: 4,  // Gandalf's Wizards Tower
        userId: 5,  // Samwise Gamgee
        review: 'Gandalf\'s Wizards Tower is nothing short of magical! The ancient wisdom and mystical aura of the place transported me to another world. A must-visit for any fan of the arcane arts!',
        stars: 5,
      },
      {
        spotId: 5,  // Gandalf's Shire Residence
        userId: 6,  // Aragorn
        review: 'Gandalf\'s Shire Residence is a cozy haven in the heart of the Shire. The tranquil surroundings and warm hospitality provided a much-needed respite. I would gladly stay here again.',
        stars: 4,
      },
      {
        spotId: 6,  // Gollum's Hidden Cave
        userId: 7,  // Legolas
        review: 'Gollum\'s Hidden Cave offers a unique experience for adventurous souls. The eerie ambiance and mysterious allure of the cave made it a thrilling stay. Not recommended for the faint of heart!',
        stars: 3,
      },
      {
        spotId: 7,  // Frodo's Residence
        userId: 8,  // Gimli
        review: 'Frodo\'s Residence is a charming hobbit hole with a touch of elegance. The cozy interiors and picturesque Shire views made it a delightful stay. I highly recommend it to fellow travelers.',
        stars: 5,
      },
      {
        spotId: 8,  // Samwise's Hobbit Home
        userId: 9,  // Saruman
        review: 'Samwise\'s Hobbit Home is a testament to the beauty of simplicity. The well-tended garden and homely atmosphere provided a peaceful escape. It was a delightful stay.',
        stars: 4,
      },
      {
        spotId: 9,  // Aragorn's Refuge
        userId: 10,  // Elrond
        review: 'Aragorn\'s Refuge is a rustic retreat perfect for those seeking solace. The secluded location and natural surroundings offered a calming experience. I would gladly return for another stay.',
        stars: 4,
      },
      {
        spotId: 10,  // Aragorn's Royal Residence
        userId: 11,  // Galadriel
        review: 'Aragorn\'s Royal Residence is a majestic palace fit for a king. The grandeur of the architecture and the regal ambiance created an unforgettable experience. Highly recommended for luxury seekers.',
        stars: 5,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';

    return queryInterface.bulkDelete(options, null, {});
  },
};
