const booksData = [];

function removebook(bookId) {
  let storedData = JSON.parse(localStorage.getItem('storedData'));
  storedData = storedData.filter((bookobj) => {
    if (bookobj.id.toString() === bookId) {
      return false;
    }
    return true;
  });
  localStorage.setItem('storedData', JSON.stringify(storedData));
}

function createBook(book) {
  const booksCont = document.getElementById('booksCont');
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book';
  bookDiv.id = `book-${book.id}`;
  const bookElement = `
        <h4 class="bookTitle">${book.title}</h4>
        <p class="bookAuthor">${book.author}</p>
        <button class="removeBtn">Remove</button>
        <hr>
      `;
  bookDiv.innerHTML += bookElement;
  bookDiv.querySelector('.removeBtn').addEventListener('click', (event) => {
    const book = document.getElementById(event.target.parentElement.id);
    book.parentElement.removeChild(book);
    const bookId = book.id.substring(5, book.id.length);
    removebook(bookId);
  });
  booksCont.append(bookDiv);
}

function storeInputData() {
  const inputData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    id: Math.floor(Math.random() * 10000),
  };
  const storedData = JSON.parse(localStorage.getItem('storedData'));
  storedData.push(inputData);
  localStorage.setItem('storedData', JSON.stringify(storedData));
  createBook(inputData);
}

const initLoad = (booksData) => {
  const storedData = JSON.parse(localStorage.getItem('storedData'));
  if (storedData) {
    storedData.forEach((book) => {
      createBook(book);
    });
  } else {
    localStorage.setItem('storedData', JSON.stringify(booksData));
    booksData.forEach((book) => {
      createBook(book);
    });
  }
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', () => {
    storeInputData();
  });
};

initLoad(booksData);