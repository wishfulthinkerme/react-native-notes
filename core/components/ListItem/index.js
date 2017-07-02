import React from 'react';
import {
  View
} from 'react-native';

const ListItem = ({ title, excerpt }) => (
  <View>
    <Text>{title}</Text>
    <Text>{excerpt}</Text>
  </View>
);

ListItem.propTypes = {

}

export default ListItem;
