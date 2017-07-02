import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';


export default class Form extends Component {
  state = {
    title: "",
    content: "",
  }

  updateField = (field) => (value) => this.setState({ [field]: value });

  save = () => {
    const value = {
        title: this.state.title,
        content: this.state.content,
        excerpt: this.state.content.substr(0, 255),
      }
    
    AsyncStorage.getItem('notes', (errors, currentNotes) => {
      const notes = currentNotes ? JSON.parse(currentNotes) : [];
      AsyncStorage.setItem('notes', JSON.stringify([...notes, value]));
    });
  }
  
  render() {
    const {
      goBack
    } = this.props;
    return (
      <View>
        <Text style={styles.label}>Type your note here, and be awesome</Text>

        <TextInput
          value={this.state.title}
          onChangeText={this.updateField('title')}
          style={styles.title}
          placeholder="Title of note"
        />

        <TextInput
          value={this.state.content}
          onChangeText={this.updateField('content')}
          style={styles.input}
          placeholder="Type your note"
          multiline
          numberOfLines={30}
        />

        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn} onPress={goBack}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.save}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    marginTop: 30,
  },
  title: {
    height: 40,
    marginBottom: 20,
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: '#4caf50',
  },
  btnText: {
    color: 'white',
  },
  btns: {
    marginTop: 30,
    flexDirection: 'row',
  }
})