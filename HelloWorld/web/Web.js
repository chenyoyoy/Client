/**
 * Created by chenyou on 2018/12/6.
 */

import React from 'react'
import {View, Text, Image, TouchableOpacity, WebView, Dimensions, StatusBar} from 'react-native'
import HeaderView from '../view/HeaderView'

export default class Web extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const url = this.props.navigation.state.params.url;
        return <View style={{flex: 1}}>

            <StatusBar
                animated={true}
                hidden={false}
                translucent={true}
                backgroundColor={'#00000000'}
                barStyle={'dark-content'}
            />

            <HeaderView/>

            <WebView style={{flex: 1}} source={{uri: url}}/>
        </View>
    }
}
