import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity,StatusBar } from 'react-native'
import { connect } from 'react-redux'

import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import I18n from '../I18n';
import en from '../I18n/languages/english';
import ar from '../I18n/languages/ar';
I18n.translations = {
  en,
  ar
};


// Styles
import styles from './Styles/LoginScreenStyle'

import ButtonWithIcon from '../Components/ButtonWithIcon'

 class LoginScreen extends Component {


  render () {
    return (
      <View style={{flex: 1}} >
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      <View style={styles.wrapper}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
        </View>


       
          {/* google login */}
          <ButtonWithIcon
          text= {I18n.t('Connect with google+')}
          iconName= "google-plus"
          iconColor="#fff"
          iconSize={22}
          onPress={console.log("google")}
          containerBackground="#e0483a"
          buttonTextColor="#fff"
          // iconStyle={styles.icon}
          >
          </ButtonWithIcon>

           {/* // facebook login  */}
        <ButtonWithIcon
          text= {I18n.t('Connect with facebook')}
          iconName= "facebook"
          iconColor="#fff"
          iconSize={24}
          //onPress={this._fbAuth}
          containerBackground="#3b5998"
          buttonTextColor="#fff"
          //iconStyle={styles.icon}
          >
          </ButtonWithIcon>


          {/* twitter login */}
          <ButtonWithIcon
          text= {I18n.t('Connect with twitter')}
          iconName= "twitter"
          iconColor="#fff"
          iconSize={24}
          onPress={console.log("twitter")}
          containerBackground="#1da1f2"
          buttonTextColor="#fff"
          //iconStyle={styles.icon}
          >
          </ButtonWithIcon>


          {/* login with  email */}
           <ButtonWithIcon
          text= {I18n.t('Connect with email')}
          iconName= "at"
          iconColor="#150c26"
          iconSize={24}
           onPress={() => this.props.navigation.navigate("EmailLoginScreen", {screen: "EmailLoginScreen"})} 
          containerBackground="#f0f0f0"
          buttonTextColor="#150c26"
          //iconStyle={styles.icon}
          >
          </ButtonWithIcon>
          
          <Text style={styles.skipText}  onPress={() => this.props.navigation.navigate("SelectCityScreen", {screen: "SelectCityScreen"})} >  {I18n.t('Skip Login')}  </Text>
        
      </ImageBackground>

        <View style={styles.backgroundLineView}><View style={styles.bottomLine}/></View>

      
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
