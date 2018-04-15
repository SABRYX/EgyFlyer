import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchOffersScreenStyle'
import { Header,Body,Item,Input,Icon, Container,Content, List,ListItem, Footer} from 'native-base';

class SearchOffersScreen extends Component {
  render () {
    var mainCategories = [{name:"TFT LCD Screen TV-AV Player with",offers:5},{name:"15.6 Inch Slim Led Screen with back",offers:7},{name:"Samsung 19 inch Series S19F355H",offers:2},{name:"Alcatel Pixi4 3G Dual Sim, 6 inch Met",offers:3},{name:"TFT LCD Screen TV-AV Player with",offers:5},{name:"15.6 Inch Slim Led Screen with back",offers:7},{name:"Samsung 19 inch Series S19F355H",offers:2},{name:"TFT LCD Screen TV-AV Player with",offers:5},{name:"15.6 Inch Slim Led Screen with back",offers:7},{name:"Samsung 19 inch Series S19F355H",offers:2},{name:"TFT LCD Screen TV-AV Player with",offers:5},{name:"15.6 Inch Slim Led Screen with back",offers:7},{name:"Samsung 19 inch Series S19F355H",offers:2},{name:"TFT LCD Screen TV-AV Player with",offers:5},{name:"15.6 Inch Slim Led Screen with back",offers:7},{name:"Samsung 19 inch Series S19F355H",offers:2}];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.SearchBar}>
          <Item>
            <Icon name="arrow-back" onPress={()=> this.props.navigation.goBack()} />
            <Input placeholder="Search for offers" />
          </Item>
        </Header>
        <View style={styles.sectionTwo}>
            <List dataArray={mainCategories}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                  <Icon name="barcode" type="MaterialCommunityIcons" style={styles.searchRowIcon}/> 
                  <Text>{item.name}</Text>
                  <Text style={styles.offers}>{item.offers}  days left</Text>
                </TouchableOpacity>
              </ListItem>
            }>
            </List>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchOffersScreen)
