import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ListItem = ({ title, excerpt }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Text>{excerpt}</Text>
  </View>
);

ListItem.propTypes = {

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eef1f5',
  },
});

export default ListItem;
