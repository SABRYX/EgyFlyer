import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  row: {
    width: 190,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop:"2%"

  },
  listContent: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  LikedView:{
    alignItems:"flex-end",
    marginLeft:"70%"
  },
  LIKED:{
    fontSize:18,
    color:"black",


  },
  rowimage:{
    height:"50%",
    width:"60%",
    margin:"0%",
    borderTopLeftRadius:5,
    borderTopRightRadius:5,

  },
  rowname:{
    marginTop:"5%",
    marginBottom:"3%",
    fontSize:13,
    color:"black",
    opacity:0.7
  },
  rowlineSeprator:{
    height:"0.7%",
    backgroundColor:"black",
    width:"90%",
    opacity:0.1,
    marginBottom:"2%",
    marginRight:"5%",
    marginLeft:"5%"
  },
  Icon:{
    fontSize:14,
    marginTop:"2%",
    marginRight:"3%",
    color:"#5e5eac"
  },
  rowfooter:{
    height:"10%",
    flexDirection:"row",
    width:"100%",
    marginLeft:"5%",

  },
  offersnum:{
    color:"#f05767",
    marginRight:"3%",
    fontSize:14
  },
  offersWord:{
    fontSize:14,
    color:"black"
  },
  rowfooterLeft:{
    flexDirection:"row",
    width:"50%",
    justifyContent:"center"
  },
  rowfooterRight:{
    flexDirection:"row",
    width:"50%",
    justifyContent:"center"
  },

})
