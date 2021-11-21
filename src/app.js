const { Client, Intents } = require('discord.js');
const { secretToken } = require('../config.json');
const commands = require('commands.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('eucalipto started!')
    commands.refreshCommands();
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }
})

client.login(secretToken);