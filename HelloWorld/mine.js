/**
 * Created by chenyou on 2018/11/28.
 */


import React from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import HeaderView from "./view/HeaderView";

export  default class TabMain extends React.Component {

    render() {
        return (
            <View>
                <HeaderView/>
                <View >
                    <View style={{
                        width: 360,
                        backgroundColor: 'green',
                        height: 160,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style=
                                  {{width: 80, height: 80, borderRadius: 40, backgroundColor: 'red'}}
                        />
                    </View>

                    {this.addItems()}

                </View>

            </View>
        )
    }

    getItem(index) {
        let item =
            <View key={"key" + index}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('detail')}>
                    <View style={{
                        alignItems: 'center',
                        height: 40,
                        width: 360,
                        backgroundColor: 'gray',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{}}>item1
                        </Text>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'green', fontSize: 12, marginRight: 10}}>点击到详情</Text>
                            <Image source={require('./image/icon_back_right.png')}
                                   style={{width: 20, height: 20, position: 'relative', right: 10}}
                                   resizeMode='contain'></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'white', height: 2}}/>
            </View>;

        return item;
    }

    addItems() {
        let items = [];
        for (let i = 0; i < 30; i++) {
            items.push(this.getItem(i));
        }
        return items;
    }

}



