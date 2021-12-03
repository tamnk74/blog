import { createCipheriv, createDecipheriv } from 'crypto';

export class Crypto {
  static algorithm = 'aes-256-cbc';

  static encrypt(message: string, encryptionKey: string): string {
    const cipher = createCipheriv(
      Crypto.algorithm,
      Buffer.alloc(32, encryptionKey),
      Buffer.alloc(16, encryptionKey)
    );

    const encryptedData = Buffer.concat([
      cipher.update(message),
      cipher.final(),
    ]);

    return encryptedData.toString('hex');
  }

  static decrypt(message: string, encryptionKey: string): string {
    const decipher = createDecipheriv(
      Crypto.algorithm,
      Buffer.alloc(32, encryptionKey),
      Buffer.alloc(16, encryptionKey)
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(message, 'hex')),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }
}
