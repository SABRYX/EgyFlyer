import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/FilterButtonStyle'
import {Button,Icon} from "native-base"
import {withNavigation} from "react-navigation"

class FilterButton extends Component {
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
        <Button transparent onPress={()=>{this.props.navigation.navigate("FilterScreen",{screen:"FilterScreen"})}}>
          <Icon name='filter'  type="FontAwesome" style={{fontSize : 16}}/>
        </Button>
      </View>
    )
  }
}


export default withNavigation(FilterButton)