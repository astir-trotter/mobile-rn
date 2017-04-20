/**
 * Name : Saori Sugiyama
 * Email : sugiyama.saori.biz@gmail.com
 * Date : 4/19/17
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

// scenes
import PageOne from './scenes/PageOne';
import PageTwo from './scenes/PageTwo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true}/>
          <Scene key="pageTwo" component={PageTwo} title="PageTwo"/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('RNMobile', () => App);
