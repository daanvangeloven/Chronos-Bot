
import "https://deno.land/x/dotenv/load.ts";

import {
    Client,
    slash,
    SlashCommandPartial,
    Interaction,
    InteractionResonseType,
    SlashCommandOptionType,
    event,
    CommandClient,
    command,
    CommandContext,
    GatewayIntents
  } from 'https://deno.land/x/harmony/mod.ts'

  import { commands } from "./commands.ts"
  

  class EventBot extends CommandClient {
    constructor() {
      super({
        prefix: [Deno.env.get("PREFIX"), '!!'],
        caseSensitive: false
      })
    }
  
    @event()
    ready(): void {
      console.log(`Logged in as ${this.user?.tag}!`);
      commands.forEach(command => {
        // If you want to create command globally, just remove 'Your Server/Guild ID' part
        // I recommend making it for only one guild for now because Global Slash Commands can take max 1 hour to come live.
        this.slash.commands.create(command, Deno.env.get("TESTGUILD"))
          .then((cmd) => console.log(`Created Slash Command ${cmd.name}!`))
          .catch(() => console.log(`Failed to create ${cmd.name} command!`));
    })
    }
  
    @command({ aliases: 'pong' })
    Ping(ctx: CommandContext): void {
      ctx.message.reply('Pong!');
    }

    @slash()
    ping(i: Interaction) {
        i.respond({
            content: 'Pong.'
        });
    }

  }
  
  const bot = new EventBot();
  bot.connect(Deno.env.get("TOKEN"), [
    GatewayIntents.DIRECT_MESSAGES,
    GatewayIntents.GUILDS,
    GatewayIntents.GUILD_MESSAGES
  ]);
