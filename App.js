import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header headerText={'Bum Bums!'}/>
                <AlbumList/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: 24,
    }
};
