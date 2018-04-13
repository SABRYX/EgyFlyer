import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity,StatusBar,KeyboardAvoidingView,TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Icon from "../../node_modules/react-native-vector-icons/MaterialIcons.js"


//i used I18n but couldn't make the right translate so i used one on stack overflow
import I18n from '../I18n'
import en from '../I18n/languages/english';
import ar from '../I18n/languages/ar';
I18n.translations = {
  en,
  ar
};

//used for Male or female  button with colors
import LinearGradient from 'react-native-linear-gradient';


// Styles
import styles from './Styles/CreateAccountScreenStyle'

class CreateAccountScreen extends Component {


  render () {
    return (
      <View style={{flex: 1}} >
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      <View style={{alignItems:"flex-start",flexDirection:"column"}}>
      <Icon name="arrow-back" size={24} style={{color:"white",marginRight:"90%",marginTop:"7%"}}  onPress={() => this.props.navigation.goBack()}/>
      </View>
      <View style={styles.wrapper}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
        </View>
        


        <View style={styles.content}>
        <KeyboardAvoidingView>
          <Text style={styles.createAccountText}> {I18n.t("Create new account")} </Text>
          <TextInput placeholder={I18n.t('Username')} style={styles.Input} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>
          <TextInput placeholder={I18n.t('Email')} style={styles.Input} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>
          <TextInput placeholder={I18n.t('Password')} style={styles.Input}  secureTextEntry={true} underlineColorAndroid={"rgba(0,0,0,0)"}></TextInput>
           
           <View style={styles.genderView}> 

            <TouchableOpacity style={styles.genderChoose}>
              <LinearGradient  
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#f58865', '#f58865','#ef4c67']} style={styles.genderLinear}>
                <Text style={styles.buttonText}>
                {I18n.t("Female")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>


            <TouchableOpacity style={styles.genderChoose}>
              <LinearGradient  
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#f58865', '#f58865','#ef4c67']} style={styles.genderLinear} onPress={console.log("hola")}>
                <Text style={styles.buttonText}>
                  {I18n.t("Male")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          
           </View>
          <TouchableOpacity  style={styles.opacityLogin} onPress={() => this.props.navigation.navigate("SelectCityScreen",{screen:"SelectCityScreen"})  } >
            <LinearGradient  
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#ef4c67', '#ef4c67', '#f58865']} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {I18n.t("register")}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen)
