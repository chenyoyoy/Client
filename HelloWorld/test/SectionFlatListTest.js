import React, {Component} from 'react' ;
import {View, Text, SectionList, StyleSheet} from 'react-native';

export default class SectionFlatListTest extends Component {

    render() {
        return (
            <View style={stylee.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={stylee.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={stylee.header}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }


}

const stylee = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 30,
        backgroundColor: 'red'
    },
    item: {
        height: 40
    }
});
