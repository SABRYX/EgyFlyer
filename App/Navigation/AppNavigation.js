import { StackNavigator } from 'react-navigation'
import FilterScreen from '../Containers/FilterScreen'
import SearchScreen from '../Containers/SearchScreen'
import OfferDetailsScreen from '../Containers/OfferDetailsScreen'
import MoreScreen from '../Containers/MoreScreen'
import CategoriesScreen from '../Containers/CategoriesScreen'
import RetailersScreen from '../Containers/RetailersScreen'
import SelectCityScreen from '../Containers/SelectCityScreen'
import ForgetPasswordScreen from '../Containers/ForgetPasswordScreen'
import HomeScreen from '../Containers/HomeScreen'
import CreateAccountScreen from '../Containers/CreateAccountScreen'
import EmailLoginScreen from '../Containers/EmailLoginScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FilterScreen: { screen: FilterScreen },
  SearchScreen: { screen: SearchScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  MoreScreen: { screen: MoreScreen },
  CategoriesScreen: { screen: CategoriesScreen },
  RetailersScreen: { screen: RetailersScreen },
  SelectCityScreen: { screen: SelectCityScreen },
  ForgetPasswordScreen: { screen: ForgetPasswordScreen },
  HomeScreen: { screen: HomeScreen },
  CreateAccountScreen: { screen: CreateAccountScreen },
  EmailLoginScreen: { screen: EmailLoginScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
