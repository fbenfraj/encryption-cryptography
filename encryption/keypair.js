const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: "spki", // recommended
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended
    format: "pem",
    // cipher: "aes-256-cbc"
    // passphrase: "top-secret"
  },
});

// console.log(publicKey);
// console.log(privateKey);

module.exports = {
  privateKey,
  publicKey,
};
