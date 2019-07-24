import mockAxios from 'axios';
import { fetchHeadlines } from './news';
import { apiURL } from '../../utils';

jest.mock('axios');

const mockResponse = () => {
  const res = {};
  res.status = () => res;
  res.json = () => res;
  return res;
};

const response = { data: { results: [{ id: 1 }] } };

describe('news - service', () => {
  beforeEach(() => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve(response)
    );
    mockAxios.get.mockClear();
  });

  it('fetches data from newsapi', async () => {
    const headlines = await fetchHeadlines({}, mockResponse());

    expect(headlines).toEqual(response);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${apiURL}/top-headlines`, { params: {} }
    );
  });

  it('fetches data from newsapi with category', async () => {
    const category = 'sports';
    const headlines = await fetchHeadlines({ category }, mockResponse());

    expect(headlines).toEqual(response);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${apiURL}/top-headlines`, { params: { category } }
    );
  });

});
