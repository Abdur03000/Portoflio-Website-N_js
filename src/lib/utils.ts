/** SHA-256 hash of a string using Web Crypto API */
export async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Type-safe localStorage get with JSON parsing and fallback */
export function getStoredItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : fallback
  } catch {
    return fallback
  }
}

/** Type-safe localStorage set */
export function setStoredItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(value))
}

/** Generate a simple numeric ID */
export const genId = (): number => Date.now()

/** Format ISO date string to YYYY-MM-DD */
export const today = (): string => new Date().toISOString().split('T')[0]
