// Variables:
const Client = require(`./Client`);
const Discord = require(`discord.js`);

/**
* 
* @param {Discord.Client} Bot_Xena 
* @param {Discord.Message} Message 
* @param {string[]} Arguments 
*/

// Functions:
function RunFunction(Bot_Xena, Message, Arguments) {

};

// Classes:
class Command {
    /**
    * @typedef {{name: string, description: string, utility: string, category: string, RunFunction }}
    * @param {CommandOptions} options 
    */

    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.utility = options.Utility;
        this.permissions = options.Perms;
        this.category = options.Category;
        this.run = options.run;
    };
};

// Exports:
module.exports = Command;
