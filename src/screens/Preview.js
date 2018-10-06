import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import PreviewList from '../components/PreviewList';
import NavButtons from '../components/NavButtons';

const Preview = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View>
      <Header
        title="Define, Prevent, Repair"
        description="This is a summary of your answers so far."
      />
      <PreviewList />
    </View>
    <NavButtons navigation={navigation} routeBack="Repair" routeNext="Benefits" />
  </KeyboardAvoidingView>
);

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
