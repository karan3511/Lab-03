// // import React, { useState, useEffect } from 'react';
// // import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
// // import { useBookContext } from '../context/BookContext';

// // const BorrowedBooksScreen = () => {
// //   const { borrowedBooks, returnBook } = useBookContext();

// //   const handleReturnBook = (bookId) => {
// //     returnBook(bookId);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {borrowedBooks.length === 0 ? (
// //         <Text>No borrowed books.</Text>
// //       ) : (
// //         <FlatList
// //           data={borrowedBooks}
// //           renderItem={({ item }) => (
// //             <View style={styles.bookItem}>
// //               <Text>{item.name}</Text>
// //               <Button title="Return Book" onPress={() => handleReturnBook(item.id)} />
// //             </View>
// //           )}
// //           keyExtractor={(item) => item.id}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 10,
// //   },
// //   bookItem: {
// //     marginBottom: 10,
// //   },
// // });

// // export default BorrowedBooksScreen;


// import React from 'react';
// import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
// import { useBookContext } from '../context/BookContext'; // Assuming you have context to manage borrowed books

// const BorrowedBooksScreen = () => {
//   const { borrowedBooks, returnBook } = useBookContext();

//   const handleReturnBook = (bookId) => {
//     returnBook(bookId); // Handle returning the book
//   };

//   return (
//     <View style={styles.container}>
//       {borrowedBooks.length === 0 ? (
//         <Text>No borrowed books.</Text>
//       ) : (
//         <FlatList
//           data={borrowedBooks}
//           renderItem={({ item }) => (
//             <View style={styles.bookItem}>
//               <Text>{item.name}</Text>
//               <Button title="Return Book" onPress={() => handleReturnBook(item.id)} />
//             </View>
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   bookItem: {
//     marginBottom: 10,
//   },
// });

// export default BorrowedBooksScreen;



import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useBookContext } from '../context/BookContext'; // Assuming you have context to manage borrowed books

const BorrowedBooksScreen = () => {
  const { borrowedBooks, returnBook } = useBookContext();

  const handleReturnBook = (bookId) => {
    returnBook(bookId); // Handle returning the book
  };

  return (
    <View style={styles.container}>
      {borrowedBooks.length === 0 ? (
        <Text style={styles.noBooksText}>No books borrowed yet.</Text>
      ) : (
        <FlatList
          data={borrowedBooks}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.name}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
              </View>
              <TouchableOpacity
                style={styles.returnButton}
                onPress={() => handleReturnBook(item.id)}
              >
                <Text style={styles.returnButtonText}>Return</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4', // Soft neutral background
  },
  noBooksText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 30,
  },
  bookCard: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light border for a subtle touch
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  returnButton: {
    backgroundColor: '#009688', // Fresh green button for return action
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  returnButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

export default BorrowedBooksScreen;
