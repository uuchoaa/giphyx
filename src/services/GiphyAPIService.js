// services/GiphyAPIService.js

import Axios from 'axios';

const GiphyAPIService = {

  async search(query) {
    const api_key = process.env.VUE_APP_GIPHY_API

    const default_params = {
      limit: 5,
      rating: 'g',
      bundle: 'messaging_non_clips',
      api_key,
    }

    const params = { ...default_params, ...query }

    const response = await Axios.get(`https://api.giphy.com/v1/gifs/search`, { params });
    return response.data.data
  },


};

export default GiphyAPIService;
