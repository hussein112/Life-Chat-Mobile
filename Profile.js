import { StyleSheet, SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState('');
  const[botName, setBotName] = useState('');

  function saveData(bn, un){
    if(bn !== '' && bn !== db['user'].bot_name){
      saveBotName(bn);
    }else if(un !== '' && un !== db['user'].user_name){
      saveUserName(un);
    }
  }

  const saveUserName = (un) => {
    db['user'].bot_name = un;
    Alert.alert('User Name Updated', `I will call you ${un} from now!`, [
      {text: 'OK'},
    ]);
    setUserName(un);
  }

  const saveBotName = (bn) => {
    db['user'].bot_name = bn;
    Alert.alert('Bot Name Updated', `My name will be ${bn} from now!`, [
      {text: 'OK'},
    ]);
    setBotName(bn);
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>What do you want me to call you?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Your name.."
      />

      <Text>What do you want to call me?</Text>
      <TextInput
          style={styles.input}
          onChangeText={setBotName}
          value={botName}
          placeholder="Give me a name"
      />
      <Button title="Save" onPress={saveData(botName, userName)} />
    </View>

    <View style={styles.container}>
      <Text>The data you provide to us is completely secure</Text>
      <Text>This the CSSRS test, it's the most used standard to evaluate the danger of suicide</Text>
      <View>
        <Text>Previous Test Result: 2; </Text>
        <Text>Needs Help</Text>
      </View>
      <Button onPress={launchCSSRS}>Take it</Button>
    </View>
    </SafeAreaView>
  )
}

export default Profile;

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
  });