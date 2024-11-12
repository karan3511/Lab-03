// import React, { createContext, useState, useContext } from 'react';

// // Creating context for borrowed books
// const BookContext = createContext();

// export const useBookContext = () => useContext(BookContext);

// export const BookProvider = ({ children }) => {
//   const [borrowedBooks, setBorrowedBooks] = useState([]);

//   const borrowBook = (book) => {
//     setBorrowedBooks((prev) => [...prev, book]);
//   };

//   const returnBook = (bookId) => {
//     setBorrowedBooks((prev) => prev.filter((book) => book.id !== bookId));
//   };

//   return (
//     <BookContext.Provider value={{ borrowedBooks, borrowBook, returnBook }}>
//       {children}
//     </BookContext.Provider>
//   );
// };


import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to borrow a book (up to 3 books)
  const borrowBook = (book) => {
    if (borrowedBooks.length < 3) {
      setBorrowedBooks([...borrowedBooks, book]); // Add book to borrowed books
    } else {
      alert("You can borrow up to 3 books.");
    }
  };

  // Function to return a borrowed book
  const returnBook = (bookId) => {
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId)); // Remove the returned book
  };

  return (
    <BookContext.Provider value={{ borrowedBooks, borrowBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
