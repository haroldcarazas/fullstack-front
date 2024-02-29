function useFetch() {
  const handleSubmitPost = async (e) => {
    e.preventDefault();

    const formulario = e.target;
    const url = formulario.getAttribute("action");

    const formData = {};
    for (const input of formulario) {
      const element = input.tagName.toLowerCase();

      if (element === "input") {
        const name = input.name;
        const value = input.value;
        formData[name] = value;
      }
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      return true;
    }

    if (res.status === 400) {
      for (const key in data) {
        if (key === "password") {
          alert("La contraseña es inválida.");
        }

        if (key === "email") {
          alert("El correo electrónico es inválido.");
        }

        if (key === "name") {
          alert("El nombre es requerido.");
        }
      }
    } else if (res.status === 500) {
      alert(data?.message ?? "Error interno.");
    }

    return false;
  };

  return { handleSubmitPost };
}

export default useFetch;
