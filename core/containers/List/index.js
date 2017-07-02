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

    if (!notesObj) {
      return;
    }
    this.setState({
      notes: notesObj,
    });
  }

  showSingle = (item) => () => {
    this.props.setRoute('Single')();
  }

  render() {
    return (
      <ScrollView>
        {this.state.notes.map((item, key) => <ListItem key={key} {...item} onPress={this.showSingle(item)}/>)}
      </ScrollView>
    );
  }
}
