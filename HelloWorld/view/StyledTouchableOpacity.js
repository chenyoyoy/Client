/**
 * Created by chenyou on 2018/12/13.
 */

import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native'

export default class StyledTouchableOpacity extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...TouchableOpacity.propTypes
    };

    render() {
        return (<TouchableOpacity activeOpacity={0.8} {...this.props}>
        </TouchableOpacity>)
    }

}
