import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,View,ImageBackground,ListView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CategoriesScreenStyle'
import TabsFooter from "../Components/TabsFooter"
import HeaderWithSearch from "../Components/HeaderWithSearch"
import { Container, Header, Button, Icon, Content,Text } from 'native-base';
import CategoryList from "../Containers/CategoryList"


class CategoriesScreen extends Component {
  render () {
    return (
      <Container>
        <HeaderWithSearch title="CATEGORIES"/>
        <Content style={{marginTop:"0%",backgroundColor:"#efefef",flex:1,height:"100%"}} >
          <View>
              <CategoryList/>
          </View>

        </Content>
        <TabsFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
