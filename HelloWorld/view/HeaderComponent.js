/**
 * Created by chenyou on 2018/12/13.
 */
import React, {Component}from 'react'
import HeaderView from './HeaderView'
import {View} from 'react-native'

export  default class HeaderComponent extends View {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...View.propTypes
    };

    render() {
        return (
            <View
                {...this.props}>
                <HeaderView/>
                {this.props.children}
            </View>)

    }
}
