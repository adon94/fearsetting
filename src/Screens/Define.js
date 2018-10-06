import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import InputList from '../components/InputList';
import Header from '../components/Header';
import NavButtons from '../components/NavButtons';

const Define = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header title="Define" description="Define the worst-case scenarios of going through with the decision." />
      <InputList type="worstThings" />
    </View>
    <NavButtons navigation={navigation} routeBack="Decision" routeNext="Prevent" />
  </KeyboardAvoidingView>
);

export default Define;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
