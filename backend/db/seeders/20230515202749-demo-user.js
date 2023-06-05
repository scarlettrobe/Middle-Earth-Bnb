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
        firstName: 'Gandalf',
        lastName: 'the Grey',
        email: 'gandalf@user.io',
        username: 'greywizard',
        hashedPassword: bcrypt.hashSync('mellon', 10)
      },
      {
        firstName: 'Bilbo',
        lastName: 'Baggins',
        email: 'bilbo@user.io',
        username: 'burglar',
        hashedPassword: bcrypt.hashSync('shire123', 10)
      },
      {
        firstName: 'Gimli',
        lastName: 'Son of Gloin',
        email: 'gimli@user.io',
        username: 'dwarfwarrior',
        hashedPassword: bcrypt.hashSync('axe123', 10)
      },
      {
        firstName: 'Legolas',
        lastName: 'Greenleaf',
        email: 'legolas@user.io',
        username: 'elfarcher',
        hashedPassword: bcrypt.hashSync('arrow456', 10)
      },
      {
        firstName: 'Aragorn',
        lastName: 'Son of Arathorn',
        email: 'aragorn@user.io',
        username: 'rangerking',
        hashedPassword: bcrypt.hashSync('anduril', 10)
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['ringbearer', 'greywizard', 'burglar', 'dwarfwarrior', 'elfarcher', 'rangerking'] }
    }, {});
  }
};
