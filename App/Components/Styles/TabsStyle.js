import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // Component container
    container: {
      height:"99%" ,
      marginTop:0                        // Take up all available space
    },
    // Tabs row container
    tabsContainer: {
      flexDirection: 'row',               // Arrange tabs in a row
      paddingTop: 0,
      marginTop:0                        // Top padding
    },
    // Individual tab container
    tabContainer: {
      flex: 1,                            // Take up equal amount of space for each tab
      paddingVertical: 0,                // Vertical padding
      borderBottomWidth: 3,               // Add thick border at the bottom
      borderBottomColor: 'transparent', 
      marginTop:0     // Transparent border for inactive tabs
    },
    // Active tab container
    tabContainerActive: {
      borderBottomColor: 'orange',       // White bottom border for active tabs
    },
    // Tab text
    tabText: {
      color: 'white',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    tabTextActive:{
      color:"orange"
    },
    // Content container
    contentContainer: {
      flex: 1                             // Take up all available space
    }
  })