/**
 * Created by chenyou on 2019/1/24.
 */
import React, {Component} from 'react'
import {View, Button, ToastAndroid, Alert} from 'react-native'
import HeaderComponent from "../view/HeaderComponent";

export default class ButtonTest extends Component {

    render() {
        return (
            <HeaderComponent style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{width:150,height:80,backgroundColor:'#001ade'}}>
                        <Button title="hello"
                                color="#ff8144"
                                onPress={this.sayPress.bind(this)}
                        />
                    </View>
                </View>
            </HeaderComponent>
        )
    }

    sayPress() {
        Alert.alert("button press")
    }
}