
'use strict';
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
up: async (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('SpotImages', [
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

down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('SpotImages', null, {});
}
};

