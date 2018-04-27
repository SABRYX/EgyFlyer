import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/HeaderWithsSarchandBackButtonStyle'
import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import {Header,Body,Left,Right,Icon,Button,Title,Container} from "native-base"
import { Images } from '../Themes';
import BackButton from "../Components/BackButton"
import SearchButton from "../Components/SearchButton"
import Tabs from "../Components/Tabs"
import FlyersTab from "../Components/FlyersTab"
import BranchesTab from "../Components/BranchesTab"
import Branches from "../Components/Branches"
export default class HeaderWithsSarchandBackButton extends Component {
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
      <View style={{height:"100%",marginBottom:"0%"}}>
       <Container>
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      >
      
      <Header style={{height:"9%",elevation:0,backgroundColor: "transparent",width:"100%",marginTop:"25%"}}  hasTabs >
        <Left style={{flex: 1,flexDirection:"row"}}>
          <BackButton/>
          <Button transparent>
            <Icon name='shopping-bag'  type="FontAwesome" style={{fontSize : 16}}/>
          </Button>
        </Left>
        <Body style={{flex: 1,alignItems:"center",alignSelf:"center"}}>
          <Title>{this.props.Title}</Title>
        </Body>
        <Right style={{flex: 1}}>
          <SearchButton/>
        </Right>
      </Header>
      <Tabs style={styles.tabs}>
          {/* First tab */}
          <View title="Flyers" style={styles.content}>
            <FlyersTab/>
          </View>
          {/* Second tab */}
          <View title="Branches" style={styles.content}>
            <Branches/>
          </View>
        </Tabs>
      </ImageBackground>
      </Container>
      </View>
    )
  }
}

