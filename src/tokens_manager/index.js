const djs = require('discord.js-selfbot-v13');
const db = require('pro.db')
const tokens = require('../tokens.json')
const tokensnum = tokens.length;
module.exports = (token) => {
    try {
        const client = new djs.Client({ checkUpdate: false, autoRedeemNitro: true, patchVoice: true, })
        client.on('ready', () => {
            const status = ["dnd","idle"]
            const statut = Math.floor(Math.random() * status.length)
            client.settings.setCustomStatus({
                status: status[statut], 
              });

        })
        client.login(token)
    } catch (err) { console.log(err) }
}
