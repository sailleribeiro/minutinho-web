import logo from "./assets/logo.svg";
import "./App.css";
import { Login } from "./pages/Login/login";
function App() {
  return (
    <>
      <img src={logo} className="logo minutinho" alt="Minutinho logo" />
      <Login />
    </>
  );
}

export default App;
