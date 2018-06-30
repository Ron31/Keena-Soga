const Discord = require("discord.js"),
      bot = new Discord.Client(),
      BotSettings = require("./botsettings.json"),
      fs = require("fs"),
     profile = JSON.parse(fs.readFileSync("profil/message.json","utf8"))
    
   

//Start-Up
bot.on("ready", async () => {
    //.discriminator ist die Zahl des Tags, die nach dem # kommt.
    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("online")//online, idle, dnd, invisible
    bot.user.setActivity(`${BotSettings.prefix}help | Version: 1.0 | ${bot.guilds.size} Server!`, {
        //Solltest du type: STREAMING nutzen, dann musst du bei url: "", nen Twitch-Kanal-Link angeben. Ansonsten kannst du das so lassen
        type: "PLAYING" //PLAYING, STREAMING, LISTENING, WATCHING
    })
    //Name + Avatar
    // bot.user.setUsername("Toxbot")
    // bot.user.setAvatar("")
});

bot.on("message", async message => {

    //Variablen
    var args = message.content.slice(BotSettings.prefix.length).trim().split(" "),
        command = args.shift(),
        msg = message.content.toLowerCase(),
        mention = message.mentions.members.first()
        FooterLogo = "https://cdn.discordapp.com/avatars/402483602094555138/9c65aed0d263922c1bb6812f77b4f86a.png?size=1024"
        EmbedFooter = "Bot des Newtox - Community Servers"
        
        
       
    //Emojis | Bei Emojis empfehle ich dir anstat const oder var let zu nutzen.
    let GlumandaHi = message.guild.emojis.find("name", "Glumanda_Hi")
    let partyparrot = message.guild.emojis.find("name", "party_parrot") 
       
    // //Welcome Message
    // bot.on("guildMemberAdd", async member=> {
    //     bot.channels.get("439880541043425290").send(`${member} Willkommen in der ${member.guild.name}! Bitte wirf einen Blick auf die <#406946551538253830> und benimm dich. \nWenn du fragen hast kannst du gerne auf die Mods, Supporter oder auch auf Newtox zugehen. \nEs schadet auch nicht einen blick in das <#427916685413187604> zu werfen ${bot.emojis.find("name","Glumanda_Hi")}`)
    //     member.addRole("406952857917456395")
    // })


     

    // //Goodbye Message
    // bot.on("guildMemberRemove", async member =>{
    //     bot.channels.get("439880541043425290").send(`${member.user.username}#${member.user.discriminator} hat die ${member.guild.name} verlassen...`) 
    // }); 



    //Clear
    if(command === "clear") {
       
        if(!message.member.hasPermission("MANAGE_MESSAGES")) 
            return message.reply("Sorry, du hast keine Rechte um diesen Befehl auszuführen");
        
        const deleteCount = parseInt(args[0], 10);
    
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    
          return message.reply("Bitte gib eine Zahl zwischen 2 und 100 an.");
    
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
    
        message.channel.bulkDelete(fetched)


        
    
          .catch(error => message.reply(`Konnte Nachrichten nicht löschen wegen: ${error}`));
    
      } 
    

      //Musik Feature
      if(message.content ==`${BotSettings.prefix}connect`) {
        if(message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
          } else {
            message.reply('Du musst zuerst einem Voice Channel joinen!');
          }
        }

        if(message.content ==`${BotSettings.prefix}disconnect`) {
                const connection = await message.member.voiceChannel.leave();
              } 

        if(message.startsWith ==`${BotSettings.prefix}play`) {
            if(!args[0]) return message.channel.send(`${message.author} Aktuell gibt es folgende Songs: \ntx!play PikaSong`)
            const connection =  message.member.voiceChannel.join();
            if(args[0] == "PikaSong") {
                const dispatcher = playFile('./PikaSong.mp3');
                message.channel.send("Ich spiele nun folgenden Song: \n`PikaSong`")
            }
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



    //Kick
    if(command === "kick") {
    
        if(!message.member.hasPermission("KICK_MEMBERS") )
          return message.reply("Sorry, du hast keine Rechte um diesen Befehl auszuführen");
    
        
    
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
        if(!member)
    
          return message.reply(` Bitte gib ein Mitglied an, das sich auf dem Server befindet.`);
    
        if(!member.kickable) 
    
          return message.reply("Dieses Mitglied kann ich nicht kicken, tut mir leid.");
    
    
        let reason = args.slice(1).join(' ');
    
        if(!reason) reason = `${message.author} Bitte gib einen Grund an!`;
    
        await member.kick(reason)
    
    
        message.reply(`${member.user.tag} wurde wegen ${reason} vom Server gekickt`);
    
    
    
      }
      //Bann
      if(command === "ban") {

        if(!message.member.hasPermission("BAN_MEMBERS") )
          return message.reply("Sorry, du hast keine Rechte um diesen Befehl auszuführen");
    
        
    
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
        if(!member)
    
          return message.reply(` Bitte gib ein Mitglied an, das sich auf dem Server befindet.`);
    
        if(!member.bannable) 
    
          return message.reply("Dieses Mitglied kann ich nicht bannen, tut mir leid.");
    
    
        let reason = args.slice(1).join(' ');
    
        if(!reason) reason = `${message.author} Bitte gib einen Grund an!`;
    
        await member.ban(reason)
    
    
        message.reply(`${member.user.tag} wurde wegen ${reason} vom Server gebannt`);
      }  

    //Verbotene Zeichen/Wörter
    
       


    // if(message.content.includes("卍")) {
    //     message.delete()
    //     message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
    //     return
    // }
    // if(message.content.includes("卐")) {
    //     message.delete()
    //     message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
    //     return
    // }
    // if(message.content.includes("ϟϟ")) {
    //     message.delete()
    //     message.channel.send(`Das verwenden rassistischer Zeichen ist verboten! ${message.author}`)
    //     return
    // }


    

    //Schutz vor Bots
    if(!message.author.bot) {


        //Help
        if(message.content ==`${BotSettings.prefix}help`) { 
            var embed = new Discord.RichEmbed() 
            
            .setColor("#518ef1")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier siehst du alle Commands des Bots.")
            .addField("tx!Rollen","Zeig dir alle Rollen die du dir adden kannst.")
            .addField("tx!Nachrichten","Zeigt dir die Anzahl der Nachrichten an, die du bis jetzt versendet hast.\nDu kannst dies auch bei anderen sehen, dazu einfach tx!Nachrichten **(Erwähnung)** schreiben.")
            .addField("tx!botinfo","Gibt euch einige Informationen über den Bot")
            .addField("tx!Team","Gibt dir Informationen über die aktuellen Teammitglieder")
            .addField("tx!Teamhelp","Zeigt ein paar Moderations Befehle \n (Nur für Teammitglieder)")
            .addField("tx!conbotprofil","Zeigt dir hilfreiche Befehle zu deinem eigenen Profil")
            .addField("tx!Fun", "Zeigt dir ein bisschen Quatch den man mit dem Bot anstellen kann")
            .addField("tx!invite","Gibt dir eine Einladung zu dem Server von Newtox, \n**teilen ist erlaubt :P**")
            .addField("tx!Serverinfo","Gibt dir viele Informationen zu dem Server")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/456150799316287499/AskForHelp_Logo_2.png")
            message.channel.send(embed)
        }

        //OPadd
        if(command.toLowerCase() == `opgiverole`) {
        if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) {

            var Rolle = args.join(" ")
            if(Rolle) {
                if(message.guild.roles.find("name", Rolle)) {
                    message.member.addRole(message.guild.roles.find("name", Rolle).id).catch(err => {
                        if(err) message.channel.send(`Hm. Da ist was schiefgelaufen. ${message.author}.\n\nError-Bericht: ${err}`)
                    });
                    message.channel.send(`Du hast jetzt die Rolle ${Rolle}. ${message.author}`)
                } else {
                    message.channel.send(`Diese Rolle existiert auf dem Server nicht. ${message.author}`)
                }
            } else {
                message.channel.send(`Bitte gebe eine Rolle an. ${message.author}`)
            } 
        } else {
            message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)
        }
        
    }

    //Opremove
    if(command.toLowerCase() == `opremoverole`) {
    if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) {
            if(Rolle) {
                if(message.guild.roles.find("name", Rolle)) {
                    message.member.removeRole(message.guild.roles.find("name", Rolle).id).catch(err => {
                        if(err) message.channel.send(`Hm. Da ist was schiefgelaufen. ${message.author}.\n\nError-Bericht: ${err}`)
                    });
                    message.channel.send(`Dir wurde die Rolle ${Rolle} entfernt. ${message.author}`)
                } else {
                    message.channel.send(`Diese Rolle existiert auf dem Server nicht. ${message.author}`)
                }
            } else {
                message.channel.send(`Bitte gebe eine Rolle an. ${message.author}`)
            }
        } else {
            message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)
        }
        
    }


        //RollenID
        if (command == "roleID") {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) { 
            var Rolle = args.join (" ")
            if (!Rolle) return  message.channel.send(`${message.author} Bitte gib eine verfügbare Rolle an.`)
            if(Rolle) {
                if(message.guild.roles.find("name",Rolle)) {
                    message.channel.send(`Die ID der Rolle ${Rolle} ist ${message.guild.roles.find("name",Rolle).id}`) 

                }
            } 
        } else {
            message.channel.send(`Nur der Bot-Owner oder eine Person mit Admin Rechten kann diesen Command nutzen. ${message.author}`)
        }
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

        if(message.content ==`${BotSettings.prefix}Nachrichten`) {
            message.channel.send(`${message.author} Du hast bis jetzt ${profile[message.author.id] .Nachricht} Nachrichten versendet.`)
        }

        if(message.content ==`${BotSettings.prefix}Nachrichten ${mention}`) {
            message.channel.send(`**${mention.displayName}** hat bis jetzt ${profile[mention.id] .Nachricht} Nachrichten versendet.`)
        } 





        //Toxbot
        if(message.content == `${BotSettings.prefix}botinfo`) {
            var embed = new Discord.RichEmbed() 
            .setColor("#85167c")
            .setTitle("Info über Toxbot")
            .addField("Name und Tag",`**${bot.user.username}**#${bot.user.discriminator}`,false)
            .addField("Entwickler:",`**${message.guild.member("402483602094555138").user.username}**#${message.guild.member("402483602094555138").user.discriminator}`, true)
            .addField("Programmiert mit:","Discord.js 11.3.2",false)
            .addField("Prefix des Bots","Der Prefix des Bots ist **tx!**", false)
            .addField("Erstellungsdatum","Der Bot wurde am **22 März 2018** erstellt!",false)
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setThumbnail(bot.user.avatarURL)
            
            

            message.channel.send(embed)
            
            
        }

        

        //Rollen Adds
        if(message.content ==`${BotSettings.prefix}pc`) { 
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580045098024970`)
            message.channel.send(`${message.author} Ich habe dir die pc Rolle hinzugefügt`)
        }

        

        
        if(message.content ==`${BotSettings.prefix}ps4`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580070112985089`)
            message.channel.send(`${message.author} Ich habe dir die ps4 Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}NintendoSwitch`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`414010109237133312`)
            message.channel.send(`${message.author} Ich habe dir die Nintendo Switch Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}xbox`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580109417676800`)
            message.channel.send(`${message.author} Ich habe dir die xbox Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}nsfw`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`429035655188709377`)
            message.channel.send(`${message.author} Ich habe dir die nsfw Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Handy`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`414010034582716416`)
            message.channel.send(`${message.author} Ich habe dir die Handy Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Gamer`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413663967051907072`)
            message.channel.send(`${message.author} Ich habe dir die Gamer Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}MuteChannel`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`407089763137486859`)
            message.channel.send(`${message.author} Ich habe dir die Mute Channel Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Splatoon2`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`417278894069121045`)
            message.channel.send(`${message.author} Ich habe dir die Splatoon 2 Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}RocketLeague`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`417271014146441228`)
            message.channel.send(`${message.author} Ich habe dir die Rocket League Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Overwatch`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`415897143350657034`)
            message.channel.send(`${message.author} Ich habe dir die Overwatch Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Fortnite`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413579568474095626`)
            message.channel.send(`${message.author} Ich habe dir die Fortnite Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}CSGO`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`438622438218268672`)
            message.channel.send(`${message.author} Ich habe dir die CSGO Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Minecraft`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`421711163873820674`)
            message.channel.send(`${message.author} Ich habe dir die Minecraft Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}12+`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361825113243649`)
            message.channel.send(`${message.author} Ich habe dir die 12+ Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}14+`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361824005947413`)
            message.channel.send(`${message.author} Ich habe dir die 14+ Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}16+`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361819627225108`)
            message.channel.send(`${message.author} Ich habe dir die 16+ Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}18+`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361816989138965`)
            message.channel.send(`${message.author} Ich habe dir die 18+ Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Männlich`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`460860422250168320`)
            message.channel.send(`${message.author} Ich habe dir die Männlich Rolle hinzugefügt`)
        }

        if(message.content ==`${BotSettings.prefix}Weiblich`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`460860488155267072`)
            message.channel.send(`${message.author} Ich habe dir die Weiblich Rolle hinzugefügt`)
        }

        


        //Rollen Removes
       
        if(message.content ==`${BotSettings.prefix}pcremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580045098024970`)
            message.channel.send(`${message.author} Ich habe dir die pc Rolle entfernt`)
        }


        if(message.content ==`${BotSettings.prefix}ps4remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580070112985089`)
            message.channel.send(`${message.author} Ich habe dir die ps4 Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}NintendoSwitchremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`414010109237133312`)
            message.channel.send(`${message.author} Ich habe dir die Nintendo Switch Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}xboxremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580109417676800`)
            message.channel.send(`${message.author} Ich habe dir die xbox Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}nsfwremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`429035655188709377`)
            message.channel.send(`${message.author} Ich habe dir die nsfw Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Handyremove`) { 
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`414010034582716416`)
            message.channel.send(`${message.author} Ich habe dir die Handy Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Gamerremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413663967051907072`)
            message.channel.send(`${message.author} Ich habe dir die Gamer Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}MuteChannelremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`407089763137486859`)
              message.channel.send(`${message.author} Ich habe dir die Mute Channel Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Splatoon2remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`417278894069121045`)
            message.channel.send(`${message.author} Ich habe dir die Splatoon 2 Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}RocketLeagueremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.remvoveRole(`417271014146441228`)
            message.channel.send(`${message.author} Ich habe dir die Rocket League Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Overwatchremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`415897143350657034`)
            message.channel.send(`${message.author} Ich habe dir die Overwatch Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Fortniteremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413579568474095626`)
            message.channel.send(`${message.author} Ich habe dir die Fortnite Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}CSGOremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`438622438218268672`)
            message.channel.send(`${message.author} Ich habe dir die CSGO Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Minecraftremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`421711163873820674`)
            message.channel.send(`${message.author} Ich habe dir die Minecraft Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}12+remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361816989138965`)
            message.channel.send(`${message.author} Ich habe dir die 12+ Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}14+remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361824005947413`)
            message.channel.send(`${message.author} Ich habe dir die 14+ Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}16+remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361819627225108`)
            message.channel.send(`${message.author} Ich habe dir die 16+ Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}18+remove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361816989138965`)
            message.channel.send(`${message.author} Ich habe dir die 18+ Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Männlichremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`460860422250168320`)
            message.channel.send(`${message.author} Ich habe dir die Männlich Rolle entfernt`)
        }

        if(message.content ==`${BotSettings.prefix}Weiblichremove`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`460860488155267072`)
            message.channel.send(`${message.author} Ich habe dir die Weiblich Rolle entfernt`)
        }

        





        //Wichtige Befehle
        if(message.content ==`${BotSettings.prefix}Rollen`) { 

            var embed = new Discord.RichEmbed()
            .setColor("#518ef1")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr alle verfügbaren Rollen")
            .setDescription("tx!pc \ntx!ps4 \ntx!NintendoSwitch \ntx!xbox \ntx!nsfw \ntx!Handy \ntx!Gamer \ntx!MuteChannel \ntx!Splatoon2 \ntx!RocketLeague \ntx!Overwatch \ntx!Fortnite \ntx!CSGO \ntx!Minecraft \ntx!12+ \ntx!14+ \ntx!16+ \ntx!18+ \ntx!Männlich \ntx!Weiblich")
            .addBlankField()
            .addField("Um die Rolle wieder zu entfernen gebt ihr genau das selbe wie oben ein, nur mit `remove` dahinter. Das würde dann so aussehen: `tx!pcremove`", "owo")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/457499833121636352/Discord.jpg")
            message.channel.send(embed)
        }
            
        if(message.content ==`${BotSettings.prefix}conbotprofil`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")

            message.channel.send("Hier findest du Hilfe und Beispiele zu deinem Profil. \n FC: ?profile switch 6969-6969-6969 \n Beschreibung: ?profile description (Text) `du fügst eine Beschreinung hinzu!` \n Profil: ?profile rufst du dein Profil auf. Und mit ?profile (Name) das Profil eines anderen.`")
        }

        if(message.content ==`${BotSettings.prefix}Teamhelp`) { 
                    
            var embed = new Discord.RichEmbed()
            .setColor("#ff9000")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr einige Moderations Befehle",)
            .addField("tx!kick", "Kickt den markierten Nutzer")
            .addField("tx!ban","Bannt den markierten Nutzer")
            .addField("tx!opgiverole","Gibt euch eine Bestimmte Rolle")
            .addField("tx!opremoverole","Entfernt euch eine Bestimmte Rolle")
            .addField("tx!clear","Löscht eine beliebige Anzahl an Nachrichten")
            
            message.channel.send(embed)
        }

        
                

        if(message.content == `${BotSettings.prefix}Team`) {
            if(message.guild.id!=`406946551538253828`) return message.channel.send("Dieser Command ist nur in der Newtox - Community verfügbar \nhttps://discord.gg/HDbRWvG")
            var embed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr alle Teammitglieder", true)
            .addField("Owner","<@402483602094555138>", false )
            .addField("Admins","<@327538014630838282> \n<@402072495743696897>", false)
            .addField("Moderatoren", "<@403540876585861130> \n<@162149564101427200>", false)
            .addField("Youtube Moderatoren","*Aktuell gibt es keine Youtube Moderatoren* ",false)
            .addField("Test Moderatoren","<@281440097855995904> \n<@413323318461071360>", false)
            .addField("Supporter","*Aktuell gibt es keine Supporter* ", false)
            .addField("Test Supporter","*Vielleicht ja du ( ͡° ͜ʖ ͡°) , für mehr schaut in <#444501822351212556>* ", false)

            message.channel.send(embed)
        }

        //Serverinfo
        if(message.content ==`${BotSettings.prefix}Serverinfo`) {
            
    let guild = message.member.guild
    let membs = guild.members
    let chans = guild.channels
    let roles = guild.roles
    let owner = guild.owner
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    

    emb = new  Discord.RichEmbed()
        .setTitle(guild.name + ' - Server Info')
        .setColor(guild.owner.highestRole.color)
        .addField('ID', `\`\`\`${guild.id}\`\`\``)
        .addField('Owner', `<@${owner.id}> - ${owner.user.tag} *(${owner.id})*`)
        .addField('Created At', guild.createdAt)
        .addField('Region', guild.region)
        .addField(
            'Members',
            '```\n' +
            `Total Members:   ${membs.array().length}  (${membs.filter(m => m.presence.status != 'offline').array().length} online)\n` +
            `Real Members:    ${membs.filter(m => !m.user.bot).array().length}  (${membs.filter(m => !m.user.bot && m.presence.status != 'offline').array().length} online)\n` +

            `Bots:            ${membs.filter(m => m.user.bot).array().length}  (${membs.filter(m => m.user.bot && m.presence.status != 'offline').array().length} online)\n` +
            '```\n'
        )
        .addField(
            'Channels',
            '```\n' +
            `Text Channels:    ${chans.filter(c => c.type == 'text').array().length}\n` +
            `Voice Channels:   ${chans.filter(c => c.type == 'voice').array().length}\n` +
            `Categories:       ${chans.filter(c => c.type == `categories`).array().length}\n` +
            '                  -------\n' +
            `                  ${chans.array().length}\n` +
            '```'
        )

    // if (guild.emojis.array().length)
    //     emb.addField('Emojis', emojiList)

    // if (guild.iconURL)
    //     emb.setThumbnail(guild.iconURL)

    message.channel.send('', emb)

    }

        
        //Fun Befehle

        if(message.content == `${BotSettings.prefix}Fun`) {
            var embed = new Discord.RichEmbed()
            .setColor("#71ec07")
            .setTimestamp()
            .setTitle("Hier seht ihr alle Fun Befehle", true)
            .addBlankField()
            .addField("tx!Nudes", "schickt ein lustiges .gif", false)
            .addField("tx!GiveAF", "schickt ein lustiges Meme", false)
            .addField("tx!splatoon2perks", "zeigt die Vor und Nachteile der Marken in Splatoon 2", false)
            .addField("tx!binNewtox", "*schaut selber was passiert ( ͡° ͜ʖ ͡°)*", false)
            .setDescription("Falls ihr Ideen für weitere lustige Commands habt, dürft ihr euch gerne bei <@402483602094555138> melden.")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/457489426784845825/fun.png")
            .setFooter(EmbedFooter, FooterLogo)

            message.channel.send(embed)

        }
      
        if(message.content ==`${BotSettings.prefix}splatoon2perks`) {
            message.channel.send(`https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/07/Splatoon-2-Abilities-List.png`)
        }


        if(message.content == `${BotSettings.prefix}pingtox`)
            message.channel.send(`<@402483602094555138> <@402483602094555138> <@402483602094555138> <@402483602094555138> <@402483602094555138>`)


        if(message.content ==`${BotSettings.prefix}Party`) {
            message.channel.send(`${partyparrot}`)
        }
      
            
        if(message.content == `${BotSettings.prefix}Nudes`) {
            message.channel.send(`https://www.tenor.co/IQNs.gif`)
        }

        if(message.content == `${BotSettings.prefix}GiveAF`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/450318562137997312/453490497567195137/tumblr_oja72hkNPs1vgp6aeo1_500.jpg`)
        }

        if(message.content == `${BotSettings.prefix}binNewtox`) {
        if(message.author.id == "402483602094555138") {
            message.channel.send(`Hey ${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}, mein Meister :3`)
            
        }  else {
            message.channel.send(`${message.author}, was willst du von mir **?!** du bist nicht Newtox qwq`)
        }
            
        }

        if(message.content ==`${BotSettings.prefix}invite`) {
            message.channel.send(`Hier ist die Einladung zu Newtox seinem Server \nhttps://discord.gg/HDbRWvG`)
        }

        

    }

       
    

});

bot.login(process.env.BOT_TOKEN)
