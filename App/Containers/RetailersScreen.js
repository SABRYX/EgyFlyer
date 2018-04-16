import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,View,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RetailersScreenStyle'
import TabsFooter from "../Components/TabsFooter"
import HeadWithOnlySearch from "../Components/HeadWithOnlySearch"
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Badge } from 'native-base';
import RetailersList from "../Containers/RetailersList"

class RetailersScreen extends Component {
  render () {
    return (
      <Container>
        <HeadWithOnlySearch title="RETAILERS"/>
        <Content style={{marginTop:"0%",backgroundColor:"#efefef"}} >

          <View style={{backgroundColor:"#fafafa",width:"100%",flexDirection:"row"}} >
            <Button iconLeft   transparent  style={{marginLeft:"0%",width:"55%",padding:0}} >
              <Icon name='crosshairs' type="FontAwesome" style={{color:"orange",fontSize:17,marginRight:0,padding:0}} />
              <Text style={{color:"black",fontSize:11,marginLeft:0,padding:0}} 
            onPress={()=>this.props.navigation.navigate("OfferDetailsScreen",{screen:"OfferDetailsScreen"})}>
              Cairo City - Nasr City</Text>
              <Icon name='angle-down' type="FontAwesome" style={{color:"black",fontSize:15,marginLeft:0,marginRight:0}}/>
             </Button>

            <Button iconLeft  primary transparent  style={{marginLeft:"10%",width:"30%"}} >
              <Icon name='heart' type="FontAwesome" style={{color:"red",fontSize:17,marginRight:0}} />
              <Text style={{color:"black",fontSize:11,marginLeft:"0%",}}>Liked first</Text>
            </Button>
        </View>
        <View style={{flex:1,height:"100%",width:"100%"}}>
          <RetailersList/>
        </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(RetailersScreen)
