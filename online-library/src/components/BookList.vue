<template>
    <div class="book-list">
      <BookItem v-for="book in paginatedBooks" :key="book.id" :book="book" @borrow-book="borrowBook" />
      <Pagination :perPage="perPage" :total="totalBooks" @page-changed="onPageChanged" />
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  import Pagination from 'vuejs-paginate';
  
  export default {
    components: {
      BookItem,
      Pagination,
    },
    props: ['books', 'totalBooks', 'perPage'],
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      paginatedBooks() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.books.slice(start, end);
      },
    },
    methods: {
      onPageChanged(pageNumber) {
        this.currentPage = pageNumber;
      },
      borrowBook(bookId) {
        this.$emit('borrow-book', bookId);
      },
    },
  };
  </script>
  