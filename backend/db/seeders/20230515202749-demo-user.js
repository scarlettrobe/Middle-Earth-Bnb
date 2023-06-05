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
      },
      {
        firstName: 'Frodo',
        lastName: 'Baggins',
        email: 'frodo@user.io',
        username: 'ringbearer',
        hashedPassword: bcrypt.hashSync('theonering', 10)
      },
      {
        firstName: 'Samwise',
        lastName: 'Gamgee',
        email: 'sam@user.io',
        username: 'faithfulfriend',
        hashedPassword: bcrypt.hashSync('potatostew', 10)
      },
      {
        firstName: 'Peregrin',
        lastName: 'Took',
        email: 'pippin@user.io',
        username: 'foolofatook',
        hashedPassword: bcrypt.hashSync('pipeweed', 10)
      },
      {
        firstName: 'Meriadoc',
        lastName: 'Brandybuck',
        email: 'merry@user.io',
        username: 'brandybuck',
        hashedPassword: bcrypt.hashSync('brandybuck1', 10)
      },
      {
        firstName: 'Boromir',
        lastName: 'of Gondor',
        email: 'boromir@user.io',
        username: 'manofgondor',
        hashedPassword: bcrypt.hashSync('gondor123', 10)
      },
      {
        firstName: 'Sauron',
        lastName: 'the Deceiver',
        email: 'sauron@mordor.com',
        username: 'darklord',
        hashedPassword: bcrypt.hashSync('oneRing', 10)
      },
      {
        firstName: 'Saruman',
        lastName: 'the White',
        email: 'saruman@isengard.com',
        username: 'whitewizard',
        hashedPassword: bcrypt.hashSync('orthanc123', 10)
      },
      {
        firstName: 'Galadriel',
        lastName: 'of Lorien',
        email: 'galadriel@lorien.com',
        username: 'elvenlady',
        hashedPassword: bcrypt.hashSync('nimloth', 10)
      },
      {
        firstName: 'Thorin',
        lastName: 'Oakenshield',
        email: 'thorin@erebor.com',
        username: 'dwarfking',
        hashedPassword: bcrypt.hashSync('erebor', 10)
      },
      {
        firstName: 'Eowyn',
        lastName: 'of Rohan',
        email: 'eowyn@rohan.com',
        username: 'shieldmaiden',
        hashedPassword: bcrypt.hashSync('rohirrim', 10)
      },
      {
        firstName: 'Theoden',
        lastName: 'King of Rohan',
        email: 'theoden@rohan.com',
        username: 'rohanking',
        hashedPassword: bcrypt.hashSync('edoras123', 10)
      },
      {
        firstName: 'Elrond',
        lastName: 'Half-elven',
        email: 'elrond@rivendell.com',
        username: 'rivendell',
        hashedPassword: bcrypt.hashSync('vilya', 10)
      },
      {
        firstName: 'Treebeard',
        lastName: 'Ent',
        email: 'treebeard@fangorn.com',
        username: 'entguardian',
        hashedPassword: bcrypt.hashSync('entmoot', 10)
      },
      {
        firstName: 'Faramir',
        lastName: 'of Gondor',
        email: 'faramir@gondor.com',
        username: 'captainofithilien',
        hashedPassword: bcrypt.hashSync('ithilien123', 10)
      },
      {
        firstName: 'Gollum',
        lastName: 'Smeagal',
        email: 'gollum@user.io',
        username: 'precious',
        hashedPassword: bcrypt.hashSync('myprecious', 10)
      },
    ], {});
  },

down: async (queryInterface, Sequelize) => {
  options.tableName = 'Users';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    username: {
      [Op.in]: [
        'greywizard', 'burglar', 'dwarfwarrior', 'elfarcher',
        'rangerking', 'ringbearer', 'faithfulfriend', 'foolofatook',
        'brandybuck', 'manofgondor', 'darklord', 'whitewizard',
        'elvenlady', 'dwarfking', 'shieldmaiden', 'rohanking',
        'rivendell', 'entguardian', 'captainofithilien', 'precious'
      ]
    }
  }, {});

}
};
