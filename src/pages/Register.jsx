import useFetch from "../services/useFetch";

function Register() {
  const { handleSubmitPost } = useFetch();

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmitPost}
        action="https://fullstack-back-production.up.railway.app/api/register"
      >
        <label htmlFor="">Nombre:</label>
        <input name="name" type="text" />

        <label htmlFor="">Correo:</label>
        <input name="email" type="email" />

        <label htmlFor="">Contraseña:</label>
        <input name="password" type="password" />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
