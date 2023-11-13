import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../../contexts/userContext";

export default function LoginPage() {
  const { userLogin, setUserLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogin !== null) {
      navigate("/");
    }
  }, [userLogin, navigate]);

  const HandleLogin = () => {
    setUserLogin("teste");
  };

  return (
    <div class="max-w-lg mx-auto flex flex-wrap p-6 text-center">
      <div class="w-full bg-gray-100 p-6 rounded-xl">
        <h1 class="text-2xl font-bold mb-6">Entrar</h1>
        <div>
          <label>Usuário</label>
          <input
            type="text"
            name="username"
            class="w-full mt-2 border border-gray-300 p-2 rounded-lg"
            placeholder="Usuário"
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            class="w-full mt-2 border border-gray-300 p-2 rounded-lg"
            placeholder="Senha"
          />
        </div>

        <div>
          <button
            class="w-25 mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            onClick={HandleLogin}>
            Entrar
          </button>
          {/* <p class="mt-4">
              Já tem uma conta?{" "}
              <a href="#" class="text-blue-500 hover:text-blue-700">
                Faça login
              </a>
            </p>
            <p class="mt-4 text-gray-500">
              Ao se cadastrar você concorda com os{" "}
              <a href="#" class="text-blue-500 hover:text-blue-700">
                Termos de uso
              </a>{" "}
              e a{" "}
              <a href="#" class="text-blue-500 hover:text-blue-700">
                Política de privacidade
              </a>{" "}
              do site.
            </p> */}
        </div>

        {/* <input type="hidden" name="next" value={HandleLogin} /> */}
      </div>
    </div>
  );
}
