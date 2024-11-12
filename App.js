// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { BookProvider } from './context/BookContext';
// // import HomeScreen from './screens/HomeScreen';
// // import BookDetailsScreen from './screens/BookDetailsScreen';
// // import BorrowedBooksScreen from './screens/BorrowedBooksScreen';

// // const Stack = createStackNavigator();

// // const App = () => {
// //   return (
// //     <BookProvider>
// //       <NavigationContainer>
// //         <Stack.Navigator initialRouteName="Home">
// //           <Stack.Screen name="Home" component={HomeScreen} />
// //           <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
// //           <Stack.Screen name="BorrowedBooks" component={BorrowedBooksScreen} />
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     </BookProvider>
// //   );
// // };

// // export default App;





// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import BorrowedBooksScreen from './screens/BorrowedBooksScreen';
// import BookDetailsScreen from './screens/BookDetailsScreen';
// import { BookProvider } from './context/BookContext';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const BookStack = () => (
//   <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
//   </Stack.Navigator>
// );

// const App = () => {
//   return (
//     <BookProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={BookStack} />
//           <Tab.Screen name="Borrowed Books" component={BorrowedBooksScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </BookProvider>
//   );
// };

// export default App;


import 'react-native-gesture-handler';  // Import this at the very top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './context/BookContext';
import HomeScreen from './screens/HomeScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BorrowedBooksScreen from './screens/BorrowedBooksScreen';

// Create a Stack Navigator for BookDetails
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for book details
const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={BookStack} />
          <Tab.Screen name="Borrowed Books" component={BorrowedBooksScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;
