import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, SectionList, Navigator } from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 0};
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({isLoggedIn : 1})
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <SectionList
            sections={[
              {title: 'D', data: ['Devin']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button
            onPress={this.handleLogin}
            title="Please login"
            color="#841584"
            accessibilityLabel="Please login"
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
