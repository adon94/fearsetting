import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Title from '../components/Title';
import InputList from '../components/InputList';

export default class Worst extends Component {
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
        <View>
          <Title>List the worst things that could happen.</Title>
          <InputList />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.dispatch({ type: 'Define' })}>
            <Text style={styles.touchText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.dispatch({ type: 'Prevent' })}>
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
    fontWeight: '500',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  }
});
