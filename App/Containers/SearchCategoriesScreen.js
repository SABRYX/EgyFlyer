import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchCategoriesScreenStyle'
import { Header,Body,Item,Input,Icon, Container,Content, List,ListItem, Footer} from 'native-base';


class SearchCategoriesScreen extends Component {
  render () {
    var items =  [{name:"Supermarket",offers:520},{name:"Beverages",offers:20},{name:"Personal Care",offers:220},{name:"Pet Centre",offers:2320}];
    var mainCategories = [{name:"Men",offers:520},{name:"Women",offers:20},{name:"Collections",offers:220},{name:"Kids",offers:2320}];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.SearchBar}>
          <Item>
            <Icon name="arrow-back" onPress={()=> this.props.navigation.goBack()} />
            <Input placeholder="Search for categories" />
          </Item>
        </Header>
        <View style={styles.sectionTwo}>
            <View style={styles.SearchListHeader}>
              <Text style={styles.headerText}>Fashion</Text>
            </View> 
            <List dataArray={mainCategories}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                  <Icon name="th-large" type="FontAwesome" style={styles.searchRowIcon}/> 
                  <Text>{item.name}</Text>
                  <Text style={styles.offers}>{item.offers} Offers</Text>
                </TouchableOpacity>
              </ListItem>
            }>
            </List>
          </View>
          <View style={styles.sectionThree}>
            <Text style={styles.headerText}>Trending History</Text>
            <List dataArray={items}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                <Icon name="th-large" type="FontAwesome" style={styles.searchRowIcon2}/> 
                <Text>{item.name}</Text>
                <Text style={styles.offers}>{item.offers} Offers</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchCategoriesScreen)
