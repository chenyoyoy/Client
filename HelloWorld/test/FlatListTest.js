import React, {Component} from 'react' ;
import {View, Text, FlatList, StyleSheet} from 'react-native';
import HeaderView from "../view/HeaderView";
export default class FlatListTest extends Component {

    render() {
        return (
            <View style={stylee.container}>
                <HeaderView  />
                <FlatList
                    data={["ddd", "aaa", "sss", "dddd", "kkaass", "ddd", "aaa", "sss", "dddd", "kkaass", "ddd", "aaa", "sss", "dddd", "kkaass", "ddd", "aaa", "sss", "dddd", "kkaass", "ddd", "aaa", "sss", "dddd", "kkaass"]}
                    renderItem={(item) =>
                        <Text style={stylee.item}>item datadd {item.toString()}</Text>
                    }
                />
            </View>
        )
    }


}

const stylee = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 40
    }
});
