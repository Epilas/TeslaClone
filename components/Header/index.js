import * as React from "react";
import { View, Image} from "react-native";
import style from "./style";

const Header = (props) => {
  return <View style={style.container}>
      <Image style={style.logo} source={require('../../assets/images/logo.png')}/>
      <Image style={style.menu} source={require('../../assets/images/menu.png')}/>
  </View>;
};

export default Header;
