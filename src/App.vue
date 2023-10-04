<template>
  <div>
    
    <!-- Header -->
    <div class="bg-blue-600 text-white text-center py-4">
        <h1 class="text-2xl font-bold">Giphy Search App</h1>
    </div>

    <!-- Search Bar -->
    <div class="mt-6 px-4">
      <SearchComponent @submited="searchGifs" />
    </div>

    <!-- Search GIF Grid -->
    <div class="px-4 mt-6">
      <GridComponent :gifs="gifs" @selected="loadRelated" />
    </div>

    <!-- Related Bar -->
    <div class="mt-6 px-4">
      <h1 class="text text-xl">Related:</h1>
    </div>

    <!-- Related GIF Grid -->
    <div class="px-4 mt-6">
      <GridComponent :gifs="relatedGifs" />
    </div>

  </div>
</template>

<script>
import SearchComponent from './components/SearchComponent';
import GridComponent from './components/GridComponent';
import GiphyAPIService from './services/GiphyAPIService';


export default {
  components: {
    SearchComponent,
    GridComponent,
  },
  data() {
    return {
      gifs: [],
      relatedGifs: []
    };
  },
  methods: {
    async loadRelated(gif) {
      const query = { q: gif.title }
      this.relatedGifs = await GiphyAPIService.search(query)
    },

    async searchGifs(query) {
      this.gifs = await GiphyAPIService.search(query);
    },


  },

  async mounted() {
    await this.searchGifs({ q: 'Welcome back!' })
  }
};
</script>
