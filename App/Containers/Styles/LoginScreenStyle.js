import { StyleSheet } from 'react-native'
import { Fonts, Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  logoContainer: {
    
    alignItems: 'center',
    justifyContent: "center",

  },
  logo: {
    alignItems: 'center',
    marginBottom: "25%",
    marginTop:"10%",
  },
  wrapper: {
    marginTop:"10%"
  },
  skipText: {
    color: 'white', 
    fontFamily: Fonts.type.base, 
    fontSize: 16,
    fontWeight: '300',
    marginTop:"25%",
    marginBottom:"2%",
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
})