var crypto = require("crypto");
const salt = "59509e61e54a2c849d1f46186899f674"; //crypto.randomBytes(16).toString('hex');

getHashPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return hash;
};

module.exports = { getHashPassword };
