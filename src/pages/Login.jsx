import useFetch from "../services/useFetch";
import { useMyContext } from "../services/context";
import { Navigate } from "react-router-dom";

function Login() {
  const { user, loginUser } = useMyContext();
  const { handleSubmitPost } = useFetch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await handleSubmitPost(e);
    loginUser(data);
  };

  return (
    <div>
      {user && <Navigate to="/dashboard" />}
      <h1>Login</h1>
      <form onSubmit={handleLogin} action="http://127.0.0.1:8000/api/login">
        <label htmlFor="">Correo:</label>
        <input type="email" name="email" />

        <label htmlFor="">Contraseña:</label>
        <input type="password" name="password" />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Login;
