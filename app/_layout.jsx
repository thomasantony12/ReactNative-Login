import { View, Text } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text style={{color:'red', fontSize:30, fontWeight:900}}>Hi Thomas</Text>
    </View>
  );
}
