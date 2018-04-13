import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:"white",
    height:"100%",
    width:"100%"
  },
  searchInput:{
    width:"100%",
    marginTop:"1%"
  },
  searchInputView:{
    width:"100%",
    height:"30%",
    flexDirection:"row",
    elevation:5,
    borderBottomWidth:0,
    marginLeft:"0%",


  },
  InputView:{
    width:"90%"
  },
  backButtonView:{
    width:"10%",
    marginLeft:"4%",
    marginTop:"3.5%",
  },
  backButton:{
    color:"black",
    marginRight:"0%",
    marginTop:"2%",
    marginLeft:"2%",
    fontSize:25
  },
  main:{
    marginLeft:"5%",
    marginTop:"4%",
    height:"100%",
    width:"100%"
  },
  SearchForView:{
    height:"80%"
  },
  headerText:{
    fontSize:16,
    color:"black",
    fontWeight:"500"
  },
  TouchableOpacityCategories:{
    borderRadius:100,
    backgroundColor:"#5858a7",
    width:"15%",
    height:"90%"
  },
  CategoriesIcons:{

  },
  bottomLine:{
    backgroundColor:"grey",
    width:"50%",
    height:"25%",
    marginTop:"3%",
    borderRadius:100,
    opacity:0.4

  },
  backgroundLineView:{
    backgroundColor:"#c8cfd4",
    width:"100%",
    height:"5%",
    alignItems:"center",
    marginTop:"70%"  
  },
})
