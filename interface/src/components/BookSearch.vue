
<!-- BookSearch.vue -->
<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="performSearch"
      placeholder="Search by title, description, or genre"
    />
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
    performSearch() {
      this.$store.dispatch('performSearch', this.searchQuery);
    },
  },
};
</script>
