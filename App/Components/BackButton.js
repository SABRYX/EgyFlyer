import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/BackButtonStyle'
import {Button,Icon} from "native-base"
import { withNavigation } from 'react-navigation';

class BackButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Button transparent  onPress={() => { this.props.navigation.goBack() }}>
          <Icon name="arrow-back" size={24} style={this.props.style} />
        </Button>
      </View>
    )
  }
}

export default withNavigation(BackButton);