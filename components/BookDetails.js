import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';

const BookDetails = ({ book }) => {
  if (!book) return null; // Ensure book data is present

  // Function to handle borrow action
  const handleBorrowBook = () => {
    Alert.alert("Borrow Book", `${book.name} has been borrowed!`);
  };

  return (
    <View style={styles.container}>
      {/* Book Cover Image */}
      <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
      
      {/* Book Title */}
      <Text style={styles.title}>{book.name}</Text>
      
      {/* Book Author */}
      <Text style={styles.author}>by {book.author}</Text>
      
      {/* Book Rating */}
      <Text style={styles.rating}>Rating: {book.rating} / 5</Text>
      
      {/* Book Summary */}
      <Text style={styles.description}>{book.summary}</Text>
      
      {/* Borrow Book Button */}
      <TouchableOpacity style={styles.borrowButton} onPress={handleBorrowBook}>
        <Text style={styles.borrowButtonText}>Borrow Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  coverImage: {
    width: 150,
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  author: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#FFD700', // Gold color for rating
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 20,
  },
  borrowButton: {
    backgroundColor: '#4682B4', // Steel blue color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  borrowButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookDetails;
