const Discord = require("discord.js"),
      bot = new Discord.Client(),
      BotSettings = require("./botsettings.json"),
      fs = require("fs"),
      profile = JSON.parse(fs.readFileSync("profil/message.json","utf8")),
      Config = require("./config.json"),
      Splatoon = require("./Splatoon_Arrays.json")
  
    

//Start-Up
bot.on("ready", async () => {
    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("online") //online, idle, dnd, invisible
})
setInterval(async function() {

    let status = [`${BotSettings.prefix}help`, `${bot.users.size} members!`,`Version: [1.5]`,`auf ${bot.guilds.size} Servern!`,];
    let chosen = status[Math.floor(Math.random() * status.length)];
  
    bot.user.setActivity(chosen, {type: "PLAYING"}); //PLAYING, STREAMING, LISTENING, WATCHING
  
}, 15000);
    

//Welcome Message
bot.on("guildMemberAdd", async member => { 
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(`${member} Willkommen auf dem ${member.guild.name}! Bitte wirf einen Blick auf die <#406946551538253830> und benimm dich. \nWenn du fragen hast kannst du gerne auf die Mods, Supporter oder auch auf Newtox zugehen. \nEs schadet auch nicht einen blick in das <#477222309787205674> zu werfen ${bot.emojis.find("name","Glumanda_Hi")}`)
        member.addRole("406952857917456395")

        if(member.guild.id == `361532938816585730`) { 
            bot.channels.get("478552771734536192").send(`${member} Willkommen in der ${member.guild.name}! ,Wir wünschen dir hier viel Spaß. Lies dir aber bitte die <#478965010920374291> durch.`)
                member.addRole("473485307950530560")
            }
    }

    if(member.guild.id == `417437075734790174`) { 
            member.addRole("417770123840061451")
        }
});
bot.on("message", async message => { })

 //Goodbye Message
 bot.on("guildMemberRemove", async member => { 
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(`${member.user.username}#${member.user.discriminator} hat den ${member.guild.name} verlassen...`)
    }
});
bot.on("message", async message => { }) 





