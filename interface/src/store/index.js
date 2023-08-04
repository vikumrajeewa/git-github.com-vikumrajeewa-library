import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [], // Array of all books
    currentPage: 1, // Current page number
    itemsPerPage: 5, // Number of items to show per page
    borrowedBooks: [], // Array of books in user's session
    searchQuery: '', // To store the search query
  },
  getters: {
    paginatedBooks(state) {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.books.slice(startIndex, endIndex);
    },
    totalBooksPages(state) {
      return Math.ceil(state.books.length / state.itemsPerPage);
    },
    filteredBooks(state) {
      const regex = new RegExp(state.searchQuery, 'i');
      return state.books.filter(
        (book) =>
          regex.test(book.title) ||
          regex.test(book.description) ||
          regex.test(book.genre)
      );
    },
    paginatedFilteredBooks(state, getters) {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return getters.filteredBooks.slice(startIndex, endIndex);
    },
    totalFilteredPages(state, getters) {
      return Math.ceil(getters.filteredBooks.length / state.itemsPerPage);
    },
    isBookBorrowed: (state) => (bookId) => {
      return state.borrowedBooks.some((book) => book.id === bookId);
    },
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    changePage(state, page) {
      state.currentPage = page;
    },
    borrowBook(state, bookId) {
      const book = state.books.find((book) => book.id === bookId);
      if (book) {
        state.borrowedBooks.push(book);
        state.books = state.books.filter((book) => book.id !== bookId);
      }
    },
    returnBook(state, bookId) {
      const book = state.borrowedBooks.find((book) => book.id === bookId);
      if (book) {
        state.books.push(book);
        state.borrowedBooks = state.borrowedBooks.filter((book) => book.id !== bookId);
      }
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    resetSearchQuery(state) {
      state.searchQuery = '';
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      // In a real application, fetch books from an API
      // For now, we'll use mock data
      const mockBooks = [
        {
          id: 1,
          title: 'Book 1',
          description: 'Description of Book 1',
          genre: 'Fiction',
          price: 10,
        },
        {
          id: 2,
          title: 'Book 2',
          description: 'Description of Book 2',
          genre: 'Non-fiction',
          price: 15,
        },
        // Add more books...
      ];
      commit('setBooks', mockBooks);
    },
    changePage({ commit }, page) {
      commit('changePage', page);
    },
    performSearch({ commit, dispatch }, query) {
      commit('setSearchQuery', query);
      dispatch('changePage', 1); // Reset the page to the first page when performing a new search
    },
    borrowBook({ commit }, bookId) {
      commit('borrowBook', bookId);
    },
    returnBook({ commit }, bookId) {
      commit('returnBook', bookId);
    },
  },
});
