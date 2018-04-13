import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,View,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Badge } from 'native-base';
// Styles
import styles from './Styles/HomeScreenStyle'
import { Images } from '../Themes'
import Masonry from 'react-native-masonry';
import TabsFooter from "../Components/TabsFooter"
import HeaderWithSearch from "../Components/HeaderWithSearch"
import RESPONSE from "../Containers/response"


export default class HomeScreen extends Component {

  render () {
    const addOnPress = (item) => {
      item.onPress = () => this.props.navigate(item.page)
     };
    return (
      <Container>
      <HeaderWithSearch/>
      <Content style={{marginTop:"0%",backgroundColor:"#efefef"}} >

      <View style={{backgroundColor:"#fafafa",width:"100%",flexDirection:"row"}} >
      <Button iconLeft   transparent  style={{marginLeft:"0%",width:"55%",padding:0}} >
      <Icon name='crosshairs' type="FontAwesome" style={{color:"orange",fontSize:17,marginRight:0,padding:0}} />
      <Text style={{color:"black",fontSize:11,marginLeft:0,padding:0}} 
       onPress={()=>this.props.navigation.navigate("OfferDetailsScreen",{screen:"OfferDetailsScreen"})}>
      Cairo City - Nasr City</Text>
      <Icon name='angle-down' type="FontAwesome" style={{color:"black",fontSize:15,marginLeft:0,marginRight:0}}/>
      </Button>

      <Button iconLeft  primary transparent  style={{marginLeft:"10%",width:"35%"}} >
      <Icon name='document' type="Entypo" style={{color:"orange",fontSize:17,marginRight:0}} />
      <Text style={{color:"black",fontSize:11,marginLeft:"0%",}}>images only</Text>
      </Button>
      </View>
      <Masonry // optional - Default: false
       columns={2} // optional - Default: 2
       sorted
       spacing={3}
       imageContainerStyle={{marginTop:"0%",marginLeft:"0%"}}
        bricks={RESPONSE.map(function(data,i,page){return({uri: data.image  , renderFooter: ()=>{return(
          <View style={{backgroundColor:"white",marginBottom:"3%",marginLeft:"0%"}}> 
          <Text style={{marginLeft:"3%",color:"#222222"}}> {data.name} </Text> 
          <View style={{flexDirection:"row",marginLeft:"3%",marginBottom:"2%"}}>
            <Icon name="coin" type="MaterialCommunityIcons" style={{fontSize:20,color:"#5e5eac"}} />
            <Text style={{color:"#f05767"}}> EGP {data.id} </Text>
            <Text> Cash </Text>
          </View>
         <View style={{backgroundColor:"#aeb4bb",height:"1%",width:"80%",marginLeft:"10%"}}></View>
         <View style={{marginTop:"2%" ,flexDirection:"row",marginLeft:"5%"}} >
         <View style={{flexDirection:"row"}}>
           <Icon name="cart" type="EvilIcons" style={{fontSize:20}}/>
           <Text style={{fontSize:12}}> {data.id} </Text>
         </View>
         <View style={{flexDirection:"row",marginLeft:"10%"}}>
         <Icon name="back-in-time" type="Entypo" style={{fontSize:19}} />
          <Text style={{fontSize:12}}>
          {data.name} days left
          </Text>
         </View>
         </View>
        </View>)}
      
      })})}
          />

        <View style={{height:"30%"}}></View>
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

