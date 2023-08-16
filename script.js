//  add Some Books Data
const booksData = [
  {
    title: 'The Art of Exploitation',
    author: 'Jon Erickson',
    id: 0,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    id: 1,
  },
  {
    title: 'Hacking: The Art of Exploitation',
    author: 'Jon Erickson',
    id: 2,
  },
];



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