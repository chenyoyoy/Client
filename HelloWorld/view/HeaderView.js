/**
 * Created by chenyou on 2018/12/5.
 */
import React from 'react'
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import  PropTypes from 'prop-types'

export default class HeaderView extends React.Component {

    static defaultProps = {};

    static propTypes = {
        showBack: PropTypes.string,
    };


    constructor(props) {
        super(props);
        that = this;
    }

    render() {
        let stateBarHeight = StatusBar.currentHeight;
        let {backPressed, navigation} = this.props;
        return (
            <View style={this.props.headerStyle ? this.props.headerStyle : style.head}>

                <StatusBar
                    animated={true}
                    hidden={false}
                    translucent={true}
                    backgroundColor={'#00000000'}
                    barStyle={'light-content'}
                />

                <View style={[{height: stateBarHeight}, style.statebar]}/>
                <View style={style.content}>
                    <TouchableOpacity onPress={() => {
                        if (navigation) {
                            navigation.goBack();
                        } else if (backPressed) {
                            backPressed();
                        }
                    }}>
                        <Image style={[style.leftIcon, {display: this.props.showBack}]}
                               source={require('../image/icon_back_left.png')} resizeMode="contain"/>
                    </TouchableOpacity>
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

