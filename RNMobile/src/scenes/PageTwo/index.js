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
    return (
      <View style={styles.container}>
        <Text>This is PageTwo!</Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}