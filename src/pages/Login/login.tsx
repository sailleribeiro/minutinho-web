import "./login.css";
import { CheckCircle2 } from "lucide-react";
export function Login() {
  return (
    <>
      <div className="login">
        <input placeholder="Email" type="email" />
        <input placeholder="Senha" type="password" />
        <div className="connectContent">
          <p className="stayConnected">
            <CheckCircle2 size={16} /> Manter conectado
          </p>
          <a>Esqueci a senha</a>
        </div>
        <button>Entrar</button>
      </div>
    </>
  );
}
