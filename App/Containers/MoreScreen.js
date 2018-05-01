import React, { Component } from 'react'
import { ScrollView, Text,View,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MoreScreenStyle'
import { Container, Content } from 'native-base';
import TabsFooter from "../Components/TabsFooter"
import HeaderMore from "../Components/HeaderMore"
class MoreScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <HeaderMore Title="More"/>
        <Content>
          
          <TouchableOpacity><Text>Hello</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen)
