export const OPEN_LEFT = 'OPEN_LEFT'
export const CLOSE_LEFT = 'CLOSE_LEFT'

export function openLeft (id, url) {
  return {
    type: OPEN_LEFT
  }
}

export function closeLeft (id) {
  return {
    type: CLOSE_LEFT
  }
}
