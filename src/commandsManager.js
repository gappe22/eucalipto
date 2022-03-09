const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Collection } = require('discord.js');
const { token, clientID } = require('../config.json');
const fs = require('fs');
const path = require('path');
const TESTING_GUILD = '911289012688392253';

const discordRest = new REST({version: '9'}).setToken(token);
const commands = new Collection()

const getCommandFiles = () => {
    let commandFiles = fs.readdirSync(path.resolve(__dirname, './commands')).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require('./commands/' + file);
        commands.set(command.data.name, command);
    }
}

exports.registerCommands = async () => {
    try {
        getCommandFiles();

        await discordRest.put(
            Routes.applicationGuildCommands(clientID, TESTING_GUILD),
            {body: commands.map((val) => val.data.toJSON())}
        );
    } catch (e) {
        console.error(e);
    }
}

exports.getCommand = (name) => {
    return commands.get(name);
}