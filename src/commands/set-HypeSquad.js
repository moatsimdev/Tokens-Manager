const { SlashCommandBuilder } = require('discord.js');
const djs = require('discord.js-selfbot-v13');
const HypeSquad = ["HOUSE_BALANCE", "HOUSE_BRILLIANCE", "HOUSE_BRAVERY"];
module.exports = {
data: new SlashCommandBuilder()
.setName('set-hypesquad')
.setDescription('Change HypeSquad for all tokens.'),
async execute(interaction) {
await interaction.deferReply();
const data = require('../ManageData.js');
const tokens = await data.getTokens();
tokens.forEach(async (token) => {
const random = Math.floor(Math.random() * HypeSquad.length);
const ClienToken = new djs.Client({});
ClienToken.on('ready', async () => {
await ClienToken.user.setHypeSquad(HypeSquad[random]);
});
ClienToken.login(token);
});
await interaction.editReply({
content: `Done Changed HypeSquad for all tokens.`
});}};