bot.on("message", async message => {

    //Variablen
    var args = message.content.slice(BotSettings.prefix.length).trim().split(" "),

        command = args.shift(),
        msg = message.content.toLowerCase(),
        mention = message.mentions.members.first()
        HelpFooter = `Schreibe ${BotSettings.prefix}help <command> für mehr Informationen über einen Command.`
        NewtoxFooter = `${message.guild.member("402483602094555138").user.avatarURL}`
        ToxbotFooter = `${bot.user.username} | V1.5`
        ToxbotLogo = `${bot.user.avatarURL}`
        

       

    //Emojis
    let GlumandaHi = message.guild.emojis.find("name", "Glumanda_Hi") 
    let Balance = message.guild.emojis.find("name", "Balance") 
    let Brilliance = message.guild.emojis.find("name", "Brilliance") 
    let Bravery = message.guild.emojis.find("name", "Bravery") 


     dab1 = "<:dabbing1:481144666759102475>"
     dab2 = "<:dabbing2:481144673746812946>"
     dab3 = "<:dabbing3:481144682001334272>"


     ONLINE_EMOTE = "<:online:480435603587203118>"
     IDLE_EMOTE = "<:idle:480435654233423892>"
     DND_EMOTE = "<:dnd:480435646624694302>"
     INV_EMOTE = "<:invisible:480435664417194014>"


    //Verbotene Zeichen/Wörter
    if(message.content.includes("卍")) {
        message.delete()
        message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
        return
    }

    if(message.content.includes("卐")) {
        message.delete()
        message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
        return
    }

    if(message.content.includes("ϟϟ")) {
        message.delete()
        message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
        return

    }

     //Schutz vor Bots
     if(!message.author.bot) {


        //Help
        if(message.content ==`${BotSettings.prefix}help`) { 
            var embed = new Discord.RichEmbed() 

            .setColor(message.guild.members.get("463336117723201546").highestRole.color)
            .setTimestamp()
            .setFooter(HelpFooter)
            .setTitle("Hier siehst du alle Commands des Bots.")
            .addField(`**__Info__**`,"`userinfo`,`serverinfo`,`serverliste`,`messages`,`botinfo`,`botinvite`,`Fun`,`Newtoxinvite,`,`Hypesquad`")
            .addField(`**__Moderation__**`,"`kick`,`ban`,`roleID`,`emojiID`,`emojiFile`,`opgiverole`,`opremoverole`,`rolecolor`,`roleedit`,`clear`")
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/476098810460766229/help2.png")
            message.channel.send(embed)
        }

        //Hypesquad!
        if(message.content ==`${BotSettings.prefix}Hypesquad`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)

            var embed = new Discord.RichEmbed()

            .setDescription(`Hier seht ihr alle Hypesquad Häuser. \nZu denen ihr euch eure jeweilige Rolle adden könnt. \n${Balance} ${BotSettings.prefix}Balance \n${Brilliance} ${BotSettings.prefix}Brilliance \n${Bravery} ${BotSettings.prefix}Bravery`)
            .addField("Falls ihr euer Haus wechseln solltet. Könnt ihr das tun. ","Dafür müsst ihr nur das gleich eingeben wie oben, nur mit einem **leave** dahinter. Das würde dann so aussehen: `tx!Balanceleave`",true)
            .addField("Um zu schauen, welche Mitglieder sich in welchem Haus befinden, nutzt einfach \n`tx![Haus] list`")
            .addField("Falls ihr nicht wisst, was die Hypesquad ist, dann schaut euch gerne folgendes Video an:","https://youtu.be/SWzB1mx2o5k",false)
            .setThumbnail("https://cdn.discordapp.com/emojis/479789194852565002.png?v=1")
    
            message.channel.send(message.author, embed)
        }

        if(message.content ==`${BotSettings.prefix}Balance list`) {
            var embed = new Discord.RichEmbed()
            .setColor("#45DDC0")
            .addField("Haus-Balance-Mitglieder",`${message.guild.members.filter(members => members.roles.has("480798479103295490")).map(members => members).join(", ")}` || `Aktuell gibt es keine ${message.guild.roles.get("480798479103295490").name} Mitglieder`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181516370673684/Balance.png")

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Brilliance list`) {
            var embed = new Discord.RichEmbed()
            .setColor("#F47B67")
            .addField("Haus-Brilliance-Mitglieder",`${message.guild.members.filter(members => members.roles.has("480798626382086157")).map(members => members).join(", ")}` || `Aktuell gibt es keine ${message.guild.roles.get("480798626382086157").name} Mitglieder`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181549518389249/Brilliance.png")

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Bravery list`) {
            var embed = new Discord.RichEmbed()
            .setColor("#9C84EF")
            .addField("Haus-Bravery-Mitglieder",`${message.guild.members.filter(members => members.roles.has("480798562079342593")).map(members => members).join(", ")}` || `Aktuell gibt es keine ${message.guild.roles.get("480798562079342593").name} Mitglieder`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181534276026388/Bravery.png")

            message.channel.send(embed)
        }

        //Help-Hypesquad

        if(message.content ==`${BotSettings.prefix}help Hypesquad`) {

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Hypesquad`,"`Zeigt dir alle Hypesquad Häuser, zu denen du dir Rollen adden kannst.`",false)
            .addField(`Verwendung`,"`tx![Haus]`")
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Balance`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798562079342593") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} Du bist aktuell in dem Haus **${message.guild.roles.get("480798562079342593").name}** oder **${message.guild.roles.get("480798626382086157").name}**. Du musst erst dein aktuelles Haus verlassen.`)
            if(message.member.roles.has("480798479103295490")) return message.channel.send(`${message.author} Du bist bereits im Haus **${message.guild.roles.get("480798479103295490").name}**.`)

            message.member.addRole(`480798479103295490`)
            message.channel.send(`${message.author} Ich freue mich das ich dich im Haus **Balance** begrüßen darf!`)
        }

        if(message.content ==`${BotSettings.prefix}Balanceleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798562079342593") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} Du kannst kein Haus verlassen, indem du nicht bist.`)

            message.member.removeRole(`480798479103295490`)
            message.channel.send(`${message.author} Schade das du Haus Balance verlassen hast.`)
        }

        if(message.content ==`${BotSettings.prefix}Brilliance`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} Du bist aktuell in dem Haus **${message.guild.roles.get("480798479103295490").name}** oder **${message.guild.roles.get("480798562079342593").name}**. Du musst erst dein aktuelles Haus verlassen.`)
            if(message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} Du bist bereits im Haus **${message.guild.roles.get("480798626382086157").name}**.`)


            message.member.addRole(`480798626382086157`)
            message.channel.send(`${message.author} Ich freue mich das ich dich im Haus **Brilliance** begrüßen darf!`)
        }

        if(message.content ==`${BotSettings.prefix}Brillianceleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} Du kannst kein Haus verlassen, indem du nicht bist.`)

            message.member.removeRole(`480798626382086157`)
            message.channel.send(`${message.author} Schade das du Haus Brilliance verlassen hast.`)
        }

        if(message.content ==`${BotSettings.prefix}Bravery`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} Du bist aktuell in dem Haus **${message.guild.roles.get("480798479103295490").name}** oder **${message.guild.roles.get("480798626382086157").name}**. Du musst erst dein aktuelles Haus verlassen.`)
            if(message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} Du bist bereits im Haus **${message.guild.roles.get("480798479103295490").name}**.`)

            message.member.addRole(`480798562079342593`)
            message.channel.send(`${message.author} Ich freue mich das ich dich im Haus **Bravery** begrüßen darf!`)
        }

        if(message.content ==`${BotSettings.prefix}Braveryleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server vom Bot-Owner`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} Du kannst kein Haus verlassen, indem du nicht bist.`)

            message.member.removeRole(`480798562079342593`)
            message.channel.send(`${message.author} Schade das du Haus Bravery verlassen hast.`)
        }

        //Help-messages

        if(message.content ==`${BotSettings.prefix}help messages`) {

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`messages`,"`Zeigt dir die Anzahl der Nachrichten an, die du bis jetzt versendet hast. Du kannst dies auch bei anderen sehen.`",false)
            .addField(`Verwendung`,"`tx!messages \nOder tx!messages [Mitglied]`")
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }



        //Messagecounter
        if(!profile[message.author.id]) {
            profile[message.author.id] = {Nachricht: 0}
            fs.writeFile("profil/message.json", JSON.stringify(profile),(err)=>{
                if(err)console.error(err)
            })
        }



        if(profile [message.author.id]) {
            profile[message.author.id] .Nachricht++
            fs.writeFile("profil/message.json", JSON.stringify(profile),(err)=>{
                if(err)console.error(err)
            })
        }   



        if(message.content ==`${BotSettings.prefix}messages`) {            

            var embed = new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .setDescription(`${message.author} Du hast bis jetzt **${profile[message.author.id] .Nachricht}** Nachrichten versendet.`)

            message.channel.send(embed)
        } 


        if(message.content ==`${BotSettings.prefix}messages ${mention}`) {

            var embed = new Discord.RichEmbed()
            .setColor(mention.highestRole.color)
            .setDescription(`**${mention}** hat bis jetzt **${profile[mention.id] .Nachricht}** Nachrichten versendet.`)

            message.channel.send(embed)
        }

         

        //Help-botinfo
        if(message.content ==`${BotSettings.prefix}help botinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinfo`,`Gibt euch einige Informationen über den Bot`,false)
            .setFooter(ToxbotFooter, NewtoxFooter)
            message.channel.send(embed)
        }

        //Botinfo
        if(message.content == `${BotSettings.prefix}botinfo`) {

            var embed = new Discord.RichEmbed() 

            .setColor("#ff9564")
            .setTitle("Info über Toxbot")
            .addField("Name und Tag",`**${bot.user.username}**#${bot.user.discriminator}`,false)
            .addField("Entwickler:",`**${message.guild.member("402483602094555138").user.username}**#${message.guild.member("402483602094555138").user.discriminator}`, true)
            .addField("Programmiert mit:","Discord.js 11.3.2 \nVisual Studio Code",false)
            .addField(`Prefix des Bots`,`Der Prefix des Bots ist **${BotSettings.prefix}**`, false)
            .addField("Erstellungsdatum",`Der Bot wurde am **${bot.user.createdAt.toString().split(" ")[2]}** **${Config.Date_Name[bot.user.createdAt.toString().split(" ")[1]]}** **${bot.user.createdAt.toString().split(" ")[3]}** erstellt!`,false)
            .setTimestamp()
            .setThumbnail(bot.user.avatarURL)

    

            message.channel.send(embed)

        }



        //Help-userinfo
        if(message.content ==`${BotSettings.prefix}help userinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Userinfo`,"`Gibt dir einige Informationen zu deinem Account. Du kannst dies auch bei anderen sehen.`",false)
            .addField(`Verwendung`,"`tx!userinfo \nOder tx!userinfo [Mitglied]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
            message.channel.send(embed)
        }

        //Userinfo
        if(message.content ==`${BotSettings.prefix}userinfo`) {

            var embed = new Discord.RichEmbed()
    
            .setColor(message.member.highestRole.color)
            .setTimestamp()
            .setTitle(`Userinfo über ${message.author.username}`)
            .addField(`Name + Tag`, `**${message.author.username}**#${message.author.discriminator}`)
            .setFooter(ToxbotFooter)
    
            if(message.author.username != message.member.displayName) {
                embed.addField(`Nickname`, `${message.member.displayName}`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
          

            embed.addField(`Status`,`${Config.status_ger[message.author.presence.status]}`)
            
            if(message.author.presence.game) {
                embed.addField(`Aktivität`,`${Config.Activitytypes[message.author.presence.game.type]} **${message.author.presence.game.name}**`)
            }
            else {
                embed.addField(`Aktivität`,`-`)
            }
    
            embed.addField(`ID`,`${message.author.id}`,true)
    
            embed.addField(`Rollen`,`${message.member.roles.map(roles => roles).splice(1).join(", ")}`)
    
            embed.addField("Erstellungsdatum des Accounts", `Du hast deinen Account am **${message.member.user.createdAt.toString().split(" ")[2]}** **${Config.Date_Name[message.member.user.createdAt.toString().split(" ")[1]]}** **${message.member.user.createdAt.toString().split(" ")[3]}** erstellt.`, false) 
    
            embed.addField("Joindatum", `Du bist dem Server zuletzt am **${message.member.joinedAt.toString().split(" ")[2]}** **${Config.Date_Name[message.member.joinedAt.toString().split(" ")[1]]}** **${message.member.joinedAt.toString().split(" ")[3]}** gejoint!`, false) 
    
            .setThumbnail(`${message.author.avatarURL}`)
    
            message.channel.send(embed)
    
        }

        if(message.content ==`${BotSettings.prefix}userinfo ${mention}`) {   
    
            var embed = new Discord.RichEmbed()
    
            .setColor(mention.highestRole.color)
            .setTimestamp()
            .setTitle(`Userinfo über ${mention.user.username}`)
            .addField(`Name + Tag`, `**${mention.user.username}**#${mention.user.discriminator}`)
            .setFooter(ToxbotFooter)
    
            
            if(mention.user.username != mention.displayName) {
                embed.addField(`Nickname`, `${mention.displayName}`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
    
            embed.addField(`Status`,`${Config.status_ger[mention.presence.status]}`)
            
            if(mention.presence.game) {
                embed.addField(`Aktivität`,`${Config.Activitytypes[mention.presence.game.type]} **${mention.presence.game.name}**`)
            }
            else {
                embed.addField(`Aktivität`,`-`)
            }
        
    
            embed.addField(`ID`,`${mention.id}`,true)
    
            embed.addField(`Rollen`,`${mention.roles.map(roles => roles).splice(1).join(", ")}`)
    
            embed.addField(`Erstellungsdatum des Accounts`,`**${mention.displayName}** hat seinen/ihren Account am **${mention.user.createdAt.toString().split(" ")[2]}** **${Config.Date_Name[mention.user.createdAt.toString().split(" ")[1]]}** **${mention.user.createdAt.toString().split(" ")[3]}** erstellt!`, false) 
    
            embed.addField(`Joindatum`, `**${mention.displayName}** ist dem Server zuletzt am **${mention.joinedAt.toString().split(" ")[2]}** **${Config.Date_Name[mention.joinedAt.toString().split(" ")[1]]}** **${mention.joinedAt.toString().split(" ")[3]}** gejoint!`, false) 
    
            .setThumbnail(`${mention.user.avatarURL}`)
    
    
            message.channel.send(embed)
    
        }

        //Clear
        if(command === "clear") {
       
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("MANAGE_MESSAGES"))  {

            var deleteCount = parseInt(args[0], 10);
    
            if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Bitte gib eine Zahl zwischen 2 und 100 an.");
    
            let deleted = await message.channel.bulkDelete(deleteCount +1).catch(error => message.reply(`Konnte Nachrichten nicht löschen wegen ${error}`));    

            let msg1 = await message.channel.send(`**${deleted.size}** Nachrichten wurden gelöscht. ${message.author}`)
            setTimeout(async () => {msg1.delete()}, 5000)
    
          } else {
            message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Nachrichten-Verwalten**. ${message.author}`)
          } 
        } 
            //Help-clear
            if(message.content ==`${BotSettings.prefix}help clear`) {
                
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Clear`,"`Löscht eine beliebige Anzahl an Nachrichten`")
            .addField(`Verwendung`,"`tx!clear [Zahl]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
            //Kick
            if(command === "kick") {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("KICK_MEMBERS"))  {
    
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(` Bitte gib ein Mitglied an, das sich auf dem Server befindet.`);
    
            if(!member.kickable) 
    
              return message.reply("Dieses Mitglied kann ich nicht kicken, tut mir leid.");
    
            let reason = args.slice(1).join(' ');
    
            if(!reason) reason = `${message.author} Bitte gib einen Grund an!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`Der Bot-Owner kann nicht gekickt werden!`)
    
            await member.kick(reason)
    
            message.reply(`${member.user.tag} wurde wegen ${reason} vom Server gekickt`);

            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Mitglieder kicken**. ${message.author}`)
            } 
          }

         
    
    
            //Help-Kick
            if(message.content ==`${BotSettings.prefix}help kick`) {
                var embed = new Discord.RichEmbed()
                .setColor("#7289DA")
                .addField(`kick`,"`Kickt den markierten Nutzer`")
                .addField(`Verwendung`,"`tx!kick [Mitglied] [Grund]`")
                .setFooter(ToxbotFooter, NewtoxFooter)
    
                message.channel.send(embed)
            }
    
            //Bann
            if(command === "ban") {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("BAN_MEMBERS"))  {
        
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(` Bitte gib ein Mitglied an, das sich auf dem Server befindet.`);
    
            if(!member.bannable) 
    
              return message.reply("Dieses Mitglied kann ich nicht bannen, tut mir leid.");
        
    
            let reason = args.slice(1).join(' ');
    
    
            if(!reason) reason = `${message.author} Bitte gib einen Grund an!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`Der Bot-Owner kann nicht gebannt werden!`)
    
            await member.ban(reason)
        
            message.reply(`${member.user.tag} wurde wegen ${reason} vom Server gebannt`);

            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Mitglieder kicken**. ${message.author}`)
            } 
          }
         
          
          //Help-ban
          if(message.content ==`${BotSettings.prefix}help ban`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`ban`,"`Bannt den markierten Nutzer`")
            .addField(`Verwendung`,"`tx!ban [Mitglied] [Grund]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }


        //OPadd
        if(command.toLowerCase() == `opgiverole`) {
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("ADMINISTRATOR"))  {
    
                var Rolle = args.join(" ")
                if(Rolle) {
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.addRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Da ist was schiefgelaufen. ${message.author}.\n\nError-Bericht: ${err}`)
    
                        });
    
                        message.channel.send(`Du hast jetzt die Rolle ${Rolle}. ${message.author} `)
    
                    } else {
                        message.channel.send(`Diese Rolle existiert auf dem Server nicht. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Bitte gebe eine Rolle an. ${message.author}`)
                } 
    
            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Administrator**. ${message.author}`)
            }
    
            
    
        }
    
        //Help-opgiverole
        if(message.content ==`${BotSettings.prefix}help opgiverole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`opgiverole`,"`Gibt euch eine Bestimmte Rolle`")
            .addField(`Verwendung`,"`tx!opgiverole [Rolle]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
        //Opremove
        if(command.toLowerCase() == `opremoverole`) {
        if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) {
    
    
    
                var Rolle = args.join(" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.removeRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Da ist was schiefgelaufen. ${message.author}.\n\nError-Bericht: ${err}`)
    
                        });
    
                        message.channel.send(`Dir wurde die Rolle ${Rolle} entfernt. ${message.author} `)
    
                    } else {
                        message.channel.send(`Diese Rolle existiert auf dem Server nicht. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Bitte gebe eine Rolle an. ${message.author}`)
                }
    
            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Administrator**. ${message.author}`)
            }
    
            
        }


    
        //Help-opremoverole
        if(message.content ==`${BotSettings.prefix}help opremoverole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`opremove`,"`Entfernt euch eine Bestimmte Rolle`")
            .addField(`Verwendung`,"`tx!opremoverole [Rolle]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
            //Rollen-ID
            if(command == "roleID") {
    
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_ROLES")) {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {
    
                        message.channel.send(`Die ID der Rolle **${Rolle}** ist **${message.guild.roles.find("name",Rolle).id}** ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} Das ist keine Rolle, die auf dem Server existiert.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Bitte gib eine verfügbare Rolle an.`)
                }
    
            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Rollen verwalten**. ${message.author}`)
            }
            return
        }
    
        //Help-roleID
        if(message.content ==`${BotSettings.prefix}help roleID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleID`,"`Gibt dir die ID einer bestimmten Rolle`")
            .addField(`Verwendung`,"`tx!roleID [Rolle]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }

              
        //Emoji-ID
        if(command == "emojiID") {
    
        if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_EMOJIS")) {
    
            var Emote = args.join (" ")
    
            if(Emote) {
    
                if(message.guild.emojis.find("name",Emote)) {
    
                    message.channel.send(`Die ID von dem Emoji **${Emote}** ist **${message.guild.emojis.find("name",Emote).id}** ${message.author}`)
    
                } else {
                    message.channel.send(`${message.author} Das ist kein Emoji, der auf dem Server existiert.`)
                }
    
            } else {
                message.channel.send(`${message.author} Bitte gib einen verfügbaren Emoji an.`)
            }
    
        } else {
            message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Emojis verwalten**. ${message.author}`)
        }
        return
    }
    
        //Help-EmojiID
        if(message.content ==`${BotSettings.prefix}help emojiID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiID`,"`Gibt dir die ID eines bestimmten Emoji`")
            .addField(`Verwendung`,"`tx!emojiID [Emoji]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
        //Emoji-File
        if(command == "emojiFile") {
    
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_EMOJIS")) {
        
                var Emote = args.join (" ")
        
                if(Emote) {
        
                    if(message.guild.emojis.find("name",Emote)) {
        
                        message.channel.send(`Hier ist der Emoji **${Emote}** als Datei. ${message.guild.emojis.find("name",Emote).url} ${message.author}`)
        
                    } else {
                        message.channel.send(`${message.author} Das ist kein Emoji, der auf dem Server existiert.`)
                    }
        
                } else {
                    message.channel.send(`${message.author} Bitte gib einen verfügbaren Emoji an.`)
                }
        
            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Emojis verwalten**. ${message.author}`)
            }
            return
        }
    
        //Help-emojiFile
        if(message.content ==`${BotSettings.prefix}help emojiFile`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiFile`,"`Gibt dir einen bestimmten Emoji als Datei`")
            .addField(`Verwendung`,"`tx!emojiFile [Emoji]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
             
    
          //Rollenfarbe 
            if(command == "rolecolor") {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_ROLES")) {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {      
    
                    message.channel.send(`Die Rolle **${Rolle}** hat die RGB-Farbe **${message.guild.roles.find("name", Rolle).hexColor.toUpperCase()}**. ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} Das ist keine Rolle, die auf dem Server existiert.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Bitte gib eine verfügbare Rolle an.`)
                }
    
            } else {
                message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Rollen verwalten**. ${message.author}`)
            }
            return
        }
    
        //Help-rolecolor
        if(message.content ==`${BotSettings.prefix}help rolecolor`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`rolecolor`,"`Gibt euch den Farbencode einer Bestimmten Rolle`")
            .addField(`Verwendung`,"`tx!rolecolor [Rolle]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
        //Rollen-Edit
        if(command.toLowerCase() == `roleedit`) {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_ROLES")) {
            if(args[0] && args[1]) {
                if(Number(parseInt(args[1].toString(10), 16)) < 16777215) {
                    if(message.guild.roles.find("name", args[0])) {
                        await message.guild.roles.find("name", args[0]).setColor(`#${args[1].toUpperCase()}`)
                        message.channel.send(`Die Farbe der Rolle **${args[0]}** wurde zu **#${args[1]}** geändert. ${message.author}`)
                    } else {
                        message.channel.send(`Diese Rolle ist auf dem Server nicht vorhanden. ${message.author}`)
                    }
                } else {
                    message.channel.send(`Das ist keine RGB-Value. ${message.author}`)
                }
            } else {
                message.channel.send(`Bitte gebe eine **verfügbare** Rolle und eine Farbe an. ${message.author}`)
            }
        } else {
             message.channel.send(`Dieser Befehl benötigt die folgenden Server Rechte: **Rollen verwalten**. ${message.author}`)
        }
            return
        }
    
        //Help-roleedit
        if(message.content ==`${BotSettings.prefix}help roleedit`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleedit`,"`Damit könnt ihr die Farbe einer Rolle per Bot ändern lassen`")
            .addField(`Verwendung`,"`tx!roleedit [Rolle] [Farbe]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }

        //Help-Fun
        if(message.content ==`${BotSettings.prefix}help Fun`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Fun`,"`Zeigt dir ein bisschen Quatch den man mit dem Bot anstellen kann`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }



        if(message.content == `${BotSettings.prefix}Fun`) {

            var embed = new Discord.RichEmbed()
            .setColor("#772d69")
            .setTimestamp()
            .setTitle("Hier seht ihr alle Fun Befehle", true)
            .addBlankField()
            .addField(`${BotSettings.prefix}splatoon2perks`, "zeigt die Vor und Nachteile der Marken in Splatoon 2", false)
            .addField(`${BotSettings.prefix}binNewtox`, "*schaut selber was passiert ( ͡° ͜ʖ ͡°)*", false)
            .addField(`${BotSettings.prefix}lööps`,`**__lööps__**`)
            .addField(`@${bot.user.username}`,`Da wird ${bot.user.username} aber sauer sein!`)
            .addField(`${BotSettings.prefix}dab`,`Einen Dab kann man immer brauchen.`)
            .addField(`${BotSettings.prefix}snens`,`*Rufe den dunklen Lord herbei!*`)
            .setDescription("Falls ihr Ideen für weitere lustige Commands habt, dürft ihr euch gerne bei <@402483602094555138> melden.")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/457489426784845825/fun.png")

            message.channel.send(embed)
        }


        if(message.content ==`${BotSettings.prefix}splatoon2perks`) {
            message.channel.send(`https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/07/Splatoon-2-Abilities-List.png`)

        }

        if(message.content == `${BotSettings.prefix}binNewtox`) {
        if(message.author.id == "402483602094555138") {

            message.channel.send(`Hey ${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}, mein Meister`)

        }  else {
            message.channel.send(`${message.author}, was willst du von mir **?!** du bist nicht Newtox qwq`)
        }

        }


        if(message.content ==`${BotSettings.prefix}Newtoxinvite`) {
            message.channel.send(`Hier ist die Einladung zu dem Server von ${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator} **[Meinem Entwickler]** \nhttps://discord.gg/tUfNuD5`)
        }  

        if(message.content ==`${BotSettings.prefix}lööps`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/480022630884311060/480778360205869056/Screenshot_2018-08-17-21-36-51.png`)
        }

        if(message.content ==`${BotSettings.prefix}dab`) {
            message.channel.send(`${dab1}${dab2}${dab3}`)
        }

        if(message.content ==`${BotSettings.prefix}snens`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/473896120917950464/481481773952401457/Darth_Snens.png`)
        }


        //Help-Newtox
        if(message.content ==`${BotSettings.prefix}help Newtoxinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Newtoxinvite`,"`Gibt euch eine Einladung zu dem Server vom Bot-Owner`",false)

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}botinvite`) {
            message.channel.send(`Ihr wollt mich auf eurem Server haben? \nNutzt diesen Link: \nhttps://discordapp.com/api/oauth2/authorize?client_id=463336117723201546&permissions=8&scope=bot`)
        }

        //Help-Bot
        if(message.content ==`${BotSettings.prefix}help botinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinvite`,"`Gibt euch einen Link womit ihr den Bot auf euren Server einladen könnt.`",false)

            message.channel.send(embed)
        }

        if(message.content ==`${bot.user}`) {
                var embed = new Discord.RichEmbed()
                .setColor("#819bff")
                .setImage("https://cdn.discordapp.com/attachments/406957187869442048/476102813705830404/ping.jpg")

                message.channel.send(embed)
        }

        // if(message.content ==`${BotSettings.prefix}spam`) {
        //     setInterval(async () => { message.channel.send(`<@276010682682572800>`) }, 1000);
        // }
        

        //serverinfo
        if(message.content ==`${BotSettings.prefix}serverinfo`) {

            var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}`)
            .addField(`ID`,`${message.guild.id}`,true)
            .addField(`Eigentümer`,`${message.guild.owner}`,true)
            .addField(`Verification Level`,`${Config.Verification_Name[message.guild.verificationLevel]}`,true)
            .addField(`Mitglieder`,`${message.guild.memberCount}`,true)
            .addField(`Text-Kanäle`,`${message.guild.channels.filter(channels => channels.type == "text").size}`,true)
            .addField(`Sprach-Kanäle`,`${message.guild.channels.filter(channels => channels.type == "voice").size}`,true)
            .addField(`AFK-Kanal`,`${message.guild.afkChannel}`)
            .addField(`Rollen`,`Der Server hat **${message.guild.roles.size}** Rollen \n${message.guild.roles.map(roles => roles).splice(1).join(", ")}`,true)
            .addField(`Emojis`,`Der Server hat **${message.guild.emojis.size}** Emojis \n${message.guild.emojis.map(emojis => emojis).join("")}`,true)
            .addField(`Erstellungsdatum des Servers`,`Der Server wurde am **${message.guild.createdAt.toString().split(" ")[2]}** **${Config.Date_Name[message.guild.createdAt.toString().split(" ")[1]]}** **${message.guild.createdAt.toString().split(" ")[3]}** erstellt!`, true)
            .addField(`Server-Icon`,`${message.guild.iconURL}`,true)
            .setThumbnail(`${message.guild.iconURL}`)
            .setFooter(ToxbotFooter)
            .setTimestamp()


            message.channel.send(embed).catch(err => {
    
                if(err) message.channel.send(`Hm. Da ist was schiefgelaufen. ${message.author}.\n\nError-Bericht: ${err}`)

            });

        } 


        //Help-Serverinfo
        if(message.content ==`${BotSettings.prefix}help serverinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Serverinfo`,"`Gibt dir einige Informationen zu dem Server.`",false)
            message.channel.send(embed)
        }


        if(message.content ==`${BotSettings.prefix}serverliste`) {

            var embed = new Discord.RichEmbed()
            .setColor(message.guild.members.get("463336117723201546").highestRole.color)
            .setDescription(`Der Bot befindet sich auf **${bot.guilds.size}** Servern: \n \n${bot.guilds.map(members => members).join(",\n")} Server!`)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }


        //Help-Serverliste
        if(message.content ==`${BotSettings.prefix}help serverliste`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Serverliste`,"`Zeigt dir alle Server auf denen der Bot sich befindet.`",false)
            message.channel.send(embed)
        }



        //Say-Command

        if(command == "say") {
            if(message.author.id == BotSettings.OwnerID) { 
                var Say = args.join(" ") 
                if(Say) {
                    message.channel.send(Say) 
                } else { 
                    message.channel.send(`Was soll ich bitte sagen? ${message.author}`)
                }
            } else { 
                message.channel.send(`Nur der Bot-Owner kann diesen Command nutzen. ${message.author}`)

            }
            message.delete();
        }

        //DevMessage
        if(message.content == `${BotSettings.prefix}devmessage ${args.join(" ")}`) {
            bot.users.get("402483602094555138").send(args.join(" "))
            message.reply(`Nachricht wurde an den Bot Owner gesendet.`)
        } 

        //Vote-Test
        if(command == "vote") {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR"))  { 
                var vote = args.join(" ") 
                if(vote) {
                    await message.channel.send(vote) 
                    .then(msg => msg.react("476828079424143365").then(msg2 => msg.react("476828092078227459")))

                } else { 
                    message.channel.send(`Was für eine Abstimmung soll es sein? ${message.author}`)
                }
            } else { 
                message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)

            }
            message.delete();
        }

        if(message.content ==`${BotSettings.prefix}Xami`) {
            if(message.guild.id != `361532938816585730`) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server von **${message.guild.member("227034133447180288").user.username}**#${message.guild.member("227034133447180288").user.discriminator}`)

            var embed =  new Discord.RichEmbed()
            .setColor("#206694")
            .setTitle(`Das Team der ${message.guild.name}`)
            .addField("Owner",`${message.guild.members.filter(members => members.roles.has("361534036298170398")).map(members => members).join(", ")}` || `Aktuell gibt es keine/n ${message.guild.members.filter(members => members.roles.has("361534036298170398")).array.name}`, false)
            .addField("Developer",`${message.guild.members.filter(members => members.roles.has("361535544968347648")).map(members => members).join(", ")}`, false)
            .addField("Moderator",`${message.guild.members.filter(members => members.roles.has("361534180229906432")).map(members => members).join(", ")}`, false)
            .addField("Bots",`${message.guild.members.filter(members => members.roles.has("361534497990115328")).map(members => members).join(", ")}`, false)

            .setThumbnail(`${message.guild.member("227034133447180288").user.avatarURL}`)
            .setFooter(ToxbotFooter, NewtoxFooter)


            message.channel.send(embed)
        }

        //Musik Feature
        if(message.content ==`${BotSettings.prefix}join`) {
            if (message.member.voiceChannel) {
                const connection = await message.member.voiceChannel.join();
                message.reply(`Ich bin ${message.member.voiceChannel} beigetreten.`)
            } else {
                message.reply(`Du musst zuerst einem Voicechannel joinen!`)
            }
        }

        if(message.content ==`${BotSettings.prefix}leave`) {
                const connection =  message.member.voiceChannel.leave();
                message.reply(`Ich habe erfolgreich deinen Voicechannel verlassen.`)
            }
        
        if(message.content ==`${BotSettings.prefix}play`) {
            message.reply(`Bitte gib einen Song an!`)
        }

        if(message.content ==`${BotSettings.prefix}play PikaSong`) {
            const connection =  message.member.voiceChannel.join();
            const dispatcher = playFile('PikaSong.mp3');
        }

         //BotOff
         if(message.content ==`${BotSettings.prefix}shutdown`) {
            if(message.author.id == BotSettings.OwnerID) { 

            bot.destroy()    
            } else {
                message.channel.send(`Nur der Bot-Owner kann diesen Command nutzen. ${message.author}`)
            }     
        }

        //BotOn
        if(message.content ==`${BotSettings.prefix}setOnline`) {
            if(message.author.id == BotSettings.OwnerID) { 

            bot.login(BotSettings.token)    
            } else {
                message.channel.send(`Nur der Bot-Owner kann diesen Command nutzen. ${message.author}`)
            }     
        }
     

    }


});




bot.login(process.env.BOT_TOKEN)
