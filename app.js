const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content === "SAlogbook") {
    msg.channel.send({
        embed: {
            author: {
                name: "Logbook",
            },
            image: {
                 url: "http://via.placeholder.com/450x250",
            },
            timestamp: new Date(),
            color: 0x00AE86
        }
    });
  }
});

client.login(process.env.token);
