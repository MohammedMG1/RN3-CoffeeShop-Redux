import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";

const CoffeeTabStack = createStackNavigator(
  {
    CoffeeDetail: CoffeeDetail,
    CoffeeList: CoffeeList
  },
  {
    initialRouteName: "CoffeeList",
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

export default CoffeeTabStack;
