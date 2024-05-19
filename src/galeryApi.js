import axios from 'axios';

const UNSPLASH_API_BASE_URL = 'https://api.unsplash.com';

const ACCESS_KEY = 'upAmkux6OgU_nR4G3ffBtuKLZX0L_HxAZEqnFMPbvoE';

const unsplashApi = axios.create({
  baseURL: UNSPLASH_API_BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchCollections = async (query, page, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/search/collections', {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching collections:', error.response?.data || error.message);
    throw error;
  }
};
