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
        firstName: 'Kim',
        lastName: 'Harris',
        email: 'kimharris@user.io',
        username: 'scarlettrobe',
        hashedPassword: bcrypt.hashSync('123456', 10)
      },
      {
        firstName: 'Melanie',
        lastName: 'Martinez',
        email: 'plutodestroy@user.io',
        username: 'Crybaby14',
        hashedPassword: bcrypt.hashSync('portals2', 10)
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
    username: { [Op.in]: ['scarlettrobe', 'Crybaby14', 'fableforge'] }
  }, {});
}
};
