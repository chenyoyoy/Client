/**
 * Created by chenyou on 2019/1/24.
 */

import React, {Component} from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export default class ActivityIndicatorTest extends Component {

    render() {
        return (
            <View style={stylee.container}>
                <ActivityIndicator
                    animating={true}
                    color="#ff0000"
                    size={100}
                    style={stylee.item}
                />

                <ActivityIndicator
                    size="large"
                    color="#ff0000"
                    style={stylee.item}
                />

                <ActivityIndicator
                    size="small"
                    style={stylee.item}
                />
            </View>
        )
    }
}

const stylee = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    }, item: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

