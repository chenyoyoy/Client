/**
 * Created by chenyou on 2018/12/5.
 */
import {NativeModules} from 'react-native'
import IntentCode from './IntentCode'

let NativeIntent = NativeModules.Intent;

export default class Intent {

    static startActivityForResult(options, callBack, code) {
        alert(options.toString()+callBack.toString()+code)
        NativeIntent.startActivityForResult(options, callBack, code);
    }

    static removeIntentCallback() {
        NativeIntent.removeIntentCallback(code);
    }

}