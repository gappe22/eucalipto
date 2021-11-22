const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientID } = require('../config.json');
const TESTING_GUILD = '911289012688392253'

const commands = [
    {
        name: 'ping',
        description: 'Replies with pong.'
    }
]

const discordRest = new REST({version: '9'}).setToken(token);

exports.refreshCommands = async () => {
    try {
        await discordRest.put(
            Routes.applicationGuildCommands(clientID, TESTING_GUILD),
            {body: commands}
        );
    } catch (e) {
        console.error(e);
    }
}