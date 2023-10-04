<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div
      v-for="gif in gifs" 
      :key="gif.id" 
      class="group aspect-h-7 h-48 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
    >
      <img :src="gif.images.fixed_height.url" :alt="gif.title" />
    </div>

  </div>

</template>

<script>
export default {
  props: ['gifs'],
};
</script>
