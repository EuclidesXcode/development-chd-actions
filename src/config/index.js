import axios from 'axios'

const config = axios.create({
  baseURL: 'https://1uc3pve92e.execute-api.us-east-2.amazonaws.com/dev/public/users/v1/userTypes/GMF/sailpoint/users/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'COr8UcK1ggPV5hG9bGam9dMq14A6Hvv8VVNHhZXg',
  },
  timeout: 30000,
})

export default config