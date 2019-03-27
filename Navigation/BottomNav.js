import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";

import AuthTab from "./AuthTab";
import OrderTab from "./OrdersTab";
import CoffeeTab from "./CoffeeTab";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthTab,
    Coffee: CoffeeTab,
    Order: OrderTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "Coffee":
            iconName = "coffee";
            iconType = "MaterialCommunityIcons";
            break;
          case "Order":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
