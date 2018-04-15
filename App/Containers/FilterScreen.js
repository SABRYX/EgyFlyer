import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FilterScreenStyle'
import HeaderPlain from "../Components/HeaderPlain"
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Badge } from 'native-base';
import TabsFooter from "../Components/TabsFooter"
class FilterScreen extends Component {
  render () {
    return (
      <Container>
      <HeaderPlain Title="FILTERS"/>
      <Content style={{marginTop:"0%",backgroundColor:"#efefef"}} >
      </Content>
      <TabsFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen)
