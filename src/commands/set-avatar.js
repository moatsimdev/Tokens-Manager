const {
 SlashCommandBuilder
} = require('discord.js');
const djs = require('discord.js-selfbot-v13');
const fs = require('fs');
const imageFolder = './src/avatars';
module.exports = {
data: new SlashCommandBuilder()
.setName('set-avatar')
.setDescription('Change avatar for all tokens.'),
async execute(interaction) {
await interaction.deferReply();
const data = require('../ManageData.js');
const tokens = await data.getTokens();
tokens.forEach(async (token) => {
const clientToken = new djs.Client({});
const image = getRandomImage(imageFolder);
clientToken.on('ready', async () => {
await clientToken.user.setAvatar(fs.readFileSync(image));
});
clientToken.login(token);
});
 await interaction.editReply({
content: 'Done set random avatar for all tokens'
});},};
function getRandomImage(folder) {
const files = fs.readdirSync(folder);
const randomIndex = Math.floor(Math.random() * files.length);
const randomImage = files[randomIndex];
 return `${folder}/${randomImage}`;
}
