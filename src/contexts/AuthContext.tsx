import {
  useContext,
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../api";
import {
  IAuthContextData,
  IAuthProviderProps,
} from "../shared/interfaces/IAuthContext";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

const MySwal = withReactContent(Swal);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState<string>();
  const signed = useMemo(() => {
    return !!user;
  }, [user]);

  const handleRehydrateUserData = () => {
    const user = localStorage.getItem("auth:user");
    const token = localStorage.getItem("auth:token");
    if (user) {
      setUser(JSON.parse(user));
    }

    if (token) {
      setToken(token);
    }
  };

  useEffect(() => {
    handleRehydrateUserData();
  }, []);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization;
    }
  }, [token]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("auth:user", JSON.stringify(data.user));
      localStorage.setItem("auth:token", data.token.token);

      MySwal.fire("Logado", `Bem-vindo ${email}`, "success");
    } catch (err) {
      MySwal.fire("Erro", `Preencha as credenciais corretas!`, "error");
    }
  }, []);

  const register = useCallback(
    async (
      name: string,
      email: string,
      password: string,
      passwordConfirmation: string
    ) => {
      try {
        await api.post("/users", {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        });

        MySwal.fire(
          "Usuário Registrado com Sucesso",
          `Seja bem-vindo ${name}`,
          "success"
        );
      } catch (err) {
        MySwal.fire("Erro", `err: ${err}`, "error");
      }
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("auth:user");
      localStorage.removeItem("auth:token");
    } catch (err) {
      localStorage.removeItem("auth:user");
      localStorage.removeItem("auth:token");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
