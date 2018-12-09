/**
 * Created by chenyou on 2018/12/5.
 */

import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'

import home from '../home'
import mine from '../mine'

const bottomNav = createBottomTabNavigator({
    Home: {
        screen: home,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon: ({focused, tintColor}) => (<Image
                style={style.tabbarIcon}
                source={focused ? require('../image/amt-taobao.png') : require('../image/amt-zhima.png')}>
            </Image>)
        }
    },
    Mine: {
        screen: mine,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({focused, tintColor}) => (<Image
                style={style.tabbarIcon}
                source={focused ? require('../image/amt-taobao.png') : require('../image/amt-zhima.png')}>
            </Image>)
        }
    }
});


const style = StyleSheet.create(
    {
        tabbarIcon: {
            width: 25,
            height: 25
        }
    }
);

export default bottomNav;




