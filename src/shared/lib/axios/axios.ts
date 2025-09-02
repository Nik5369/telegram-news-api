import Axios from 'axios'

export const api = Axios.create({
  baseURL: import.meta.env.VITE_TELEGRAPH_API,
  headers: {
    'Content-Type': 'application/json',
  },
})
