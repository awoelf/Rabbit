import React, { useState } from "react";
import { Button } from "native-base";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import FormContainer from "../../Shared/Form/FormContainer";
// import Input from "../../Shared/Form/Input";
// import Error from "../../Shared/Error";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import EasyButton from "../../Shared/StyledComponents/EasyButton";
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


const Register = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { error, data }] = useMutation(ADD_USER);


  const registerHandler = async(event) => {
    if (email === "" || firstName === "" || lastName === "" || password === "") {
      setError("Please fill in the form correctly");
    }

    event.preventDefault();

    try {
        const mutationResponse = await addUser({
            variables: { email: email, password: password,firstName: firstName,lastName: lastName },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        props.navigation.navigate("UserProfile");
    } catch (e) {
        console.log(e, "error here");
    }

  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>Sign Up</Text>
      <View style={{ width: "70%" }}>
        <TextInput
         style={Styles.input}
          placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
          onChangeText={setEmail}
        />
        <TextInput
          style={Styles.input}
          placeholder="first name"
          name="firstName"
          type="firstName"
          id="firstName"
          onChangeText={setFirstName}
        />
        <TextInput
          style={Styles.input}
          placeholder="last name"
          name="lastName"
          type="lastName"
          id="lastName"
          onChangeText={setLastName}
        />

        <TextInput
          style={Styles.input}
          placeholder="password"
          name="password"
          type="password"
          id="pwd"
          // value={email}
          onChangeText={setPassword}
        />
      </View>

      <Button
        size="md"
        isDisabled={!email || !password||!firstName||!lastName}
        style={Styles.btn}
        onPress={registerHandler}
      >
        <Text style={{ color: "#fff" }}>Sign Up</Text>
      </Button>

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Or
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Text
          style={{
            color: "#900",
            height: 30,
            margin: 20,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const Styles = StyleSheet.create({

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },

  btn: {
    backgroundColor: "#900",
    padding: 5,
  },
})


export default Register;
