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
        firstName: 'Gandalf',
        lastName: 'the Grey',
        email: 'gandalf@user.io',
        username: 'greywizard',
        hashedPassword: bcrypt.hashSync('gandalfthewhite', 10)
      },
      {
        firstName: 'Gollum',
        lastName: '',
        email: 'gollum@user.io',
        username: 'wraith',
        hashedPassword: bcrypt.hashSync('precious', 10)
      },
      {
        firstName: 'Frodo',
        lastName: 'Baggins',
        email: 'frodo@user.io',
        username: 'ringbearer',
        hashedPassword: bcrypt.hashSync('fellowship', 10)
      },
      {
        firstName: 'Samwise',
        lastName: 'Gamgee',
        email: 'samwise@user.io',
        username: 'gardener',
        hashedPassword: bcrypt.hashSync('gardening', 10)
      },
      {
        firstName: 'Aragorn',
        lastName: 'Strider',
        email: 'aragorn@user.io',
        username: 'ranger',
        hashedPassword: bcrypt.hashSync('strider', 10)
      },
      {
        firstName: 'Legolas',
        lastName: 'Greenleaf',
        email: 'legolas@user.io',
        username: 'archer',
        hashedPassword: bcrypt.hashSync('elvenking', 10)
      },
      {
        firstName: 'Gimli',
        lastName: 'Glóin',
        email: 'gimli@user.io',
        username: 'dwarvenking',
        hashedPassword: bcrypt.hashSync('hammer', 10)
      },
      {
        firstName: 'Saruman',
        lastName: 'the White',
        email: 'saruman@user.io',
        username: 'wizard',
        hashedPassword: bcrypt.hashSync('whitecouncil', 10)
      },
      {
        firstName: 'Elrond',
        lastName: 'Half-elven',
        email: 'elrond@user.io',
        username: 'lordoftherings',
        hashedPassword: bcrypt.hashSync('councilofelrond', 10)
      },
      {
        firstName: 'Galadriel',
        lastName: 'Lady of the Galadhrim',
        email: 'galadriel@user.io',
        username: 'elvenqueen',
        hashedPassword: bcrypt.hashSync('lightoftheworld', 10)
      },
      {
        firstName: 'Thorin',
        lastName: 'Oakenshield',
        email: 'thorin@user.io',
        username: 'kingundermountain',
        hashedPassword: bcrypt.hashSync('dwarvenking', 10)
      },
      {
        firstName: 'Tom Bombadil',
        lastName: '',
        email: 'tombombadil@user.io',
        username: 'masterofmeadows',
        hashedPassword: bcrypt.hashSync('masteroftherings', 10)
      },
      {
        firstName: 'Faramir',
        lastName: 'Captain of Gondor',
        email: 'faramir@user.io',
        username: 'rangerofgondor',
        hashedPassword: bcrypt.hashSync('whitetower', 10)
      },
      {
        firstName: 'Treebeard',
        lastName: '',
        email: 'treebeard@user.io',
        username: 'ent',
        hashedPassword: bcrypt.hashSync('forestguardian', 10)
      },
      {
        firstName: 'Eowyn',
        lastName: 'Daughter of Théoden',
        email: 'eowyn@user.io',
        username: 'shieldmaiden',
        hashedPassword: bcrypt.hashSync('rohan', 10)
      },
      {
        firstName: 'Theoden',
        lastName: 'King of Rohan',
        email: 'theoden@user.io',
        username: 'kingofrohan',
        hashedPassword: bcrypt.hashSync('helmsdeep', 10)
      },


    
    ], {});
    
  },
  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['burglar','Faramir', 'Treebeard', 'Eowyn', 'Theoden', 'Gollum', 'Merry', 'Pippin', 'Radagast', 'Boromir']
      }
    }, {});
  },
};
