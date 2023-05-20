
'use strict';
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
up: async (queryInterface, Sequelize) => {
options.tableName = 'Bookings'

return queryInterface.bulkInsert('Bookings', [
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

down: async (queryInterface, Sequelize) => {
options.tableName = 'Bookings'
return queryInterface.bulkDelete('Bookings', null, {});
}
};
