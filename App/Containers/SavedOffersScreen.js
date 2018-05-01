import React, { Component } from 'react'
import { ScrollView, Text, View,Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SavedOffersScreenStyle'
import HeaderPlain from "../Components/HeaderPlain"
import {Container,Content,Icon} from "native-base"
class SavedOffersScreen extends Component {
  render () {
    return (
      <Container style={{flex:1}}>
        <HeaderPlain Title="SAVEDOFFERS"/>
        <Content style={styles.main}>
          <View style={styles.MainContainer}>
            <Icon name="shopping-basket" type="MaterialIcons" style={{fontSize : 50,
            marginBottom:"1%",color:"#a6abae"}}/>
            <Text style={styles.TextBig}> Your cart is empty </Text>
            <Text style={styles.TextSmall}> please save offers </Text>

          </View>
          {/* Delete this and put your tab navigator */}
          <Button title="Installment" onPress={()=>this.props.navigation.navigate("InstallmentsScreen")}/>
        </Content>


           <View style={styles.backgroundLineView}><View style={styles.bottomLine}/></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedOffersScreen)
