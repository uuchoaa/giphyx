<template>
  <div>
    
    <!-- Header -->
    <div class="bg-blue-600 text-white text-center py-4">
        <h1 class="text-2xl font-bold">Giphy Search App</h1>
    </div>

    <!-- Search Bar -->
    <div class="mt-6 px-4">
      <SearchComponent @search="searchGifs" />
    </div>

    <!-- GIF Grid -->
    <div class="px-4 mt-6">
      <GridComponent :gifs="gifs" />
    </div>

  </div>
</template>

<script>
import Axios from 'axios';
import SearchComponent from './components/SearchComponent';
import GridComponent from './components/GridComponent';


export default {
  components: {
    SearchComponent,
    GridComponent,
  },
  data() {
    return {
      gifs: [],
    };
  },
  methods: {
    async searchGifs(query) {
      const api_key = process.env.VUE_APP_GIPHY_API

      const default_params = {
        limit: 5,
        rating: 'g',
        bundle: 'messaging_non_clips',
        api_key,
      }

      const params = { ...default_params, ...query }

      const response = await Axios.get(`https://api.giphy.com/v1/gifs/search`, { params });
      this.gifs = response.data.data;
    },
  },

  async mounted() {
    await this.searchGifs({ q: 'Welcome back!' })
  }
};
</script>
