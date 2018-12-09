/**
 * Created by chenyou on 2018/12/5.
 */


import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Intent from '../natiive/module/Intent'
import FlatListTest from "./FlatListTest";

export default class TestPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            <TouchableOpacity onPress={this.toSetting.bind(this)}>
                <Text style={styles.item}>
                    跳转setting
                </Text>
            </TouchableOpacity>

            <View style={{height: 2, backgroundColor: 'white'}}/>
            <TouchableOpacity onPress={this.toVideoTest.bind(this)}>
                <Text style={styles.item}>
                    视频播放
                </Text>
            </TouchableOpacity>
            <View style={{height: 2, backgroundColor: 'white'}}/>
            <TouchableOpacity onPress={this.toPhotoTest.bind(this)}>
                <Text style={styles.item}>
                    自定义头像
                </Text>
            </TouchableOpacity>
            <View style={{height: 2, backgroundColor: 'white'}}/>
            <TouchableOpacity onPress={this.toFlatTest.bind(this)}>
                <Text style={styles.item}>
                    flatList
                </Text>
            </TouchableOpacity>

            <View style={{height: 2, backgroundColor: 'white'}}/>
            <TouchableOpacity onPress={this.toSectionFlatTest.bind(this)}>
                <Text style={styles.item}>
                    toSectionFlatTest
                </Text>
            </TouchableOpacity>
        </View>);
    }

    toSetting() {
        console.log("startActivity");
        Intent.startActivity({
            cls: {
                packageName: "com.helloworld",
                clsName: "com.helloworld.nattive.setting.SettingActivity"
            }, extra: {}
        });
        console.log("startActivity");
    }

    toVideoTest() {
        this.props.navigation.navigate('VideoTest');
    }

    toPhotoTest() {
        this.props.navigation.navigate('PhotoTest');
    }

    toFlatTest() {
        this.props.navigation.navigate('FlatListTest');
    }

    toSectionFlatTest() {
        this.props.navigation.navigate('SectionFlatListTest');
    }
};

const styles = StyleSheet.create(
    {
        item: {
            height: 40,
            alignItems: 'center',
            backgroundColor: 'green'
        }
    }
);

