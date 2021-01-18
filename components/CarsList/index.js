import * as React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";

import style from "./style";
import cars from "./cars";

const CarsList = (props) => {
  return (
    <View style={style.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get('window').height+100}
      />
    </View>
  );
};

export default CarsList;
