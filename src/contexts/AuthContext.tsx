import {
  useContext,
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import MySwal from "../services/swal";
import api from "../services/api";
import {
  AuthContextData,
  AuthProviderProps,
} from "../shared/interfaces/AuthContext";
import IUser from "../shared/interfaces/IUser";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string>();
  const signed = useMemo(() => {
    return !!user;
  }, [user]);

  const handleLogin = useCallback((data: any) => {
    localStorage.setItem("auth:user", JSON.stringify(data.user));
    localStorage.setItem("auth:token", data.token.token);

    setUser(data.user);
    setToken(data.token.token);

    MySwal.fire("Logado", "Seja Bem-vindo(a)", "success");
  }, []);

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

      handleLogin(data);

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

  const googleOauth = useCallback(async () => {
    const url = new URL(process.env.VITE_DEV_GOOGLE_REDIRECT!);
    url.search = window.location.search;

    const { data } = await api.get(url.toString());

    handleLogin(data);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed, login, register, logout, user, googleOauth }}
    >
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
