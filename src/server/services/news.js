import axios from 'axios';
import { apiURL } from '../../utils';

const fetchHeadlines = (params = {}) => {
  try {
    return axios.get(`${apiURL}/top-headlines`, { params });
  } catch (error) {
    console.error(error);
  }
};

export { fetchHeadlines };
