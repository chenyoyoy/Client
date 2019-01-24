/**
 * Created by chenyou on 2019/1/24.
 */
import React,{Component} from 'react'
import {View,Button,ToastAndroid } from 'react-native'

export default class ButtonTest extends Component{

    render(){
       return <View style={{flex:1,flexDirection:'column'}}>
            <Button title="hello" onPress={this.sayPress.bind(this)}
            style={{marginTop:10}}/>
        </View>
    }

    sayPress(){
        ToastAndroid.show("onpress",ToastAndroid.SHORT);
    }
}