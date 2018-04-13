import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
      width: "60%",
      height: 48,
      borderRadius: 100,
      flexDirection: 'row', 
      marginVertical: 5,
      paddingLeft: "10%",
      paddingRight: "1%",
      alignItems: 'center',
      justifyContent: 'center',

      
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    width: '75%'
  },
  icon: {
    paddingHorizontal: 10,
  }
})