require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK9dBVtusVa2VgQAAHEHAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xitYAIaNWpGkVQFLyAV6bmIUCAyNUQQOzy36fw9OnTDzM9Z3gKSWrttddaO99BluMSrVALxt9BQXANKeqWtC0QGINpFQSIgB7wIYVgDBhTY8+trvHMJE4SNhCcqFZVrSyyR+E6k7thiqgNFqat7d7AsweKyk2w9xtAl6YqbqWIdSIyn11E7w4vxlWtK2U7H+3WRyhy9+sjMK97+Q08O0SICc5CtYhQighMVqjdQky+Rj82inrKW*zG0A3H37e3REfLo7RykZ3mEoykC+dafXcrnfKv0bfDSq2cK9FpDJU+Yx8dmCNTtr17X16QRzCTt2JunILHRHinX+IwQ77uo4xi2n5Zd2HRXyvYcqAjLG+q7273rnYg1mHWeI5u3*oM1LL+xCrOCfs14hFV0+tylA2X52SV7LO5dI+Xx6V1eTh7TuWoQy+tmir9spF*Jb4lH1mJ*4*uq5mAmpG+nDHrqeJWflkfN6WRbZrl7MKahu6WN47WvsrHk6*RZ9aayPnEWUzPWBfonaZWUB8T1bxZzfJyWVTMYB3PlN35aH7Sh7Qiv2NZufwu96*9SoGBzfnRajnwb0fCMU3spfNzZpQNczAVS+FyTJfFZbhmgsHcESZFumWGN*5MtVhsGjSyBKuI7iex0FolfHt1FKNW98GYe*YAQSEuKYEU51m3Jw96APq1jTyC6EtdEG03o8WG27Febfb5YSMtnVWcm6aKtmeZKWRV0FzLGFzkWfgGeqAguYfKEvkLXNKctCYqSxiiEoz**KsHMnSn77511QZcDwSYlPSQVUWSQ**D1I9D6Hl5lVG7zTylWyACxuznNqIUZ2HZyVhlkHgRrpESQVqCcQCTEv1sEBHkgzElFfo5tErud7pbojrXDMsEPZC+*MA+GAN+KEoCz3JDbiSMefaP8lvTwcKi+JYhCnogeV3jOEmQRFEUR4PBQBh2N7uD50+GHaCPKMRJCcZAMbOIcU1VXe*9u7ybzydqOFHCCfjs6CMZ79KforXVTm5t*GgJVR3DD2C5sHf2Xq5CVzgIPDLEQjYfq73w9g8gHUI9MPpTd5WuiJP49JpH20TzrndLM9qaq4WdpkdxbR+UxZpl8ZRPZ*5idJbSWpiJq2x4tuabPiaZp*ePOneIHYnbSrPdW1fNRzX20K*FpicdJ9z0oY82i2Z9uG7O*TOcnqomsqcPEs7ZpTCQUoe9FMO0TU9hqyvm3ooOM1nVRQYFyyofmoJjscmVl+1gJqcmO23eM*uameTHW4Vfceq86n4DjF6jn8HOwf*27p14FzH22fsF48dj8i8DOT3m+4MXrsrClG+SNbcHZ55M2ViN+0Y+Z7TNOsPMLZiZbcyA5*OvHigSSIOcpGAMYOaTHPugB0hedZnVsyD*TTFlousvmZ89kMCSTj7nYI9TVFKYFmDMSUNhMBIGvPR+a0vyYgHLqBNhy12ioAt1OykKm0L6MVZg0n1q2IDn31BLAQIUAxQAAAgIAK9dBVtusVa2VgQAAHEHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '256742015194',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'wisedfred,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
