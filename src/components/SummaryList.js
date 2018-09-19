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

  const renderBenefit = item => (
    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
      <ListIndex index={item.id} />
      <Text style={styles.defineText}>{item.benefit}</Text>
    </View>
  );

  const renderCost = item => (
    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
      <ListIndex index={item.id} />
      <Text style={styles.defineText}>{item.cost}</Text>
    </View>
  );

  const { worstThings, costs, benefits } = props;
  return (
    <View>
      <Text style={styles.subtitle}>Define, Prevent, Repair</Text>
      <FlatList
        data={worstThings}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
      <Text style={styles.subtitle}>Possible benefits</Text>
      <FlatList
        data={benefits}
        renderItem={({ item }) => renderBenefit(item)}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
      <Text style={styles.subtitle}>Costs of inaction</Text>
      <FlatList
        data={costs}
        renderItem={({ item }) => renderCost(item)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  worstThings: state.worstThings,
  costs: state.costs,
  benefits: state.benefits,
});

export default connect(mapStateToProps)(PreviewList);

const styles = StyleSheet.create({
  defineText: {
    fontSize: 20,
    paddingTop: 5,
    width: width - 70,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
