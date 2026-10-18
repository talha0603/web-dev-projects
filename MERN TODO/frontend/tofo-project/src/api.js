const BASE = 'http://localhost:7000/api'

export const AUTH_URL = `${BASE}/v1`   // register, signin
export const LIST_URL = `${BASE}/v2`   // addTask, updateTask, deleteTask, getTasks

// One helper for every request: sends JSON, reads JSON, throws on errors
export const request = async (url, options = {}) => {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(
      data.message || data.error?.message || `Request failed (${res.status})`
    )
  }

  return data
}