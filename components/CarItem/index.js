import React from "react";
import { View, Text, ImageBackground } from "react-native";
import style from "./style";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={style.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={style.image}
      />
      <View style={style.titles}>
        <Text style={style.title}>Model S</Text>
        <Text style={style.subtitle}>Starting at $69,428</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
