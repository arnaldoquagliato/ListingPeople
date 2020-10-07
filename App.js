import PeopleListItem from './src/Components/PeopleListItem';
import {
  createAppContainer,
  createStackNavigator,
  NavigationContainer,
} from 'react-native-navigation';

import PeoplePage from './src/pages/peoplePages';

const StackNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage,
  },
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
