/**
 * Created by chenyou on 2018/11/28.
 */


import React, {Component}from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import HeaderComponent from "./view/HeaderComponent";
import StyledTouchableOpacity from "./view/StyledTouchableOpacity";
export  default class TabMain extends Component {

    render() {
        return (
            <HeaderComponent>
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

            </HeaderComponent>
        )
    }

    getItem(index) {
        let item =
            <View key={"key" + index}>
                <StyledTouchableOpacity onPress={() => this.props.navigation.navigate('detail')}>
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
                </StyledTouchableOpacity>
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



