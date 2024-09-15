import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import AvoMenu from "./src/screens/AvoMenu";

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" barStyle={"dark-content"} backgroundColor={"white"}/>
      <SafeAreaView style={{ flex: 1 }}>
        <AvoMenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
