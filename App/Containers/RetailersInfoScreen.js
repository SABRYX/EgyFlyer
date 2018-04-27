import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RetailersInfoScreenStyle'
import {Container,Button,Icon,Content,Header,Tabs,Tab} from "native-base"
import HeaderWithsSarchandBackButton from "../Components/HeaderWithsSarchandBackButton"
import Flyers from "../Components/Flyers"
import Branches from "../Components/Branches"

class RetailersInfoScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <HeaderWithsSarchandBackButton Title="CARREFOUR"/>

        <Content style={{marginTop:"0%",backgroundColor:"#efefef"}} >

        <View style={{flex:1,height:"100%",width:"100%"}}>

        </View>

      </Content>
      <View style={styles.backgroundLineView}><View style={styles.bottomLine}/>
      </View>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(RetailersInfoScreen)
