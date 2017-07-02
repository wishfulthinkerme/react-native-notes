import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
} from 'react-native';
import ListItem from './../../components/ListItem';


export default class List extends Component {

  constructor(props) {
    super(props);
    AsyncStorage.getItem('notes', this.setNotes);
    this.state = {
      notes: [],
    };
  }

  setNotes = (errors, notes) => {
    const notesObj = JSON.parse(notes);
    console.log(notesObj)
    if (!notesObj) {
      return;
    }
    this.setState({
      notes: notesObj,
    });
  }

  render() {
    return (
      <ScrollView>
        {this.state.notes.map((item, key) => <ListItem key={key} {...item} />)}
      </ScrollView>
    );
  }
}
