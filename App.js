import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  //Creación de constantes
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [materia, setMateria] = useState("Inscribirse");
  const [elect1, setElec1] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const Convertir = () => {
    setElec1(x + "\n" + y + "\n" + z),
      setX(""),
      setY(""),
      setZ(""),
      setIsDisabled(true);
  };
  const Materias = (props) => {
    return (
      <View>
        <Text style={styles.textoEnriquecidoRe}>{props.nombre}</Text>
      </View>
    );
  };
  const getDatosAlumno = (nombre, carrera, especialidad) => {
    return nombre + " " + carrera + " " + especialidad;
  };


  //INICIO DE NUESTRA APLICACIÓN
  return (
    <View style={styles.container}>
      <Text style={styles.textoEnriquecidoTi}>REGISTRO DE MATERIAS</Text>
      <Text style={styles.textoEnriquecidoP}>
        Hola{" "}
        {getDatosAlumno("Sergio Alejandro Castillo Ríos", "ISC", "FullStack")}{" "}
      </Text>
      <Text style={styles.textoEnriquecidoP}>
        Por favor escribe las materias a las que quieres Inscribirte
      </Text>

        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={setX}
            placeholder={materia}
            value={x}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={setY}
            placeholder={materia}
            value={y}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={setZ}
            placeholder={materia}
            value={z}
          />
        </View>

      <Text style={styles.textoEnriquecidoG}>MIS MATERIAS</Text>
      <Materias nombre={elect1} />

      <Button style={styles.boton}
        disabled={isDisabled}
        onPress={Convertir}
        title="inscribirse"
        color={"purple"}
      />

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  cajaTexto: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
    margin: 5,
  },
  textoEnriquecidoP: {
    marginBottom: 8,
    textAlign: "center",
    fontSize: 11,
    color: "#008b8b",
  },
  textoEnriquecidoG: {
    alignItems: "stretch",
    textAlign: "center",
    fontSize: 28,
    color: "#4b0082",
    backgroundColor: "lightyellow",
    margin: 3,
    height: 90,
  },
  textoEnriquecidoTi: {
    textAlign: "center",
    fontSize: 28,
    color: "#2e8b57",
    marginTop:20,
  },
  textoEnriquecidoRe: {
    alignItems: "stretch",
    textAlign: "center",
    fontSize: 18,
    color: "#2e8b57",
    borderWidth: 1,
    borderColor: "purple",
    margin: 2,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
  },
  textInputWrapper: {
    flex: 1,
    height: 30,
    borderColor: "#2e8b57",
    borderWidth: 2,
    margin: 2,
  },
  textInput: {
    flex: 1,
    textAlign: "center",
  },
});
