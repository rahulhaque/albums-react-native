import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText={'Bum Bums!'}/>
                <AlbumList/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#faf6fb',
    }
};
