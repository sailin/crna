import React from 'react';
import { StyleSheet, Text, View, Alert, FlatList, SectionList, Navigator } from 'react-native';
import Button from 'react-native-button';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>China time</Text>
        </View>

      </View>
    )
  }

}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 1};
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({isLoggedIn : 1})
  }

  render() {
    if (this.state.isLoggedIn) {
      return (<Schedule />)
      // return (
      //   <View style={styles.container}>
      //     <SectionList
      //       sections={[
      //         {title: 'D', data: ['Devin']},
      //         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      //       ]}
      //       renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      //       renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      //     />
      //   </View>
      // );
    } else {
      return (
        <View style={styles.container}>
          <Button
            containerStyle={{padding:10, height:50, overflow:'hidden', borderRadius:25, backgroundColor: '#aaa'}}
            style={{fontSize: 20, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={this.handleLogin}>
            Sign in
          </Button>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 30,
  },
  section_header: {
    flex: 1,
  },
  section_body: {
    flex: 2,
  },
  section_header: {
    flex: 4,
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
