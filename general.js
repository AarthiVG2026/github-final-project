const axios = require('axios');
const baseURL = 'http://localhost:5000/books';

// Helper to handle responses and errors
function handleResponse(promise) {
  promise
    .then(response => {
      if (response.status === 200 && response.data) {
        console.log('✅ Success:', JSON.stringify(response.data, null, 2));
      } else {
        console.log('⚠️ Unexpected response:', response.status);
      }
    })
    .catch(error => {
      if (error.response) {
        console.error(`❌ Error ${error.response.status}: ${error.response.data.message || 'Request failed'}`);
      } else {
        console.error('❌ Network or server error:', error.message);
      }
    });
}

// Promise callbacks
function getBooksByAuthor(author) {
  if (!author) return console.error('Author parameter missing!');
  handleResponse(axios.get(`${baseURL}/author/${author}`));
}

function getBooksByTitle(title) {
  if (!title) return console.error('Title parameter missing!');
  handleResponse(axios.get(`${baseURL}/title/${title}`));
}

function getBooksByISBN(isbn) {
  if (!isbn) return console.error('ISBN parameter missing!');
  handleResponse(axios.get(`${baseURL}/isbn/${isbn}`));
}

// Async/Await version
async function getAllBooks() {
  try {
    const response = await axios.get(baseURL);
    if (response.status === 200) {
      console.log('✅ All Books:', JSON.stringify(response.data, null, 2));
    } else {
      console.log('⚠️ Unexpected response:', response.status);
    }
  } catch (error) {
    if (error.response) {
      console.error(`❌ Error ${error.response.status}: ${error.response.data.message || 'Request failed'}`);
    } else {
      console.error('❌ Network or server error:', error.message);
    }
  }
}

// Example calls
getBooksByAuthor('Andy Weir');
getBooksByTitle('The Martian');
getBooksByISBN('9780143127741');
getAllBooks();
