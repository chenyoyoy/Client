/**
 * Created by chenyou on 2018/12/5.
 */

import {createStackNavigator} from 'react-navigation';

import detail from '../Details'
import mine from '../mine'
import Test from '../test/Test'
import web from '../web/Web'
import PhotoViewTest from '../test/PhotoViewTest'
import FlatListTest from '../test/FlatListTest'
import SectionFlatListTest from '../test/SectionFlatListTest'
import VideoTest from '../video/VideoTest'
import homeTab from './homeTab'

const stackNav = createStackNavigator({
    home: {
        screen: homeTab,
        navigationOptions: {
            title: 'home',
            header: null,
        }
    },
    detail: {
        screen: detail
    }, mine: {
        screen: mine
    }, Test: {
        screen: Test
    }, web: {
        screen: web,
        navigationOptions: {
            header: null,
        }
    }, VideoTest: {
        screen: VideoTest
    }, PhotoTest: {
        screen: PhotoViewTest
    }, FlatListTest: {
        screen: FlatListTest
    }, SectionFlatListTest: {
        screen: SectionFlatListTest
    }
}, {});

export default stackNav;
