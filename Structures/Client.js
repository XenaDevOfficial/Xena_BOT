// Variables:
const Discord = require(`discord.js`);
const intents = new Discord.Intents(32767);
const Command = require(`../Structures/Command`);
const Fs = require(`fs`);

// Classes:
class Client extends Discord.Client {

    constructor() {
        super({ intents });

        /**
        * @type {Discord.Collection<string, Command>}
        */

        this.commands = new Discord.Collection();
        this.color = `#ffb3c6`;
    };

    start(Token) {
        Fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`)).forEach(async f => {
            // Variables:
            const Command = require(`../Commands/${f}`);

            // Debug: 6
            console.log(`[+]: Command: '${f}', Has Succesfully Been Loaded !`);

            this.commands.set(Command.name, Command);
        });

        this.login(Token);
    };
};

// Export
module.exports = Client;
