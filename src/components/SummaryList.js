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
      <Text style={styles.defineText}>{item.text}</Text>
    </View>
  );

  const renderCost = item => (
    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
      <ListIndex index={item.id} />
      <Text style={styles.defineText}>{item.text}</Text>
    </View>
  );

  const {
    worstThings,
    costs,
    benefits,
    decision,
  } = props;
  const benefitsLength = (benefits.length === 1 && !benefits[0].text) ? 0 : benefits.length;
  const costsLength = (costs.length === 1 && !costs[0].text) ? 0 : costs.length;
  const worstThingsLength = (worstThings.length === 1 && !worstThings[0].define)
    ? 0 : worstThings.length;
  return (
    <View>
      <Text style={styles.decisionText}>{decision.text}</Text>
      <Text style={styles.subtitle}>
        Define, Prevent, Repair
      </Text>
      <Description>
        {worstThingsLength}
        &nbsp;item
        {worstThingsLength !== 1 && 's'}
      </Description>
      {costsLength !== 0
        && (
        <FlatList
          data={worstThings}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />)
      }
      <Text style={styles.subtitle}>
        Possible benefits
      </Text>
      <Description>
        {benefitsLength}
        &nbsp;item
        {benefitsLength !== 1 && 's'}
      </Description>
      {costsLength !== 0
        && (
        <FlatList
          data={benefits}
          renderItem={({ item }) => renderBenefit(item)}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />)
      }
      <Text style={styles.subtitle}>
        Costs of inaction
      </Text>
      <Description>
        {costsLength}
        &nbsp;item
        {costsLength !== 1 && 's'}
      </Description>
      {costsLength !== 0
        && (
        <FlatList
          data={costs}
          renderItem={({ item }) => renderCost(item)}
          keyExtractor={item => item.id.toString()}
        />)
      }
    </View>
  );
};

const mapStateToProps = state => ({
  worstThings: state.worstThings,
  costs: state.costs,
  benefits: state.benefits,
  decision: state.decision,
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
  decisionText: {
    fontStyle: 'italic',
    fontSize: 25,
    marginTop: 10,
  },
});
