import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  main:{
    backgroundColor:"#f5f5f5",
    height:"100%",
    width:"100%",

  },
  MainContainer:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"60%",

  },
  TextBig:{
    fontSize:18,
    color:"#a6abae"
  },
  TextSmall:{
    fontSize:16,
    color:"#a6abae"
  },
  bottomLine:{
    backgroundColor:"grey",
    width:"50%",
    height:"30%",
    marginTop:"0%",
    borderRadius:100,
    opacity:0.4

  },
  backgroundLineView:{
    backgroundColor:"white",
    width:"100%",
    height:"30%",
    alignItems:"center",  
  },
  ButtonRemove:{
    flexDirection:"column",
    backgroundColor:"#ef4c67",
    flex:1,
    height:"70%",
    margin:"2%",
    borderRadius:10
  },
  ButtonPurchased:{
    flexDirection:"column",
    backgroundColor:"#878787",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    height:"70%",
    margin:"2%",
    borderRadius:10
  }
})
