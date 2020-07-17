/**
Author Name  :  WeblineIndia  |  https://www.weblineindia.com/

For more such software development components and code libraries, visit us at
https://www.weblineindia.com/software-development-resources.html 

Our Github URL : https://github.com/weblineindia
**/
import React, { Component } from 'react';
import  { TextInput } from 'react-native';


export default class ExpandableTextField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput
                {...this.props}
                multiline
                maxHeight={this.props.maxHeight || 100}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                style={[this.props.style, { height: 'auto' }]}
                ref={this.props.refData}
                blurOnSubmit={true}
            />
        );
    }
}