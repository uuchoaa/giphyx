<template>
  <div>
    <div>
      <div 
        v-for="gif in gifs" 
        :key="gif.id" 
      >
        <img :src="gif.images.fixed_height.url" :alt="gif.title" />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      gifs: [],
    };
  },
  methods: {
    async searchGifs() {
      const api_key = process.env.VUE_APP_GIPHY_API
      const response = await Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`);
      this.gifs = response.data.data;

    },
  },

  async mounted() {
    await this.searchGifs()
  }
};
</script>
