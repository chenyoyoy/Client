import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper'

import HeaderView from "./view/HeaderView";
export  default  class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {headAlpha: 0};
        that = this;
    }

    addDiv() {
        let divs = [];
        for (let i = 0; i < 5; i++) {
            let div = <View key={"div-" + i}>
                <View style={stlye.divi}/>
                {this.addItem()}
            </View>;

            divs.push(div)
        }
        return divs;
    }

    addItem() {
        let items = [];
        for (let i = 0; i < 4; i++) {
            let item = <View key={"item-" + i}>
                <View style={stlye.itemLine}/>
                <View style={stlye.item}/>
            </View>;

            items.push(item);
        }
        return items;
    }

    onBannerClick(data) {
        this.props.navigation.navigate('web', {url: "http://www.baidu.com"})
    }

    calAlpha(event) {
        let a = event.nativeEvent.contentOffset.y / 60;
        this.setState({headAlpha: a});
        console.log("a y" + a + " " + event.nativeEvent.contentOffset.y);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}
                            onScroll={(e) => {
                                this.calAlpha(e)
                                console.log("scroll:" + e.toString())
                            }}>
                    <StatusBar
                        animated={true}
                        hidden={false}
                        translucent={true}
                        backgroundColor={'#00000000'}
                        barStyle={'light-content'}
                    />
                    <View style={{height: 150}}>
                        <Swiper horizontal={true} showButtons={false} paginationStyle={{bottom: 10}}>
                            <TouchableOpacity onPress={this.onBannerClick.bind(this)}>
                                <Image source={require('./image/banner_image.jpg')} style={stlye.image}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onBannerClick.bind(this)}>

                                <Image source={require('./image/banner_image.jpg')} style={stlye.image}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onBannerClick.bind(this)}>

                                <Image source={require('./image/banner_image.jpg')} style={stlye.image}
                                />
                            </TouchableOpacity>


                        </Swiper>
                    </View>

                    {  this.addDiv()}

                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            zIndex: 99
                        }}
                        onPress={() => this.props.navigation.navigate('Test')}>
                        <Text style={{color: 'white'}}>test</Text>
                    </TouchableOpacity>
                </ScrollView>

                <HeaderView headerStyle={{
                    position: 'absolute',
                    top: 0,
                    width: 360,
                    opacity: this.state.headAlpha,
                    backgroundColor: 'black'
                }}/>
            </View>
        );
    }
}


const stlye = StyleSheet.create({
    swiper: {},
    image: {width: 360, height: 150},
    item: {
        height: 40,
        backgroundColor: 'yellow'
    },
    itemLine: {
        height: 1,
        backgroundColor: 'gray'
    }, divi: {
        height: 5
    }
});
