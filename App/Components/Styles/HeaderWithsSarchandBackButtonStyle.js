import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex:1,
    height:"100%",
    width:"100%"
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  tabs:{
    marginTop:"0%",
    height:"1%",
    width:"100%",
    backgroundColor:"black"
    
  },
  content: {
    flex: 1,                            // Take up all available space
    backgroundColor: 'blue',
    width:"100%",
    height:"100%"         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});