import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity,StatusBar,KeyboardAvoidingView,TextInput } from 'react-native'
import { connect } from 'react-redux'

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
import styles from './Styles/EmailLoginScreenStyle'

class EmailLoginScreen extends Component {
  
  render () {
    return (
      <View style={{flex: 1}} >
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      <View style={{alignItems:"flex-start",flexDirection:"column"}}>
      <Icon name="arrow-back" size={24} style={{color:"white",marginRight:"90%",marginTop:"10%"}}  onPress={() => this.props.navigation.goBack()}/>
      </View>
      <View style={styles.wrapper}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
        </View>
        


        <View style={styles.content}>
        <KeyboardAvoidingView>
        <TextInput placeholder={I18n.t('Email')} style={styles.Input} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>
    

        <TextInput placeholder={I18n.t('Password')} style={styles.Input}  secureTextEntry={true} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>

        <TouchableOpacity style={styles.opacityLogin} onPress={() => this.props.navigation.navigate("HomeScreen",{screen:"HomeScreen"})}>
            <LinearGradient
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#ef4c67', '#ef4c67', '#f58865']} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {I18n.t("Login")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

       <Text style={styles.password}  onPress={() => this.props.navigation.navigate("ForgetPasswordScreen", {screen: "ForgetPasswordScreen"})} >  {I18n.t('Forget password')}  </Text>
       </KeyboardAvoidingView>
       <Text style={styles.skipText}  onPress={() => this.props.navigation.navigate("CreateAccountScreen", {screen: "CreateAccountScreen"})} >  {I18n.t('Create new account')}  </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailLoginScreen)
