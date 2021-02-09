import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Global from "../Ressources/Globals";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Spinner from "react-native-loading-spinner-overlay";

function OnboardingScreen(route) {
  let [hasLocationPermission, sethasLocationPermission] = useState(false);
  let [latitude, setlatitude] = useState(0);
  let [longitude, setlongitude] = useState(0);
  let [restaurantList, setrestaurantList] = useState([]);
  var [spinner, setspinner] = useState(false);

  useEffect(() => {
    getLocationAsync();
    return () => {};
  }, []);

  async function getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});
      sethasLocationPermission(true);
      setlatitude(location.coords.latitude);
      setlongitude(location.coords.longitude);
    } else {
      alert("Location permission not granted");
    }
  }

  function handleRestaurantSearch() {
    setspinner(true);
    const url = "https://6021a74cae8f8700177deaa3.mockapi.io/api/v1/place";
    /*
    const location = `location=${latitude},${longitude}`;
    const radius = "&radius=2000";
    const type = "&keyword=restaurant";
    const key = "&key=AIzaSyBzQ9sNB3e_tkRxIuLZkV0wTe6rcswOjB8";

    const restaurantSearchUrl = url + location + radius + type + key;
    */

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const reArray = JSON.parse(JSON.stringify(result));
        for (let i = 0; i < reArray.length; i++) {
          restaurantList.push(reArray[i]);
        }
        console.log(restaurantList);
        setspinner(false);
        route.navigation.navigate("RestaurantListScreen", {
          resli: restaurantList,
        });
      })
      .catch((err) => {
        setspinner(false);
        if ((err = "Network request failed")) alert("Pas de connexion 😎");
      });
  }

  if (spinner) {
    return (
      <View style={styles.main_container}>
        <Spinner
          visible={spinner}
          textContent={"⏳"}
          textStyle={styles.author_text}
        />
      </View>
    );
  } else
    return (
      <ScrollView style={styles.main_container}>
        <View>
          <StatusBar
            animated={true}
            backgroundColor={Global.COLORS.primary}
            barStyle="light-content"
            showHideTransition="slide"
            hidden={false}
          />
          <View style={styles.top_container}>
            <Text style={styles.welcome_text}>
              {Global.STRINGS.AboutContent}
            </Text>
          </View>
          <View style={styles.bottom_container}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttton_getPosition}
              onPress={getLocationAsync}
            >
              {hasLocationPermission && latitude != 0 && longitude != 0 ? (
                <Text style={styles.button_inside}>Votre Position 👇</Text>
              ) : (
                <Text style={styles.button_inside}>
                  {Global.STRINGS.getPositioon}
                </Text>
              )}
            </TouchableOpacity>
            {hasLocationPermission ? (
              <View>
                <Text style={styles.position_text}>
                  Position : longitude : {longitude + "          "}
                </Text>
                <Text style={styles.position_text}>latitude : {latitude}</Text>
              </View>
            ) : (
              <Text> cliquez 👆 pour obtenir votre position</Text>
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttton_getres}
              onPress={() => handleRestaurantSearch()}
            >
              <Text style={styles.button_inside}>
                {Global.STRINGS.search_restaurant}
              </Text>
            </TouchableOpacity>
            <Text style={styles.author_text}>{Global.STRINGS.author} </Text>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "white",
    margin: 4,
    elevation: 8,
  },
  top_container: {
    backgroundColor: Global.COLORS.primary,
    marginBottom: 3,
  },
  welcome_text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    elevation: 15,
    padding: 15,
    borderRadius: 15,
  },
  buttton_getPosition: {
    backgroundColor: Global.COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    padding: 30,
  },
  buttton_getres: {
    backgroundColor: Global.COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    padding: 30,
  },
  button_inside: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
  },
  position_text: {
    textAlign: "center",
    fontSize: 15,
    color: Global.COLORS.primary,
    fontWeight: "bold",
  },
  author_text: {
    fontWeight: "bold",
    fontSize: 20,
    color: Global.COLORS.blue_grey,
  },
});

export default OnboardingScreen;
