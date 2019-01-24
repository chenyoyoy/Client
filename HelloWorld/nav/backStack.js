/**
 * Created by chenyou on 2018/12/5.
 */

import {createStackNavigator} from 'react-navigation';

import detail from '../Details'
import mine from '../mine'
import Test from '../test/Test'
import ActivityIndicatorTest from '../test/ActivityIndicatorTest'
import ButtonTest from '../test/ButtonTest'
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
        screen: detail,
        navigationOptions: {
            header: null,
        }
    }, mine: {
        screen: mine,
        navigationOptions: {
            header: null,
        }
    }, Test: {
        screen: Test,
        navigationOptions: {
            header: null,
        }
    }, web: {
        screen: web,
        navigationOptions: {
            header: null,
        }
    }, VideoTest: {
        screen: VideoTest,
        navigationOptions: {
            header: null,
        }
    }, PhotoTest: {
        screen: PhotoViewTest,
        navigationOptions: {
            header: null,
        }
    }, FlatListTest: {
        screen: FlatListTest,
        navigationOptions: {
            header: null,
        }
    }, SectionFlatListTest: {
        screen: SectionFlatListTest,
        navigationOptions: {
            header: null,
        }
    },
    ActivityIndicatorTest: {
        screen: ActivityIndicatorTest,
        navigationOptions: {
            header: null,
        }
    },
    ButtonTest: {
        screen: ButtonTest,
        navigationOptions: {
            header: null,
        }
    }
}, {

});

export default stackNav;
