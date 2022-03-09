const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('../config.json');
const commands = require('./commandsManager');

gatewayIntents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
]

const client = new Client({ intents: gatewayIntents });

client.once('ready', () => {
    console.log('eucalipto started!');
    commands.registerCommands();
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    
    const command = commands.getCommand(interaction.commandName);

    if (command) {
        try {
            await command.execute(interaction);
        } catch (e) {
            console.log(e);
            await interaction.reply({
                content: "This command is throwing an error, don't really know why...",
                ephemeral: true
            });
        }
    }
})

client.login(token);