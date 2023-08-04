<template>
    <div class="book-item">
      <h3>{{ book.title }}</h3>
      <p>{{ book.description }}</p>
      <p>Genre: {{ book.genre }}</p>
      <p>Price: {{ book.price }}</p>
      <button @click="borrowBook(book.id)">Borrow</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['book'],
    methods: {
      borrowBook(bookId) {
        this.$emit('borrow-book', bookId);
      },
    },
  };
  </script>
  