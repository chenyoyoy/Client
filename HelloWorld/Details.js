import React from 'react';
import {Button, View, Text, ListView, RefreshControl, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export  default  class Details extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 !== r2
            }
        });
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        };
        this.loading();
        that = this;
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID, highLightRow) => this.renderRow(rowData, sectionID, rowID, highLightRow)}
                renderSeparator={this.renderSeparator}
                renderHeader={() => {
                    this.renderHeader()
                }}
                renderFooter={() => this.renderFooter}
                refreshControl={
                    <RefreshControl refreshing={this.state.isLoading} onRefresh={this.loading}/>
                }
            />
        );
    }

    renderRow(rowData, sectionID, rowID, highLightRow) {
        return (
            <TouchableOpacity onPress={() => {
                highLightRow(sectionID, rowID)
            }}>
                <View style={{backgroundColor: 'gray', height: 50}}>
                    <Text style={{color: 'red'}}>{rowData + sectionID + rowID}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View style={{backgroundColor: 'black', height: 5}}></View>
    }

    renderFooter() {
        return <View style={{justifyContent: "center", height: 20, alignItems: 'center', backgroundColor: 'green'}}>
            <Text style={{backgroundColor: 'blue'}}>我是有底线的</Text>
        </View>
    }

    renderHeader() {
        return <Text style={{height: 50, backgroundColor: 'yellow'}}>hhhheader</Text>
    }

    loading() {
        setTimeout(() => {
            that.setState({
                isLoading: false
            })
        }, 2000);
    }


}


var data = {
    "result": [
        {
            "fullName": "张三",
            "email": "e.moore@thompson.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "李四",
            "email": "r.jackson@johnson.edu",
            "time": "2018-10-10"
        },
        {
            "fullName": "王五",
            "email": "c.perez@lewis.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "赵六",
            "email": "k.jackson@martinez.net",
            "time": "2018-10-10"
        },
        {
            "fullName": "冯七",
            "email": "f.jackson@miller.edu",
            "time": "2018-10-10"
        },
        {
            "fullName": "小明",
            "email": "o.brown@hernandez.gov",
            "time": "2018-10-10"
        },
        {
            "fullName": "小长",
            "email": "e.hernandez@martinez.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "小红",
            "email": "n.moore@thompson.io",
            "time": "2018-10-10"
        },
        {
            "fullName": "小明",
            "email": "x.brown@thomas.co.uk",
            "time": "2018-10-10"
        },
        {
            "fullName": "小丽",
            "email": "j.gonzalez@davis.net",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三",
            "email": "d.lopez@thompson.io",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三张三张三张三",
            "email": "x.brown@thomas.co.uk",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三张三",
            "email": "j.gonzalez@davis.net",
            "time": "2018-10-10"
        }
    ]
};
