import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TextInput } from 'react-native'
import styles from './Styles/InputLoginStyle'

export default class InputLogin extends Component {
  // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.border}>
        <TextInput value={this.props.value} style={styles.input}></TextInput>

      </View>
    )
  }
}
