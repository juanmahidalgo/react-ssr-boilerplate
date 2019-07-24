import { Router } from 'express';

import { fetchHeadlines } from '../services/news';
import { success, returnCode } from '../../utils';

const router = Router();

router
  .get('/headlines', async  (req, res) => {
    try {
      const response = await fetchHeadlines(req.query);
      return success(res, response.data.articles);
    }
    catch(error) {
      // should add a logger for this error logs
      return returnCode(res, error.response.statusCode);
    }
  });

export default router;
