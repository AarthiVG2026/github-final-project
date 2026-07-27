const axios = require('axios');
const baseURL = 'http://localhost:5000/books';

// Using Promise callbacks
function getBooksByAuthor(author) {
  axios.get(`${baseURL}/author/${author}`)
    .then(response => {
      console.log('Books by Author:', response.data);
    })
    .catch(error => {
      console.error('Error fetching books by author:', error.message);
    });
}

function getBooksByTitle(title) {
  axios.get(`${baseURL}/title/${title}`)
    .then(response => {
      console.log('Books by Title:', response.data);
    })
    .catch(error => {
      console.error('Error fetching books by title:', error.message);
    });
}

function getBooksByISBN(isbn) {
  axios.get(`${baseURL}/isbn/${isbn}`)
    .then(response => {
      console.log('Books by ISBN:', response.data);
    })
    .catch(error => {
      console.error('Error fetching books by ISBN:', error.message);
    });
}

// Using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(baseURL);
    console.log('All Books:', response.data);
  } catch (error) {
    console.error('Error fetching all books:', error.message);
  }
}

// Example calls
getBooksByAuthor('Andy Weir');
getBooksByTitle('The Martian');
getBooksByISBN('9780143127741');
getAllBooks();
