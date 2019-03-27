import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Components/Login";
import Profile from "../Components/Profile/username";

const AuthTabStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontStyle: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthTabStack;
