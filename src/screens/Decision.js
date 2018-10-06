import React from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavButtons from '../components/NavButtons';
import { editDecision } from '../actions';

const Decision = ({ navigation, decision: { text }, dispatch }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <Header
      title="The decision"
      description="Write down the decision you're considering."
    />
    <TextInput
      style={{ height: 40, fontSize: 20, alignSelf: 'center' }}
      multiline
      onChangeText={textInput => dispatch(editDecision({ text: textInput }))}
      placeholder="What if I..."
      value={text}
      autoFocus
    />
    <NavButtons navigation={navigation} routeNext="Define" />
  </KeyboardAvoidingView>
);

const mapStateToProps = state => ({
  decision: state.decision,
});

export default connect(mapStateToProps)(Decision);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
