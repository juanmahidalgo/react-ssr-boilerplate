export const success = (res, data) => {
  res.status(200).json({ data, status: 'ok' });
};

export const notFound = (res) => {
  res.status(404);
};

export const returnCode = (res, code) => {
  res.status(code);
};

export const apiURL = 'https://newsapi.org/v2';

export const mockedHeadline = {
  url: 'test',
  urlToImage: 'test',
  content: 'test',
  title: 'test',
  description: 'test',
  publishedAt: 'test',
  source: {
    name: 'test',
  },
};