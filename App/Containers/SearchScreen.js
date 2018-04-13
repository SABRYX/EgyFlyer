import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchScreenStyle'
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Icon} from "native-base"

class SearchScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <View style={styles.searchInputView}>
          <View style={styles.backButtonView}>
            <Icon name="arrow-back"  style={styles.backButon}  onPress={() => this.props.navigation.goBack()}/>
          </View>
          <View style={styles.InputView}>
            <SearchInput 
              onChangeText={() => { console.log("hello") }} 
              style={styles.searchInput}
              placeholder="SEARCH CITIES"
              />
          </View>
         </View>
         <View style={styles.main}>
          <Text style={styles.headerText}>search for</Text>
          <View style={styles.SearchForView}>
            <TouchableOpacity style={styles.TouchableOpacityCategories}>
              <Icon name="barcode"  type="FontAwesome" style={styles.CategoriesIcons}  onPress={() => console.log("hello")}/>
            </TouchableOpacity>
            <Text> Offers </Text>
          </View>
         </View> 
        </KeyboardAvoidingView>
      </ScrollView>
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
