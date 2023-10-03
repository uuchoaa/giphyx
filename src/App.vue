<template>
  <div>
    <pre>{{ gifs }}</pre>
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
