import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/TabsFooterStyle'
import {Footer,FooterTab,Icon,Button} from "native-base" 
import {withNavigation} from "react-navigation"

class TabsFooter extends Component {
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
      <View style={{height:"10%"}}>
      <Footer style={{backgroundColor:"white",elevation:0,flex:1}}>
      <FooterTab  style={{backgroundColor:"white"}}>
        <Button vertical  onPress={()=>this.props.navigation.navigate("HomeScreen")}>
          <Icon name="barcode" style={{color:"orange"}} type="FontAwesome"/>
          <Text style={{color:"#f05467",fontSize:10}}>Trending</Text>
        </Button>
        <Button vertical onPress={()=>this.props.navigation.navigate("RetailersScreen")}>
          <Icon name="home"  style={{color:"black"}} type="Ionicons"/>
          <Text style={{color:"black",fontSize:10}}>Retailers</Text>
        </Button>
        <Button vertical onPress={()=>this.props.navigation.navigate("CategoriesScreen")}>
          <Icon active name="th-large" style={{color:"black"}} type="FontAwesome" />
          <Text style={{color:"black",fontSize:10}}>categories</Text>
        </Button>
        <Button vertical onPress={()=>this.props.navigation.navigate("MoreScreen")}>
          <Icon name="ellipsis-h" style={{color:"black"}} type="FontAwesome" />
          <Text style={{color:"black",fontSize:10}}>more</Text>
        </Button>
      </FooterTab>
    </Footer>
    <View style={styles.backgroundLineView}><View style={styles.bottomLine}/></View>
    </View>
    )
  }
}

export default withNavigation(TabsFooter) 