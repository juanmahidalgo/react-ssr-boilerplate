import { Router } from 'express';

import { fetchHeadlines } from '../services/news';

const router = Router();

router
  .get('/headlines', fetchHeadlines)

export default router;
