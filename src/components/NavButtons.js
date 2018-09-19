import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const NavButtons = (props) => {
  const containerWidth = width * 0.35;
  const { navigation, routeBack, routeNext } = props;
  return (
    <View style={styles.buttonContainer}>
      {routeBack
        ? (
          <TouchableOpacity
            style={{ width: containerWidth }}
            onPress={() => navigation.dispatch({ type: routeBack })}
          >
            <Text style={styles.touchText}>
              <Icon name="arrow-left" size={18} />
              &nbsp;
              {routeBack}
            </Text>
          </TouchableOpacity>
        )
        : <View style={{ width: containerWidth }} />
        }
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch({ type: 'Menu' })}
      >
        <Icon name="list" size={18} color="#007AFF" />
      </TouchableOpacity>
      {routeNext
        ? (
          <TouchableOpacity
            style={{ width: containerWidth, alignItems: 'flex-end' }}
            onPress={() => navigation.dispatch({ type: routeNext })}
          >
            <Text style={styles.touchText}>
              {routeNext}
              &nbsp;
              <Icon name="arrow-right" size={18} />
            </Text>
          </TouchableOpacity>
        )
        : <View style={{ width: containerWidth }} />
      }
    </View>
  );
};

export default NavButtons;

const styles = StyleSheet.create({
  touchText: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  menuButton: {
    alignSelf: 'center',
  },
});
