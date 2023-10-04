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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <div
          v-for="gif in gifs" 
          :key="gif.id" 
          class="group aspect-h-7 h-48 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img :src="gif.images.fixed_height.url" :alt="gif.title" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Axios from 'axios';
import SearchComponent from './components/SearchComponent';


export default {
  components: {
    SearchComponent,
  },
  data() {
    return {
      gifs: [],
    };
  },
  methods: {
    async searchGifs(query) {
      console.log(query)
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
