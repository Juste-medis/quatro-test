// Components/FilmDetail.js

import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Global from "../Ressources/Globals";
import Icon from "react-native-vector-icons/FontAwesome";

function RestaurantDetailScreen({ route }) {
  let res = route.params.res;
  return (
    <ScrollView style={styles.scrollview_container}>
      <View style={styles.image}>
        <Icon name="map" size={100} color="white" />
        <Text style={styles.av_name}>Quatro Vibes</Text>
      </View>
      <Text style={styles.title_text}>
        {"Longitude : " + res.longitude + " "}
      </Text>
      <Text style={styles.title_text}>{"Latitude : " + res.latitude}</Text>
      <Text style={styles.description_text}>
        {"Description : " + res.description}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    height: 169,
    margin: 5,
    backgroundColor: Global.COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  favorite_container: {
    alignItems: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  share_touchable_floatingactionbutton: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: "#e91e63",
    justifyContent: "center",
    alignItems: "center",
  },
  share_image: {
    width: 30,
    height: 30,
  },
  share_touchable_headerrightbutton: {
    marginRight: 8,
  },
  av_name: {
    fontWeight: "bold",
    fontSize: 25,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: Global.COLORS.orange,
    textAlign: "center",
  },
});

export default RestaurantDetailScreen;
