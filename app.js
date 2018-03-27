const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http'); 
var webshot = require('webshot');
var fs      = require('fs');
 
var renderStream = webshot('https://datastudio.google.com/embed/reporting/1OgHD3GCsazMPvi5XIpdYLv0z1n49Jo8f/page/p7LO');
var file = fs.createWriteStream('logbook.png', {encoding: 'binary'});
 
renderStream.on('data', function(data) {
  file.write(data.toString('binary'), 'binary');
});

client.on('ready', () => {
 setInterval(function(){ http.get("http://gc-system.herokuapp.com/"); }, 30000);
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
                 url: "http://gc-system.herokuapp.com/logbook.png/",
            },
            timestamp: new Date(),
            color: 0x00AE86
        }
    });
  }
});

client.login(process.env.token);
