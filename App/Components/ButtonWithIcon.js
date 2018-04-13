import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, I18nManager } from 'react-native'
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

import styles from './Styles/ButtonWithIconStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
// Note that this file (App/Components/ButtonWithIcon) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

import renderIf from '../Lib/renderIf'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Button with icon', () =>
  <ButtonWithIcon
    text='real buttons have curves'
    onPress={() => window.alert('Button with icon Pressed!')}
  />
)


export default class ButtonWithIcon extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    navigator: PropTypes.object,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    containerBackground: PropTypes.string,
    buttonTextColor: PropTypes.string,


  }

  getText () {
    const buttonText = this.props.text ||  ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
    <View>
        <TouchableOpacity style={[styles.container,{backgroundColor: this.props.containerBackground}]} onPress={this.props.onPress}>
        {renderIf(I18nManager.isRTL, 
            <Icon style={[styles.icon]} name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />

                )}
         <Text style={[styles.buttonText, {color: this.props.buttonTextColor}]}>{this.getText()}</Text>
         {renderIf(!I18nManager.isRTL, 
            <Icon style={[styles.icon]} name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />

                )}

        </TouchableOpacity>
      </View>
    )
  }
}
