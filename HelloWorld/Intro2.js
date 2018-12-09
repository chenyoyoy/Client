import React from 'react' ;
import {SwitchNavigator} from 'react-navigation';
import {View, Button} from 'react-native' ;


import Intro3 from './Intro3';
class Intro2 extends React.Component {
    render() {
        return ( <View>
            <Button title="to intro3" onPress={()=>this.props.navigation.navigate('Intro3')}/>
        </View>);
    }
}

export default  Intro2 ;