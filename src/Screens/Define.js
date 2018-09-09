import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class Define extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.bigText}>What decision are you making?</Text>
        <TextInput
          style={{height: 40, fontSize: 20, alignSelf: "center"}}
          multiline = {true}
          onChangeText={(text) => this.setState({text})}
          placeholder="I might..."
          value={this.state.text}
          autoFocus={true}
          returnKeyType="next"
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Worst')}
          style={{alignSelf: 'flex-end', marginBottom: 15}}
        >
          <Text style={styles.touchText}>Next</Text>
        </TouchableOpacity>
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
  }
});
