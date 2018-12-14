/**
 * Created by chenyou on 2018/12/6.
 */

import React from 'react'
import {View, Text, Image, TouchableOpacity, WebView, Dimensions, StatusBar} from 'react-native'
import HeaderView from '../view/HeaderView'
import Video from 'react-native-video'

export default class Web extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={{flex: 1}}>

            <HeaderView/>

            <Video
                ref={(ref) => {
                    this.player = ref;
                }}
                style={{flex: 1}} source={{uri: 'http://10.94.30.120:8887/video.mp4'}}/>
        </View>
    }

    componentDidMount() {
        this.player.seek(5);
    }

}
