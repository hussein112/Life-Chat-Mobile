import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { terms, privacy_policy } from './legalPages';

export function Terms() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.section_title}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          {privacy_policy}
        </Text>
      </View>
    
      <View style={styles.container}>
        <Text style={styles.section_title}>Your Rights and Responsibilities</Text>
        <Text style={styles.paragraph}>
          {terms}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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