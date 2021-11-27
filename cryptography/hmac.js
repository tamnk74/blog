const { createHmac, getHashes } = require("crypto");

console.log("HASH: ", getHashes());

const hmac = createHmac("sha256", "a secret");

hmac.update("some data to hash");

console.log(hmac.digest("hex"));

const hmacSha512 = createHmac("sha512", "a secret");

console.log(hmacSha512.digest("hex"));
