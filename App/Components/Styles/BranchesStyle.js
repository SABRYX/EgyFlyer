import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    height:"100%",
    width:"100%",
    padding:"1%",

  },  
  List:{
    flex: 1,
    width:"106%",
    height:"100%",
    margin:"1%"
  },
  HeaderText:{
    width:"100%",
    height:"5%",
    color:"black",
    marginTop:"1%",
  },
  BlackText:{
    color:"#222222",
    fontSize:16
  },
  ListContent:{
    height:"10%",
    width:"100%",
    backgroundColor:"white",
    borderRadius:10,
    flexDirection:"row",
    marginLeft:"0%",
    marginRight:"4%",

  },
  Text:{
    width:"80%",
    height:"100%",
  },
  ImageView:{
    width:"10%",
    height:"100%",
    marginTop:"2%"
  },
  bottomLine:{
    backgroundColor:"black",
    width:"50%",
    height:"10%",
    marginTop:"1%",
    borderRadius:100,
    opacity:0.1

  },
  backgroundLineView:{
    backgroundColor:"grey",
    width:"100%",
    height:"15%",
    alignItems:"center",
    opacity:0.8  
  },
})
