const Discord = require("discord.js"),
      bot = new Discord.Client(),
      BotSettings = require("./botsettings.json"),
      fs = require("fs"),
     profile = JSON.parse(fs.readFileSync("profil/message.json","utf8"))

    

   



//Start-Up

bot.on("ready", async () => {


    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("online")//online, idle, dnd, invisible
    bot.user.setActivity(`${BotSettings.prefix}help | Version: 1.1 | ${bot.guilds.size} Server!`, {
        //Solltest du type: STREAMING nutzen, dann musst du bei url: "", nen Twitch-Kanal-Link angeben.
        type: "PLAYING" //PLAYING, STREAMING, LISTENING, WATCHING
    })
    //Name + Avatar
    // bot.user.setUsername("Toxbot")
    // bot.user.setAvatar("")
});









    //Goodbye Message
    bot.on("guildMemberRemove", async member => { 
        if(member.guild.id == `406946551538253828`) {
        bot.channels.get("439880541043425290").send(`${member.user.username}#${member.user.discriminator} hat die ${member.guild.name} verlassen...`)
        }
    });
    bot.on("message", async message => { }) 





    //Welcome Message
    bot.on("guildMemberAdd", async member => { 
        if(member.guild.id == `406946551538253828`) {
        bot.channels.get("439880541043425290").send(`${member} Willkommen in der ${member.guild.name}! Bitte wirf einen Blick auf die <#406946551538253830> und benimm dich. \nWenn du fragen hast kannst du gerne auf die Mods, Supporter oder auch auf Newtox zugehen. \nEs schadet auch nicht einen blick in das <#427916685413187604> zu werfen ${bot.emojis.find("name","Glumanda_Hi")}`)
            member.addRole("406952857917456395")
        }
    });
    bot.on("message", async message => { })


    bot.on("message", async message => {


    //Variablen
    var args = message.content.slice(BotSettings.prefix.length).trim().split(" "),

        command = args.shift(),
        msg = message.content.toLowerCase(),
        mention = message.mentions.members.first()
        FooterLogo = "https://cdn.discordapp.com/attachments/406957187869442048/467368016250667018/MAIN.png"
        EmbedFooter = "Bot des Newtox - Community Servers | V1.1"

        

       

    //Emojis | Bei Emojis empfehle ich dir anstat const oder var let zu nutzen.
    let GlumandaHi = message.guild.emojis.find("name", "Glumanda_Hi")
    let partyparrot = message.guild.emojis.find("name", "party_parrot") 
    let Instagram = message.guild.emojis.find("name","instagram")

       



    

  

    //Userinfo
    if(message.content ==`${BotSettings.prefix}Userinfo`) {

        var embed = new Discord.RichEmbed()

        .setColor(message.member.highestRole.color)
        .setTitle(` Userinfo von ${message.author.username}`)
        .addField(`ID`,`${message.author.id}`,true)
        .addField(`Name`, `${message.author.username}`)

        if(message.author.username != message.member.displayName) {
            embed.addField(`Nickname`, `${message.member.displayName}`)
        } 

        embed.addField("Account erstellt am", `${message.member.user.createdAt.toString().split(" ")[2]} ${message.member.user.createdAt.toString().split(" ")[1]} ${message.member.user.createdAt.toString().split(" ")[3]}`, false) 

          embed.addField("Server beigtreten am", `${message.member.joinedAt.toString().split(" ")[2]} ${message.member.joinedAt.toString().split(" ")[1]} ${message.member.joinedAt.toString().split(" ")[3]}`, false) 

        .setThumbnail(`${message.author.avatarURL}`)

        message.channel.send(embed)

    }



    if(message.content ==`${BotSettings.prefix}Userinfo ${mention}`) {   

        var embed = new Discord.RichEmbed()

        .setColor(mention.highestRole.color)
        .setTitle(` Userinfo von ${mention.user.username}`)
        .addField(`ID`,`${mention.id}`,true)
        .addField(`Name`, `${mention.user.username}`)

        if(mention.user.username != mention.displayName) {
            embed.addField(`Nickname`, `${mention.displayName}`)

        }

        embed.addField("Account erstellt am", `${mention.user.createdAt.toString().split(" ")[2]} ${mention.user.createdAt.toString().split(" ")[1]} ${mention.user.createdAt.toString().split(" ")[3]}`, false) 

         embed.addField("Server beigtreten am", `${mention.joinedAt.toString().split(" ")[2]} ${mention.joinedAt.toString().split(" ")[1]} ${mention.joinedAt.toString().split(" ")[3]}`, false) 

        .setThumbnail(`${mention.user.avatarURL}`)


        message.channel.send(embed)

    }


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
                const dispatcher = playFile('Toxbot/PikaSong.mp3');
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

        if(member.user.id == BotSettings.OwnerID) return message.channel.send(`Der Bot-Owner kann **nicht** gekickt werden!`)

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

        if(member.user.id == BotSettings.OwnerID) return message.channel.send(`Der Bot-Owner kann **nicht** gebannt werden!`)

        await member.ban(reason)
    
        message.reply(`${member.user.tag} wurde wegen ${reason} vom Server gebannt`);

      }  



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



    // if(message.content.includes("discord.gg")) {
    //     if (!message.member.roles.some(r => ['406951441182359553', '406951345460084736', '406951586326118420'].includes(r.id))) return
    //     message.delete()
    //     message.channel.send(`Soforteinladungen sind hier nicht erlaubt! ${message.author}`)
    //     return
    // }

    



    //Schutz vor Bots
    if(!message.author.bot) {


        //Help
        if(message.content ==`${BotSettings.prefix}help`) { 
            var embed = new Discord.RichEmbed() 

            .setColor("#71ec07")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier siehst du alle Commands des Bots.")
            .addField(`${BotSettings.prefix}Rollen`,"Zeig dir alle Rollen die du dir adden kannst.")
            .addField(`${BotSettings.prefix}Nachrichten`,`Zeigt dir die Anzahl der Nachrichten an, die du bis jetzt versendet hast.\nDu kannst dies auch bei anderen sehen, dazu einfach ${BotSettings.prefix}Nachrichten **(Erwähnung)** schreiben.`)
            .addField(`${BotSettings.prefix}botinfo`,"Gibt euch einige Informationen über den Bot")
            .addField(`${BotSettings.prefix}Newtox`,`Hier erfahrt ihr ein paar Informationen über den Bot-Owner`,false)
            .addField(`${BotSettings.prefix}Userinfo`,`Gibt dir einige Informationen zu deinem Account. \nDu kannst dies auch bei anderen sehen, dazu einfach ${BotSettings.prefix}Userinfo **(Erwähnung)** schreiben.`)
            .addField(`${BotSettings.prefix}Team`,"Gibt dir Informationen über die aktuellen Teammitglieder")
            .addField(`${BotSettings.prefix}Teamhelp`,"Zeigt ein paar Moderations Befehle \n (Nur für Teammitglieder)")
            .addField(`${BotSettings.prefix}conbotprofil`,"Zeigt dir hilfreiche Befehle zu deinem eigenen Profil")
            .addField(`${BotSettings.prefix}Fun`, "Zeigt dir ein bisschen Quatch den man mit dem Bot anstellen kann")
            .addField(`${BotSettings.prefix}invite`,"Gibt dir eine Einladung zu dem Server von Newtox, \n**teilen ist erlaubt :P**")
            .addField(`${BotSettings.prefix}botinvite`,"Gibt euch einen Link womit ihr den Bot auf euren Server einladen könnt.",false)
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/456150799316287499/AskForHelp_Logo_2.png")
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
            message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)
        }

        

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
            message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)
        }

        
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
            message.channel.send(`Nur der Bot-Owner oder eine Person mit **Rollen Verwalten** Rechten kann diesen Command nutzen. ${message.author}`)
        }
        return
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
        message.channel.send(`Nur der Bot-Owner oder eine Person mit **Emojis Verwalten** Rechten kann diesen Command nutzen. ${message.author}`)
    }
    return
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
            message.channel.send(`Nur der Bot-Owner oder eine Person mit **Rollen Verwalten** Rechten kann diesen Command nutzen. ${message.author}`)
        }
        return
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
            message.channel.send(`${message.author} Du hast bis jetzt **${profile[message.author.id] .Nachricht}** Nachrichten versendet.`)
        } 



        if(message.content ==`${BotSettings.prefix}Nachrichten ${mention}`) {
            message.channel.send(`**${mention.displayName}** hat bis jetzt **${profile[mention.id] .Nachricht}** Nachrichten versendet.`)
        } 











        //Toxbot
        if(message.content == `${BotSettings.prefix}botinfo`) {

            var embed = new Discord.RichEmbed() 

            .setColor("#ff9564")
            .setTitle("Info über Toxbot")
            .addField("Name und Tag",`**${bot.user.username}**#${bot.user.discriminator}`,false)
            .addField("Entwickler:",`**${message.guild.member("402483602094555138").user.username}**#${message.guild.member("402483602094555138").user.discriminator}`, true)
            .addField("Programmiert mit:","Discord.js 11.3.2",false)
            .addField(`Prefix des Bots`,`Der Prefix des Bots ist **${BotSettings.prefix}**`, false)
            .addField("Erstellungsdatum","Der Bot wurde am **22 März 2018** erstellt!",false)
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setThumbnail(bot.user.avatarURL)

    

            message.channel.send(embed)

        }


        //Newtox
        if(message.content ==`${BotSettings.prefix}Newtox`) {

            var embed = new Discord.RichEmbed()

            .setColor("#ccf0de")
            .setTitle("Hier erfahrt ihr ein paar Informationen über den Bot-Owner")
            .setTimestamp()
            .addField(`Name`,`Justin`,true)
            .addField(`Nickname`,`${message.guild.member("402483602094555138").user.username}`,false)
            .addField(`Alter`,`Justin ist 14 Jahre alt.`,false)
            .addField(`Wann hat Newtox mit dem programmieren angefangen?`,`Newtox hat mit dem programmieren am **20 März 2018** angefangen.`,false)
            .setFooter(EmbedFooter,FooterLogo)
            .setThumbnail(`${message.guild.members.get("402483602094555138").user.avatarURL}`)


            message.channel.send(embed)

        }     

          



        //Rollen Adds

        if(message.content ==`${BotSettings.prefix}pc`) { 
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580045098024970`)
            message.channel.send(`${message.author} Ich habe dir die pc Rolle hinzugefügt`)
        }



        

        if(message.content ==`${BotSettings.prefix}ps4`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580070112985089`)
            message.channel.send(`${message.author} Ich habe dir die ps4 Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}NintendoSwitch`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`414010109237133312`)
            message.channel.send(`${message.author} Ich habe dir die Nintendo Switch Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}xbox`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413580109417676800`)
            message.channel.send(`${message.author} Ich habe dir die xbox Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}nsfw`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`429035655188709377`)
            message.channel.send(`${message.author} Ich habe dir die nsfw Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Handy`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`414010034582716416`)
            message.channel.send(`${message.author} Ich habe dir die Handy Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Gamer`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`468000600848596998`)
            message.channel.send(`${message.author} Ich habe dir die Gamer Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}MuteChannel`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`407089763137486859`)
            message.channel.send(`${message.author} Ich habe dir die Mute Channel Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Splatoon2`) {
            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`417278894069121045`)
            message.channel.send(`${message.author} Ich habe dir die Splatoon 2 Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}RocketLeague`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`417271014146441228`)
            message.channel.send(`${message.author} Ich habe dir die Rocket League Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Overwatch`) {
            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`415897143350657034`)
            message.channel.send(`${message.author} Ich habe dir die Overwatch Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Fortnite`) {
            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`413579568474095626`)
            message.channel.send(`${message.author} Ich habe dir die Fortnite Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}CSGO`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`438622438218268672`)
            message.channel.send(`${message.author} Ich habe dir die CSGO Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Minecraft`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`421711163873820674`)
            message.channel.send(`${message.author} Ich habe dir die Minecraft Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}12+`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361825113243649`)
            message.channel.send(`${message.author} Ich habe dir die 12+ Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}14+`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`464823272479916052`)
            message.channel.send(`${message.author} Ich habe dir die 14+ Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}16+`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361819627225108`)
            message.channel.send(`${message.author} Ich habe dir die 16+ Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}18+`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`459361816989138965`)
            message.channel.send(`${message.author} Ich habe dir die 18+ Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Männlich`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`460860422250168320`)
            message.channel.send(`${message.author} Ich habe dir die Männlich Rolle hinzugefügt`)
        }



        if(message.content ==`${BotSettings.prefix}Weiblich`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.addRole(`460860488155267072`)
            message.channel.send(`${message.author} Ich habe dir die Weiblich Rolle hinzugefügt`)
        }

        //Rollen Removes

        if(message.content ==`${BotSettings.prefix}pcremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580045098024970`)
            message.channel.send(`${message.author} Ich habe dir die pc Rolle entfernt`)
        }


        if(message.content ==`${BotSettings.prefix}ps4remove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580070112985089`)
            message.channel.send(`${message.author} Ich habe dir die ps4 Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}NintendoSwitchremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`414010109237133312`)
            message.channel.send(`${message.author} Ich habe dir die Nintendo Switch Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}xboxremove`) {
            if(message.guild.id!==`406946551538253828`) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413580109417676800`)
            message.channel.send(`${message.author} Ich habe dir die xbox Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}nsfwremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`429035655188709377`)
            message.channel.send(`${message.author} Ich habe dir die nsfw Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Handyremove`) { 
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`414010034582716416`)
            message.channel.send(`${message.author} Ich habe dir die Handy Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Gamerremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`468000600848596998`)
            message.channel.send(`${message.author} Ich habe dir die Gamer Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}MuteChannelremove`) {
            if(message.guild.id!== ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`407089763137486859`)
              message.channel.send(`${message.author} Ich habe dir die Mute Channel Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Splatoon2remove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`417278894069121045`)
            message.channel.send(`${message.author} Ich habe dir die Splatoon 2 Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}RocketLeagueremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`417271014146441228`)
            message.channel.send(`${message.author} Ich habe dir die Rocket League Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Overwatchremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`415897143350657034`)
            message.channel.send(`${message.author} Ich habe dir die Overwatch Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Fortniteremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`413579568474095626`)
            message.channel.send(`${message.author} Ich habe dir die Fortnite Rolle entfernt`)

        }



        if(message.content ==`${BotSettings.prefix}CSGOremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`438622438218268672`)
            message.channel.send(`${message.author} Ich habe dir die CSGO Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Minecraftremove`) {

            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`421711163873820674`)
            message.channel.send(`${message.author} Ich habe dir die Minecraft Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}12+remove`) {
            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361825113243649`)
            message.channel.send(`${message.author} Ich habe dir die 12+ Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}14+remove`) {
            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`464823272479916052`)
            message.channel.send(`${message.author} Ich habe dir die 14+ Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}16+remove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361819627225108`)
            message.channel.send(`${message.author} Ich habe dir die 16+ Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}18+remove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`459361816989138965`)
            message.channel.send(`${message.author} Ich habe dir die 18+ Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Männlichremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`460860422250168320`)
            message.channel.send(`${message.author} Ich habe dir die Männlich Rolle entfernt`)
        }



        if(message.content ==`${BotSettings.prefix}Weiblichremove`) {
            if(message.guild.id!== BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")
            message.member.removeRole(`460860488155267072`)
            message.channel.send(`${message.author} Ich habe dir die Weiblich Rolle entfernt`)
        }

        //Wichtige Befehle
        if(message.content ==`${BotSettings.prefix}Rollen`) { 

            var embed = new Discord.RichEmbed()
            .setColor("#3E83A7")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr alle verfügbaren Rollen")
            .setDescription(`${BotSettings.prefix}pc \n${BotSettings.prefix}ps4 \n${BotSettings.prefix}NintendoSwitch \n${BotSettings.prefix}xbox \n${BotSettings.prefix}nsfw \n${BotSettings.prefix}Handy \n${BotSettings.prefix}Gamer \n${BotSettings.prefix}MuteChannel \n${BotSettings.prefix}Splatoon2 \n${BotSettings.prefix}RocketLeague \n${BotSettings.prefix}Overwatch \n${BotSettings.prefix}Fortnite \n${BotSettings.prefix}CSGO \n${BotSettings.prefix}Minecraft \n${BotSettings.prefix}12+ \n${BotSettings.prefix}14+ \n${BotSettings.prefix}16+ \n${BotSettings.prefix}18+ \n${BotSettings.prefix}Männlich \n${BotSettings.prefix}Weiblich`)
            .addBlankField()
            .addField("Um die Rolle wieder zu entfernen gebt ihr genau das selbe wie oben ein, nur mit `remove` dahinter. Das würde dann so aussehen: `tx!pcremove`", "owo")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/457499833121636352/Discord.jpg")

            message.channel.send(embed)

        }

            

        if(message.content ==`${BotSettings.prefix}conbotprofil`) {

            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")



            message.channel.send("Hier findest du Hilfe und Beispiele zu deinem Profil. \n FC: ?profile switch 6969-6969-6969 \n Beschreibung: ?profile description (Text) `du fügst eine Beschreinung hinzu!` \n Profil: ?profile rufst du dein Profil auf. Und mit ?profile (Name) das Profil eines anderen.`")

        }



        if(message.content ==`${BotSettings.prefix}Teamhelp`) { 

            var embed = new Discord.RichEmbed()
            .setColor("#ff9000")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr einige Moderations Befehle",)
            .addField(`${BotSettings.prefix}kick`, "Kickt den markierten Nutzer")
            .addField(`${BotSettings.prefix}ban`,"Bannt den markierten Nutzer")
            .addField(`${BotSettings.prefix}support`,"Gibt dir die Support Rolle, \nWomit andere Mitglieder euch markieren können. \nIhr könnt euch die Rolle auch wieder entfernen lassen, dazu einfach `tx!supportremove` eingeben")
            .addField(`${BotSettings.prefix}roleID`,"Gibt dir die ID einer bestimmten Rolle")
            .addField(`${BotSettings.prefix}emojiID`,"Gibt dir die ID eines bestimmten Emoji")
            .addField(`${BotSettings.prefix}opgiverole`,"Gibt euch eine Bestimmte Rolle")
            .addField(`${BotSettings.prefix}opremoverole`,"Entfernt euch eine Bestimmte Rolle")
            .addField(`${BotSettings.prefix}rolecolor`,"Gibt euch den Farbencode einer Bestimmten Rolle")
            .addField(`${BotSettings.prefix}clear`,"Löscht eine beliebige Anzahl an Nachrichten")

            message.channel.send(embed)

        }



        if(message.content ==`${BotSettings.prefix}support`) {
            if(message.member.roles.has("406951441182359553")  || message.member.roles.has("406951586326118420")  || message.member.roles.has("409338551990353923")  || message.member.roles.has("406951724612321290") || message.member.hasPermission("ADMINISTRATOR")) {
                message.member.addRole(`406951923477118997`)
                message.channel.send(`${message.author} Ich habe dir die Support Rolle hinzugefügt`) 
                 
            } else {
                message.channel.send(`${message.author} Dieser Befehl ist nur für Teammitglieder`)
            }
     }


     if(message.content ==`${BotSettings.prefix}supportremove`) {
        if(message.member.roles.has("406951441182359553")  || message.member.roles.has("406951586326118420")  || message.member.roles.has("409338551990353923")  || message.member.roles.has("406951724612321290") || message.member.hasPermission("ADMINISTRATOR")) {
            message.member.removeRole(`406951923477118997`)
            message.channel.send(`${message.author} Ich habe dir die Support Rolle entfernt`) 
             
        } else {
            message.channel.send(`${message.author} Dieser Befehl ist nur für Teammitglieder`)
        }
 }



        if(message.content == `${BotSettings.prefix}Team`) {

            if(message.guild.id!= BotSettings.ServerID) return message.channel.send("Dieser Command funktioniert nur auf dem Server vom Bot-Owner.")

            var embed = new Discord.RichEmbed()
            .setColor("#bb1700")
            .setTimestamp()
            .setFooter(EmbedFooter, FooterLogo)
            .setTitle("Hier seht ihr alle Teammitglieder", true)
            .addField("Owner","<@402483602094555138>", false )
            .addField("Admins","*Aktuell gibt es keine Admins*", false)
            .addField("Moderatoren", "<@162149564101427200> \n<@281440097855995904>", false)
            .addField("Youtube Moderatoren","*Aktuell gibt es keine Youtube Moderatoren* ",false)
            .addField("Test Moderatoren","*Aktuell gibt es keine Test Moderatoren*", false)
            .addField("Supporter","*Aktuell gibt es keine Supporter* ", false)
            .addField("Test Supporter","*Vielleicht ja du ( ͡° ͜ʖ ͡°) , für mehr schaut in <#444501822351212556>* ", false)


            message.channel.send(embed)
        }





        

        //Fun Befehle

        // //Vote-Test
        // if(command == "vote") {
        //     if(message.author.id == BotSettings.OwnerID) { 
        //         var vote = args.join(" ") 
        //         if(vote) {
        //             await message.channel.send(vote) 
        //             .then(() => message.react(`408349478857211906`))
        //         } else { 
        //             message.channel.send(`Was soll ich bitte sagen? ${message.author}`)
        //         }
        //     } else { 
        //         message.channel.send(`Nur der Bot-Owner kann diesen Command nutzen. ${message.author}`)

        //     }
            
        // }






        if(message.content == `${BotSettings.prefix}Fun`) {

            var embed = new Discord.RichEmbed()
            .setColor("#FF9000")
            .setTimestamp()
            .setTitle("Hier seht ihr alle Fun Befehle", true)
            .addBlankField()
            .addField(`${BotSettings.prefix}Nudes`, "schickt ein lustiges .gif", false)
            .addField(`${BotSettings.prefix}GiveAF`, "schickt ein lustiges Meme", false)
            .addField(`${BotSettings.prefix}splatoon2perks`, "zeigt die Vor und Nachteile der Marken in Splatoon 2", false)
            .addField(`${BotSettings.prefix}binNewtox`, "*schaut selber was passiert ( ͡° ͜ʖ ͡°)*", false)
            .addField(`${BotSettings.prefix}Inkling c`,`Zeigt euch einen coolen ${Instagram} Account`)
            .setDescription("Falls ihr Ideen für weitere lustige Commands habt, dürft ihr euch gerne bei <@402483602094555138> melden.")
            .setThumbnail("https://cdn.discordapp.com/attachments/451007157933047829/457489426784845825/fun.png")
            .setFooter(EmbedFooter, FooterLogo)

            message.channel.send(embed)
        }

      

        if(message.content ==`${BotSettings.prefix}splatoon2perks`) {
            message.channel.send(`https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/07/Splatoon-2-Abilities-List.png`)

        }

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


        if(message.content ==`${BotSettings.prefix}Inkling c`) {
        
            var embed = new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .setTitle(`Instagram Account von ${message.guild.member("406729042717442049").user.username}`)
            .setDescription("https://www.instagram.com/project_evil_inkling_c/", false)
            .addField("*bitte alle folgen*",`${GlumandaHi}`, false)
            .setFooter(EmbedFooter,FooterLogo)
            .setThumbnail(`${message.guild.members.get("406729042717442049").user.avatarURL}`)



            message.channel.send(embed)
        }


        if(message.content ==`${BotSettings.prefix}invite`) {
            message.channel.send(`Hier ist die Einladung zu dem Server von ${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator} \nhttps://discord.gg/tUfNuD5`)
        }  

        if(message.content ==`${BotSettings.prefix}botinvite`) {
            message.channel.send(`Ihr wollt den Bot auf eurem Server haben? \nNutzt diesen Link: \nhttps://discordapp.com/api/oauth2/authorize?client_id=463336117723201546&permissions=8&scope=bot`)
        }

                  

    }


});




bot.login(process.env.BOT_TOKEN)
