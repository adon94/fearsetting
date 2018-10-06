import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import RespondList from '../components/RespondList';
import NavButtons from '../components/NavButtons';

const Repair = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header
        title="Repair"
        description="How could you repair each of the worst-case scenarios?"
      />
      <RespondList type="repair" />
    </View>
    <NavButtons navigation={navigation} routeBack="Prevent" routeNext="Preview" />
  </KeyboardAvoidingView>
);

export default Repair;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
