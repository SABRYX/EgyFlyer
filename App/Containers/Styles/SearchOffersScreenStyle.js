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
  sectionTwo:{
    height:"88%",
    width:"90%",
    marginTop:"1%",
    marginLeft:"5%",
    marginRight:"5%",

    
  },
  SearchListHeader:{
    flexDirection:"row"
  },
  headerText:{
    fontSize:16,
    color:"black",
    fontWeight:"500"
  },
  searchRow:{
    flexDirection:"row",
    flex:1,
    justifyContent:"space-between"

  },
  searchRowIcon:{
    fontSize:20,
    marginRight:"2%",
    color:"#5e5eac",
    marginTop:"0%"
  },
  searchRowIcon2:{
    fontSize:14,
    marginRight:"2%",
    color:"#5e5eac",
    marginTop:"1%"

  },
  offers:{
    marginLeft:"4%",
    
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
    marginTop:"0%"  
  },
})