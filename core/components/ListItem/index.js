import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ListItem = ({ title, excerpt }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.excerpt}>{excerpt}</Text>
  </View>
);

ListItem.propTypes = {

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eef1f5',
    padding: 10,
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
