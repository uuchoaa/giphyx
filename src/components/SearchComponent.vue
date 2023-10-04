<template>
  <div class="max-w-xl mx-auto">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchTerm" placeholder="Search for GIFs..." class="w-full p-2 border rounded">
      <input type="submit" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" value="Search">
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('search', { q: this.searchTerm });
    }
  }
};
</script>
