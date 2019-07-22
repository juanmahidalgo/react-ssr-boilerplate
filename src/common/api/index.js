// Simulates the fetch to the categories metadata endpoint
export const fetchCategories = () =>
  Promise.resolve(
    {
      categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    }
  )

export const fetchHeadlines = async (params = {}) => {
  try {
    // const response = await axios.get('/api/headlines', { params, crossDomain: true });
    const response = await fetch('/api/headlines', { params }).then(res => res.json());

    return {
      headlines: response.data
    };
  } catch (error) {
    console.error(error);
  }
}