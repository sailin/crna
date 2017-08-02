import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, SectionList, Navigator } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is Jane's profile.</Text>
      </View>
    );
  }
}

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });
//
// export default App

class Login extends React.Component {
  render() {
    return (
      <View> please log in</View>
    )
  }

}
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 0};
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
          Please login.
          <button> Login </button>
        </View>
      )
    }



    // _renderScene(route, navigator)
    // {
    //   if (route.id === 1) {
    //     return <PageOne navigator={navigator}/>
    //   } else if (route.id === 2) {
    //     return <PageTwo navigator={navigator}/>
    //   }
    // }
    //
    //
    // return (
    //   <Navigator
    //     initialRoute={{id: 1, }}
    //     renderScene={this._renderScene} />
    // );

  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
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
})
