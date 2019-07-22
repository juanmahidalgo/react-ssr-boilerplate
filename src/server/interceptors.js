import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apiKey: process.env.RAZZLE_CONSUMER_KEY,
    country: process.env.RAZZLE_COUNTRY_KEY
  }
  return config
});