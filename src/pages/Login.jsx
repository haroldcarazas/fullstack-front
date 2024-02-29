import useFetch from "../services/useFetch";

function Login() {
  const { handleSubmitPost } = useFetch();

  const isLogin = localStorage.getItem("isLogin");
  if (isLogin) {
    window.location.href = "/dashboard";
    return;
  }

  const handleLogin = async (e) => {
    const isLogin = await handleSubmitPost(e);

    if (isLogin) {
      localStorage.setItem("isLogin", true);
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
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
