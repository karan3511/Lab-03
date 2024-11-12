// import { getFirestore, doc, getDoc} from 'firebase/firestore';
// import { db } from '../firebase';

// export const fetchBooks = async () => {
//   const querySnapshot = await getDocs(collection(db, 'books'));
//   return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };

// export const fetchBookDetails = async (bookId) => {
//   try {
//     const db = getFirestore(); // Initialize Firestore
//     const docRef = doc(db, "books", bookId); // Access the specific document
//     const docSnap = await getDoc(docRef); // Get document snapshot

//     if (docSnap.exists()) {
//       return docSnap.data(); // Return document data
//     } else {
//       console.log("No such document!");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching book details:", error);
//     throw error;
//   }
// };


import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure you have properly initialized Firestore

// Fetch list of books
export const fetchBooks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'books')); // Fetch all books in the 'books' collection
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Fetch details of a specific book by ID
export const fetchBookDetails = async (bookId) => {
  try {
    const docRef = doc(db, "books", bookId); // Reference to the specific book document
    const docSnap = await getDoc(docRef); // Fetch document snapshot

    if (docSnap.exists()) {
      return docSnap.data(); // Return document data if it exists
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
};
