import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Image } from 'react-native'
import styles from './Styles/BranchesStyle'
import {List,ListItem,Container} from "native-base"
import { Images } from '../Themes';

export default class Branches extends Component {
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
      <Container style={styles.container}>
      <View style={styles.container}>
       <View style={styles.List}>
         <Text style={styles.HeaderText}> CAIRO </Text>
         <View style={styles.ListContent}>
           <View style={styles.Text}>
             <Text style={styles.BlackText}>Nasr City</Text>
             <Text>71 Pilgrim Avenue Chevy Chase, MD 20815</Text>
           </View>
           <View style={styles.ImageView}>
             <Image source={Images.navigation}/>
           </View>
         </View>
         <View style={styles.ListContent}>
           <View style={styles.Text}>
             <Text style={styles.BlackText}>Nasr City</Text>
             <Text>71 Pilgrim Avenue Chevy Chase, MD 20815</Text>
           </View>
           <View style={styles.ImageView}>
             <Image source={Images.navigation}/>
           </View>
         </View>
         <View style={styles.ListContent}>
           <View style={styles.Text}>
             <Text style={styles.BlackText}>Nasr City</Text>
             <Text>71 Pilgrim Avenue Chevy Chase, MD 20815</Text>
           </View>
           <View style={styles.ImageView}>
             <Image source={Images.navigation}/>
           </View>
         </View>
         <Text style={styles.HeaderText}> GIZA </Text>
         <View style={styles.ListContent}>
           <View style={styles.Text}>
             <Text style={styles.BlackText}>Nasr City</Text>
             <Text>71 Pilgrim Avenue Chevy Chase, MD 20815</Text>
           </View>
           <View style={styles.ImageView}>
             <Image source={Images.navigation}/>
           </View>
         </View>
        
       
        
       </View>
      </View>
      <View style={styles.backgroundLineView}><View style={styles.bottomLine}/></View>
      </Container>
    )
  }
}
