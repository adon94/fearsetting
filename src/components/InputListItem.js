import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import ListIndex from './ListIndex';

const { width } = Dimensions.get('window');

const InputListItem = ({
  id, text, updateText, showIndex, placeholder, addItem, checkKeyPress, index,
}) => (
  <View style={styles.container}>
    {showIndex
      && <ListIndex index={index + 1} />
  }
    <TextInput
      style={{ fontSize: 20, width: width - 70 }}
      multiline
      onChangeText={textInput => updateText(textInput)}
      placeholder={placeholder || 'Write it here...'}
      value={text}
      // autoFocus
      onKeyPress={checkKeyPress ? key => checkKeyPress(key, text.length, id) : null}
      blurOnSubmit
      onSubmitEditing={() => addItem()}
    />
  </View>
);

export default InputListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
