/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');
let {
  Animated,
  AppRegistry,
  Easing,
  Image,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

import TaskList from './TaskList';

class ToDos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task : "Learn React Native"
        }
      ]
    };
  }

  render() {
    return (
      <TaskList />
    )
  }

  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content', true);
      StatusBarIOS.setHidden(false, 'fade');
    }
  }

  _handleColorSelected(color) {
    this.setState({ headerColor: color });
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('main', () => ToDos);
