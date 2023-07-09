import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a>
          <img src={logo} className="logo minutinho" alt="Minutinho logo" />
        </a>
      </div>
      <p>Seu app de gerenciamento de horas</p>
    </>
  );
}

export default App;
