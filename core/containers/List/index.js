import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  Alert,
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

  removeNote = (key) => {
    AsyncStorage.getItem('notes', (error, notes) => {
      const notesArr = JSON.parse(notes);
      notesArr.splice(key, 1);
      this.setState({
        notes: notesArr,
      })
      AsyncStorage.setItem('notes', JSON.stringify(notesArr));
    })
  }

  onLongPress = (key) => () => {
    Alert.alert(
      'Remove note',
      'Are you sure you want to remove this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.removeNote(key) },
      ],
      { cancelable: false }
    )
  }

  showSingle = (item) => () => {
    this.props.setRoute('Single')();
  }

  render() {
    return (
      <ScrollView>
        {this.state.notes.map((item, key) => <ListItem key={key} {...item} onPress={this.showSingle(item)} onLongPress={this.onLongPress(key)} />)}
      </ScrollView>
    );
  }
}
