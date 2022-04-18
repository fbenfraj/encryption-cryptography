const { createHash } = require("crypto");

// Create a string hash
function hash(input) {
  // Remember MD5 is obsolete
  return createHash("sha256").update(input).digest("base64");
}

// Compare two hashed passwords
let password = "Hello there!";
const hash1 = hash(password);
console.log(hash1);

password = "Hello there";
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? "Good password." : "Password does not match.");
