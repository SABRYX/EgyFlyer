import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {


componentWillMount () {
  const { navigate } = this.props.navigation;
setTimeout(() => navigate("LoginScreen", {screen: "LoginScreen"}),40);

}



  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.BG} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
      </View>
    )
  }
}
