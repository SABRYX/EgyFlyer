import React, { Component } from 'react'
import { ScrollView, View,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Badge } from 'native-base';
// Styles
import TabsFooter from "../Components/TabsFooter"
import styles from './Styles/OfferDetailsScreenStyle'
import HeaderWithbackButton from "../Components/HeaderWithbackButton"
import Overlay from 'react-native-modal-overlay';
class OfferDetailsScreen extends Component {
  
  render () {
    let visable = false
    return (
      <Container>
      <HeaderWithbackButton Title={"VANS Sneakers"} />
      <Content style={styles.content} >
        <View style={styles.main}>
          <Image source={{uri:"data:image/jpeg;base64,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"}} style={{width: "80%", height: 250}} />
          <View style={styles.nameandprice}>
           <Text style={styles.header}> LG 43Lj610v - 43-inch full hd led smart tv </Text>
           
           <View style={styles.priceandpricetag}>
           <Text style={styles.price}> 15000 </Text>
           <Text style={styles.pricetag}> EGP CASH PAYMENT </Text> 
           </View>
        </View>

        <View style={styles.category}>
          <Icon name="th-large" type="FontAwesome" style={styles.categoryicon}/>  
          <Text style={styles.categorytext}> Electronics & Television & Accessories </Text>
        </View>

         <View style={styles.vaild}>
         <Icon name="back-in-time" type="Entypo" style={styles.vaildicon} />
         <Text style={styles.categorytext}> Valid till <Text style={styles.vaildtextpink}>27/2/2018</Text> (5 days).</Text>
        </View>

        <View style={styles.installment}>
          <Icon name="calendar-check-o" type="FontAwesome" style={styles.installmenticon}/>
          <Text style={styles.installmenttext1}> Instalment payment available </Text><Text style={styles.installmenttext2}>500 EGP Monthly (72 Months)</Text>
        </View>

        <View style={styles.buttons}> 
        
        <Button style={styles.saveoffer} >
          <Icon name="shopping-basket" type="MaterialIcons" style={styles.buttonicon}/>
          <Text style={styles.buttontext}> SAVE OFFER </Text>
        </Button>
        <Button style={styles.blues}>
          <Icon name="shopping-basket" type="MaterialIcons" style={styles.buttonicon}/>
          <Text style={styles.buttontext}> Carrefour </Text>
        </Button>
        <Button style={styles.blues}>
          <Icon name="open-book" type="Entypo" style={styles.buttonicon}/>
          <Text style={styles.buttontext}> open flyer </Text>
        </Button>
        
        </View>

         <Overlay visible={visable}  animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}} childrenWrapperStyle={styles.overlay} >
          <View style={{borderBottomWidth: 0, width: "100%",alignItems:"center"}}>
          <Icon name="shopping-basket" type="MaterialIcons" style={styles.overlayicon}/>
           <Text style={{ fontSize: 20, textAlign: 'center',color:"black"}}>
           Save offer  
           </Text>
          </View>
           <Text style={{fontWeight:'300', fontSize: 12, paddingTop: 5, textAlign:'center',color:"black"}}>
           This product includes two payment methods, please select the situable one for you.
           </Text>
           <Button style={styles.overlaybutton1}>
            <Text style={styles.buttontextoverlay1}> cash cart </Text>
           </Button>
           <Button style={styles.overlaybutton2}>
               <Text style={styles.buttontext}> installment cart</Text>
            </Button>
        </Overlay>
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

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsScreen)
