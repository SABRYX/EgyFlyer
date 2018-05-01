import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,ImageBackground } from 'react-native'
import {Header,Body,Left,Right,Icon,Button,Title} from "native-base"
import { Images } from '../Themes'
import styles from './Styles/HeaderMoreStyle'

export default class HeaderMore extends Component {
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
      <View style={{height:"10%",marginBottom:"0%",marginTop:"0%"}}>
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      
      <Header style={{height:"100%",elevation:0,backgroundColor: "transparent",width:"100%",marginTop:"0%"}} >
          <Left style={{flex:1}}/>
        <Body style={{flex: 1,alignItems:"center",alignSelf:"center"}}>
          <Title style={{textAlign:"center"}}>{this.props.Title}</Title>
        </Body>
        <Right style={{flex: 1}}/>
      </Header>
      </ImageBackground>
      </View>
    )
  }
}
