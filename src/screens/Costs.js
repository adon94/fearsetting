import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import InputList from '../components/InputList';
import NavButtons from '../components/NavButtons';

const Costs = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header title="Costs" description="List the costs of inaction after 6 months." />
      <InputList type="costs" />
    </View>
    <NavButtons navigation={navigation} routeBack="Benefits" routeNext="Summary" />
  </KeyboardAvoidingView>
);

export default Costs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
});
