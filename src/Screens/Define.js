import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Title from '../components/Title';

export default class Define extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Title>What decision are you making?</Title>
        <TextInput
          style={{ height: 40, fontSize: 20, alignSelf: "center" }}
          multiline={true}
          onChangeText={(text) => this.setState({ text })}
          placeholder="I might..."
          value={this.state.text}
          autoFocus={true}
          returnKeyType="next"
        />
        <TouchableOpacity
          onPress={() => navigation.dispatch({ type: 'Worst' })}
          style={{ alignSelf: 'flex-end', marginBottom: 15 }}
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
  touchText: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '500',
  }
});
