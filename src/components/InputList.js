import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import {
  addThing,
  addBenefit,
  addCost,
  editThing,
  editBenefit,
  editCost,
  removeThing,
} from '../actions';
import InputListItem from './InputListItem';

const InputList = (props) => {
  const { type } = props;
  let itemName;
  if (type === 'worstThings') {
    itemName = 'define';
  } else if (type === 'benefits' || type === 'costs') {
    itemName = 'text';
  }
  // const itemName = type === 'worstThings' ? 'define' : 'text';
  const addItem = () => {
    const { dispatch } = props;
    if (type === 'worstThings') {
      dispatch(addThing());
    } else if (type === 'benefits') {
      dispatch(addBenefit());
    } else if (type === 'costs') {
      dispatch(addCost());
    }
  };

  const renderFooter = () => (
    <TouchableOpacity onPress={() => addItem()} style={{ flexDirection: 'row' }}>
      <View style={styles.indexContainer}>
        <Text style={styles.greyText}>+</Text>
      </View>
      <Text style={styles.greyText}>Add another</Text>
    </TouchableOpacity>
  );

  const renderItem = (item, index) => (
    <InputListItem
      id={item.id}
      index={index}
      text={item[itemName]}
      showIndex
      updateText={text => updateItem(text, item.id)}
      checkKeyPress={(e, textLength, id) => checkKeyPress(e, textLength, id)}
      addItem={() => addItem()}
      placeholder="I could..."
    />
  );

  const { listItems } = props;

  const checkKeyPress = (e, textLength, id) => {
    const { key } = e.nativeEvent;
    if (key === 'Backspace' && textLength === 0 && listItems.length > 1) {
      const { dispatch } = props;
      dispatch(removeThing(id));
    }
  };

  const updateItem = (text, id) => {
    const { dispatch } = props;
    if (type === 'worstThings') {
      dispatch(editThing({ define: text, id }));
    } else if (type === 'benefits') {
      dispatch(editBenefit({ text, id }));
    } else if (type === 'costs') {
      dispatch(editCost({ text, id }));
    }
  };

  return (
    <FlatList
      data={listItems}
      renderItem={({ item, index }) => renderItem(item, index)}
      ListFooterComponent={() => renderFooter()}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const mapStateToProps = (state, props) => ({
  listItems: state[props.type],
});

export default connect(mapStateToProps)(InputList);

const styles = StyleSheet.create({
  bigText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greyText: {
    fontSize: 20,
    color: '#C7C7CD',
    marginTop: 5,
  },
  indexContainer: {
    width: 30,
  },
});
