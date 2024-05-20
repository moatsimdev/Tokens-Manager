const {SlashCommandBuilder } = require('discord.js')
const djs = require('discord.js-selfbot-v13')
const aboutMe = require('../compunents/about_me.json')
module.exports = {
data: new SlashCommandBuilder()
.setName('set-about-me')
.setDescription('Change about me for all tokens.'),
async execute(interaction){
await interaction.deferReply()
const data = require('../ManageData.js');
const tokens = await data.getTokens();
tokens.forEach(async (token) => { 
const random = Math.floor(Math.random() * aboutMe.length)
const ClienToken = new djs.Client({})
ClienToken.on('ready', async () => {
await ClienToken.user.setAboutMe(aboutMe[random]);
})
ClienToken.login(token)
})
await interaction.editReply({content: `Done set about me to all tokens`})
}}
