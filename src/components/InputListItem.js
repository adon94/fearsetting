import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class InputListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  
  render() {
    const { item: { key } } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.indexContainer}>
          <Text style={styles.index}>{key}.</Text>
        </View>
        <TextInput
          style={{ fontSize: 20, width: width - 70 }}
          multiline={true}
          onChangeText={(text) => this.setState({ text })}
          placeholder="Write it here..."
          value={this.state.text}
          autoFocus={true}
          returnKeyType="next"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  indexContainer: {
    width: 30,
    paddingTop: 5,
  },
  index: {
    fontSize: 20,
  },
  bigText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
