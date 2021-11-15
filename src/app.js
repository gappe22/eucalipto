const { Client, Intents } = require('discord.js');
const { secretToken } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('eucalipto started!')
});

client.login(secretToken);