import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { editPrevent, editRepair } from '../actions';
import InputListItem from './InputListItem';
import ListIndex from './ListIndex';

const { width } = Dimensions.get('window');

const RespondList = (props) => {
  const renderItem = (item) => {
    const { type } = props;
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <ListIndex index={item.id} />
          <Text style={styles.defineText}>{item.define}</Text>
        </View>
        <View style={{ paddingLeft: 30 }}>
          <InputListItem
            id={item.id}
            text={item[type]}
            placeholder="I could..."
            updateText={text => updateItem(text, item.id)}
          />
        </View>
      </View>
    );
  };

  const updateItem = (text, id) => {
    const { dispatch, type } = props;
    if (type === 'prevent') {
      dispatch(editPrevent({ prevent: text, id }));
    } else {
      dispatch(editRepair({ repair: text, id }));
    }
  };

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

export default connect(mapStateToProps)(RespondList);

const styles = StyleSheet.create({
  defineText: {
    fontSize: 20,
    paddingTop: 5,
    fontWeight: 'bold',
    width: width - 70,
  },
});
