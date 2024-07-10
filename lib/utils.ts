import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(text: string) {
  if (typeof text !== 'string') {
    return ''
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}
