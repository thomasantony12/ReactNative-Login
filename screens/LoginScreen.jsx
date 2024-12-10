import { styles } from "@/constants/Colors";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View >
    <SafeAreaView style={[styles.bg]}>
        <View style={[styles.back]}>
          <TouchableOpacity
            style={[styles.backButton]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon size={"20"} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../assets/images/login.png")} />
        </View>
    </SafeAreaView>
    <SafeAreaView>
        <View style={[styles.bottom]}>
        </View>
    </SafeAreaView>
    </View>

  );
}
