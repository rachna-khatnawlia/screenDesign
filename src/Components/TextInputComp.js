//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../Styles/Colors";
import commonStyles from "../Styles/CommonStyles";

// create a component
const TextInputComp = ({
  placeholder = "Search name, username, email, phone...",
  placeholderColor = Colors.GREY88,
  inputStyle = {},
  value="",
  onChangeTxt = ()=>{}
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={{
          ...styles.inputStyle,
          ...inputStyle,
        }}
        value={value}
        onChangeText={onChangeTxt}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    backgroundColor: Colors.greyEF,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 35,
    ...commonStyles.bold13,
    marginBottom:10
  },
});

//make this component available to the app
export default TextInputComp;
