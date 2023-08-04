<template>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      perPage: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    computed: {
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
      currentPage: {
        get() {
          return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
        },
        set(pageNumber) {
          this.$emit('page-changed', pageNumber);
        },
      },
    },
    methods: {
      changePage(pageNumber) {
        this.currentPage = pageNumber;
      },
    },
  };
  </script>
  
  <style>
  /* Add styling for pagination if needed */
  </style>
  