import { useState } from "react";
import "./login.css";
import { CheckCircle2 } from "lucide-react";

interface LoginInputs {
  email: string;
  password: string;
}

export function Login() {
  const [loginData, setLoginData] = useState<LoginInputs>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [type]: value }));
  };

  const handleLogin = () => {
    console.log("logar");
  };

  return (
    <>
      <div className="login">
        <input
          placeholder="Email"
          type="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="Senha"
          type="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <div className="connectContent">
          <p className="stayConnected">
            <CheckCircle2 size={16} /> Manter conectado
          </p>
          <a>Esqueci a senha</a>
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </>
  );
}
