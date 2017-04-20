/**
 * Name : Saori Sugiyama
 * Email : sugiyama.saori.biz@gmail.com
 * Date : 4/19/17
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles'

export default class extends Component {

  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});

    return (
      <View style={styles.container}>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
      </View>
    )
  }
};