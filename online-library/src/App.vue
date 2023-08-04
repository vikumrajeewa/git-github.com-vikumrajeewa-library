<template>
  <div class="app">
    <SearchForm @search="onSearch" />
    <BookList :books="filteredBooks" :totalBooks="totalBooks" :perPage="perPage" @borrow-book="borrowBook" />
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import SearchForm from './components/SearchForm.vue';
import api from './api';

export default {
  components: {
    BookList,
    SearchForm,
  },
  data() {
    return {
      books: [], // This will hold all books data from API
      filteredBooks: [], // This will hold filtered books based on search query
      totalBooks: 0,
      perPage: 5, // Number of books to show per page
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      // Make an API call to get all books data and update the 'books' array
      // This function will be called on page load
      // For example:
      api.getBooks().then((response) => {
        this.books = response.data;
        this.totalBooks = this.books.length;
        this.filteredBooks = this.books;
      });
    },
    onSearch(searchQuery) {
      // Filter books based on search query and update 'filteredBooks'
      // For example:
      this.filteredBooks = this.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      this.totalBooks = this.filteredBooks.length;
    },
    borrowBook(bookId) {
      // Implement the borrowBook function using API call
      // For example:
      api.borrowBook(bookId).then(() => {
        // Update the 'books' array and 'filteredBooks' array after successful borrowing
        this.books = this.books.filter((book) => book.id !== bookId);
        this.filteredBooks = this.filteredBooks.filter((book) => book.id !== bookId);
        this.totalBooks = this.filteredBooks.length;
      });
    },
  },
};
</script>
