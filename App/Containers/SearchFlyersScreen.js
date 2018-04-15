import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchFlyersScreenStyle'
import { Header,Body,Item,Input,Icon, Container,Content, List,ListItem, Footer} from 'native-base';

class SearchFlyersScreen extends Component {
  render () {
    var mainCategories = [{name:"Carffour Hyper flyer 5/11",offers:20},{name:"Fatafeet Mall flyer 2/11 ",offers:50},{name:"Lolo market flyer 8/11",offers:20},{name:"Ragab sons flyer 01/11",offers:20}];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.SearchBar}>
          <Item>
            <Icon name="arrow-back" onPress={()=> this.props.navigation.goBack()} />
            <Input placeholder="Search for flyers" />
          </Item>
        </Header>
        <View style={styles.sectionTwo}>
            <List dataArray={mainCategories}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                  <Icon name="open-book" type="Entypo" style={styles.searchRowIcon}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlyersScreen)
