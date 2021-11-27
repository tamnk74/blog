const jwt = require("jsonwebtoken");

const { generateKeyPairSync, createSign, createVerify } = require("crypto");

const secretKey = "top secret";
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
    passphrase: secretKey,
  },
});

/**
 * Synchronously sign the given payload into a JSON Web Token string
 * payload - Payload to sign, could be an literal, buffer or string
 * secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * [options] - Options for the signature
 * returns - The JSON Web Token string
 */
const token = jwt.sign(
  { foo: "bar", test: 123 },
  {
    key: privateKey,
    passphrase: secretKey,
  },
  { algorithm: "RS256", audience: "tamnk" }
);

// function verify(token: string, secretOrPublicKey: Secret, options?: VerifyOptions): JwtPayload | string;
const rs = jwt.verify(token, publicKey, {
  audience: "tamnk",
});

console.log(token, rs);
