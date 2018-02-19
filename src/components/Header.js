import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 24
    }
};

export default Header;