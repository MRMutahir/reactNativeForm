import { View, Text, TextInput, Button, Image } from "react-native";
import { Formik, Field, Form } from "formik";

import { useNavigation } from '@react-navigation/native';
// import Hiring_Mine_Logo from "\AwesomeProject\assets\Hiring_Mine_Logo-453a72d3-removebg-preview.png"

function Signup() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary500);",
      }}
    >
      {/* <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
       */}
      <View>
        {" "}
        <Image
          source={require("../assets/Hiring_Mine_Logo-453a72d3-removebg-preview.png")}
          style={{ width: 180, height: 30, marginBottom: "20px" }}
        />
      </View>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          // Implement your validation logic here
          if (values.password !== values.confirmPassword) {
            alert("Passwords do not match");
            return;
          }

          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form
          style={{ width: "80%", display: "flex", flexDirection: "column" }}
        >
          {/* <Text style={{ marginBottom: 5 }}>First Name</Text> */}
          <Field
            id="firstName"
            name="firstName"
            placeholder="firstName"
            component={TextInput}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              color: "gray",
            }}
          />

          {/* <Text style={{ marginBottom: 5 }}>Last Name</Text> */}
          <Field
            id="lastName"
            name="lastName"
            placeholder="lastName"
            component={TextInput}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              color: "gray",
            }}
          />

          {/* <Text style={{ marginBottom: 5 }}>Email</Text> */}
          <Field
            id="email"
            name="email"
            placeholder="email@acme.com"
            type="email"
            component={TextInput}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              color: "gray",
            }}
          />

          {/* <Text style={{ marginBottom: 5 }}>Password</Text> */}
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            component={TextInput}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              color: "gray",
            }}
          />

          {/* <Text style={{ marginBottom: 5 }}>Confirm Password</Text> */}
          <Field
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            component={TextInput}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              color: "gray",
            }}
          />

          <Button title="Submit" onPress={() => navigation.navigate('SecondScreen')} />

        </Form>
      </Formik>
    </View>
  );
}

export default Signup;
