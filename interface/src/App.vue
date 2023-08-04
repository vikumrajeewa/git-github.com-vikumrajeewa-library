<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>Online Library</h1>
    <SearchBar @search="handleSearch"></SearchBar>
    <BookTable :books="filteredBooks"></BookTable>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import BookTable from "./components/BookTable.vue";

export default {
  components: {
    SearchBar,
    BookTable,
  },
  data() {
    return {
      books: [
        // Dummy data for demonstration, replace this with your actual data.
        {
          id: 1,
          title: "Book 1",
          description: "Description of Book 1",
          genre: "Fiction",
          price: 20.0,
        },
        // Add more books here...
      ],
      searchText: "",
    };
  },
  computed: {
    filteredBooks() {
      // Filter the books based on the searchText.
      return this.books.filter((book) => {
        const search = this.searchText.toLowerCase();
        return (
          book.title.toLowerCase().includes(search) ||
          book.description.toLowerCase().includes(search) ||
          book.genre.toLowerCase().includes(search)
        );
      });
    },
  },
