// Const Variables:
const Client = require(`../Structures/Client`);
const { Token, Prefix } = require("../Settings/Bot_Configurations/Bot_Config.json"); // Settings AkA Configs
const Bot_Xena = new Client();

// Variables:
var Saved_Messages = 0;

Bot_Xena.once("ready", () => {
    // Debug: 1
    console.log(`[+]: '${Bot_Xena.user.username}#${Bot_Xena.user.discriminator}', Is Succesfully Online On '${Bot_Xena.guilds.cache.size} Servers' !`);

    Bot_Xena.on("messageCreate", async Message => {
        // Variables:
        const Message_ID = Message.id;
        const Message_Author = Message.author;
        const Command = Bot_Xena.commands.get(Message.content.slice(1));
        const Arguments = Message.content.substring(1).split(/ + /);

        // Anti-Spamming [BOT Loop]:
        if (!Message.content.startsWith(Prefix) || Message_Author.bot) {
            return;
        };

        // Scan Command:
        if (!Command) {
            // Debug: 7
            console.log(`[!]: '${Message_Author.username}', Has Sent An Invalid Command ! Command: '${Message.content}', ID: '${Message_ID}'.`)
            return Message.reply(`The Command: '**${Message.content}**', Doesn't Exist.`);
        };

        // Test Command:
        if (Message.content === Prefix + `Test`) {
            // Debug: 2
            console.log(`[+]: '${Message_Author.username}#${Message_Author.discriminator}', Has Sent A Message, Content: '${Message.content}', ID: '${Message_ID}'`);

            // Reply Message:
            await Message.reply(`Your Message: '${Message.content}', Has Succesfully Been Saved In Our DataBase !`);

            // Add Save
            Saved_Messages + 1;
        };
        
        // Anti-Blank Command:
        if (Message.content === Prefix + ``) {
            // Debug: 3
            console.log(`[-]: ERROR: '${Message_Author.username}#${Message_Author.discriminator}', Has Sent An Ivalid Command ! Content: '${Message.content}', ID: '${Message_ID}'`);

            // Reply Message:
            await Message.reply(`We Couldn't Save Your Message, Content: '${Message.content}', In Our DataBase !`);
        };

        // Run Command
        Command.run(Bot_Xena, Message, Arguments);
    });
});

// Bot Turn: ON + Debug: 5
Bot_Xena.start(Token);
