import axios from 'axios';
import { apiURL, success } from '../../utils';

const fetchHeadlines = async (req, res) => {
  try {
    const response = await axios.get(`${apiURL}/top-headlines`, { params: req.query || {} });
    return success(res, response.data.articles);
  } catch (error) {
    console.error(error);
  }
};

export { fetchHeadlines };
