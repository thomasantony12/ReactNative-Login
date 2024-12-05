import { styles } from "@/constants/Colors";
import { Text, Image, StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={[styles.bg]}>
      <StatusBar backgroundColor={"#7B71F9"} />
      <View style={[styles.center]}>
        <Text style={[styles.heading, styles.shadowProp]}>
          Let's Get Started!
        </Text>
        <Image
          source={require("../assets/images/logo.png")}
          style={[styles.logo]}
        />
      </View>
      <View style={[styles.center]}>
        <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={[{flexDirection:'row', justifyContent:'center', marginTop:10}]}>
        <Text style={{color:'white'}}>Already have an account?</Text>
        <TouchableOpacity>
        <Text style={{color:'#FCC737'}}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


