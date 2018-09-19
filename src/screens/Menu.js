import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Title from '../components/Title';

const menuItems = [
  {
    route: 'Decision',
    icon: 'question-circle',
  },
  {
    route: 'Define',
    icon: 'pencil-ruler',
  },
  {
    route: 'Prevent',
    icon: 'ban',
  },
  {
    route: 'Repair',
    icon: 'wrench',
  },
  {
    route: 'Preview',
    icon: 'eye',
  },
  {
    route: 'Benefits',
    icon: 'cookie-bite',
  },
  {
    route: 'Costs',
    icon: 'dollar-sign',
  },
  {
    route: 'Summary',
    icon: 'file-alt',
  },
  {
    route: 'SwipeNav',
    icon: 'question-circle',
  },
];

const MenuItem = (item, navigation) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => navigation.dispatch({ type: item.route })}
  >
    <View style={styles.iconContainer}>
      <Icon name={item.icon} size={20} />
    </View>
    <Text style={styles.menuText}>
      {item.route}
    </Text>
  </TouchableOpacity>
);

const Menu = ({ navigation }) => (
  <View style={styles.container} behavior="padding" enabled>
    <View>
      <Title large>Fear Setting</Title>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => MenuItem(item, navigation)}
        keyExtractor={item => item.route}
      />
    </View>
  </View>
);

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  menuItem: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 22,
  },
  iconContainer: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
