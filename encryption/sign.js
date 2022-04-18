const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const message = "This data must be signed";

// Sign
const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

// Verify
const verifier = createVerify("rsa-sha256");

verifier.update(message);

const isVerifed = verifier.verify(publicKey, signature, "hex");
