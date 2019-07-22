// Simulates the fetch to the categories metadata endpoint
export const fetchCategories = () =>
  Promise.resolve(
    {
      categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    }
  )

export const fetchHeadlines = async (params = {}) => {
  try {
    const base = '/api/headlines';
    const url = params.category ? `${base}?category=${params.category}` : base;
    const response = await fetch(url).then(res => res.json());

    return {
      headlines: response.data
    };
  } catch (error) {
    console.error(error);
  }
}