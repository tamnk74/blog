// Includes crypto module
const crypto = require('crypto');

// Defining algorithm
const algorithm = 'aes-256-cbc';

// Defining key
const key = Buffer.alloc(
  32,
  'd2b36473180aabd063de6674a897ae1062e6a51c88a86760af4bc049e48d9214'
);
// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);

  // Using concatenation
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  // Returning iv and encrypted data
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(message) {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(message, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
}
// Displays output
var output = encrypt('GeeksforGeeks');
console.log(output);
console.log(decrypt(Buffer.from('fb47e2801debc5d62b2696908b8daa88'), key));
