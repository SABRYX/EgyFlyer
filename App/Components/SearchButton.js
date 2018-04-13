import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SearchButtonStyle'
import {Button,Icon} from "native-base"
import {withNavigation} from "react-navigation"

class SearchButton extends Component {
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
        <Button transparent onPress={() => {this.props.navigation.navigate("SearchScreen",{screen:"SearchScreen"})}}>
          <Icon name='search' type="FontAwesome"  style={{fontSize : 16}}/>
        </Button>
      </View>
    )
  }
}

export default withNavigation(SearchButton);
