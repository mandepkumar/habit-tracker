import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import { H2 } from "./components/Typography";

function App() {
  return (
    <Provider store={store}>
      <header>
        <H2>Habit Tracker</H2>
      </header>
      <HomePage />
    </Provider>
  );
}

export default App;
