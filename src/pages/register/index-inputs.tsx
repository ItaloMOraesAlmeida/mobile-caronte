/* eslint-disable object-curly-newline */

import React from "react";
import { Feather } from "@expo/vector-icons";

import { SafeAreaView, StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    sectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#c6c6c6",
        height: 45,
        margin: 10,
    },
    imageStyle: {
        margin: 10,
        alignItems: "center",
    },
    imageRightStyle: {
        alignItems: "center",
        marginRight: 15,
    },
});

const App = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.sectionStyle}>
                <Feather name="user" size={20} style={styles.imageStyle} />
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Nome"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.sectionStyle}>
                <Feather name="mail" size={20} style={styles.imageStyle} />
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.sectionStyle}>
                <Feather name="lock" size={20} style={styles.imageStyle} />
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Senha"
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    autoCapitalize="none"
                />
                <Feather
                    name="eye-off"
                    size={20}
                    style={styles.imageRightStyle}
                />
            </View>
        </View>
    </SafeAreaView>
);

export default App;
