import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    backgroundColor:"white",
    height:"100%",
    width:"100%",
    flex:1
  },
  SearchBar:{
    backgroundColor:"white",
  },
 
  main:{
    marginTop:"2%",
    height:"100%",
  },
  sectionOne:{
    marginLeft:"5%",
    height:"20%",
    width:"90%",
    marginRight:"5%",
    marginBottom:"0%",
  },
  SearchForView:{
    height:"100%",
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  ToucahbleView:{
    width:"25%",
    height:"100%",
    flexDirection:"column",
    marginTop:"2%",
  },
  headerText:{
    fontSize:16,
    color:"black",
    fontWeight:"500"
  },
  TouchableOpacityCategories:{
    borderRadius:100,
    width:"60%",
    height:"40%",
    alignItems:"center",
    marginLeft:"4%",

  },
  opacityImage:{
    height:"100%",width:"100%",
    borderRadius:100
  },
  CategoriesText:{
    color:"black",
    fontSize:13,
    textAlign:"left",
    marginLeft:"0%",

  },
  CategoriesSmallText:{
    color:"black",
    fontSize:13,
    textAlign:"left",
    marginLeft:"9%",


  },
  lineSeprator:{
    backgroundColor:"grey",
    height:"0.1%",
    width:"100%",
    margin:"0%",
    marginTop:"0%",
    opacity:0.5
    
    
  },
  sectionTwo:{
    height:"35%",
    width:"90%",
    marginTop:"1%",
    marginLeft:"5%",
    marginRight:"5%",

    
  },
  SearchListHeader:{
    flexDirection:"row"
  },
  clearall:{
    marginLeft:"50%",
    marginTop:"2%"
  },
  searchRow:{
    flexDirection:"row"
  },
  searchRowIcon:{
    fontSize:18,
    marginRight:"1%",
    color:"#5e5eac"
  },
  searchRowIcon2:{
    fontSize:15,
    marginLeft:"5%",
    marginTop:"1%",
    fontWeight:"100"

  },
  sectionThree:{
    height:"30%",
    width:"90%",
    marginTop:"1%",
    marginLeft:"5%",
    marginRight:"5%",
  },
  bottomLine:{
    backgroundColor:"grey",
    width:"50%",
    height:"25%",
    marginTop:"2%",
    borderRadius:100,
    opacity:0.4

  },
  backgroundLineView:{
    backgroundColor:"#c8cfd4",
    width:"100%",
    height:"3%",
    alignItems:"center",
    marginTop:"2%"  
  },
})
