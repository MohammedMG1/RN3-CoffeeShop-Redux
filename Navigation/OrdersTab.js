import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory/previousorders";
import CoffeeList from "../Components/CoffeeList";

const OrdersTabStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "CoffeeCart",
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

export default OrdersTabStack;
