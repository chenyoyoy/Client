/**
 * Created by chenyou on 2018/12/7.
 */

import React from 'react'
import {requireNativeComponent, View} from 'react-native'
import PropTypes from 'prop-types'

let iface = {
    name: 'PhotoView',
    propTypes: {
        imgSource: PropTypes.string,
        ...View.propTypes
    }
};

var view = requireNativeComponent('PhotoView', iface);

export  default  view;
