"use strict";

const Chance      = require("chance"),
  chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix;
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["https://i.imgur.com/UB6H7YF.png", "https://i.imgur.com/YVyrz3T.png", "https://i.imgur.com/t9Ay1Ab.png", "https://i.imgur.com/PpjUv8z.png", "https://i.imgur.com/cOFeFN3.png", "https://i.imgur.com/IW1cDe1.png"],
      Male: ["https://i.imgur.com/zxkZZtn.png","https://i.imgur.com/LHoQjmT.png","https://i.imgur.com/Kh5a87x.png", "https://i.imgur.com/NKwNQ0y.png", "https://i.imgur.com/93Ndyvp.png", "https://i.imgur.com/3cUkwuX.png"]
    
    };
    
    const avatarArray = avatars[gender];
    const userAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};