import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import InputListItem from './InputListItem';

export default class InputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worstThings: [{
        key: '1',
        text: '',
      }],
    };
  }

  addItem() {
    const { worstThings } = this.state;
    const key = (worstThings.length + 1).toString();
    const worstThing = {
      key,
      text: ''
    }
    worstThings.push(worstThing);
    this.setState({ worstThings });
  }

  renderFooter = () => (
    <TouchableOpacity onPress={() => this.addItem()} style={{flexDirection: 'row'}}>
      <View style={styles.indexContainer}>
        <Text style={styles.greyText}>+</Text>
      </View>
      <Text style={styles.greyText}>Add another</Text>
    </TouchableOpacity>
  )

  render() {
    const { worstThings } = this.state;
    return (
      <FlatList
        data={worstThings}
        renderItem={({item}) => <InputListItem item={item} />}
        ListFooterComponent={() => this.renderFooter()}
      />
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greyText: {
    fontSize: 20,
    color: '#B0B0B0',
    // marginLeft: 30,
    marginTop: 5,
  },
  indexContainer: {
    width: 30,
  },
});
