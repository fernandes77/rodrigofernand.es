import axios from 'axios'

export const randomAdviceService = axios.create({
  baseURL: 'https://api.adviceslip.com/'
})
