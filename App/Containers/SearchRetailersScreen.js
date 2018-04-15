import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchRetailersScreenStyle'
import { Header,Body,Item,Input,Icon, Container,Content, List,ListItem, Footer} from 'native-base';

class SearchRetailersScreen extends Component {
  render () {
    var mainCategories = [{name:"Carffour Hyper",offers:5820},{name:"Fatafeet Mall ",offers:2550},{name:"Lolo market",offers:2020},{name:"Ragab sons",offers:2320}];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.SearchBar}>
          <Item>
            <Icon name="arrow-back" onPress={()=> this.props.navigation.goBack()} />
            <Input placeholder="Search for retailers" />
          </Item>
        </Header>
        <View style={styles.sectionTwo}>
            <List dataArray={mainCategories}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                  <Icon name="shop" type="Entypo" style={styles.searchRowIcon}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchRetailersScreen)
