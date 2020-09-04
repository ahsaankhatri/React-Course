import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button,Appbar } from 'react-native-paper';

class App extends React.Component {
  state = {
    fullName: '',
    ID:''
  }
  render() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="firstApp"
      style = {{alignItems : 'center'}}/>
    </Appbar.Header>
      <TextInput
      label="Enter Full Name"
      value={this.state.fullName}
      onChangeText={text => this.setState({text})}
      style = {{backgroundColor : '#34ebe8',margin :10}}
    />
    <TextInput
      label="Enter ID"
      value={this.state.ID}
      onChangeText={text => this.setState({text})}
      style = {{backgroundColor : '#34ebe8', margin :10}}
    />
    <Button icon="camera" mode="contained" onPress={() => console.log('Presssssedd!!')} style = {{backgroundColor : '#34ebae', margin:100}}>
    Submit
    </Button>
    </View>
  );
}
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
