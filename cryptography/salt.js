const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

let users = [];

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");

  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);

  return user;
}

function login(email, password) {
  const user = users.find((user) => user.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  // This is to prevent hackers using computing time to brute force password easier
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    console.log("Login success!");
  } else {
    console.log("Login failed!");
  }
}

signup("farouk.ben-fraj@outlook.com", "qwerty123");
login("farouk.ben-fraj@outlook.com", "qwerty1234");
