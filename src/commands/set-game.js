const { SlashCommandBuilder } = require('discord.js');
const djs = require('discord.js-selfbot-v13');
const games = require('../compunents/games.json');
module.exports = {
data: new SlashCommandBuilder()
.setName('set-game')
.setDescription('Make all tokens playing'),
async execute(interaction) {
await interaction.deferReply();
const data = require('../ManageData.js');
const tokens = await data.getTokens();
tokens.forEach(async (token) => {
const random = Math.floor(Math.random() * games.length);
const clientToken = new djs.Client({});
clientToken.on('ready', async () => {
await clientToken.user.setPresence({
activities: [{
name: games[random],
type: 'PLAYING',
}],});});
clientToken.login(token);
});
await interaction.editReply({ content: 'Done set random games for all tokens' });
},};

