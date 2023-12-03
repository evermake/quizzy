import { Buffer } from 'node:buffer'
import { z } from 'zod'

export const zBytes = z.custom<Uint8Array>((value) => {
  if (value instanceof Uint8Array) {
    return { success: true, value }
  } else if (typeof value === 'string') {
    try {
      const bytes = Uint8Array.from(Buffer.from(value, 'hex'))
      return { success: true, value: bytes }
    } catch (err) {
      return { success: false, error: err }
    }
  }
  return { success: false, error: new Error('Uint8Array or string expected') }
})
