/**
 * Created by chenyou on 2018/12/7.
 */


import React, {Component} from 'react'
import {View} from 'react-native'
import PhotoView from '../natiive/component/PhotoView'


export default class PhotoViewTest extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <PhotoView style={{flex: 1}}
                           imgSource='http://10.94.30.120:8887/photo.jpg'/>
            </View>
        )

    }

}

