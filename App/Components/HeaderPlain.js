import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,ImageBackground } from 'react-native'
import {Header,Body,Left,Right,Icon,Button,Title} from "native-base"
import { Images } from '../Themes'
import styles from './Styles/HeaderPlainStyle'
import BackButton from "../Components/BackButton"
export default class HeaderPlain extends Component {
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
      <View style={{height:"10%",marginBottom:"0%"}}>
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      
      <Header style={{height:"100%",elevation:0,backgroundColor: "transparent",width:"100%"}} >
        <Left style={{flex: 1,flexDirection:"row"}}>
          <BackButton/>
        </Left>
        <Body style={{flex: 1,alignItems:"center",alignSelf:"center"}}>
          <Title>{this.props.Title}</Title>
        </Body>
        <Right style={{flex: 1}}/>
      </Header>
      </ImageBackground>
      </View>
    )
  }
}
