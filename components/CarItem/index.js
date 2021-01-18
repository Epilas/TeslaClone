import React from "react";
import { View, Text, ImageBackground } from "react-native";
import style from "./style";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={style.carContainer}>
      <ImageBackground source={image} style={style.image} />
      <View style={style.titles}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.subtitle}>
          {tagline}
          {' '}
          <Text style={style.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={style.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
