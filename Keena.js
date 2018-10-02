const Discord = require("discord.js"),
      bot = new Discord.Client(),
      BotSettings = require("./botsettings.json"),
      fs = require("fs"),
      Config = require("./config.json"),
      Splatoon = require("./Splatoon_Arrays.json"),
      Overwatch = require("./overwatch.json")

       

//Start-Up
bot.on("ready", async () => {
    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("online") //online, idle, dnd, invisible
})
setInterval(async function() {

    let status = [`${BotSettings.prefix}help`, `${bot.users.size} members!`,`${bot.guilds.size} Servers!`,`my developer`,`your commands`,`my script on https://github.com/Newtox`,`${bot.users.get(BotSettings.OwnerID).username}#${bot.users.get(BotSettings.OwnerID).discriminator}`];
    let chosen = status[Math.floor(Math.random() * status.length)];
  
    bot.user.setActivity(chosen, {type: "LISTENING"}); //PLAYING, STREAMING, LISTENING, WATCHING
  
}, 20000);
    

    // Join
    // bot.on("guildCreate", async guild => {
    //     bot.guilds.get(guild.id).channels.first().send("Hi")
    //     console.log(error)
    // })    



//Welcome Message
bot.on("guildMemberAdd", async member => { 

    //Ich
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(` **__German__**: \n${member} Willkommen auf dem ${member.guild.name}! Bitte wirf einen Blick auf die <#406946551538253830> und benimm dich. \nFalls du fragen hast, kannst du gerne auf die Mods, Supporter oder auch auf Newtox zugehen.\nEs schadet auch nicht einen Blick in das <#477222309787205674> zu werfen. ${bot.emojis.find("name","Glumanda_Hi")}`)
        member.addRole("406952857917456395")

        if(member.guild.id == `406946551538253828`) 
        bot.channels.get("439880541043425290").send(` **__English__**: \n${member} Welcome to the ${member.guild.name}! Please take a look at the <#406946551538253830> and behave yourself. \nIf you have any questions you can go to the mods, supporter or even Newtox. \nIt also does not hurt to take a look into the <#477222309787205674> ${bot.emojis.find("name","Glumanda_Hi")}`)

        //Xami
        if(member.guild.id == `361532938816585730`) { 
            bot.channels.get("478552771734536192").send(`${member} Willkommen auf dem ${member.guild.name}! Wir wünschen dir hier viel Spaß. Lies dir aber bitte die <#478965010920374291> durch.`)
                member.addRole("473485307950530560")
            }
    }
       

        //Sora
    if(member.guild.id == `417437075734790174`) { 
            member.addRole("417770123840061451")
        }

});
bot.on("message", async message => { })

 //Goodbye Message
 bot.on("guildMemberRemove", async member => { 
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(` **__German__**: \n${member.user.username}#${member.user.discriminator} hat den ${member.guild.name} verlassen...`)
    

    bot.channels.get("439880541043425290").send(` **__English__**: \n${member.user.username}#${member.user.discriminator} has left the ${member.guild.name}...`)
    }
});
bot.on("message", async message => { }) 



