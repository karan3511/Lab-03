// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const BookItem = ({ book, onPressDetails }) => (
//   <View style={styles.container}>
//     <Text style={styles.title}>{book.name}</Text>
//     <Text>{book.author}</Text>
//     <Button title="View Details" onPress={() => onPressDetails(book.id)} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default BookItem;



import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookItem = ({ book, onPressDetails }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{book.name}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Button title="View Details" onPress={() => onPressDetails(book.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
  },
  author: {
    color: 'gray',
  },
});

export default BookItem;
