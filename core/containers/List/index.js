import React from 'react';
import {
  View,
} from 'react-native';
import ListItem from './../../components/ListItem';

const fakeItems = [
  {
    id: 0,
    title: 'Test',
    excerpt: 'Test content',
    content: 'Test content big',
  },
  
  {
    id: 0,
    title: 'Test',
    excerpt: 'Test content',
    content: 'Test content big',
  },
  {
    id: 0,
    title: 'Test',
    excerpt: 'Test content',
    content: 'Test content big',
  },
  {
    id: 0,
    title: 'Test',
    excerpt: 'Test content',
    content: 'Test content big',
  },
  {
    id: 0,
    title: 'Test',
    excerpt: 'Test content',
    content: 'Test content big',
  },

]
export default () => (
  <View>
    {fakeItems.map((item, key) => <ListItem key={key} {...item} />)}
    </View>
);
