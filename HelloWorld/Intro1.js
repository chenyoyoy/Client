/**
 * Created by chenyou on 2018/9/13.
 */
import React from 'react' ;
import {SwitchNavigator} from 'react-navigation';
import {View,Button} from 'react-native' ;


import Intro2 from './Intro2';
class Intro1 extends React.Component{
    render(){
       return( <View>
           <Button title="to intro2" onPress={()=>this.props.navigation.navigate('Intro2') }/>
       </View>) ;
    }
}

export default  Intro1 ;