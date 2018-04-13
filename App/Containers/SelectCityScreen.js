import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity,StatusBar,KeyboardAvoidingView,TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Icon, { Button } from "../../node_modules/react-native-vector-icons/MaterialIcons.js"
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
import ButtonWithIcon from '../Components/ButtonWithIcon'

// Styles
import styles from './Styles/SelectCityScreenStyle'

class SelectCityScreen extends Component {
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
          <Text style={styles.chooseCityHeading}>{I18n.t("Select city and area")}</Text>
          <View style={styles.ButtonView}>
          <ButtonWithIcon
          text= {I18n.t('Select City')}
          iconName= "angle-down"
          iconColor="black"
          iconSize={22}
          onPress={console.log("google")}
          containerBackground="#fff"
          buttonTextColor="black"
          // iconStyle={styles.icon}
          >
          </ButtonWithIcon>

          <ButtonWithIcon
          text= {I18n.t('Select Area')}
          iconName= "angle-down"
          iconColor="black"
          iconSize={22}
          onPress={console.log("google")}
          containerBackground="#fff"
          buttonTextColor="black"
          //iconStyle={styles.icon}
          >
          </ButtonWithIcon>
          <View style={styles.GpsView}>
          <Icon name="my-location"  color="orange"/> 
          <Text style={{color:"orange"}}>{I18n.t("Use Gps")}</Text>
          </View>
          </View>
      
        <TouchableOpacity style={styles.opacityLogin} onPress={() => this.props.navigation.navigate("HomeScreen",{screen:"HomeScreen"})}>
            <LinearGradient 
                     start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['#ef4c67', '#ef4c67', '#f58865']} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {I18n.t("Done")}
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityScreen)
