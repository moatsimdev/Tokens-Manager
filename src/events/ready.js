const tokens = require('../tokens.json')

module.exports = (client) => {
    client.on('ready', () => {
       
        console.log(`${client.user.username} is ready!`)
        tokens.forEach(token => {
        require('../tokens_manager/index.js')(token)
        })
    })
}
