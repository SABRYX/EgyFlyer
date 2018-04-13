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
    height:"13%",
    marginBottom:"10%",
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
    
    alignItems: 'center',
    justifyContent: "center",
    marginBottom:"3%"

  },
  logo: {
    alignItems: 'center',
    marginBottom: "4%",
    marginTop:"16%",
  },
  wrapper: {
    marginTop:"0%",
    marginBottom:"0%"
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
    marginTop:"3%",
    width:"100%",
    justifyContent:"center",
    height:"70%",
    marginBottom:"0%",

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
    height:"13%",
    color:"#bcbcbc"
  },
  createAccountText:{
    color: 'white', 
    fontFamily: Fonts.type.Roboto, 
    fontSize: 20,
    fontWeight: '300',
    marginTop:"0%",
    marginBottom:"4%",
    textAlign:"center"
  },
  genderChoose:{
    width: "44%",
    height: "95%",
    borderRadius: 100,
    marginBottom:"2%",
    marginLeft:"4%",
    marginRight:'2%',
    marginTop:"1%"


  },
  genderView:{
    height:"13%",
    width:"65%",
    borderRadius:100,
    marginLeft:"18%",
    marginRight:"18%",
    flexDirection:"row",
    marginBottom:"1%",
    backgroundColor:"#5858a7",
  },
  genderLinear:{
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
    marginBottom:"1%",
  },
})
