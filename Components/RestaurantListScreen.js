// Components/Search.js

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Global from "../Ressources/Globals";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RestaurantListScreen({ navigation, route }) {
  let restList = route.params.resli;
  console.log(restList.length);

  const DispalyRes = restList.map((mes, index) => {
    const len = parseInt(mes.stars.toString().charAt(0));
    let stars = [];
    for (let i = 0; i < len; i++) {
      stars[i] = i;
    }

    return (
      <TouchableOpacity
        style={styles.messsages_holder}
        onPress={() =>
          navigation.navigate("RestaurantDetailScreen", { res: mes })
        }
      >
        <View style={styles.name_container}>
          <Text style={styles.res_name}>{mes.name}</Text>
          <View style={styles.stars_container}>
            {stars.map((ns) => {
              return <Icon name="star" size={15} color="white" />;
            })}
          </View>
        </View>
        <View style={styles.coodi_container}>
          <Text style={styles.coodi_text}>
            longitude: {mes.longitude} latitude : {mes.latitude}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView style={styles.main_container}>
      <View style={styles.main_holder}>{DispalyRes}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 4,
    backgroundColor: Global.COLORS.primary,
  },
  main_holder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 4,
  },
  messsages_holder: {
    display: "flex",
    flexDirection: "column",
    margin: 4,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 30,
    width: "100%",
  },
  coodi_container: {
    backgroundColor: Global.COLORS.primary,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  res_name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Global.COLORS.orange,
  },
  coodi_text: {
    fontSize: 20,
    backgroundColor: Global.COLORS.primary,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    color: "white",
  },
  name_container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  stars_container: { display: "flex", flexDirection: "row" },
});
