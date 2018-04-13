import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MasonaryProductFooterStyle'
import {Icon} from "native-base"
import RESPONSE from "../Containers/response"

export default class MasonaryProductFooter extends Component {
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
      <View style={{backgroundColor:"white",marginBottom:"0%",marginLeft:"2%"}}> 
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
        </View>
    )
  }
}
