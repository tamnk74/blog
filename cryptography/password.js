const crypto = require("crypto");

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;

  console.log("pbkdf2");
  console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
});

// Using the factory defaults.
crypto.scrypt("password", "salt", 64, (err, derivedKey) => {
  if (err) throw err;
  console.log("scrypt1");
  console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
crypto.scrypt("password", "salt", 64, { N: 1024 }, (err, derivedKey) => {
  if (err) throw err;
  console.log("scrypt2");
  console.log(derivedKey.toString("hex")); // '3745e48...aa39b34'
});
