import React from 'react-native';

const {
  Text,
  View
} = React;

const styles = React.StyleSheet.create({
  container: {
    paddingTop: 40
  },
});

class TaskList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm a TaskList</Text>
      </View>
    );
  }
}

export default TaskList;
