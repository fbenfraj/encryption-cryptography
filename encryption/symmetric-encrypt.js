const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

// Cipher
const message = "i like turtles";
const key = randomBytes(32);
// Initialization Vector prevents identical sequences of text
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key);

// Encrypt
const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

// Decrypt
const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", utf8) + decipher.final("utf8");
