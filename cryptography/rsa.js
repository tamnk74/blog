const { generateKeyPairSync, createSign, createVerify } = require("crypto");

// RSA algorithm
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
    cipher: "aes-256-cbc",
    passphrase: "top secret",
  },
});
console.log(privateKey, publicKey);
const sign = createSign("SHA256");
sign.write("some data to sign");
sign.end();
const signature = sign.sign(privateKey, "hex");

const verify = createVerify("SHA256");
verify.write("some data to sign");
verify.end();
console.log(verify.verify(publicKey, signature, "hex"));
// Prints: true
