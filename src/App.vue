<template>
  <div>
    <pre>{{ gifs }}</pre>
  </div>
</template>

<script>

export default {
  data() {
    return {
      gifs: [],
      key: '',
    };
  },
  methods: {
    async searchGifs() {
      this.gifs = [
        {
          key: process.env.VUE_APP_GIPHY_API
        }
      ]
    },
  },

  async mounted() {
    await this.searchGifs()
  }
};
</script>
