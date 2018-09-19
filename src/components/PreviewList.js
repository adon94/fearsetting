import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import ListIndex from './ListIndex';

const { width } = Dimensions.get('window');

const PreviewList = (props) => {
  const renderItem = item => (
    <View style={{ marginBottom: 5 }}>
      <View style={{ flexDirection: 'row' }}>
        <ListIndex index={item.id} />
        <Text style={[styles.defineText, { fontWeight: 'bold' }]}>{item.define}</Text>
      </View>
      <View style={{ paddingLeft: 30 }}>
        <Text style={styles.defineText}>{item.prevent}</Text>
      </View>
      <View style={{ paddingLeft: 30 }}>
        <Text style={styles.defineText}>{item.repair}</Text>
      </View>
    </View>
  );

  const { worstThings } = props;
  return (
    <FlatList
      data={worstThings}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const mapStateToProps = state => ({
  worstThings: state.worstThings,
});

export default connect(mapStateToProps)(PreviewList);

const styles = StyleSheet.create({
  defineText: {
    fontSize: 20,
    paddingTop: 5,
    width: width - 70,
  },
});
