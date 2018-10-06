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
import Description from './Description';
import EmptyNotice from './EmptyNotice';

const { width } = Dimensions.get('window');

const PreviewList = (props) => {
  const renderItem = (item) => {
    if (item.define) {
      return (
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
    }
    return null;
  };

  const { worstThings } = props;
  if (worstThings.length > 1 || worstThings[0].define) {
    return (
      <FlatList
        data={worstThings}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
  return (
    <EmptyNotice>
      No worst-case scenarios defined yet.
    </EmptyNotice>
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
