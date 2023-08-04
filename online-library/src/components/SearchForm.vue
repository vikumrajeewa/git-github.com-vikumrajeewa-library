<template>
    <div class="search-form">
      <input type="text" v-model="searchQuery" @input="searchBooks" placeholder="Search by title, description, or genre" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      searchBooks() {
        this.$emit('search', this.searchQuery);
      },
    },
  };
  </script>
  