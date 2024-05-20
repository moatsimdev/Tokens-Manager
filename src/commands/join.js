const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const djs = require('discord.js-selfbot-v13')
module.exports = {
data: new SlashCommandBuilder()
.setName('join-server')
.setDescription('Add token to guild with invite.')
.addStringOption(Option => Option.setName('invite_url').setDescription('Guild invite url.').setRequired(true))
.addNumberOption(Option => Option.setName('number').setDescription('Number of tokens to add to guild.').setRequired(false)),
async execute(interaction) {
await interaction.deferReply();
const data = require('../ManageData.js');
const tokens = await data.getTokens();
const code = interaction.options.getString('invite_url');
const number = interaction.options.getNumber('number') || tokens.length;
//  const tokens = await db.getTokens()
let count = 0;
let error = 0;
let already = 0;
let done = 0;
tokens.forEach(async (token) => {
const ClienToken = new djs.Client({})
ClienToken.on('ready', async () => {
 if (number > count) {
count++
await ClienToken.fetchInvite(code).then(async invite => {
if (ClienToken.guilds.cache.get(invite.guild.id)) {
already++;
} else {
await invite.acceptInvite(true);
done++;
}
}).catch(async (err) => {
error++;})}
const embed = new EmbedBuilder().setColor('RED')
.setDescription(`Successfully: \`${count}\` / \`${number}\`\nDone: \`${done}\`\n Failed: \`${error}\`\n Already: \`${already}\``)
await interaction.editReply({ embeds: [embed] })})
ClienToken.login(token)
})}}

