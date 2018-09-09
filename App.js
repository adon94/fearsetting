/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Define from './src/Screens/Define';
import Worst from './src/Screens/Worst';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Define />
//       </View>
//     );
//   }
// }

export default createStackNavigator(
  {
    Define,
    Worst,
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#FFFFFF',
      paddingTop: 40,
      paddingHorizontal: 20,
    }
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
