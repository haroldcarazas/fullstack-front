import useFetch from "../services/useFetch";

function Login() {
  const { handleSubmitPost } = useFetch();

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmitPost}
        action="http://127.0.0.1:8000/api/login"
      >
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
