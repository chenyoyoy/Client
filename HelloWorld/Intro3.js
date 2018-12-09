import React from 'react' ;
import {SwitchNavigator} from 'react-navigation';
import {View, Button} from 'react-native' ;


import Home from './Home';
class intro3 extends React.Component {
    render() {
        return (<View>
            <Button title="to home" onPress={()=>this.props.navigation.navigate('Home')}/>
        </View>)
    }
}

export default  intro3 ;