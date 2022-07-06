// Variables:
const Discord = require(`discord.js`);
const Command = require(`../Structures/Command`);

// Modules:
module.exports = new Command({
    // Properties:
    name: "Ping",
    description: "Send Bot & DataBase Latency",
    utility: "Ping",
    permissions: "None",
    category: "Infos",

    async run(Bot_Xena, Message, Arguments) {
        // Variables:
        const Start_Time = Date.now();

        // Reply:
        await Message.reply(`Loading, Please Wait...`).then(async (Mesage) => {
            // Variables:
            const End_Time = Date.now();

            // Reply:
            await Message.edit(`'Xéna - BOT', Latency (PING) Is: '**${End_Time - Start_Time}'uwu**\n Discord API Latency (PING) Is: **'${Bot_Xena.ws.pingX}'**`);
        });
    },
});