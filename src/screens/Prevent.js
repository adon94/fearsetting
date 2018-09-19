import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import RespondList from '../components/RespondList';
import NavButtons from '../components/NavButtons';

const Prevent = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header title="Prevent" description="How would you prevent each worst-case scenario, if they were to happen?" />
      <RespondList type="prevent" />
    </View>
    <NavButtons navigation={navigation} routeBack="Define" routeNext="Repair" />
  </KeyboardAvoidingView>
);

export default Prevent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
});
