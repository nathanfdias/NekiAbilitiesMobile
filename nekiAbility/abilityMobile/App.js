import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from '../abilityMobile/src/context/authProvider';
import React from "react";
import Routes from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
