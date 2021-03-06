import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ListItem = ({ title, excerpt, onPress, onLongPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.excerpt}>{excerpt}</Text>
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eef1f5',
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: '#a5a9af',
    fontSize: 20,
  },
  excerpt: {
    color: '#dcdddf',
  }
});

export default ListItem;
