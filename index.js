const Discord = require('discord.js')
require('dotenv').config()


const TOKEN = 'OTUxNDE4NDIwOTIwOTg3NjY4.YinLdA.TyOZgWPQH8TY1QIrHJhrHLzuNkE'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "d! print hello"){
        message.reply("hello")
    }
})

client.login(process.env.TOKEN)