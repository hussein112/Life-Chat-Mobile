import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import About from './About.js'
import Profile from './Profile.js'
import Terms from './Terms.js'
// import Chat from './Chat.js'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="About" component={About} />
        {/* <Drawer.Screen name="Chat" component={Chat} /> */}
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Terms" component={Terms} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
