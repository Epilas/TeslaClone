import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";
import style from "./style";

const StyledButton = (props) => {
    
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171a28CC" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={style.container}>
      <Pressable
        style={[style.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[style.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
