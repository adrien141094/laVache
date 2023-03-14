const userInfo = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: userInfo.info,
    e: "oO",
    T: "U "
}));
