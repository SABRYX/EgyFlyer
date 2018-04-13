import { StyleSheet } from 'react-native'
import { Fonts, Metrics, ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginButton:{
    width: "100%",
    height: "85%",
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
    height:"20%",
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
  logoContainer: {
    marginBottom: "3%",
    alignItems: 'center',
    justifyContent: "center",

  },
  logo: {
    alignItems: 'center',
    marginBottom: "4%",
    marginTop:"10%",
  },
  wrapper: {
    marginTop:"10%",
    marginBottom:"0%",
  },
  skipText: {
    color: 'white', 
    fontFamily: Fonts.type.base, 
    fontSize: 14,
    fontWeight: '300',
    marginTop:"7%",
    marginBottom:"0%",
    textAlign:"center"
  },
  password: {
    color: 'white', 
    fontFamily: Fonts.type.base, 
    fontSize: 14,
    fontWeight: '300',
    marginTop:"0%",
    marginBottom:"4%",
    textAlign:"center"
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
    marginTop:"10%",
    width:"100%",
    justifyContent:"center",
    height:"65%",
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
    height:"19%",
    color:"#bcbcbc"
  },
  
})

