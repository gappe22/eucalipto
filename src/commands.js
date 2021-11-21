const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { secretToken, applicationID, testingGuild } = require('../config.json');

const commands = [
    {
        name: 'ping',
        description: 'Replies with pong.'
    }
]

const discordRest = new REST({version: '9'}).setToken(secretToken);

module.exports = async function refreshCommands() {
    await discordRest.put(
        Routes.applicationGuildCommands(applicationID, testingGuild),
        {body: commands}
    );
}