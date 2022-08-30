import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { DataTable, RadioButton } from "react-native-paper";
import { Col, Row, Grid } from "react-native-easy-grid";
// import RNPickerSelect from "react-native-picker-select";

const Pedido = () => {
  const [checked, setChecked] = React.useState("first");
  // const [language, setLanguage] = useState("");
  return (
    <View>
      <View>
        <Text style={styles.titleHead}>Pedido:</Text>
      </View>
      <View>
        <Text style={styles.titleHead}>Cliente:</Text>
      </View>

      <Pressable style={styles.btnStyle}>
        <Text style={styles.text}>AGREGAR PEDIDO </Text>
      </Pressable>

      <View>
        <View style={styles.sectionRadioBtn}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>DIESEL</Text>
        </View>

        <View style={styles.sectionRadioBtn}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>NAFTA</Text>
        </View>
      </View>

      {/* <View style={styles.select}>
        <Text>
          {language
            ? `My favourite language is ${language}`
            : "Please select a language"}
        </Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "JavaScript", value: "JavaScript" },
            { label: "TypeScript", value: "TypeScript" },
            { label: "Python", value: "Python" },
            { label: "Java", value: "Java" },
            { label: "C++", value: "C++" },
            { label: "C", value: "C" },
          ]}
        />
      </View> */}

      <View style={styles.container}>
        <Grid>
          <Col size={50}>
            <Row style={styles.cell}>
              <Text style={styles.textThead}>Productos</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>B</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>C</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>D</Text>
            </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text style={styles.textThead}>Cod Auth</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>1231</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>321</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>421</Text>
            </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text style={styles.textThead}>Cantidad</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>123</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>1323</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>4444</Text>
            </Row>
          </Col>
        </Grid>
      </View>
      <Pressable style={styles.btnStyle}>
        <Text style={styles.text}>CONFIRMAR </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  select: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#0056b3",
    margin: 15,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  textThead: {
    fontWeight: "bold",
    padding: 5,
    fontSize: 15,
  },
  sectionRadioBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  titleHead: {
    fontWeight: "bold",
    padding: 5,
    fontSize: 20,
  },
});

export default Pedido;