bot.on("message", async message => {

    //Variablen
    var args = message.content.slice(BotSettings.prefix.length).trim().split(" "),

        command = args.shift(),
        msg = message.content.toLowerCase(),
        mention = message.mentions.members.first()
        HelpFooter = `Write ${BotSettings.prefix}help <command> For more information about a command.`
        HelpIcon = `https://cdn.discordapp.com/attachments/406957187869442048/492693657191841802/help_icon.png`
        HelpMod = `https://cdn.discordapp.com/attachments/406957187869442048/493412613967970326/loadhelp.gif`
        HelpFooter2 = `Help`
        yes = `https://cdn.discordapp.com/attachments/406957187869442048/493391106755788811/yes.png`
        KeenaFooter = `${bot.user.username}#${bot.user.discriminator}`
        NewtoxDev = `Developer: ${bot.users.get(BotSettings.OwnerID).username}#${bot.users.get(BotSettings.OwnerID).discriminator}`
        NewtoxLogo = `${bot.users.get(BotSettings.OwnerID).avatarURL}`
        KeenaLogo = `${bot.user.avatarURL}`
        AuthorFooter = `${message.author.avatarURL}`
        ServerIcon = `${bot.guilds.get(BotSettings.ServerID).iconURL}`
        SplatFooter = `https://cdn.discordapp.com/attachments/406957187869442048/489473134190264330/Splat.jpg`
        SplatWeb = `splatoonwiki.org`
        OWFooter = `https://cdn.discordapp.com/attachments/406957187869442048/489474913334329345/Overwatch_circle_logo.svg.png`
        OWWeb = `overwatch.gamepedia.com`
        embedRandom = '#' + ("000000" + Math.random()*0xFFFFFF<<0).toString(16);



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

     //Schutz vor Bots
     if(!message.author.bot) {


        //Help
        if(message.content ==`${BotSettings.prefix}help`) { 
            var embed = new Discord.RichEmbed() 

            .setColor(embedRandom)
            .setTimestamp()
            .setFooter(HelpFooter,KeenaLogo)
            .setTitle("Here you can see every Command of the Bot")
            .addField(`**__Info__**`,"`userinfo`,`serverinfo`,`serverlist`,`membercount`,`botinfo`",true)
            .addField(`**__Moderation__**`,"`kick`,`ban`,`giverole`,`removerole`",true)
            .addField(`**__Management__**`,"`roleedit`,`clear`,`emojiFile`",true)
            .addField(`**__Voice_Features__**`,"`join`,`leave`",true)
            .addField(`**__Fun__**`,"`lööps`,`dab`,`snens`,`subway`",true)
            .addField(`**__Splatoon__**`,"`splatoon2perks`,`splatoon random weapons`,` splatoon random battle`",true)
            .addField(`**__Overwatch__**`,"` ow random heroes`",true)
            .addField(`**__No Category__**`,"`rolecolor`,`randomcolor`,`devmessage`,`botinvite`")
            .addField(`**__Developer__**`,"`devinvite`,`roleID`,`emojiID`,`uptime`,`guildleave`",true)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/494134946634661900/help2.png")
            message.channel.send(embed)
        }

        
         //Join-Music
      if(message.content ==`${BotSettings.prefix}join`) {
        if(message.member.voiceChannel) {
            await message.member.voiceChannel.join().catch(err => {
    
                if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\n${err}`)

            });
            message.reply(`I joined **${message.member.voiceChannel}**!`)
          } else {
            message.reply('Please join a Voicechannel!');
          } 
        } 

        //Help-join
        if(message.content ==`${BotSettings.prefix}help join`) {

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`join`,"`The Bot will join your Voicechannel.`",false)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }
      

        //Leave-Music
        if(message.content ==`${BotSettings.prefix}leave`) {
            const connection = await message.member.voiceChannel.leave();
            message.reply(`I disconnected from **${message.member.voiceChannel}**.`)
          } 

        //Help-leave
        if(message.content ==`${BotSettings.prefix}help leave`) {

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`leave`,"`The Bot will leave your Voicechannel.`",false)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }


        //Help-botinfo
        if(message.content ==`${BotSettings.prefix}help botinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinfo`,`Gives you some information about the Bot`,false)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }

        //Botinfo
        if(message.content == `${BotSettings.prefix}botinfo`) {

            // let totalSeconds = (bot.uptime / 1000);
            // let days = Math.floor(totalSeconds / 86400);
            // let hours = Math.floor(totalSeconds / 3600);
            // totalSeconds %= 3600;
            // let minutes = Math.floor(totalSeconds / 60);
            // let seconds = Math.floor(totalSeconds - (60*(Math.floor(totalSeconds/60))))


            // let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes and **${seconds}** seconds`;

            var embed = new Discord.RichEmbed() 

            .setColor("#E74C3C")
            .setTitle(`Information about ${bot.user.username}`)
            .addField("Name and Tag",`**${bot.user.username}**#${bot.user.discriminator}`,false)
            .addField("Developer:",`**${message.guild.member(BotSettings.OwnerID).user.username}**#${message.guild.member(BotSettings.OwnerID).user.discriminator}`, true)
            .addField("Coded with:","Discord.js 11.4.2",false)
            .addField(`Prefix`,`The prefix of the bot is **${BotSettings.prefix}**`, false)
            // .addField(`Uptime`,`${uptime}`)
            .addField("Creation date of the bot",`The bot was created on **${Config.Date_Name[bot.user.createdAt.toString().split(" ")[1]]}** **${bot.user.createdAt.toString().split(" ")[2]}**, **${bot.user.createdAt.toString().split(" ")[3]}**!`,false)
            .setTimestamp()
            .setThumbnail(bot.user.avatarURL)
            .setFooter(KeenaFooter,NewtoxLogo)
        

    

            message.channel.send(embed)
        }

        //Help-userinfo
        if(message.content ==`${BotSettings.prefix}help userinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Userinfo`,"`Gives you some information about your account. You can also see this in others.`",false)
            .addField(`Usage`,`**${BotSettings.prefix}userinfo** or **${BotSettings.prefix}userinfo [Member]**`)
            .setFooter(HelpFooter2, AuthorFooter)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }

        //Userinfo
        if(message.content ==`${BotSettings.prefix}userinfo`) {

            var embed = new Discord.RichEmbed()
    
            .setColor(message.member.highestRole.color || embedRandom)
            .setDescription("`If something is not displayed correctly, it may be because you are assigned too many roles.`")
            .setTimestamp()
            .setTitle(`Userinfo about ${message.author.username}`)
            .addField(`Name + Tag`, `**${message.author.username}**#${message.author.discriminator}`)
            .setFooter(KeenaFooter,AuthorFooter)
    
            if(message.author.username != message.member.displayName) {
                embed.addField(`Nickname`, `**${message.member.displayName}**`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
          

            embed.addField(`Status`,`${Config.Usertypes[message.author.presence.status]}`)
            
            if(message.author.presence.game) {
                embed.addField(`Activity`,`${Config.Activitytypes[message.author.presence.game.type]} **${message.author.presence.game.name}**`)
            }
            else {
                embed.addField(`Activity`,`-`)
            }
    
            embed.addField(`ID`,`${message.author.id}`,true)
        
            embed.addField(`Roles`,`${message.member.roles.map(roles => roles).splice(1).join(", ").substr(0, 900) || `-`}`)
        
            embed.addField("Account creation Date", `You have created your account on **${Config.Date_Name[message.member.user.createdAt.toString().split(" ")[1]]}** **${message.member.user.createdAt.toString().split(" ")[2]}**, **${message.member.user.createdAt.toString().split(" ")[3]}**!`, false) 
    
            embed.addField("Joindate", `You have joined the server last on **${Config.Date_Name[message.member.joinedAt.toString().split(" ")[1]]}** **${message.member.joinedAt.toString().split(" ")[2]}**, **${message.member.joinedAt.toString().split(" ")[3]}**!`, false) 
    
            .setThumbnail(`${message.author.displayAvatarURL}`)
    
            message.channel.send(embed)
    
        }

        if(message.content ==`${BotSettings.prefix}userinfo ${mention}`) {   
    
            var embed = new Discord.RichEmbed()
    
            .setColor(mention.highestRole.color || embedRandom)
            .setDescription("`If something is displayed incorrectly, it may be because the user mentioned is assigned too many roles.`")
            .setTimestamp()
            .setTitle(`Userinfo about ${mention.user.username}`)
            .addField(`Name + Tag`, `**${mention.user.username}**#${mention.user.discriminator}`)
            .setFooter(KeenaFooter,AuthorFooter)
    
            
            if(mention.user.username != mention.displayName) {
                embed.addField(`Nickname`, `**${mention.displayName}**`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
    
            embed.addField(`Status`,`${Config.Usertypes[mention.presence.status]}`)
            
            if(mention.presence.game) {
                embed.addField(`Activity`,`${Config.Activitytypes[mention.presence.game.type]} **${mention.presence.game.name}**`)
            }
            else {
                embed.addField(`Activity`,`-`)
            }
        
            embed.addField(`ID`,`${mention.id}`,true)
    
            embed.addField(`Roles`,`${mention.roles.map(roles => roles).splice(1).join(", ").substr(0, 900) || `-`}`)
    
            embed.addField(`Account creation Date`,`**${mention.displayName}** created his/her account on **${Config.Date_Name[mention.user.createdAt.toString().split(" ")[1]]}** **${mention.user.createdAt.toString().split(" ")[2]}**, **${mention.user.createdAt.toString().split(" ")[3]}**!`, false) 
    
            embed.addField(`Joindate`, `**${mention.displayName}** joined the server last on **${Config.Date_Name[mention.joinedAt.toString().split(" ")[1]]}**  **${mention.joinedAt.toString().split(" ")[2]}**, **${mention.joinedAt.toString().split(" ")[3]}**!`, false) 
    
            .setThumbnail(`${mention.user.displayAvatarURL}`)
    
    
            message.channel.send(embed)
    
        } 

        //Clear
        if(message.content.startsWith(`${BotSettings.prefix}clear`)) {
       
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("MANAGE_MESSAGES"))  {

            var deleteCount = parseInt(args[0], 10);
    
            if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Please enter a number between **2** and **100**.");
    
            let deleted = await message.channel.bulkDelete(deleteCount +1).catch(error => message.reply(`Could not delete messages because ${error}`));    

            let msg1 = await message.channel.send(`**${deleted.size}** messages have been deleted. ${message.author}`)
            setTimeout(async () => {msg1.delete()}, 5000)
    
          } else {
            message.channel.send(`This command requires the following server rights: **Manage-Messages**. ${message.author}`)
          } 
          message.delete();
        } 
            //Help-clear
            if(message.content ==`${BotSettings.prefix}help clear`) {
                
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Clear`,"`Deletes any number of messages`")
            .addField(`Usage`,`**${BotSettings.prefix}clear [number]**`)
            .setFooter(HelpFooter2, yes)
    
            message.channel.send(embed)
        }
    
    
    
            //Kick
            if(message.content.startsWith(`${BotSettings.prefix}kick`)) {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("KICK_MEMBERS"))  {
    
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(`Please enter a member that is on the server.`);
    
            if(!member.kickable) 
    
              return message.reply("I can't kick this member, I'm sorry.");
    
            let reason = args.slice(1).join(' ');
    
            if(!reason) reason = `${message.author} Please give a reason!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`The Developer cannot be kicked!`)
    
            await member.kick(reason)
    
            let kickmsg = await message.reply(`**${member.user.username}**#${member.user.discriminator} was kicked off the server for **__${reason}__**`);
            setTimeout(async () => {kickmsg.delete()}, 5000)

            
            } else {
                message.channel.send(`This command requires the following server rights: **Kick-Members**. ${message.author}`)
            } 
            message.delete();
          }

         
    
    
            //Help-Kick
            if(message.content ==`${BotSettings.prefix}help kick`) {
                var embed = new Discord.RichEmbed()
                .setColor("#7289DA")
                .addField(`kick`,"`Kick the selected user`")
                .addField(`Usage`,`**${BotSettings.prefix}kick [member] [reason]**`)
                .setFooter(HelpFooter2, yes)
                .setThumbnail(HelpMod)
    
                message.channel.send(embed)
            }
    
            //Bann
            if(message.content.startsWith(`${BotSettings.prefix}ban`)) {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("BAN_MEMBERS"))  {
        
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(`Please enter a member that is on the server.`);
    
            if(!member.bannable) 
    
              return message.reply("I can't ban this member, I'm sorry.");
        
    
            let reason = args.slice(1).join(' ');
    
    
            if(!reason) reason = `${message.author} Please give a reason!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`The Developer cannot be banned!`)
    
            await member.ban(reason)
        
            let banmsg = await message.reply(`**${member.user.username}**#${member.user.discriminator} was banned off the server for **__${reason}__**`);
            setTimeout(async () => {banmsg.delete()}, 5000)

            } else {
                message.channel.send(`This command requires the following server rights: **Ban-Members**. ${message.author}`)
            } 
            message.delete();
          }

          
          //Help-ban
          if(message.content ==`${BotSettings.prefix}help ban`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`ban`,"`Ban the selected user`")
            .addField(`Usage`,`**${BotSettings.prefix}ban [member] [reason]**`)
            .setFooter(HelpFooter2, yes)
            .setThumbnail(HelpMod)
    
            message.channel.send(embed)
        }


        //OPadd
        if(message.content.startsWith(`${BotSettings.prefix}giverole`)) {
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("ADMINISTRATOR"))  {
    
                var Rolle = args.join(" ")
                if(Rolle) {
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.addRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\n${err}`)
    
                        });
    
                        message.channel.send(`You now have the role **${Rolle}**. ${message.author} `)
    
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Please enter a role. ${message.author}`)
                    message.channel.send(`Please enter a role. ${message.author}`)
                } 
    
            } else {
                message.channel.send(`This command requires the following server rights: **Administrator**. ${message.author}`)
            }
    
            
    
        }
    
        //Help-opgiverole
        if(message.content ==`${BotSettings.prefix}help giverole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`giverole`,"`gives you a specific role`")
            .addField(`Usage`,`**${BotSettings.prefix}giverole [Role]**`)
            .setFooter(HelpFooter2, yes)
            .setThumbnail(HelpMod)
    
            message.channel.send(embed)
        }
    
    
    
        //Opremove
        if(message.content.startsWith(`${BotSettings.prefix}removerole`)){
        if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) {
    
    
    
                var Rolle = args.join(" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.removeRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\n${err}`)
    
                        });
    
                        message.channel.send(`You have been removed from the role **${Rolle}**. ${message.author} `)
    
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Please enter a role. ${message.author}`)
                }
    
            } else {
                message.channel.send(`This command requires the following server rights: **Administrator**. ${message.author}`)
            }
    
            
        }

    
        //Help-opremoverole
        if(message.content ==`${BotSettings.prefix}help removerole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`removerole`,"`Removes a specific role`")
            .addField(`Usage`,`**${BotSettings.prefix}removerole [Role]**`)
            .setFooter(HelpFooter2, yes)
            .setThumbnail(HelpMod)
    
            message.channel.send(embed)
        }
    
    
    
            //Rollen-ID
            if(message.content.startsWith(`${BotSettings.prefix}roleID`)) {
    
            if(message.author.id == BotSettings.OwnerID) {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {
    
                        message.channel.send(`The ID of the Role **${Rolle}** is **${message.guild.roles.find("name",Rolle).id}** ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} This is not a role that exists on the server.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Please enter an available role.`)
                }
    
            } else {
                message.channel.send(`Only the Developer can use this command. ${message.author}`)
            }
            return
        }
    
        //Help-roleID
        if(message.content ==`${BotSettings.prefix}help roleID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleID`,"`Gives you the ID of a specific role`")
            .addField(`Usage`,`**${BotSettings.prefix}roleID [Role]**`)
            .setFooter(NewtoxDev, yes)
            .setThumbnail(KeenaLogo)
    
            message.channel.send(embed)
        }

              
        //Emoji-ID
        if(message.content.startsWith(`${BotSettings.prefix}emojiID`)) {
    
            if(message.author.id == BotSettings.OwnerID) {
    
            var Emote = args.join (" ")
    
            if(Emote) {
    
                if(message.guild.emojis.find("name",Emote)) {
    
                    message.channel.send(`The ID of the Emoji **${Emote}** is **${message.guild.emojis.find("name",Emote).id}** ${message.author}`)
    
                } else {
                    message.channel.send(`${message.author} This is not an emoji that exists on the server.`)
                }
    
            } else {
                message.channel.send(`${message.author} Please enter an available emoji.`)
            }
    
        } else {
            message.channel.send(`Only the Developer can use this command. ${message.author}`)
        }
        return
    }
    
        //Help-EmojiID
        if(message.content ==`${BotSettings.prefix}help emojiID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiID`,"`Gives you the ID of a specific emoji`")
            .addField(`Usage`,`**${BotSettings.prefix}emojiID [Emoji]**`)
            .setFooter(NewtoxDev, yes)
            .setThumbnail(KeenaLogo)

    
            message.channel.send(embed)
        }

        //Uptime-BOT
        if(message.content.startsWith(`${BotSettings.prefix}uptime`)) {

            let totalSeconds = (bot.uptime / 1000);
            totalSeconds %= 3600;
            let days = Math.floor(totalSeconds / (3600*24))
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor(totalSeconds / 60); 
            let seconds = Math.floor(totalSeconds - (60*(Math.floor(totalSeconds/60))))


        let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes and **${seconds}** seconds`;

            if(message.author.id == BotSettings.OwnerID) {
                message.channel.send(`Online since ${uptime}`)
            } else {
                message.channel.send(`Only the Developer can use this command. ${message.author}`)
            }
            return
        }

        
        //Help-Uptime
        if(message.content ==`${BotSettings.prefix}help uptime`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`uptime`,"`Shows you the Uptime of the bot`")
            .setFooter(NewtoxDev, KeenaLogo)
    
            message.channel.send(embed)
        }


        //Guild-Leave
        if(message.content.startsWith(`${BotSettings.prefix}guildleave ${args.join(" ")}`)) {
            if(message.author.id == BotSettings.OwnerID) { 
                bot.guilds.get(bot.guilds.find('name',args.join(" ")).id).leave()
                message.channel.send(`I left the following server: **${args.join(" ")}**`)
            } else {
                message.channel.send(`Only the Developer can use this command. ${message.author}`)
            }  
        } 

        //Help-Leave
        if(message.content ==`${BotSettings.prefix}help guildleave`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`guildleave`,"`The bot will leave a specific server.`")
            .setFooter(NewtoxDev, KeenaLogo)
            .setThumbnail(ServerIcon)

    
            message.channel.send(embed)
        }

        //DevInvite
        if(message.content ==`${BotSettings.prefix}devinvite`) {
            message.channel.send(`Here is the Invite to the Server of my Developer \nhttps://discord.gg/tUfNuD5`)
        }

        //Help-DevInvite
        if(message.content ==`${BotSettings.prefix}help devinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`devinvite`,"`Gives you an Invite to the server of my Developer`")
            .setFooter(NewtoxDev, ServerIcon)
            .setThumbnail(NewtoxLogo)

    
            message.channel.send(embed)
        }


    
        //Emoji-File
        if(message.content.startsWith(`${BotSettings.prefix}emojiFile`)) {
    
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_EMOJIS")) {
        
                var Emote = args.join (" ")
        
                if(Emote) {
        
                    if(message.guild.emojis.find("name",Emote)) {
        
                        message.channel.send(`Here is the emoji **${Emote}** as a File. ${message.guild.emojis.find("name",Emote).url} ${message.author}`)
        
                    } else {
                        message.channel.send(`${message.author} This is not an emoji that exists on the server.`)
                    }
        
                } else {
                    message.channel.send(`${message.author} Please enter an available emoji.`)
                }
        
            } else {
                message.channel.send(`This command requires the following server rights: **Manage-Emojis**. ${message.author}`)
            }
            return
        }
    
        //Help-emojiFile
        if(message.content ==`${BotSettings.prefix}help emojiFile`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiFile`,"`Gives you a specific emoji as a file`")
            .addField(`Usage`,`**${BotSettings.prefix}emojiFile [Emojiname]**`)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)
    
            message.channel.send(embed)
        }
    
    
             
    
          //Rollenfarbe 
            if(message.content.startsWith(`${BotSettings.prefix}rolecolor`)) {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {      
    
                    message.channel.send(`The role **${Rolle}** Has the RGB-Color **${message.guild.roles.find("name", Rolle).hexColor.toUpperCase()}**. ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} This is not a role that exists on the server.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Please enter an available role.`)
                }
            return
        }
    
        //Help-rolecolor
        if(message.content ==`${BotSettings.prefix}help rolecolor`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`rolecolor`,"`Gives you the color code of a specific role`")
            .addField(`Usage`,`**${BotSettings.prefix}rolecolor [Rolename]**`)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)
    
            message.channel.send(embed)
        }
    

        //Randomcolor
        if(message.content.startsWith(`${BotSettings.prefix}randomcolor`)) {

            var randomcolor = '#' + ("000000" + Math.random()*0xFFFFFF<<0).toString(16);

            var embed = new Discord.RichEmbed()
            .setColor(randomcolor)
            .setDescription(`This is your Color: \n**${randomcolor}** \n \nR: ${Math.round(Math.random()*255)} \nG: ${Math.round(Math.random()*255)} \nB: ${Math.round(Math.random()*255)}\n \n:arrow_left: You can see the color on the left side of the embed.`)
            
            message.channel.send(message.author, embed) 
        }

        //Help-randomcolor
        if(message.content ==`${BotSettings.prefix}help randomcolor`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`randomcolor`,"`Gives you a random color code`")
            .addField(`Usage`,`**${BotSettings.prefix}randomcolor**`)
            .setFooter(HelpFooter2, KeenaLogo)
            .setThumbnail(HelpIcon)
    
            message.channel.send(embed)
        }


        //Rollen-Edit
        if(message.content.startsWith(`${BotSettings.prefix}roleedit`)) {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_ROLES")) {
            if(args[0] && args[1]) {
                if(Number(parseInt(args[1].toString(10), 16)) < 16777215) {
                    if(message.guild.roles.find("name", args[0])) {
                        await message.guild.roles.find("name", args[0]).setColor(`#${args[1].toUpperCase()}`).catch(err => {
    
                            if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\n${err}`)
    
                        });
                        message.channel.send(`The color of the role **${args[0]}** was changed to **#${args[1]}**. ${message.author}`)
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
                } else {
                    message.channel.send(`This is not an RGB value. ${message.author}`)
                }
            } else {
                message.channel.send(`Please enter an **available** role and color. ${message.author}`)
            }
        } else {
             message.channel.send(`This command requires the following server rights: **Manage-Roles**. ${message.author}`)
        }
            return
        }
    
        //Help-roleedit
        if(message.content ==`${BotSettings.prefix}help roleedit`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleedit`,"`So you can change the color of a role by bot.`")
            .addField(`Usage`,`**${BotSettings.prefix}roleedit [Rolename] [Colorcode]**`)
            .setFooter(HelpFooter2, yes)
    
            message.channel.send(embed)
        }

        //Fun-Commands
        if(message.content ==`${BotSettings.prefix}splatoon2perks`) {
            message.channel.send(`https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/07/Splatoon-2-Abilities-List.png`)

        }


        if(message.content ==`${BotSettings.prefix}subway`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/419197030104039426/483000826084851742/Screenshot_20180825-215234_Gallery.jpg`)
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


        //Help-splatoon2perks
        if(message.content ==`${BotSettings.prefix}help splatoon2perks`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .addField(`splatoon2perks`,"`Shows the pros and cons of the brands in Splatoon 2`",false)
            .setFooter(HelpFooter2, SplatFooter)
            .setThumbnail(`https://cdn.discordapp.com/attachments/406957187869442048/492695611913535488/splat.jpg`)

            message.channel.send(embed)
        }   
        
        //Help-lööps
        if(message.content ==`${BotSettings.prefix}help lööps`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`lööps`,"`lööps`\n \n*oof*",false)
            .setFooter(HelpFooter2, AuthorFooter)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        } 

        //Help-dab
        if(message.content ==`${BotSettings.prefix}help dab`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`dab`,"`You can always need a dab`",false)
            .setFooter(HelpFooter2, AuthorFooter)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }

         //Help-snens
         if(message.content ==`${BotSettings.prefix}help snens`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`snens`,"*Summon the Dark Lord!*",false)
            .setFooter(HelpFooter2, AuthorFooter)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }

        //Help-subway
        if(message.content ==`${BotSettings.prefix}help subway`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`subway`,"`Who's going to serve you at subway today?`",false)
            .setFooter(HelpFooter2, AuthorFooter)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }


        if(message.content ==`${BotSettings.prefix}botinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`Hello ${message.author},\nI would be very happy if I could join your server.\n \nhttps://discordapp.com/oauth2/authorize?client_id=489833585705222145&scope=bot&permissions=2146958847\n \nIf you have questions you may like to join the server of my developer, just use **ks!devinvite**.`)
            .setThumbnail(KeenaLogo)

            message.channel.send(embed)
        }

        //Help-Bot
        if(message.content ==`${BotSettings.prefix}help botinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinvite`,"`gives you a link where you can invite the bot to your server.`",false)
            .setThumbnail(KeenaLogo)
            .setFooter(KeenaFooter, NewtoxLogo)

            message.channel.send(embed)
        }


       //serverinfo

       if(message.content ==`${BotSettings.prefix}serverinfo`) {

        //     var member_status= {online:0,offline:0,idle:0,dnd:0}
        //     jQuery(message.guild.members, function(i, object) {
        //     member_status[object.user.presence.status]++
        // });

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription("`If something is not displayed correctly, it may be because there are too many roles or emojis on the server, I apologize for that`")
            .setTitle(`${message.guild.name}`)
            .addField(`Region`,`${message.guild.region}`,true)
            .addField(`Server-ID`,`${message.guild.id}`,true)
            .addField(`Owner`,`${message.guild.owner} (${message.guild.owner.id})`,false)
            .addField(`Verification Level`,`${Config.Verification_Name[message.guild.verificationLevel]}`,false)
            .addField(`Members`,`Total Members: **${message.guild.members.filter(members => members.user).size}** \nBots: **${message.guild.members.filter(members => members.user.bot).size}**`,true)
            .addField(`Channels (**${message.guild.channels.size}**)`,`Categories: **${message.guild.channels.filter(channels => channels.type == "category").size}** \nText-Channels: **${message.guild.channels.filter(channels => channels.type == "text").size}** \nVoice-Channels: **${message.guild.channels.filter(channels => channels.type == "voice").size}** \nAFK-Channel: **${message.guild.afkChannel}**`,true)
            .addField(`Roles`,`The server has **${message.guild.roles.size}** Roles\n \n${message.guild.roles.map(roles => roles).splice(1).join(", ").substr(0, 900)}`,false)
            .addField(`Emojis`,`The server has **${message.guild.emojis.size}** Emojis\n \n${message.guild.emojis.map(emojis => emojis).join("").substr(0, 900)}`,false)
            .addField(`Server creation Date`,`The server was created on **${Config.Date_Name[message.guild.createdAt.toString().split(" ")[1]]}** **${message.guild.createdAt.toString().split(" ")[2]}**, **${message.guild.createdAt.toString().split(" ")[3]}**!`, true)
            .addField(`Server-Icon`,`${message.guild.iconURL}`,true)
            .setThumbnail(`${message.guild.iconURL}`)
            .setFooter(KeenaFooter,KeenaLogo)
            .setTimestamp()
            message.channel.send(embed)
        }


        //Help-Serverinfo
        if(message.content ==`${BotSettings.prefix}help serverinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`serverinfo`,"`Gives you some information about the server.`",false)
            .setFooter(HelpFooter2, ServerIcon)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        } 


        //Serverlist
        if(message.content ==`${BotSettings.prefix}serverlist`) {

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`The bot is located on **${bot.guilds.size}** Servers: \n \n${bot.guilds.map(members => members).join(",\n")}`)
            .setFooter(KeenaFooter, KeenaLogo)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/487662163637305359/Discord_Icon.jpg")


            message.channel.send(embed)
        }


        //Help-Serverliste
        if(message.content ==`${BotSettings.prefix}help serverlist`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`serverlist`,"`Shows you all the servers the bot is on`",false)
            .setFooter(HelpFooter2, ServerIcon)
            .setThumbnail(HelpIcon)

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}membercount`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`Total Members: **${bot.users.size}**`)
            .setFooter(KeenaFooter, KeenaLogo)

            message.channel.send(embed)
        }

        //Help-Membercount
        if(message.content ==`${BotSettings.prefix}help membercount`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`membercount`,"`Shows you the Total members, that the bot can count.`",false)
            .setFooter(HelpFooter2, NewtoxLogo)
            .setThumbnail(KeenaLogo)

            message.channel.send(embed)
        }


        //Say-Command

        if(message.content.startsWith(`${BotSettings.prefix}say`)) {
            if(message.author.id == BotSettings.OwnerID) { 
                var Say = args.join(" ") 
                if(Say) {
                    message.channel.send(Say) 
                } else { 
                    message.channel.send(`What do you want me to say? ${message.author}`)
                }
            } else { 
                let msgsay = await message.channel.send(`Only the Developer can use this command. ${message.author}`)
                setTimeout(async () => {msgsay.delete()}, 5000)

            }
            message.delete();
        }

        //DevMessage
        if(message.content.startsWith(`${BotSettings.prefix}devmessage ${args.join(" ")}`)) {
            bot.users.get(BotSettings.OwnerID).send(`Message from **${message.author.username}**#${message.author.discriminator}:  ${args.join (' ')}`)
            message.reply(`Your message was sent to the Developer.`)
        } 

        //Help-Devmessage
        if(message.content ==`${BotSettings.prefix}help devmessage`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Devmessage`,"`Sends a message to the Developer`",false)
            .setFooter(NewtoxDev, ServerIcon)
            .setThumbnail(NewtoxLogo)

            message.channel.send(embed)
        } 

         //BotOff
         if(message.content.startsWith(`${BotSettings.prefix}shutdown`)) {
            if(message.author.id == BotSettings.OwnerID) { 

            bot.destroy()    
            } else {
                message.channel.send(`Nur der Developer kann diesen Command nutzen. ${message.author}`)
            }     
        }


        //Splatoon
        if(message.content == `${BotSettings.prefix}splatoon random weapons`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`The Splatoon Random Weapons command has **5** different categories. These are "All, Firearm, Sniper, Blaster and Roller". The command will used like this: **__${BotSettings.prefix}splatoon random weapon All__**`)
            .setImage(`https://cdn.discordapp.com/attachments/406957187869442048/485184865130643468/Weapons.jpg`)
            .setFooter(SplatWeb,SplatFooter)

            message.channel.send(message.author, embed)
        }

        //Splatoon Help
        if(message.content == `${BotSettings.prefix}help splatoon random weapons`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .addField(`Splatoon Random Weapons`,"`Gives you a random weapon from Splatoon 2`")
            .setFooter(SplatWeb,SplatFooter)
            .setThumbnail(`https://cdn.discordapp.com/attachments/406957187869442048/492695611913535488/splat.jpg`)

            message.channel.send(embed)
        }



      //Alle
      if(message.content == `${BotSettings.prefix}splatoon random weapon All`) {
        var RandomWaffe = Splatoon.AlleWaffen[Math.floor(Math.random() * Splatoon.AlleWaffen.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail(RandomWaffe)
        .setAuthor("Random Weapon (All)")
        .setTitle("Weapon")
        .setDescription(RandomWaffe.name)
        .addField("Sub", RandomWaffe.sub, true)
        .addField("Special", RandomWaffe.special, true)
        .setThumbnail(RandomWaffe.image)
        .setFooter(SplatWeb,SplatFooter)

        message.channel.send(message.author,embed)
    }

    //Schusswaffen
    if(message.content == `${BotSettings.prefix}splatoon random weapon Firearm`) {
        var RandomWaffe = Splatoon.Schusswaffen[Math.floor(Math.random() * Splatoon.Schusswaffen.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail(RandomWaffe)
        .setAuthor("Random Weapon (Firearm)")
        .setTitle("Weapon")
        .setDescription(RandomWaffe.name)
        .addField("Sub", RandomWaffe.sub, true)
        .addField("Special", RandomWaffe.special, true)
        .setThumbnail(RandomWaffe.image)
        .setFooter(SplatWeb,SplatFooter)

        message.channel.send(message.author,embed)
    }


    //Sniper
    if(message.content == `${BotSettings.prefix}splatoon random weapon Sniper`) {
        var RandomWaffe = Splatoon.Sniper[Math.floor(Math.random() * Splatoon.Sniper.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail(RandomWaffe)
        .setAuthor("Random Weapon (Sniper)")
        .setTitle("Weapon")
        .setDescription(RandomWaffe.name)
        .addField("Sub", RandomWaffe.sub, true)
        .addField("Special", RandomWaffe.special, true)
        .setThumbnail(RandomWaffe.image)
        .setFooter(SplatWeb,SplatFooter)

        message.channel.send(message.author,embed)
    }

    //Roller
    if(message.content == `${BotSettings.prefix}splatoon random weapon Roller`) {
        var RandomWaffe = Splatoon.Roller[Math.floor(Math.random() * Splatoon.Roller.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail(RandomWaffe)
        .setAuthor("Random Weapon (Roller)")
        .setTitle("Weapon")
        .setDescription(RandomWaffe.name)
        .addField("Sub", RandomWaffe.sub, true)
        .addField("Special", RandomWaffe.special, true)
        .setThumbnail(RandomWaffe.image)
        .setFooter(SplatWeb,SplatFooter)

        message.channel.send(message.author,embed)
    }

    //Blaster
    if(message.content == `${BotSettings.prefix}splatoon random weapon Blaster`) {
        var RandomWaffe = Splatoon.Blaster[Math.floor(Math.random() * Splatoon.Blaster.length)];
    
        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail(RandomWaffe)
        .setAuthor("Random Weapon (Blaster)")
        .setTitle("Weapon")
        .setDescription(RandomWaffe.name)
        .addField("Sub", RandomWaffe.sub, true)
        .addField("Special", RandomWaffe.special, true)
        .setThumbnail(RandomWaffe.image)
        .setFooter(SplatWeb,SplatFooter)
    
            message.channel.send(message.author,embed)
        }

    //Battle
    if(message.content == `${BotSettings.prefix}splatoon random battle`) {
        var RMap = Splatoon.Maps[Math.floor(Math.random() * Splatoon.Maps.length)];
        var Mode = Splatoon.Modis[Math.floor(Math.random() * Splatoon.Modis.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/485414621038116876/Private_Lobby_2.png")
        .setImage(RMap.image)
        .setAuthor("Random Battle")
        .addField(`Stage`,RMap.name)
        .addField(`Mode`,Mode)
        .setFooter(SplatWeb,SplatFooter)

        message.channel.send(message.author, embed)
    }

     //Splatoon Help 2
     if(message.content == `${BotSettings.prefix}help splatoon random battle`) {
        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setFooter(SplatWeb,SplatFooter)
        .addField(`Splatoon Random Weapons`,"`Gives you random instructions for a private battle in Splatoon 2`")
        .setFooter(SplatWeb,SplatFooter)


        message.channel.send(embed)
    }


    //Overwatch

    if(message.content == `${BotSettings.prefix}ow random heroes`) {
        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setDescription(`The Overwatch Random Heroes command has **4** different categories. These are "All, Damage, Tank, Support". The command will used like this: **__${BotSettings.prefix}ow random hero All__**`)
        .setImage(`https://cdn.discordapp.com/attachments/406957187869442048/485439364814340097/800px-Heroes-theatrical.png`)
        .setFooter(OWWeb,OWFooter)

        message.channel.send(message.author, embed)
    }

    //Overwatch Help
    if(message.content == `${BotSettings.prefix}help ow random heroes`) {
        var embed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .addField(`Overwatch Random Heroes`,"`Gives you a random Hero from Overwatch`")
        .setFooter(OWWeb,OWFooter)
        .setThumbnail(OWFooter)

        message.channel.send(embed)
    }


      //Alle
      if(message.content == `${BotSettings.prefix}ow random hero All`) {
        var All = Overwatch.All[Math.floor(Math.random() * Overwatch.All.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setAuthor("Random Hero (All)")
        .setTitle("Hero")
        .setDescription(All.name)
        .addField("Role", All.Role, true)
        .setThumbnail(All.image)
        .setFooter(OWWeb,OWFooter)

        message.channel.send(message.author,embed)
    }

    //Damage
    if(message.content == `${BotSettings.prefix}ow random hero Damage`) {
        var Damage = Overwatch.Damage[Math.floor(Math.random() * Overwatch.Damage.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setAuthor("Random Hero (Damage)")
        .setTitle("Hero")
        .setDescription(Damage.name)
        .addField("Role", Damage.Role, true)
        .setThumbnail(Damage.image)
        .setFooter(OWWeb,OWFooter)

        message.channel.send(message.author,embed)
    }

    //Tank
    if(message.content == `${BotSettings.prefix}ow random hero Tank`) {
        var Tank = Overwatch.Tank[Math.floor(Math.random() * Overwatch.Tank.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setAuthor("Random Hero (Tank)")
        .setTitle("Hero")
        .setDescription(Tank.name)
        .addField("Role", Tank.Role, true)
        .setThumbnail(Tank.image)
        .setFooter(OWWeb,OWFooter)

        message.channel.send(message.author,embed)
    }

     //Support
     if(message.content == `${BotSettings.prefix}ow random hero Support`) {
        var Support = Overwatch.Support[Math.floor(Math.random() * Overwatch.Support.length)];

        var embed = new Discord.RichEmbed()
        .setColor(embedRandom)
        .setAuthor("Random Hero (Support)")
        .setTitle("Hero")
        .setDescription(Support.name)
        .addField("Role", Support.Role, true)
        .setThumbnail(Support.image)
        .setFooter(OWWeb,OWFooter)

        message.channel.send(message.author,embed)
    }

}

});


bot.login(BotSettings.token)