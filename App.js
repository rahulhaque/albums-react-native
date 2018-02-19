import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header headerText={'Albums!'}/>
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
