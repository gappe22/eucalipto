const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');
const commands = require('./commands');

gatewayIntents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
]

const client = new Client({ intents: gatewayIntents });

client.once('ready', () => {
    console.log('eucalipto started!');
    commands.refreshCommands();
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }
})

client.login(token);