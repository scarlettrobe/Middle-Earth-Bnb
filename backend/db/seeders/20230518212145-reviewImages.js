
'use strict';
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
up: async (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('ReviewImages', [
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

down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('ReviewImages', null, {});
}
};
