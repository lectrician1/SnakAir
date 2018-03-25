const Discord = require("discord.js");
const client = new Discord.Client();
const Screenshot = require('url-to-screenshot')
const fs = require('fs')
 
new Screenshot('http://ghub.io/')
  .width(800)
  .height(600)
  .capture()
  .then(img =>
    fs.writeFileSync(`${__dirname}/example.png`, img)
    console.log('open example.png')
  });

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
                 url: "https://datastudio.google.com/embed/reporting/1OgHD3GCsazMPvi5XIpdYLv0z1n49Jo8f/page/p7LO",
            },
            timestamp: new Date(),
            color: 0x00AE86
        }
    });
  }
});

client.login(process.env.token);
