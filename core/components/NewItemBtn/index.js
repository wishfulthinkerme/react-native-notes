import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';


export default ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.plus}>+</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: '#FFFFFF',
  },
}); 