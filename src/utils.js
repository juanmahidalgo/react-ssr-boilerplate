export const success = (res, data) => {
  res.status(200).json({ data, status: 'ok' });
};

export const notFound = (res) => {
  res.status(404);
};

export const apiURL = 'https://newsapi.org/v2';
