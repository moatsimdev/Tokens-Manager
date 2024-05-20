require('dotenv').config()
module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        if(!process.env.OWNERS_ID.includes(interaction.member.id)) return interaction.reply({content: 'You are not bot owner'})
        if(interaction.isChatInputCommand()) {
            const Command = client.ŚÇ.get(interaction.commandName)
            if(!Command) return console.log(`Check ${interaction.commandName}`)
            try {
                await Command.execute(interaction, client)
            } catch(Err) {
                console.log(`Error Executing ${interaction.commandName}`)
                console.log(Err)	
            }
        } 
    })
    
}
