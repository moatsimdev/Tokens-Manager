const {SlashCommandBuilder} = require('discord.js')
const djs = require('discord.js-selfbot-v13')
module.exports = {
data: new SlashCommandBuilder()
.setName('add_token')
.setDescription('Add token to database.')
.addStringOption(Option => Option.setName('token').setDescription('Set a valid token').setRequired(true)),
async execute(interaction){
await interaction.deferReply({ephemeral: true})
const token = interaction.options.getString('token')
const data = require('../ManageData.js')
const tokens = await data.getTokens();
if(tokens.includes(token)) return await interaction.editReply({content: 'This token is already in the database'})
const testclient = new djs.Client({})
testclient.login(token).then(async() => {
const name = testclient.user.username;
testclient.destroy()
require('../ManageData.js').addToken(token)
require('../tokens_manager/index.js')(token)
await await interaction.editReply({content: `Done login to ${name}`})
}).catch(async(err) => {
return await interaction.editReply({content: `An error occurred: \`${err}\`.`})
})}}























console.log("This Bot Made By Moatsim.")
