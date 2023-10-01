const URL = "http://localhost:3000/";

export async function fetchUserData(userId, file) {
  // Lee el contenido del archivo json
  try {
    const data = await fetch(`${URL}${file}.json`).then((r) => r.json());
    if (data) {
      return data.filter((d) => d.idU === userId);
    }
  } catch (error) {
    // Manejamos el caso de error
    throw error;
  }
}

export async function fetchTransferenciasData(userId, file) {
  // Lee el contenido del archivo json
  try {
    const data = await fetch(`${URL}${file}.json`).then((r) => r.json());
    if (data) {
      //Buscamos los usuarios que tengan un id diferente al cliente actualmente logueado
      return data.filter((d) => d.idU !== userId);
    }
  } catch (error) {
    // Manejamos el caso de error
    throw error;
  }
}

export async function validarCredenciales(usuario, contraseña) {
  console.log(usuario, contraseña);

  try {
    const data = await fetch(`${URL}usuarios.json`).then((r) => r.json());
    if (data) {
      const usuarioValido = data.find(
        (user) => user.usuario === usuario && user.password === contraseña
      );
      return usuarioValido;
    }
  } catch (error) {
    // Manejamos el caso de error
    throw error;
  }
}
