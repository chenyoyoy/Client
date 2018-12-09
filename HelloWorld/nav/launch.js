/**
 * Created by chenyou on 2018/12/5.
 */

import {createSwitchNavigator} from 'react-navigation';

import backStack from './backStack';
import Splash from '../Splash';

const nav = createSwitchNavigator({
    Splash: Splash,
    HomeTab: {screen: backStack},
}, {initialRouteName: 'Splash'});

export default nav ;