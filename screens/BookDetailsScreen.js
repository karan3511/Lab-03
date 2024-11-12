// import React, { useState, useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { fetchBookDetails } from '../services/booksService';
// import BookDetails from '../components/BookDetails';

// const BookDetailsScreen = ({ route }) => {
//   const { bookId } = route.params;
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getBookDetails = async () => {
//       try {
//         const bookData = await fetchBookDetails(bookId);
//         console.log('Fetched book data:', bookData); // Debugging line
//         setBook(bookData);
//       } catch (error) {
//         console.error('Error fetching book details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getBookDetails();
//   }, [bookId]);
  

//   if (loading) return <ActivityIndicator size="large" />;

//   return <View><BookDetails book={book} /></View>;
// };

// export default BookDetailsScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useBookContext } from '../context/BookContext';
import { fetchBookDetails } from '../services/booksService'; // assuming you have this service

const BookDetailsScreen = ({ route }) => {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { borrowBook } = useBookContext();

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const bookData = await fetchBookDetails(bookId);
        setBook(bookData);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };
    getBookDetails();
  }, [bookId]);

  const handleBorrowBook = () => {
    borrowBook(book); // Add the book to borrowed books
  };

  if (loading) return <ActivityIndicator size="large" color="#ff6f61" />;

  return (
    <ScrollView style={styles.container}>
      {book && (
        <>
          <View style={styles.headerContainer}>
            <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
            <Text style={styles.title}>{book.name}</Text>
            <Text style={styles.author}>by {book.author}</Text>
          </View>

          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{book.summury}</Text>

          <TouchableOpacity style={styles.button} onPress={handleBorrowBook}>
            <Text style={styles.buttonText}>Borrow This Book</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa', // Soft background for a modern feel
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#ff6f61',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // for android shadow
  },
  coverImage: {
    width: 150,
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BookDetailsScreen;
