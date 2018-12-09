/**
 * Created by chenyou on 2018/12/5.
 */
import React from 'react'
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native'

export default class HeaderView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stateBarHeight = StatusBar.currentHeight;
        return (
            <View style={this.props.headerStyle ? this.props.headerStyle : style.head}>
                <View style={[{height: stateBarHeight}, style.statebar]}/>
                <View style={style.content}>
                    <Image style={style.leftIcon} source={require('../image/icon_back_left.png')} resizeMode="contain"/>
                    <View style={style.center}>
                        <Text style={style.title}>标题</Text>
                    </View>
                    <Image style={style.rightIcon} source={require('../image/amt-zhima.png')} resizeMode="contain"/>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    head: {
        backgroundColor: 'black',
    }, statebar: {
        backgroundColor: '#00000000'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
    },

    center: {flex: 1, justifyContent: 'center', flexDirection: 'row'},
    leftIcon: {width: 25, height: 25, marginLeft: 10},
    title: {fontSize: 22, color: '#fff'},
    rightIcon: {width: 25, height: 25, marginRight: 10}
});

