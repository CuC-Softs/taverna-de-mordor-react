import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthRoutes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      {signed ? (
        <Route path="/home" element={<></>} />
      ) : (
        <Navigate to={"/sign-in"} />
      )}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/logout" element={<></>} />
      <Route path="/users" element={<></>} />
      <Route path="/users/:id" element={<></>} />
      <Route path="/adms/:id" element={<></>} />
      <Route path="/masters/:id" element={<></>} />
      <Route path="/events/:event_id/boards" element={<></>} />
      <Route path="/boards/:board_id/chat" element={<></>} />
      <Route path="/boards/:board_id/players" element={<></>} />
      <Route path="/boards/:board_id/chat" element={<></>} />
      <Route path="/notifications" element={<></>} />
      <Route path="/notifications/:id" element={<></>} />
    </Routes>
  );
};

export default AuthRoutes;
