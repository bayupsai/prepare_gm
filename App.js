import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './app/screens/Home'
import Placeholder from './app/screens/Placeholder'
import Example from './app/screens/Example'
import Hoc from './app/screens/Hoc'

const App = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Placeholder: {
      screen: Placeholder,
      navigationOptions: {
        title: 'PlaceHolder'
      }
    },
    Example: {
      screen: Example,
      navigationOptions: {
        title: 'Example HOC'
      }
    },
    Hoc: {
      screen: Hoc,
      navigationOptions: {
        title: 'Hoc Experiments'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(App)