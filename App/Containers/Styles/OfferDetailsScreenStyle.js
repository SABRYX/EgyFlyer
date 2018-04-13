import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Root } from 'native-base';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  HugeImage:{
    height:"40%",
    width:"90%",

  },content:{
    marginTop:"0%",
    backgroundColor:"#efefef",
    height:"100%",
    width:"100%"
  },
  main:{
    height:"100%",
    marginLeft:"10%",
    marginRight:"10%",
    width:"100%",
    marginTop:"5%"
  },
  nameandprice:{
    flexDirection:"row",
    width:"80%",
    marginTop:"3%",

  },
  header:{
    fontSize:17,
    color:"#222222",
    textAlign:"left",
    fontWeight:"600",
    width:"50%"


  },
  priceandpricetag:{
    marginTop:"2%",
    marginLeft:"15%"

  },
  price:{
    fontSize:15,
    color:"#222222",
    textAlign:"center",
    fontWeight:"600",
    marginTop:"10%"
  },
  pricetag:{
    fontSize:12,
    color:"#f05467",
    textAlign:"center",
    fontWeight:"100",
  },
  category:{
    flexDirection:"row",
    marginTop:"2%"
  },
  categorytext:{
    color:"black",
    opacity:0.5,
    fontSize:13

  },
  categoryicon:{
    color:"#5e5eac",
    fontSize:17,
  },
  vaild:{
    flexDirection:"row",
    marginTop:"1%"
  },
  vaildicon:{
    color:"#5e5eac",
    fontSize:17,
  },
  vaildtextpink:{
    color:"#f05467",
    fontSize:14

  },
  installment:{
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:10,
    marginRight:"20%",
    marginTop:"1%",

  },
  installmenticon:{
    fontSize:14,
    marginLeft:"5%",
    marginTop:"3%",
    color:"#f05467",
    marginBottom:"3%"
  },
  installmenttext1:{
    fontSize:10,
    marginLeft:"1%",
    marginTop:"3%",
    fontWeight:"400"
  },
  installmenttext2:{
    fontSize:10,
    marginLeft:"1%",
    marginTop:"3%",
    fontWeight:"400"
  },
  buttons:{
    flexDirection:"row",
    width:"80%",
    marginRight:"15%"
  },
  saveoffer:{
    flexDirection:"column",
    backgroundColor:"#f05467",
    marginTop:"2%",
    borderRadius:5

  },
  buttonicon:{
    fontSize:15,
    color:"white",

  },
  buttontext:{
    fontSize:12,
    color:"white",
    fontWeight:"400",
    textAlign:"center"
  },
  blues:{
    flexDirection:"column",
    backgroundColor:"#5e5eac",
    marginTop:"2%",
    marginLeft:"2%",
    borderRadius:5
  },
  overlay:{
    backgroundColor: 'white',
    height:"45%",
    borderRadius:20,
    width:"60%",
    marginLeft:"20%",
  },
  overlayicon:{
    fontSize:60,
    color:"#f05467",
  },
  overlaybutton1:{
    backgroundColor:"#5e5eac",
    marginTop:"3%",
    marginLeft:"10%",
    borderRadius:20,
    height:"15%",
    width:"80%",
  },
  overlaybutton2:{
    backgroundColor:"#5e5eac",
    marginTop:"2%",
    marginLeft:"10%",
    borderRadius:20,
    height:"16%"
  },
  buttontextoverlay1:{
    fontSize:12,
    color:"white",
    fontWeight:"400",
    textAlign:"center",
    marginLeft:"15%"
  },
})