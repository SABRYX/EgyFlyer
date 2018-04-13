import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer:{
    height:"100%",
    width:"100%"
  },
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    position: 'absolute'
  },
  centered: {
    alignItems: 'center',
    position: 'absolute',
    alignSelf:"center",
    marginTop:"45%"
  },
  backgroundImage:{
    height:"100%",
    width:"100%",
    

  }
})
