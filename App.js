import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: null
    }
    this.onValueChange = itemValue => {
      this.setState({
        selectedName: itemValue
      })
    }
  }

  render() {
    const { selectedName } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.helloWorld}>
          <Text>Hello world! : </Text>
          {selectedName ? <Text>{selectedName}</Text> : null}
        </Text>
        <Picker
          style={{ height: 50, width: 100 }}
          selectedValue={selectedName}
          onValueChange={this.onValueChange}
          >
          <Picker.Item label="ada" value="ada" />
          <Picker.Item label="sono" value="sono" />
          <Picker.Item label="rah" value="rah" />
        </Picker>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloWorld: {
    color: 'blue',
  }
});
