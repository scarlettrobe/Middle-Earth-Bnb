'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert(options, [
      // Bilbo's Hobbit Hole
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1584956861988-913b8c1c7270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669675661262938/ad_173572443.png',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669730157863062/602289dd86b86.png',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669833828466768/8c7446bf31da4dc42006646a9a0fb903.png',
        preview: false,
      },
      {
        spotId: 1,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117669867869446154/images.png",
        preview: false,
      },

      // Bilbo's Rivendell Retreat
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669909732786186/Rivendell-Lord-of-the-Rings-Wiki.png',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669909732786186/Rivendell-Lord-of-the-Rings-Wiki.png',
        preview: false,
      },


      // Bilbo's Mountain Estate
      {
        spotId: 3,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117669941341069363/latest.png',
        preview: true,
      },
 

      // Gandalf's Wizards Tower
      {
        spotId: 4,
        url: 'https://i.pinimg.com/222x/cd/3b/b9/cd3bb9b95ba462c01a1e0f5052a1eaea.jpg',
        preview: true,
      },
      

      // Gandalf's Shire Residence
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117670026787442718/062520-2520Hobbiton2520Airbnb2520-2520Millhouse2520-2520Credit2520Larnie2520Nicolson.png',
        preview: true,
      },

      // Gollum's Hidden Cave
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117678033420169287/renita-alcordo-ahhhhh-2.png",
        preview: true,
      },

      // Frodo's Residence
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117670050476859442/house-2616607_960_720.png',
        preview: true,
      },

      // Samwise Gamgee's Hobbit Home
      {
        spotId: 8,
        url: 'https://cdn.discordapp.com/attachments/1079788020586254407/1117670104205889566/Samwise_Gamgee27s_residence_3.png',
        preview: true,
      },


      // Aragorn's Refuge
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117672897364901969/4c642579f800eb6b6fb9156bc277791a.png",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://static.wikia.nocookie.net/lotr/images/7/70/Jerry_Vanderstelt_-_Rivendell.jpg/revision/latest/scale-to-width-down/700?cb=20180501204919",
        preview: true,
      }

      // Aragorn's Royal Residence
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117673150679891978/latest.png",
        preview: true,
      },

      // Legolas' Woodland Home
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117673530457329724/tumblr_static_tumblr_static_e7vfsgnhlgoocw88scs8ok4gw_focused_v3.png",
        preview: true,
      },

      // Gimli's Dwarven Keep
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117673922696069200/9b06f57ce51b68ffcdbe36aee8d6c534c54e944b_00.png",
        preview: true,
      },

      // Saruman's Tower
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117674160630546442/a27d24_2fbe055445cf4367b8ccb0a37a7ff122257Emv2.png",
        preview: true,
      },

      // Elrond's Sanctuary
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117674444438126612/62909c26abcdc14953d26d959bf8da3f.png",
        preview: true,
      },

      // Galadriel's Enchanted Forest
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117674510896861284/e45d1d2c4151349f7c1e2a186253063243e48d0e_2000x2000.png",
        preview: true,
      },

      // Thorin Oakenshield's Royal Chamber
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117674914296631296/thibault-lesaunier-erebor-2.png",
        preview: true,
      },

      // Tom Bombadil's Quirky Home
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117675046232670348/c1ee79abd064f982a5d69c9f37ce42c0.png",
        preview: true,
      },

      // Faramir's Ranger Outpost
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117675723952500746/forest-ranger-wood-post-outpost-tower-jungle_1056-2437.png",
        preview: true,
      },

      // Treebeard's Ent House
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117676997972340736/latest.png",
        preview: true,
      },

      // Eowyn's Rohan Residence
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117677538538430474/ROHAN-HOUSING-172.png",
        preview: true,
      },

      // Theoden's Royal Hall
      {
        spotId: 21,
        url: "https://cdn.discordapp.com/attachments/1079788020586254407/1117677852331094097/bd0dc49e717fff48a087eb8b6c395bcd.png",
        preview: true,
      },


    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(options, null, {});
  }
};
