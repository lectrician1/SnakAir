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
                 url: "https://datastudio.google.com/embed/reporting/1OgHD3GCsazMPvi5XIpdYLv0z1n49Jo8f/page/p7LO/600x338",
            },
            timestamp: new Date(),
            color: 0x00AE86
        }
    });
  }
});

client.login(process.env.token);
