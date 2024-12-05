import React from "react";
import { StatusBar,Image, SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export default function WelcomeScreen() {
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
        <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate('Signup')}>
        <Text style={[styles.text]}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={[{flexDirection:'row', justifyContent:'center', marginTop:10}]}>
        <Text style={{color:'white'}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={{color:'#FCC737'}}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
  }
