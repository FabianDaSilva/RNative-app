import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
   return (
      <>
         <Text>Hola, Coder!</Text>
         <View style={styles.screen}>
            <View style={styles.inputContainer}>
               <Text>Email</Text>
               <TextInput placeholder="Ingrese Email" style={styles.lala} />              
               <Text>Constraseña</Text>
               <TextInput placeholder="Ingrese Contraseña" />
               <Button title="Add" onPress={() => {}} />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   //screen se le pone al contenedor padre
   screen: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
   },
   inputContainer: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignContent: "center",
   },
   lala: {
      borderBottomColor: "black",
      width: "100%",
   },
});
