import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-url.com/', // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getBooks(searchParams) {
    return apiClient.get('/books', { params: searchParams });
  },
  borrowBook(bookId) {
    return apiClient.post(`/books/${bookId}/borrow`);
  },
  returnBook(bookId) {
    return apiClient.post(`/books/${bookId}/return`);
  },
};
