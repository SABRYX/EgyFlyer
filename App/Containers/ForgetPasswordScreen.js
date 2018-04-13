import React, { Component } from 'react'
import {Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity,StatusBar,KeyboardAvoidingView,TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import Icon from "../../node_modules/react-native-vector-icons/MaterialIcons.js"
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'


//i used I18n but couldn't make the right translate so i used one on stack overflow
import I18n from '../I18n'
import en from '../I18n/languages/english';
import ar from '../I18n/languages/ar';
I18n.translations = {
  en,
  ar
};

//used for login button with colors
import LinearGradient from 'react-native-linear-gradient';


// Styles
import styles from './Styles/ForgetPasswordScreenStyle'

class ForgetPasswordScreen extends Component {
  render () {
    return (
      <View style={{flex: 1}} >
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      <View style={{marginTop:"0%"}}>
      <Icon name="arrow-back" size={24} style={{color:"white",marginRight:"90%",marginTop:"0%",marginBottom:"20%"}} onPress={() => this.props.navigation.goBack()}/>
      </View>
     
        <View  style={styles.content} >
        <KeyboardAvoidingView>
          <Text style={styles.Heading}>{I18n.t("new password")}</Text>
          <Text style={styles.SubHeading}> {I18n.t("Enter your email to reset your password You will receive an email with instructions on how to reset your password")} </Text>

        <TextInput placeholder={I18n.t('Email')} style={styles.Input} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>

        <TouchableOpacity style={styles.opacityLogin}>
            <LinearGradient 
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#ef4c67', '#ef4c67', '#f58865']} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {I18n.t("RECOVER PASSWORD")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          </KeyboardAvoidingView>
          </View>
     
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordScreen)
