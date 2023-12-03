import type { Buffer } from 'node:buffer'
import type { BinaryLike } from 'node:crypto'
import type { JWTPayload } from 'jose'

import crypto from 'node:crypto'
import { SignJWT, jwtVerify } from 'jose'

export function generateSalt(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf)
      }
    })
  })
}

export function hashPassword(
  password: BinaryLike,
  salt: BinaryLike,
): Promise<Buffer> {
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

export interface IssueJwtOptions {
  payload: JWTPayload
  secret: Uint8Array
  expiresAt: Date
}

export async function issueJwt({
  payload,
  secret,
  expiresAt,
}: IssueJwtOptions): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(secret)
}

export interface VerifyJwtOptions {
  token: string | Uint8Array
  secret: Uint8Array
  maxAgeSeconds: number
}

export async function verifyJwt({
  token,
  secret,
  maxAgeSeconds,
}: VerifyJwtOptions): Promise<JWTPayload> {
  try {
    const result = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
      currentDate: new Date(),
      maxTokenAge: maxAgeSeconds,
    })
    return result.payload
  } catch (err) {
    throw new Error('Invalid token')
  }
}
