import { StyleSheet } from 'react-native'
import { Fonts, Metrics, ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginButton:{
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
    marginLeft:"16%",
    marginRight:"16%",
    marginBottom:"0%"

    
  },
  loginButtonText:{
    color:"white",
    textAlign:"center",
  },
  opacityLogin:{
    height:"17%",
    marginBottom:"2%",
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"16%",
    marginRight:"16%",
    marginTop:"0%",
    width:"68%"


  }
  ,
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  Heading:{
    color:"white",
    fontSize:25,
    alignItems:"center",
    textAlign:"center",
    marginBottom:"3%"
  },
  SubHeading:{
    color:"white",
    fontSize:16,
    alignItems:"center",
    textAlign:"center",
    marginBottom:"5%",
    marginLeft:"18%",
    marginRight:"18%"
  },
  bottomLine:{
    backgroundColor:"#222222",
    width:"50%",
    height:"20%",
    marginTop:"2.5%",
    borderRadius:100,
    opacity:0.3

  },
  backgroundLineView:{
    backgroundColor:"#5858a7",
    width:"100%",
    height:"4%",
    alignItems:"center",  
  },
  content:{
    marginTop:"0%",
    width:"100%",
    justifyContent:"center",
    height:"80%",
    marginBottom:"0%"

  },
  Input:{
    borderRadius:100,
    borderWidth:0,
    backgroundColor:"white",
    marginBottom:"2%",
    justifyContent:"center",
    textAlign:"center",
    marginLeft:"16%",
    marginRight:"16%",
    width:"68%",
    height:"17%",
    color:"#bcbcbc"
  },
  
})

