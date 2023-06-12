import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


import {about} from './legalPages.js'

export default function About(){
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Life Chat</Text>
          <Text style={styles.paragraph}>
            {about}
          </Text>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '5%',
    },
    paragraph: {
      fontSize: 20
    },
    section_title: {
      fontWeight: 'bold',
      fontSize: 30
    },
  });