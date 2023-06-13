import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { Button } from '@rneui/base';
import { useState, React } from "react";

import {db} from './db';

export default Profile = () => {
  const [userName, setUserName] = useState('');
  const [botName, setBotName] = useState('');

  function saveData(bn, un){
    if(bn !== '' && bn !== db['user'].bot_name){
      saveBotName(bn);
    }else if(un !== '' && un !== db['user'].user_name){
      saveUserName(un);
    }
  }

  function saveUserName(un){
    db['user'].bot_name = un;
    Alert.alert('User Name Updated', `I will call you ${un} from now!`, [
      {text: 'OK'},
    ]);
  }

  function saveBotName(bn){
    db['user'].bot_name = bn;
    Alert.alert('Bot Name Updated', `My name will be ${bn} from now!`, [
      {text: 'OK'},
    ]);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>What do you want me to call you?</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Your name.."
        />

        <Text>What do you want to call me?</Text>
        <TextInput
            style={styles.input}
            value={botName}
            onChangeText={setBotName}
            placeholder="Give me a name"
        />
        <Button title="Save" onPress={() => {saveData(botName, userName)}} />
      </View>

      <View style={styles.container}>
        <Text>The data you provide to us is completely secure</Text>
        <Text>This the CSSRS test, it's the most used standard to evaluate the danger of suicide</Text>
        <View>
          <Text>Previous Test Result: 2; </Text>
          <Text>Needs Help</Text>
        </View>
        {/* <Button onPress={launchCSSRS}>Take it</Button> */}
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
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
    btn: {
      display: 'block',
      color: 'yellow',
      backgroundColor: 'red',
      width: 100,
      padding: 100
    }
  });