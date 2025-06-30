require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADVT3VoOsJpFrQQAAH4IAAAKAAAAY3JlZHMuanNvbq1V266iSBT9l3rVtHJXk5MMAioqKKJwcDIPJRQ3uZ2qQsSO*z5B+3T3pHu6zyTDU1EUe6+199qrPoOiTAhaoRZMPoMKJxdIUbekbYXABEzrMEQY9EEAKQQTAJW8bqKj17Ahezkq9ZvNDpKbeK1phJqRuxrhtXWch2PV5V*AvQ+q+pQl*i8CjqG9D2*SRTvaQrpUzuuTC0*+YpttJGRuoGHc4CnQ7R1xyhdw7yLCBCdFpFUxyhGG2Qq1W5jgj8Evte1V9LCWXteaJXsK4kMabdbeLS73QzFqmLeeumiIf5p5H4M*GG2zrQPFk20fX3ukKJ3ayM6ySA6mSNNDJZmBIHFDR29HT*gkiQoU6AEqaELbD9e9Xp0yw6BczZoz6uK5dBRNl*jSgGvezPrqevoQmvskNIbWx4BbMQlJRhdzFUUz6wDVnnpiBoK9MxlnXcW+09ibC7F4oZC*B77F71o5*5e6+8uwKRbpKQ+GNlYg442ig+Btt7E+eyuW1vlVTUXeubDbOfkYfPvyWq*n5zjubYiljVuut89IyiyM3IGm3mt1W5zXWImoo3+DD2mNf4VybE+rzMQMnLmu6A52qZecbst8vEfBdVCwox2esldsXpyelYb6dOWMWSnFi4F*8Ht2u4zjHUGHeX6Dvcg679S0zddcLL88GJ1Rqwdgwtz7AKMoIRRDmpTFY49h+wAGFxv5GNFHeUE9SuHJ37ALXnk1hNZyhaw1hZ52uLLHqS4YbwescpugMa*yC+iDCpc+IgQFi4TQErcGIgRGiIDJn49OdaQxykuKlkkAJoAVeGksMqMhMxT+IJ+aGFICq+pTgSjogxCXuYHAhOIa9cHjB05SmZGmcLOZPGOGI0USBVVTJWU8m7KaIM06ivkz6T7JEaEwr8CEkQSGGbMSz977*w8OZsTLrCTIGsMLqioKgjBUZ5okiBzD8qrA*BbHX31QoCt96rirPsf0QZhgQg9FXWUlDN5F*v4R+n5ZF9RuC1*pFgiDyXfbiNKkiEjHrC4g9uPkgpSOB5iEMCPoa8MRRsE7ly8mppRBp0PTPTrqknFAh70L9ENtJtyP1cmep0Se4ZmhJIw5hmW6g93+*Su+LlyAKEwyAiZAWQ6mJRzOtGVdxYYxn8taJCuRDL7xeZ+Tpw4vNhcGxmZz4ae7ZLdQHGMncwfX926ndLss31RnBo+q+xrvvZefBOnIHa9XJ63LUC*N5VBMXF+U8HZwwVmyjkXHs8iKS2*6ttdoo0FcU+82G5xUXlRCV2+doPTU7aDk5UaFtrJCVu2Oake2XrpsAbokPvpHMrJniyZbigu3wOPKettisVkc2fWr37zaWr5BF7WJ*cxNpnnU5Lv9mA32tqdEwpFWo6vG5COhGirBJi3d1Bb356MpJtFzgh8Okn1x7uTLbCWP1zBBDyMsYNe*33buibvT1*De*y7EF2f9F3eanoaU4*ZqinvywTvvmmyvWSYzK+YGy99auIqYnZtbTMYfWHDvhF5lkIYlzrt7uwhwmQSgD3BZd4LVi7D8RTJFjvSp9SSeQULlb0Pwk7nihOepLS6rBSRxZxi78ZEbd4pu5aqyKaTvMwXk7tHzAtz*BlBLAQIUAxQAAAgIADVT3VoOsJpFrQQAAH4IAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAANUEAAAAAA==',
  BOT_ADMIN: process.env.BOT_ADMIN || '254796180105',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'kwesigh',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
