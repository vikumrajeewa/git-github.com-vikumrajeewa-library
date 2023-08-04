<!-- BookItem.vue -->
<template>
  <tr>
    <td>{{ book.id }}</td>
    <td>{{ book.title }}</td>
    <td>{{ book.description }}</td>
    <td>{{ book.genre }}</td>
    <td>{{ book.price }}</td>
    <td>
      <button @click="borrowBook(book.id)">Borrow</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    book: Object,
  },
  methods: {
    borrowBook(bookId) {
      // Dispatch an action to borrow the book
      this.$store.dispatch('borrowBook', bookId);
    },
  },
};
</script>
