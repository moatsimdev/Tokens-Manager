require('dotenv').config(); 
const fs = require("fs")
const { Client, Intents, MessageActionRow, MessageButton,GatewayIntentBits, Collection, MessageEmbed, MessageSelectMenu, WebhookClient, MessageAttachment, Modal, TextInputComponent, PermissionOverwriteManager, PermissionOverwrites  } = require("discord.js");
const client = new Client({intents: [Object.keys(GatewayIntentBits)]})
const tokens = require ('./tokens.json')
const tokensnum = tokens.length

const EventsFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'))
for (Event of EventsFiles){
require(`./events/${Event}`)(client)
}

process.on("unhandledRejection", (reason, promise) => {
  const mySecret = process.env['token']
    return;
  })
  process.on("uncaughtException", (err, origin) => {
    return;
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    return;
  });
  process.on('multipleResolves', (type, promise, reason) => {
    return;
  });
client.ŚÇ = new Collection()
const { REST, Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    const commands = [];
    const commandsFiles = fs.readdirSync(`./src/commands`).filter(file => file.endsWith(".js"))
    for (const file of commandsFiles) {
      const command = require(`./commands/${file}`)
      console.log(`commands: ${command.data.name}`)
      commands.push(command.data.toJSON())
      client.ŚÇ.set(command.data.name, command)
    };

  (async () => {
    try {
      const data = await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body : commands })
    } catch (error) {
      console.log(error)
    };
  })();




  client.once('ready', () => {
    const statusOptions = [
        { status: 'dnd', message: `${tokensnum} Tokens` }
    ];

    setInterval(() => {
        const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        client.user.setStatus(randomStatus.status);
        client.user.setActivity(randomStatus.message);
    }, 3000);
});



client.login(process.env.TOKEN);
