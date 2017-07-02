import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default class Form extends Component {
  state = {
    input: "",
  }

  updateField = (input) => this.setState({ input });

  render() {
    const { 
      goBack
    } = this.props;
    return (
      <View>
        <Text style={styles.label}>Type your note here, and be awesome</Text>

        <TextInput
          value={this.state.input}
          onChangeText={this.updateField}
          style={styles.input}
          placeholder="Type your note"
          multiline
          numberOfLines={30}
        />
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn} onPress={goBack}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
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
  input: {
    backgroundColor: 'white',
    padding: 10,
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
    flexDirection: 'row',
  }
})