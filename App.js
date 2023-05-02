import { StyleSheet } from "react-native";
import { AppProvider } from "./context";
import Main from "./Main";

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
