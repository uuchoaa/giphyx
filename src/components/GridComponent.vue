<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div
      v-for="gif in gifs" 
      :key="gif.id"
      @click="selectGif(gif)" 
      :class="{'border-4 border-blue-500 hover:border-blue-500': selectedGifId === gif.id}" 
      class="cursor-pointer group aspect-h-7 h-48 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 border-4 hover:border-blue-200"
    >
      <img :src="gif.images.fixed_height.url" :alt="gif.title" />
    </div>

  </div>

</template>

<script>
export default {
  props: ['gifs'],
  data() {
    return {
      selectedGifId: null
    };
  },
  methods: {
    selectGif(gif) {
      console.log('selectGif:', gif)
      this.selectedGifId = gif.id;
      this.$emit('selected', gif);
    }
  }
};
</script>
