/**
 * Created by chenyou on 2018/12/13.
 */
import React, {Component} from 'react'
import HeaderView from './HeaderView'
import {View} from 'react-native'
import Intent from '../natiive/module/Intent'
import BaseComponent from "./BaseComponent";

export default class NativeEventComponent extends BaseComponent {

    constructor(props) {
        super(props);
    }


    startActivity(options) {
        this.startActivityForResult(options);
    }

    startActivityForResult(options, code) {
        if (this instanceof NativeEventComponent) {
            Intent.startActivityForResult(options, "", code);
        }
    }

    onActivityResult(requestCode, data) {
        if (this instanceof NativeEventComponent) {
            alert("codeeee" + requestCode);
        }
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        Intent.removeIntentCallback(this.onActivityResult)
    }

    getTag(){
        return "NativeEventComponent" ;
    }
}
