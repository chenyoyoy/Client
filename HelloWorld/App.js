
import React from 'react';
import { Button,View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HomeScreen',
        header: (navigation, defaultHeader) => ({
            visible: true , // 覆盖预设中的此项
            headerMode:'screen'
        }),
        cardStack: {
            gesturesEnabled: true  // 是否可以右滑返回
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
              <Button
                  title="Go to Details"
                  onPress={() => this.props.navigation.navigate('Details')}
              />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'DetailsScreen',
        header: (navigation, defaultHeader) => ({
            visible: true , // 覆盖预设中的此项
            headerMode:'screen'
        }),
        cardStack: {
            gesturesEnabled: true  // 是否可以右滑返回
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
              <Button
                  title="Go to Details... again"
                  onPress={() => this.props.navigation.push('Details')}
              />
              <Button
                  title="Go to Home"
                  onPress={() => this.props.navigation.navigate('Home')}
              />
              <Button
                  title="Go back"
                  onPress={() => this.props.navigation.goBack()}
              />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode:'none'
    }
);


export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}