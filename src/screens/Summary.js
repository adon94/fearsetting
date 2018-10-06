import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Title from '../components/Title';
import SummaryList from '../components/SummaryList';
import NavButtons from '../components/NavButtons';

const Preview = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Title large>Summary</Title>
      <SummaryList />
    </ScrollView>
    <NavButtons navigation={navigation} routeBack="Costs" />
  </View>
);

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
