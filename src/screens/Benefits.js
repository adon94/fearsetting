import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import InputList from '../components/InputList';
import NavButtons from '../components/NavButtons';

const Benefits = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header title="Benefits" description="List the possible benefits of taking action." />
      <InputList type="benefits" />
    </View>
    <NavButtons navigation={navigation} routeBack="Preview" routeNext="Costs" />
  </KeyboardAvoidingView>
);

export default Benefits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
});
