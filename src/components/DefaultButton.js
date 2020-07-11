import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import buttonStyle from '../styles/buttonStyles'
import PropTypes from 'prop-types'


export default function DefaultButton(props) {
    return (
        <TouchableOpacity onPress={props.click}>
            <View style={[buttonStyle.defaultButton, buttonStyle[props.size], { backgroundColor: props.backgroundColor, width: props.width, height: props.height, marginTop: 10 }]}>
                <Text style={[{ color: props.color }, buttonStyle[`${props.size}Font`]]}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );
}

DefaultButton.prototype = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    click: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    size: PropTypes.string

}
DefaultButton.defaultProps = {
    title: 'button',
    color: '#e7dfd5',
    backgroundColor: '#84a9ac',
    click: () => { },
    width: 100,
    height: 50,
    size: 'normal'

}