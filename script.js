class Book {
  constructor(title, author, id = Math.floor(Math.random() * 10000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  add() {
    const booksCont = document.getElementById('booksCont');
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.id = `book-${this.id}`;
    const bookElement = `
        <h4 class="bookTitle">${this.title}</h4>
        <p class="bookAuthor">${this.author}</p>
        <button class="removeBtn">Remove</button>
        <hr>
      `;
    bookDiv.innerHTML += bookElement;
    const inputData = {
      title: this.title,
      author: this.author,
      id: this.id,
    };
    const storedData = JSON.parse(localStorage.getItem('storedData'));
    storedData.push(inputData);
    localStorage.setItem('storedData', JSON.stringify(storedData));
    bookDiv.querySelector('.removeBtn').addEventListener('click', () => {
      this.remove();
    });
    booksCont.append(bookDiv);
  }
//Add code here