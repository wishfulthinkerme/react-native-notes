import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import NewItemBtn from './components/NewItemBtn';
import List from './containers/List';
import Form from './containers/Form';
import toggleComponent from './services/toggleComponent';

export default class Core extends Component {
  state = {
    route: 'List',
  }

  setRoute = (route) => () => this.setState({
    route: route,
  });

  render() {
    const { route } = this.state;
    return (
      <View style={styles.container}>
        {toggleComponent(route === 'List')(<List setRoute={this.setRoute}/>)}
        {toggleComponent(route === 'List')(<NewItemBtn
          onPress={this.setRoute('Form')}
        />)
        }
        {toggleComponent(route === 'Form')(<Form goBack={this.setRoute('List')}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f9fd',
    height: '100%',
    flex: 1,
    padding: 20,
  },
});
