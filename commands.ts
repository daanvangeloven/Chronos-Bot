// Now you can remove these two imports in bot.ts!

import {
    SlashCommandPartial,
    SlashCommandOptionType
  } from 'https://deno.land/x/harmony/mod.ts'


export const commands: SlashCommandPartial[] = [
    {
        name: "ping",
        description: "Returns pong!",
        options: [],
    },
    {
        name: "alltags",
        description: "See a list of tags in this server!",
        options: [],
    },
    {
        name: "addtag",
        description: "Create a new tag in this server!",
        options: [
            {
                name: "name",
                description: "Name of the tag.",
                required: true,
                type: SlashCommandOptionType.STRING,
            },
            {
                name: "content",
                description: "New content of the tag.",
                required: true,
                type: SlashCommandOptionType.STRING,
            },
        ],
    }
];