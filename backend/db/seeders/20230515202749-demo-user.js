'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        firstName: 'Bilbo',
        lastName: 'Baggins',
        email: 'bilbo@user.io',
        username: 'burglar',
        hashedPassword: bcrypt.hashSync('shire123', 10),
      },
      {
        firstName: 'Kim',
        lastName: 'Harris',
        email: 'kimharris@user.io',
        username: 'scarlettrobe',
        hashedPassword: bcrypt.hashSync('123456', 10)
      },
      {
        firstName: 'Andrew',
        lastName: 'Sliva',
        email: 'buymygame@user.io',
        username: 'fableforge',
        hashedPassword: bcrypt.hashSync('Voxelcube12', 10)
      },

    ], {});
  },

down: async (queryInterface, Sequelize) => {
  options.tableName = 'Users';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    username: { [Op.in]: ['burglar', 'scarlettrobe', 'fableforge'] }
  }, {});
}
};
