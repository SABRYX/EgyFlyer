import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchScreenStyle'
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Images } from '../Themes'
import { Header,Body,Item,Input,Icon, Container,Content, List,ListItem, Footer} from 'native-base';

class SearchScreen extends Component {
  render () {
    var items = ['NS-901 9 Inch TFT LCD Screen TV-AV Player','NS-901 9 Inch TFT LCD Screen TV-AV Player','NS-901 9 Inch TFT LCD Screen TV-AV Player','Samsung 19 inch Series S19F355HNU LED...','NS-901 9 Inch TFT LCD Screen TV-AV Player','Samsung 19 inch Series S19F355HNU LED...'];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.SearchBar}>
          <Item>
            <Icon name="arrow-back" onPress={()=> this.props.navigation.goBack()} />
            <Input placeholder="Search Cities" />
          </Item>
        </Header>
        <View  style={styles.main}>
          <View style={styles.sectionOne}>
            <Text style={styles.headerText}>search for</Text>
            <View style={styles.SearchForView}>
                <View style={styles.ToucahbleView}>
                  <TouchableOpacity style={styles.TouchableOpacityCategories} onPress={() => this.props.navigation.navigate("SearchOffersScreen")}>
                    <Image source={Images.search_offer} style={styles.opacityImage}/>
                  </TouchableOpacity>
                  <Text style={styles.CategoriesSmallText}> Offers </Text>
                </View>
                  
                <View style={styles.ToucahbleView}>
                  <TouchableOpacity style={styles.TouchableOpacityCategories} onPress={() => this.props.navigation.navigate("SearchRetailersScreen")}>
                    <Image source={Images.search_store} style={styles.opacityImage}/>
                  </TouchableOpacity>
                  <Text style={styles.CategoriesText}> Retailers </Text>
                </View>

                <View style={styles.ToucahbleView}>
                  <TouchableOpacity style={styles.TouchableOpacityCategories} onPress={() => this.props.navigation.navigate("SearchFlyersScreen")}>
                    <Image source={Images.search_flyer} style={styles.opacityImage}/>
                  </TouchableOpacity>
                  <Text style={styles.CategoriesSmallText}> Flyers </Text>
                </View>

                <View style={styles.ToucahbleView}>
                  <TouchableOpacity style={styles.TouchableOpacityCategories} onPress={() => this.props.navigation.navigate("SearchCategoriesScreen")}>
                    <Image source={Images.searchCategories} style={styles.opacityImage}/>
                  </TouchableOpacity>
                  <Text style={styles.CategoriesText}> Categories </Text>
                </View>           
              </View>
            </View>
            <View style={styles.lineSeprator}></View>
          <View style={styles.sectionTwo}>
            <View style={styles.SearchListHeader}>
              <Text style={styles.headerText}>Recent searches</Text>
              <Text style={styles.clearall}>Clear all </Text>
            </View> 
            <List dataArray={items}
                   renderRow={(item) =>
              <ListItem>
                <TouchableOpacity style={styles.searchRow}>
                  <Icon name="back-in-time" type="Entypo" style={styles.searchRowIcon}/>
                  <Text>{item}</Text>
                  <Icon name="x" type="Foundation" style={styles.searchRowIcon2}/> 
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
                <TouchableOpacity style={styles.searchRow}><Text>{item}</Text></TouchableOpacity>
              </ListItem>
            }>
            </List>
          </View>
          <View style={styles.backgroundLineView}><View style={styles.bottomLine}/></View>
          </View>
          

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
