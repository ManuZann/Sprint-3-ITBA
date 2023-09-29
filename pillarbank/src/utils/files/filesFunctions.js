/**
 * 
 * @param {string} clave pasamos el nombre de la clave del sessionStorage que queremos leer
 * @returns devuelve un arreglo de objetos de Javascript sobre el cual podemos operar
 */

export function leerSessionStorage(clave){
  try {
    return JSON.parse(sessionStorage.getItem(clave) || "");
  } catch (error) {
    return null
  }
}

/**
 * 
 * @param {string} file pasamos el nombre del archivo sobre el cual vamos a escribir
 * @param {*} data objeto que vamos a guardar en el JSON ¡NO CONTROLA el formato!
 */

export function escribirSessionStorage(clave, data){
  if (data === null) {
    sessionStorage.removeItem(clave);
  } else {
    sessionStorage.setItem(clave, JSON.stringify(data))
  }
}