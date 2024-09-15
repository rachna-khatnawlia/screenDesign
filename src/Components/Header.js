//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Imagepath from "../Constants/Imagepath";
import commonStyles from "../Styles/CommonStyles";
// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ minWidth: 50 }}>
        <Image
          source={Imagepath.backArrow}
          resizeMode="contain"
          style={{ height: 23, width: 23 }}
        />
      </View>
      <Text style={commonStyles.semiBold18}>Avo Menu</Text>
      <View style={{ minWidth: 50 }} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    ...commonStyles.rowSpaceBetweenCenter,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

//make this component available to the app
export default Header;
