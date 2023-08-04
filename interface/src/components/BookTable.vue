<!-- BookTable.vue -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <BookItem
          v-for="book in paginatedFilteredBooks"
          :key="book.id"
          :book="book"
        />
      </tbody>
    </table>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalFilteredPages"
      @change="changePage"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BookItem from './BookItem.vue';
import BookSearch from './BookSearch.vue';
import Pagination from './Pagination.vue';

export default {
  components: {
    BookItem,
    BookSearch,
    Pagination,
  },
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['paginatedFilteredBooks', 'totalFilteredPages']),
  },
  methods: {
    changePage(page) {
      this.$store.dispatch('changePage', page);
    },
  },
};
</script>
