import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
   return (
      <View style={styles.screen}>
         <View style={styles.inputContainer}>
            <TextInput placeholder="inglrese aqui" style={styles.lala} />
            <Button title="Add" onPress={() => {}} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   //screen se le pone al contenedor padre
   screen: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   inputContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "center",
   },
   lala: {
      borderBottomColor: "black",
      width: "80%",
   },
});
