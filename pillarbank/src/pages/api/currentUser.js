const path = (process.cwd() + `/public/usuarios.json`)

export async function validarCredenciales(usuario, contraseña) {

  const jsonData = await fsPromises.readFile(path);
  const usersData = JSON.parse(jsonData);

  const usuarioValido = usersData.find((user) => user.usuario === usuario && user.password === contraseña);
  return usuarioValido;
}
