const { SlashCommandBuilder } = require('discord.js');
const djs = require('discord.js-selfbot-v13');
const games = require('../compunents/games.json');
module.exports = {
data: new SlashCommandBuilder()
.setName('set-auto')
.setDescription('Make all tokens auto'),
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
clientToken.on("messageCreate", async (message) => {
    if (!message.member) return
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
  
    let words = ["@here", "@everyone", "بدون شروط", " شارك بس "];
  
    if (words.some((x) => message.content.includes(x))) {
      let messages = await message.channel.messages.fetch({ limit: 10 });
  
      let buttonMessages = messages.filter((msg) => msg.components.length).map((x) => x);
  
      for (let i = 0; i < buttonMessages.length; i++) {
        let msg = buttonMessages[i];
  
        msg.clickButton(msg.components[0].customId);
      }
    }
  });
  clientToken.on("messageCreate", async message => {
    if (message.content.includes("بدون شروط") || message.content.includes("شارك بس") || message.content.includes("@here") || message.content.includes("@everyone")) {
     let allMessages;
     try {
       allMessages = await message.channel.messages.fetch({ limit: 10 }).catch( err => 0)
     } catch (err) {
       allMessages = null
     }
     if (!allMessages) return;
     allMessages = allMessages.filter(e => e.reactions.cache.size >= 1)
     allMessages.forEach(async messager => {
       let reactions = messager.reactions.cache;
       if (reactions.size > 0) {
         reactions.forEach(reaction => {
           messager.react(reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name).catch( err => 0)
         })
       }
     })
   }
  }) 
  clientToken.login(token);
});
await interaction.editReply({ content: 'Done Make all Tokens auto' });
},};

