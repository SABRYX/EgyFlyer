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
  rowimage:{
    height:"75%",
    width:"100%",
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
    fontSize:12,
    marginTop:"1%",
    marginRight:"3%",
    color:"#5e5eac"
  },
  rowfooter:{
    height:"20%",
    flexDirection:"row",
  },
  offersnum:{
    color:"#f05767",
    marginRight:"3%",
    fontSize:12
  },
  offersWord:{
    fontSize:12,
    color:"black"
  },


})
