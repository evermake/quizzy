import type { Buffer } from 'node:buffer'
import type { BinaryLike } from 'node:crypto'
import crypto from 'node:crypto'

export function hashPassword(password: BinaryLike, salt: BinaryLike): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const iterations = 10000
    const keylen = 64
    const digest = 'sha512'

    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
      if (err) {
        reject(err)
      } else {
        resolve(key)
      }
    })
  })
}

export async function checkPassword(
  password: BinaryLike,
  salt: BinaryLike,
  expectedHash: Buffer,
): Promise<boolean> {
  const actualHash = await hashPassword(password, salt)
  return actualHash.equals(expectedHash)
}
