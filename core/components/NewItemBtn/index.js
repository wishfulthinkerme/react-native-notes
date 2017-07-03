import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';


const newItemBtn = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.plus}>+</Text>
  </TouchableOpacity>
)

newItemBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
}

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

export default newItemBtn;