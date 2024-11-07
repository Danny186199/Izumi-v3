const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'
global.eypzApi = 'https://combative-sarine-eypz-god-d4cce0fc.koyeb.app/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  SESSION_ID: process.env.SESSION_ID || "CYBERION;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VPU0lnL0dCZFFURFNXd28xT0JPcmcwdktEQlVBcllLZjhhMWt2TzdGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODM3L1Q2ck42NGtXTlM3eUxRVkxBZFMycno3QXpLSFlMdy9RQnRCbWZIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTGwyOEdhVFJJdUM3QkNDMkVwTWxDZEJ0ZFNuUFlKaHl3SSt2TEplZzJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VzBock4rdWVwTjZZeHpBZFl6UXdrbUpsTW92cE9aUGcrU296VFdHWmdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKTVRLYVVxU3NNeWd0dUl5M1VncEI0RU1lUThOZTJTUnBKNXMxbkZNRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxGVmxKRXJyUVcydDcyMXd0QXJpOC9CZjhWWi94bVhDaFRYSUpnbnhLa3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVjWnJKZUt6Z0RwcGg2Tm5DTEZwTzczd1J2RHh6S1pxWG1ucDZKeU0yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjRvOXllajRLem5HT2JVRWlNYm0xbzgrQjJrSlRSM0lZMWpFd2ZtME5sMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVucWVoRHQrMXhYSW1rWmVoQ1ZFR0dFa1JMaDNTcEVJdGZFZFQvQk9pQkFMR1R4RmpzMC9NZUdYWjNrV3c3c05aV0RUSlhvZnZSUG54citEcUlKVER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6ImtwLzJDclNFT1NxU0RhR09LOUdaZU96cGkrRElkd3NZZkpFZWZNYkg5bjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVHTW9mOFlaVEF5VEhIQ1pTclFSUkEiLCJwaG9uZUlkIjoiZGY5ZDhlMTEtYzRhNy00M2I4LTk0ZjAtNzAxMTk5Mjk2NTBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk2SkVnYkV3d0N1Q0krSW9zOHZEWUpOd2h1Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmdXB4ZGt1a0F4aWdOenRodDU4d1ZrRm93VFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkZOSE42R1IiLCJtZSI6eyJpZCI6IjI1NDEwNTc4NDEwNToyN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDNBanBVQkVOcmlzcmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRlN2aUE0aE4yWW9YUFJTbkJodnVUL0dpdTRTYkZ2MTgrWEFmMHFIdnZSND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOU9IaXJKcUVaK1RYZXYycGgzcHhpekRmaXExdzh1dHhFUmJ1SWlzNDhNamNkeHRaSXZ2K1kyenVFYjZGMGtIY3JoUEZwZkxrQTJNRTNTTXY4dkV1RHc9PSIsImRldmljZVNpZ25hdHVyZSI6InpzQ3YxblVNSXhxNlZTY0RxVWwvdHhwQjI2VHF1SjBkckZQWmVtdFEzOGxGMDZGamVOQmkwMmd5SDN0U1ZOVjNKdnVwYkpJaVFmNU80cisyajVaMEJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTA1Nzg0MTA1OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJVcjRnT0lUZG1LRnowVXB3WWI3ay94b3J1RW14YjlmUGx3SDlLaDc3MGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA5ODIyNDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGhRIn0=",
  MENU_URL: process.env.MENU_URL || "https://ik.imagekit.io/eypz/1722873079279_lHOJlrddC.png",
  CAPTION: process.env.CAPTION || "Iᴢᴜᴍɪ",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "Eypz God",
  BOT_NAME: process.env.BOT_NAME || "𝚰𝚭𝐔𝚳𝚰-𝚅3",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "Izumi-v3,❤️",
  AUDIO_DATA: process.env.AUDIO_DATA || "Eʏᴘᴢ;Iᴢᴜᴍɪ-ᴠ3;https://i.imgur.com/cO0TZJv.jpeg",
  PROCESSNAME: process.env.PROCESSNAME || "Izumi-v3",
  AUTHOR: process.env.AUTHOR || "Eypz God",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "your_koyeb_api_key",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB: toBool(process.env.KOYEB) || false,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
