//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../Components/Header";
import TextInputComp from "../Components/TextInputComp";
import commonStyles from "../Styles/CommonStyles";
import Imagepath from "../Constants/Imagepath";
import Colors from "../Styles/Colors";

// create a component
const { height, width } = Dimensions.get("window");
const AvoMenu = () => {
  const [searchTxt, setSearchTxt] = useState("")

  // Dummy contact Details
  const dummyContacts = [
    {
      id: 1,
      firstName: "Adil",
      lastName: "Khan",
      backgroundColor: "#edb576",
      color: Colors.white,
    },
    {
      id: 2,
      firstName: "Jeff",
      lastName: "Mandinka",
      backgroundColor: "#646464",
      color: Colors.white,
    },
    {
      id: 3,
      firstName: "Wambui",
      lastName: "Rachiga",
      backgroundColor: "#7ca6d7",
      color: Colors.black,
    },
    {
      id: 4,
      firstName: "Steffie",
      lastName: "Ezegouke",
      backgroundColor: "#de9d9b",
      color: Colors.black,
    },
    {
      id: 5,
      firstName: "Mary-Ann",
      lastName: "Kahiga",
      backgroundColor: "#8b7ebe",
      color: Colors.black,
    },
  ];

  // Dummy Tab Buttons
  const avoMenuOptions = [
    {
      id: 1,
      title: "Add Money",
      image:Imagepath.addMoney
    },
    {
      id: 2,
      title: "Send / Request",
      image:Imagepath.sendRequest
    },
    {
      id: 3,
      title: "Sim Services",
      image:Imagepath.simServices
    },
    {
      id: 4,
      title: "Bills",
      image:Imagepath.bills
    },
    {
      id: 5,
      title: "Accounts",
      image:Imagepath.accounts
    },
    {
      id: 5,
      title: "Recurring bills",
      image:Imagepath.recurring
    },
  ];

  const contactItemRender = ({ item, index }) => {
    return (
      <View
        key={item?.id}
        style={{ paddingHorizontal: 2, alignItems: "center" }}
      >
        <View
          style={{
            ...styles.contactIconView,
            backgroundColor: item?.backgroundColor,
          }}
        >
          <Text style={{ ...commonStyles.semiBold18, color: item.color }}>
            {item?.firstName.substring(0, 1)}
            {item?.lastName.substring(0, 1)}
          </Text>
        </View>
        <Text style={{ ...commonStyles.medium12, color: Colors.GREY88 }}>
          {item?.firstName}
        </Text>
        <Text style={{ ...commonStyles.medium12, color: Colors.GREY88 }}>
          {item?.lastName}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 25, paddingVertical: 5 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInputComp value={searchTxt} onChangeTxt={setSearchTxt} />

        <View style={styles.contactListView}>
          <View
            style={{
              ...commonStyles.rowSpaceBetweenCenter,
              paddingVertical: 10,
            }}
          >
            <Text style={commonStyles.semiBold15}>Top People</Text>
            <TouchableOpacity style={commonStyles.rowAlignCen}>
              <Text style={{ ...commonStyles.semiBold12, color: "#0000f5" }}>
                View all
              </Text>
              <Image
                source={Imagepath.rightArrow}
                style={{ height: 15, width: 15, tintColor: "#0000f5" }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={dummyContacts}
            // horizontal
            numColumns={5}
            renderItem={contactItemRender}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginVertical: 7,
            }}
          />
        </View>
            
        <View style={{ marginVertical: 20 }}>
          {avoMenuOptions?.map((item, index) => {
            return (
              <View key={index} style={styles.optionView}>
                <View style={commonStyles.rowAlignCen}>
                  <Image source={item.image} style={styles.optionImg} />
                  <Text>{item?.title}</Text>
                </View>
                <Image
                  source={Imagepath.rightArrow}
                  style={{ height: 20, width: 20 }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactListView: {
    paddingHorizontal: 10,
  },
  optionView: {
    ...commonStyles.rowSpaceBetweenCenter,
    backgroundColor: Colors.greyEF,
    padding: 15,
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 25,
  },
  contactIconView: {
    height: width / 7.5,
    width: width / 7.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width / 7.5,
    marginBottom: 7,
  },
  optionImg: {
    height: width / 10,
    width: width / 10,
    marginRight: 10,
  },
});

//make this component available to the app
export default AvoMenu;
