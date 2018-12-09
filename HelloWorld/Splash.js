/**
 * Created by chenyou on 2018/9/13.
 */
import React from 'react' ;
import {View, Button, Text, StyleSheet, Dimensions, Image, AsyncStorage} from 'react-native' ;
import Swiper from 'react-native-swiper';

export  default class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.toHome = this.toHome.bind(this);
        this.state = {showIntro: false, showWelcome: true};
        this.temp = {key_first_open: true};
        that = this;
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!');
        that.timer = setTimeout(() => {
            if (that.temp && that.temp.key_first_open) {
                that.setState({showIntro: true});
            } else {
                that.toHome();
            }
        }, 3000);
        AsyncStorage.getItem('key_first_open', function (error, result) {
            if (!error && result) {
                console.log("setItem error:" + error + "result:" + result);
                that.temp.key_first_open = false;
            }
        })
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }


    toHome() {
        this.props.navigation.navigate('HomeTab');
        AsyncStorage.setItem('key_first_open', 'false', function (error) {
            if (error) {
                console.log("setItem error" + error)
            }
        })
    }

    render() {
        if (that.state.showIntro) {
            return (
                <View style={styless.container}>
                    <Swiper style={styless.swiper}
                            showButtons={true}
                            paginationStyle={{bottom: 70}}
                            loop={true}
                            autoplay={false}
                            autoplayTimeout={2}>
                        <Image style={styless.image} source={require('./image/loan_intro_1_loan.jpg')}
                               resizeMode="contain"/>
                        <Image style={styless.image} source={require('./image/loan_intro_2_loan.jpg')}
                               resizeMode="contain"/>
                        <Image style={styless.image} source={require('./image/loan_intro_3_loan.jpg')}
                               resizeMode="contain"/>
                    </Swiper>
                    <Text title="dddd" style={[styless.skip, {
                        display: that.state.showIntro ? null : none,
                        backgroundColor: that.state.showWelcome ? 'red' : 'black'
                    }]} onPress={this.toHome}>跳过</Text>
                </View>)
        }
        return (
            <View style={styless.container}>
                <View style={styless.logoScreen}>
                    <View style={styless.ad}>
                        <Image source={require('./image/loan_intro_3_jcfcloan.png')}
                               resizeMode="cover" style={{flex: 1, width: 360}}/>
                    </View>

                    <View style={styless.logoContainer}>
                        <Image style={styless.logo} source={require('./image/loan_luncher_logo_loan.png')}
                               resizeMode="stretch"/>
                    </View>
                </View>
            </View>
        );
    }
}

const styless = StyleSheet.create({
    ad: {
        flex: 4,
        flexDirection: 'column'
    },
    logo: {
        width: 300,
        height: 20,
        paddingBottom: 20
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    swiper: {
        flex: 1
    },
    logoScreen: {
        flex: 1, flexDirection: 'column'
    },
    container: {
        flex: 1,
    },
    image: {
        width: 360,
        height: 620
    }, skip: {
        position: 'absolute',
        color: 'green',
        backgroundColor: 'gray',
        padding: 5,
        right: 20,
        top: 20,
        borderRadius: 4,
        opacity: 0.6
    }
});

