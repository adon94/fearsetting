import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class Worst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Text style={styles.bigText}>List the worst things that could happen</Text>
          <TextInput
            style={{height: 40, fontSize: 20,}}
            multiline = {true}
            onChangeText={(text) => this.setState({text})}
            placeholder="1:"
            value={this.state.text}
            autoFocus={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.touchText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.touchText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  touchText: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  }
});
