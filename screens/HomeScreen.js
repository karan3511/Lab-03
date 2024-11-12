// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { fetchBooks } from '../services/booksService';
// import BookItem from '../components/BookItem';

// const HomeScreen = ({ navigation }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const loadBooks = async () => {
//       const booksData = await fetchBooks();
//       setBooks(booksData);
//     };
//     loadBooks();
//   }, []);

//   const navigateToBookDetails = (bookId) => {
//     navigation.navigate('BookDetails', { bookId });
//   };

//   return (
//     <View style={styles.container}>
//       {books.map((book) => (
//         <BookItem key={book.id} book={book} onPressDetails={navigateToBookDetails} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
// });

// export default HomeScreen;



// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, StyleSheet } from 'react-native';
// import { fetchBooks } from '../services/booksService';
// import BookItem from '../components/BookItem'; // Assuming BookItem is a component you created for book display

// const HomeScreen = ({ navigation }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const loadBooks = async () => {
//       const booksData = await fetchBooks();
//       setBooks(booksData);
//     };
//     loadBooks();
//   }, []);

//   const navigateToBookDetails = (bookId) => {
//     navigation.navigate('BookDetails', { bookId });
//   };

//   return (
//     <View style={styles.container}>
//       {books.length > 0 ? (
//         <FlatList
//           data={books}
//           renderItem={({ item }) => (
//             <BookItem key={item.id} book={item} onPressDetails={navigateToBookDetails} />
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       ) : (
//         <Text>Loading books...</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
// });

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { fetchBooks } from '../services/booksService'; // assuming you have this service
import BookItem from '../components/BookItem'; // Assuming you have a component for book item

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };
    loadBooks();
  }, []);

  // Navigate to book details
  const navigateToBookDetails = (bookId) => {
    navigation.navigate('BookDetails', { bookId });
  };

  return (
    <View style={styles.container}>
      {books.length > 0 ? (
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <BookItem book={item} onPressDetails={navigateToBookDetails} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Loading books...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9', // light background for better contrast
  },
  bookItem: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // for android shadow
    padding: 12,
  },
});

export default HomeScreen;
